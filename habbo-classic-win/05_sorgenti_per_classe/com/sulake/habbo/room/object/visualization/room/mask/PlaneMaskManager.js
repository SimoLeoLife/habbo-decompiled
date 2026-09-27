// Estratto da HabboAirLauncher.deobf.js, riga 282472.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/mask/PlaneMaskManager.as
// Nome offuscato: _i645011d6ce6acd

class {
  static {
    n(this, "PlaneMaskManager");
  }
  var_1600 = null;
  _masks = new Map();
  _data = null;
  get data() {
    return this._data;
  }
  dispose() {
    for (let e of this._masks.values()) e.dispose();
    (this._masks.clear(), (this.var_1600 = null), (this._data = null));
  }
  initialize(e) {
    this._data = e;
  }
  initializeAssetCollection(e) {
    this._data == null || e == null || ((this.var_1600 = e), this.parseMasks(this._data, e));
  }
  updateMask(e, r, t, i, s, o) {
    let c = this._masks.get(r)?._r3b7f5331d263ca(t, i) ?? null,
      f = c?.nativeTexture ?? c?.asset?.content?.texture ?? null;
    if (f == null) return !0;
    let l = new Pe(),
      b = c?.flipH ? -1 : 1,
      _ = c?.flipV ? -1 : 1,
      h = c?.flipH ? f.width : 0,
      p = c?.flipV ? f.height : 0;
    (l.scale(b, _),
      l.translate(Math.trunc(s) + (c?.offsetX ?? 0) + h, Math.trunc(o) + (c?.offsetY ?? 0) + p));
    let m = new Jt(f);
    return (m.setFromMatrix(new Ze(l.a, l.b, l.c, l.d, l.tx, l.ty)), _ifa78568353bcfc(e, m, !1), m.destroy(), !0);
  }
  _rce948062a3990f(e) {
    return this._masks.get(e) ?? null;
  }
  parseMasks(e, r) {
    for (let t of e.child("mask").toArray()) {
      if (typeof t != "object" || t == null || !da.checkRequiredAttributes(t, ["id"])) continue;
      let i = t,
        s = String(i.attribute("id") ?? "");
      if (this._masks.has(s)) continue;
      let o = new PlaneMask();
      for (let d of i.child("maskVisualization").toArray()) {
        if (typeof d != "object" || d == null || !da.checkRequiredAttributes(d, ["size"])) continue;
        let c = d,
          f = Number.parseInt(String(c.attribute("size") ?? "0"), 10),
          l = o._r182f4d80509c77(f);
        if (l == null) continue;
        let b = this._r914c0d5005ce87(c.child("bitmap").toArray(), l, r);
        b != null && o._ra8d81acac9e1b4(f, b);
      }
      this._masks.set(s, o);
    }
  }
  _r914c0d5005ce87(e, r, t) {
    let i = null;
    for (let s of e) {
      if (typeof s != "object" || s == null || !da.checkRequiredAttributes(s, ["assetName"])) continue;
      let o = s,
        d = this.parseMaskBitmaps(o, "normalMinX", x5.const_29),
        c = this.parseMaskBitmaps(o, "normalMaxX", x5.MAX_NORMAL_COORDINATE_VALUE),
        f = this.parseMaskBitmaps(o, "normalMinY", x5.const_29),
        l = this.parseMaskBitmaps(o, "normalMaxY", x5.MAX_NORMAL_COORDINATE_VALUE),
        b = String(o.attribute("assetName") ?? ""),
        _ = t.getAsset(b);
      _ != null && (_.flipH || (i = b), r.addBitmap(_, d, c, f, l));
    }
    return i;
  }
  parseMaskBitmaps(e, r, t) {
    let i = String(e.attribute(r) ?? "");
    return i.length > 0 ? Number.parseFloat(i) : t;
  }
}
