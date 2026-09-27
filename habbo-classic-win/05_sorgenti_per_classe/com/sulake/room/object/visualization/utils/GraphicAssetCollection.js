// Estratto da HabboAirLauncher.deobf.js, riga 272506.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/utils/GraphicAssetCollection.as
// Nome offuscato: _ife606a88bea7d7

class a {
  static {
    n(this, "GraphicAssetCollection");
  }
  static PALETTE_ASSET_DISPOSE_THRESHOLD = 10;
  static _r57463a6592761c = ["id", "source"];
  static _rdeedfe544c1813 = !1;
  _assets = new B();
  var_581 = null;
  _palettes = new B();
  _r5ad476e6b6b176 = [];
  _r8ab6d71ffa3a87 = new B();
  var_1189 = 0;
  _r08e71ba71ac0dc = 0;
  var_1031 = new globalThis.Map();
  dispose() {
    for (let e of this._palettes.getKeys()) this._palettes.getValue(e)?.dispose();
    (this._palettes.reset(),
      this._r8ab6d71ffa3a87.reset(),
      this._r96155466d7fa06(),
      (this._r5ad476e6b6b176 = []));
    for (let e of this._assets.getKeys()) this._assets.getValue(e)?.recycle();
    (this._assets.reset(), this.var_1031.clear(), (this.var_581 = null));
  }
  get assetLibrary() {
    return this.var_581;
  }
  set assetLibrary(e) {
    this.var_581 = e;
  }
  addReference() {
    (this.var_1189++, (this._r08e71ba71ac0dc = _ia411d8d8194a3a()));
  }
  _r6392c37af7fbe5() {
    (this.var_1189--,
      this.var_1189 <= 0 &&
        ((this.var_1189 = 0), (this._r08e71ba71ac0dc = _ia411d8d8194a3a()), this._r96155466d7fa06(!1)));
  }
  getReferenceCount() {
    return this.var_1189;
  }
  getLastReferenceTimeStamp() {
    return this._r08e71ba71ac0dc;
  }
  define(e) {
    if (e == null) return !1;
    let r = this._r22154868adaad8(e, "asset"),
      t = this._r22154868adaad8(e, "palette");
    return (
      t.length > 0 && this._rdbea798d849d50(t),
      a._rdeedfe544c1813 ? this._r276fd831d0cc87(r) : this._re4b9488f1446a0(r),
      !0
    );
  }
  getAsset(e) {
    let r = this._assets.getValue(e) ?? null;
    if (r != null) return r;
    let t = this.var_1031.get(e) ?? null;
    if (t == null) return null;
    this.var_1031.delete(e);
    let i = this._r53f4e18bf87a0c(t),
      s = i.source.length > 0 ? (this.var_581?.getAssetByName(i.source) ?? null) : null;
    if (s == null) return null;
    if (this.createAsset(e, i.source, s, i.flipH, i.flipV, i.offsetX, i.offsetY, i.usesPalette))
      return this._assets.getValue(e) ?? null;
    let o = this.getAsset(e);
    return o != null &&
      o.assetName !== o.libraryAssetName &&
      this.replaceAsset(e, i.source, s, i.flipH, i.flipV, i.offsetX, i.offsetY, i.usesPalette)
      ? (this._assets.getValue(e) ?? null)
      : null;
  }
  getAssetWithPalette(e, r) {
    let t = `${e}@${r}`,
      i = this.getAsset(t);
    if (i != null) return i;
    let s = this.getAsset(e);
    if (s == null || !s.usesPalette) return s;
    let o = `${s.libraryAssetName}@${r}`,
      d = this._rebce1973129024(o);
    if (d == null) {
      let c = this.getPalette(r);
      if (c == null) return s;
      let f = s.asset?.content;
      if (f == null) return null;
      let l = f.clone();
      if ((c.colorizeBitmap(l), (d = this.addLibraryAsset(o, l)), d == null)) return (l.dispose(), null);
    }
    return (
      this._r5ad476e6b6b176.push(t),
      this.createAsset(t, o, d, s.flipH, s.flipV, s.originalOffsetX, s.originalOffsetY, !1),
      (i = this.getAsset(t)),
      i
    );
  }
  _rba54d1aec0ca32() {
    return this._palettes.getKeys();
  }
  _r006f3d93055f74(e) {
    let r = this.getPalette(e);
    return r != null ? [r.primaryColor, r.secondaryColor] : null;
  }
  _rfe7eb06cea0213(e) {
    return this._r8ab6d71ffa3a87.getValue(e) ?? null;
  }
  addAsset(e, r, t, i = 0, s = 0, o = !1, d = !1) {
    if (e == null || r == null || this.var_581 == null) return !1;
    let c = this._rebce1973129024(e);
    if (c == null)
      return (
        (c = new Qt(this.var_581.getAssetTypeDeclarationByClass(Qt))),
        this.var_581.setAsset(e, c),
        c.setUnknownContent(r),
        this.createAsset(e, e, c, o, d, i, s, !1)
      );
    if (!t) return !1;
    let f = c.content;
    return (f != null && f !== r && f.dispose(), c.setUnknownContent(r), !0);
  }
  _rc7a583ce343c02(e) {
    let r = this._assets.remove(e);
    if (r != null) {
      let t = this._rebce1973129024(r.libraryAssetName);
      (t != null && (this.var_581?.removeAsset(t), t.dispose()), r.recycle());
      return;
    }
    this.var_1031.delete(e);
  }
  createAsset(e, r, t, i, s, o, d, c) {
    return this._assets.getValue(e) != null || this.var_1031.has(e)
      ? !1
      : (this._assets.add(e, Qge.allocate(e, r, t, i, s, o, d, c)), !0);
  }
  replaceAsset(e, r, t, i, s, o, d, c) {
    let f = this._assets.remove(e);
    return (
      f != null ? f.recycle() : this.var_1031.delete(e),
      this.createAsset(e, r, t, i, s, o, d, c)
    );
  }
  _r276fd831d0cc87(e) {
    for (let r of e) {
      let t = this.getAttribute(r, "name");
      t.length > 0 && this.var_1031.set(t, r);
    }
  }
  _re4b9488f1446a0(e) {
    for (let r of e) {
      let t = this.getAttribute(r, "name");
      if (t.length === 0 || this.var_581 == null) continue;
      let i = this._r53f4e18bf87a0c(r),
        s = this.var_581.getAssetByName(i.source);
      if (s == null) continue;
      let o = this.createAsset(t, i.source, s, i.flipH, i.flipV, i.offsetX, i.offsetY, i.usesPalette);
      if (!o) {
        let d = this.getAsset(t);
        d != null &&
          d.assetName !== d.libraryAssetName &&
          (o = this.replaceAsset(t, i.source, s, i.flipH, i.flipV, i.offsetX, i.offsetY, i.usesPalette));
      }
    }
  }
  _rdbea798d849d50(e) {
    for (let r of e) {
      if (!da.checkRequiredAttributes(r, a._r57463a6592761c)) continue;
      let t = this.getAttribute(r, "id"),
        i = this.getAttribute(r, "source");
      if (
        t.length === 0 ||
        i.length === 0 ||
        this._palettes.getValue(t) != null ||
        this.var_581 == null
      )
        continue;
      let s = this.var_581.getAssetByName(i);
      if (s == null) continue;
      let o = this._rf3775ca29dba02(s);
      if (o == null) continue;
      let d = 16777215,
        c = 16777215,
        f = this.getAttribute(r, "color1");
      f.length > 0 && ((d = Number.parseInt(f, 16)), (c = d));
      let l = this.getAttribute(r, "color2");
      (l.length > 0 && (c = Number.parseInt(l, 16)),
        this._palettes.add(t, new Xge(o, d, c)),
        this._r8ab6d71ffa3a87.add(t, r));
    }
  }
  getPalette(e) {
    return this._palettes.getValue(e) ?? null;
  }
  _rebce1973129024(e) {
    return this.var_581?.getAssetByName(e);
  }
  addLibraryAsset(e, r) {
    if (this.var_581 == null || this._rebce1973129024(e) != null) return null;
    let t = new Qt(this.var_581.getAssetTypeDeclarationByClass(Qt));
    return (this.var_581.setAsset(e, t), t.setUnknownContent(r), t);
  }
  _r96155466d7fa06(e = !0) {
    if (!(!e && this._r5ad476e6b6b176.length <= a.PALETTE_ASSET_DISPOSE_THRESHOLD)) {
      for (let r of this._r5ad476e6b6b176) this._rc7a583ce343c02(r);
      this._r5ad476e6b6b176 = [];
    }
  }
  _r22154868adaad8(e, r) {
    return e
      .child(r)
      .toArray()
      .filter((t) => t instanceof yi);
  }
  getAttribute(e, r) {
    return String(e.attribute(r));
  }
  parsePlaneMaterialCells(e, r) {
    return Number.parseInt(this.getAttribute(e, r) || "0", 10) || 0;
  }
  _r53f4e18bf87a0c(e) {
    let r = this.getAttribute(e, "name"),
      t = this.getAttribute(e, "source"),
      i = -this.parsePlaneMaterialCells(e, "x"),
      s = -this.parsePlaneMaterialCells(e, "y"),
      o = this.parsePlaneMaterialCells(e, "flipH") > 0 && t.length > 0,
      d = this.parsePlaneMaterialCells(e, "flipV") > 0 && t.length > 0,
      c = this.parsePlaneMaterialCells(e, "usesPalette") !== 0;
    return (
      t.length === 0 && (t = r),
      { source: t, flipH: o, flipV: d, usesPalette: c, offsetX: i, offsetY: s }
    );
  }
  _rf3775ca29dba02(e) {
    if (e.content == null) return null;
    if (typeof e.content == "function") {
      let r = new e.content();
      return r instanceof re ? r : null;
    }
    return e.content instanceof re ? e.content : null;
  }
}
