// Estratto da HabboAirLauncher.deobf.js, riga 137447.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/SkinLayout.as
// Nome offuscato: _id095c72ddf5ad3

class extends ChildEntityArray {
  static {
    n(this, "SkinLayout");
  }
  _name;
  _width;
  _height;
  _blendMode;
  var_5160;
  constructor(e, r, t) {
    (super(),
      (this._name = e),
      (this._width = 0),
      (this._height = 0),
      (this._blendMode = t),
      (this.var_5160 = r));
  }
  get name() {
    return this._name;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get blendMode() {
    return this._blendMode;
  }
  get transparent() {
    return this.var_5160;
  }
  dispose() {
    let e = this.numChildren;
    for (let r = 0; r < e; r++) this.removeChildAt(0)?.dispose();
  }
  calculateActualRect(e) {
    let r,
      t,
      i = this.numChildren;
    ((e.x = 4294967295), (e.y = 4294967295), (e.width = 0), (e.height = 0));
    for (let s = 0; s < i; s++)
      ((t = this.getChildAt(s)),
        (r = t?.region ?? null),
        r != null &&
          ((e.x = Math.min(e.left, r.left)),
          (e.y = Math.min(e.top, r.top)),
          (e.width = Math.max(e.right, r.right) - e.x),
          (e.height = Math.max(e.bottom, r.bottom) - e.y)));
  }
  _rb4305d5b9bb5ba() {
    let e = this.numChildren;
    if (e === 0) return !1;
    for (let r = 0; r < e; r++) if (this.getChildAt(r)?.scaleH !== Ji._r264712cf719eec) return !1;
    return !0;
  }
  calculateWidth() {
    let e = 0,
      r = this.numChildren;
    for (let t = 0; t < r; t++) {
      let i = this.getChildAt(t)?.region ?? null;
      i != null && i.right > e && (e = i.right);
    }
    return e;
  }
  _ra1a98d44b6791e() {
    let e = this.numChildren;
    if (e === 0) return !1;
    for (let r = 0; r < e; r++) if (this.getChildAt(r)?.scaleV !== Ji._r264712cf719eec) return !1;
    return !0;
  }
  calculateHeight() {
    let e = 0,
      r = this.numChildren;
    for (let t = 0; t < r; t++) {
      let i = this.getChildAt(t)?.region ?? null;
      i != null && i.bottom > e && (e = i.bottom);
    }
    return e;
  }
  getDefaultRegion(e, r) {
    let t = this.getChildByName(e);
    if (t == null || t.region == null) throw new Error(`Entity not found: ${e}!`);
    ((r.x = t.region.x), (r.y = t.region.y), (r.width = t.region.width), (r.height = t.region.height));
  }
  addChild(e) {
    let r = e;
    return (
      r.region != null &&
        ((this._width = r.region.right > this._width ? r.region.right : this._width),
        (this._height = r.region.bottom > this._height ? r.region.bottom : this._height)),
      super.addChild(e)
    );
  }
  addChildAt(e, r) {
    let t = e;
    return (
      t.region != null &&
        ((this._width = t.region.right > this._width ? t.region.right : this._width),
        (this._height = t.region.bottom > this._height ? t.region.bottom : this._height)),
      super.addChildAt(e, r)
    );
  }
  removeChild(e) {
    let r = super.removeChild(e);
    return ((this._width = this.calculateWidth()), (this._height = this.calculateHeight()), r);
  }
  removeChildAt(e) {
    let r = super.removeChildAt(e);
    return ((this._width = this.calculateWidth()), (this._height = this.calculateHeight()), r);
  }
}
