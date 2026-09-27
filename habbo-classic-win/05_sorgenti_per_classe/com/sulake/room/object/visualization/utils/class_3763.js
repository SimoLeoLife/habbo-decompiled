// Estratto da HabboAirLauncher.deobf.js, riga 272373.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/utils/class_3763.as
// Nome offuscato: _i8d22c9ec256818

class a {
  static {
    n(this, "class_3763");
  }
  static _pool = [];
  _assetName = "";
  _rdb710ca4fa8758 = "";
  _asset = null;
  _flipH = !1;
  _flipV = !1;
  var_5780 = !1;
  _offsetX = 0;
  _offsetY = 0;
  _width = 0;
  _height = 0;
  _initialized = !0;
  static allocate(e, r, t, i, s, o, d, c = !1) {
    let f = this._pool.pop() ?? new a();
    return (
      (f._assetName = e),
      (f._rdb710ca4fa8758 = r),
      (f._asset = t instanceof Qt ? t : null),
      (f._flipH = i),
      (f._flipV = s),
      (f._offsetX = o | 0),
      (f._offsetY = d | 0),
      (f.var_5780 = c),
      (f._width = 0),
      (f._height = 0),
      (f._initialized = f._asset == null),
      f
    );
  }
  recycle() {
    ((this._assetName = ""),
      (this._rdb710ca4fa8758 = ""),
      (this._asset = null),
      (this._flipH = !1),
      (this._flipV = !1),
      (this.var_5780 = !1),
      (this._offsetX = 0),
      (this._offsetY = 0),
      (this._width = 0),
      (this._height = 0),
      (this._initialized = !0),
      a._pool.push(this));
  }
  get flipV() {
    return this._flipV;
  }
  get flipH() {
    return this._flipH;
  }
  get width() {
    return (this.initialize(), this._width);
  }
  get height() {
    return (this.initialize(), this._height);
  }
  get assetName() {
    return this._assetName;
  }
  get libraryAssetName() {
    return this._rdb710ca4fa8758;
  }
  get asset() {
    return this._asset;
  }
  get nativeTexture() {
    return this._asset?.nativeTexture ?? null;
  }
  get usesPalette() {
    return this.var_5780;
  }
  get offsetX() {
    return this._flipH ? -(this.width + this._offsetX) : this._offsetX;
  }
  get offsetY() {
    return this._flipV ? -(this.height + this._offsetY) : this._offsetY;
  }
  get originalOffsetX() {
    return this._offsetX;
  }
  get originalOffsetY() {
    return this._offsetY;
  }
  initialize() {
    if (this._initialized || this._asset == null) return;
    let e = this.nativeTexture;
    if (e != null) {
      ((this._width = Math.round(e.width)), (this._height = Math.round(e.height)), (this._initialized = !0));
      return;
    }
    let r = this._asset.content;
    (r != null && ((this._width = r.width), (this._height = r.height)), (this._initialized = !0));
  }
}
