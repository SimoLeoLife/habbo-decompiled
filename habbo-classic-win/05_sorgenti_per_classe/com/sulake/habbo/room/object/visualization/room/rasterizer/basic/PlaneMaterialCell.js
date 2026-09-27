// Estratto da HabboAirLauncher.deobf.js, riga 281152.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneMaterialCell.as
// Nome offuscato: _i63140f3b3dd32e

class a {
  static {
    n(this, "PlaneMaterialCell");
  }
  _r791aa03daba052;
  _ra92e3a04e21ce0 = [];
  var_1851 = [];
  var_3018 = 0;
  get isStatic() {
    return this.var_3018 === 0;
  }
  constructor(e, r = null, t = null, i = 0) {
    if (((this._r791aa03daba052 = e), r != null && r.length > 0 && i > 0)) {
      for (let s of r) s != null && this.var_1851.push(s);
      if (this.var_1851.length > 0) {
        if (t != null) for (let s of t) s != null && this._ra92e3a04e21ce0.push(new E(s.x, s.y));
        this.var_3018 = i;
      }
    }
  }
  dispose() {
    (this._r791aa03daba052?.dispose(),
      (this._r791aa03daba052 = null),
      (this.var_1851 = []),
      (this._ra92e3a04e21ce0 = []),
      (this.var_3018 = 0));
  }
  clearCache() {}
  _r7df0c0f117ca24(e) {
    return this._r791aa03daba052?.getBitmap(e)?.height ?? 0;
  }
  render(e, r, t) {
    let i = this._r791aa03daba052?.getBitmap(e) ?? null;
    if (i == null) return null;
    let s = new bLe({ texture: i, width: i.width, height: i.height });
    if (r !== 0 || t !== 0) {
      for (; r < 0;) r += i.width;
      for (; t < 0;) t += i.height;
      (s.tilePosition.set(r % i.width, t % i.height),
        (s.uvRespectAnchor = !0),
        r !== 0 && ((s.anchor.x = 1), (s.scale.x = -1)),
        t !== 0 && ((s.anchor.y = 1), (s.scale.y = -1)));
    }
    let o = s;
    if (!this.isStatic) {
      let d = new Ii();
      (d.addChild(s), (o = d));
      let c = Math.min(this.var_3018, this._ra92e3a04e21ce0.length),
        f = Math.max(this.var_3018, this._ra92e3a04e21ce0.length),
        l = ih.getArray(this.var_3018, f) ?? [];
      for (let b = 0; b < c; b++) {
        let _ = this._ra92e3a04e21ce0[l[b] ?? -1] ?? null,
          h = this.var_1851[b % this.var_1851.length] ?? null,
          p = a._r2e02ad213c120f(h);
        if (_ == null || h == null || p == null) continue;
        let m = _.x + h.offsetX,
          v = _.y + h.offsetY,
          w = 1,
          I = 1,
          C = 0,
          W = 0;
        (h.flipH && ((w = -1), (C = p.width), (m = -(h.width + h.offsetX) + _.x)),
          h.flipV && ((I = -1), (W = p.height), (v = -(h.height + h.offsetY) + _.y)));
        let R = new Jt(p);
        (R.scale.set(w, I), R.position.set(((m + C) >> 1) << 1, v + W), d.addChild(R));
      }
    }
    return o;
  }
  getAssetName(e) {
    return this._r791aa03daba052?.getAssetName(e) ?? null;
  }
  static _r2e02ad213c120f(e) {
    return e == null ? null : (e.nativeTexture ?? e.asset?.content?.texture ?? null);
  }
}
