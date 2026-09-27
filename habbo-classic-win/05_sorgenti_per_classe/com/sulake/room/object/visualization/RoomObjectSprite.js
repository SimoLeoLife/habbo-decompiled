// Estratto da HabboAirLauncher.deobf.js, riga 271834.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/RoomObjectSprite.as
// Nome offuscato: _i10fc7021668e13

class a {
  static {
    n(this, "RoomObjectSprite");
  }
  static var_4605 = 0;
  static _r08e8b4838eaa0e(e) {
    return e | 0;
  }
  _asset = null;
  _r7a9b0ee1b7faa5 = null;
  _assetName = "";
  _rdb710ca4fa8758 = "";
  _r4b37b3e6a7abf9 = "";
  _rbedb7a511d5e1f = "";
  var_679 = !0;
  var_4265 = "";
  _alpha = 255;
  _color = 16777215;
  _blendMode = ie.NORMAL;
  _filters = null;
  _flipH = !1;
  _flipV = !1;
  var_81 = 0;
  _offsetX = 0;
  _offsetY = 0;
  _width = 0;
  _height = 0;
  _r53843a629b8651 = 0;
  _r040481a9f22e8e = !1;
  _rd6b3ded75e43d5 = !1;
  _rd61725313055be = !1;
  var_3260 = RoomObjectSpriteType.DEFAULT;
  hasAsset = "";
  _r306785f235f1ef = class_3682.MATCH_OPAQUE_PIXELS;
  _r72ff2a4767b3d4 = 0;
  var_167 = 0;
  _rf995f276280e41 = a.var_4605++;
  get asset() {
    return this._asset;
  }
  set asset(e) {
    e !== this._asset &&
      ((this._asset = e),
      (this._width = a._r08e8b4838eaa0e(e?.width ?? this._r7a9b0ee1b7faa5?.width ?? 0)),
      (this._height = a._r08e8b4838eaa0e(e?.height ?? this._r7a9b0ee1b7faa5?.height ?? 0)),
      this.var_167++);
  }
  get nativeTexture() {
    return this._r7a9b0ee1b7faa5;
  }
  set nativeTexture(e) {
    e !== this._r7a9b0ee1b7faa5 &&
      ((this._r7a9b0ee1b7faa5 = e),
      this._asset == null &&
        ((this._width = a._r08e8b4838eaa0e(e?.width ?? 0)),
        (this._height = a._r08e8b4838eaa0e(e?.height ?? 0))),
      this.var_167++);
  }
  get assetName() {
    return this._assetName;
  }
  set assetName(e) {
    e !== this._assetName && ((this._assetName = e), this.var_167++);
  }
  get libraryAssetName() {
    return this._rdb710ca4fa8758;
  }
  set libraryAssetName(e) {
    this._rdb710ca4fa8758 = e;
  }
  get _r74223fbabfd8b0() {
    return this._r4b37b3e6a7abf9;
  }
  set _r74223fbabfd8b0(e) {
    this._r4b37b3e6a7abf9 = e;
  }
  get _rcc3a6c8a5111d8() {
    return this._rbedb7a511d5e1f;
  }
  set _rcc3a6c8a5111d8(e) {
    this._rbedb7a511d5e1f = e;
  }
  get visible() {
    return this.var_679;
  }
  set visible(e) {
    e !== this.var_679 && ((this.var_679 = e), this.var_167++);
  }
  get tag() {
    return this.var_4265;
  }
  set tag(e) {
    e !== this.var_4265 && ((this.var_4265 = e), this.var_167++);
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(e) {
    let r = e & 255;
    r !== this._alpha && ((this._alpha = r), this.var_167++);
  }
  get color() {
    return this._color;
  }
  set color(e) {
    let r = e & 16777215;
    r !== this._color && ((this._color = r), this.var_167++);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e) {
    e !== this._blendMode && ((this._blendMode = e), this.var_167++);
  }
  get filters() {
    return this._filters;
  }
  set filters(e) {
    e !== this._filters && ((this._filters = e), this.var_167++);
  }
  get flipH() {
    return this._flipH;
  }
  set flipH(e) {
    e !== this._flipH && ((this._flipH = e), this.var_167++);
  }
  get flipV() {
    return this._flipV;
  }
  set flipV(e) {
    e !== this._flipV && ((this._flipV = e), this.var_167++);
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    this.var_81 = a._r08e8b4838eaa0e(e);
  }
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(e) {
    let r = a._r08e8b4838eaa0e(e);
    r !== this._offsetX && ((this._offsetX = r), this.var_167++);
  }
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(e) {
    let r = a._r08e8b4838eaa0e(e);
    r !== this._offsetY && ((this._offsetY = r), this.var_167++);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get _relativeDepth() {
    return this._r53843a629b8651;
  }
  set _relativeDepth(e) {
    e !== this._r53843a629b8651 && ((this._r53843a629b8651 = e), this.var_167++);
  }
  get varyingDepth() {
    return this._r040481a9f22e8e;
  }
  set varyingDepth(e) {
    e !== this._r040481a9f22e8e && ((this._r040481a9f22e8e = e), this.var_167++);
  }
  get clickHandling() {
    return this._rd6b3ded75e43d5;
  }
  set clickHandling(e) {
    e !== this._rd6b3ded75e43d5 && ((this._rd6b3ded75e43d5 = e), this.var_167++);
  }
  get skipMouseHandling() {
    return this._rd61725313055be;
  }
  set skipMouseHandling(e) {
    this._rd61725313055be = e;
  }
  get updateId() {
    return this.var_167;
  }
  get spriteType() {
    return this.var_3260;
  }
  set spriteType(e) {
    this.var_3260 = e;
  }
  get objectType() {
    return this.hasAsset;
  }
  set objectType(e) {
    this.hasAsset = e;
  }
  get _re7ddc55c344f53() {
    return this._r306785f235f1ef;
  }
  set _re7ddc55c344f53(e) {
    e !== this._r306785f235f1ef && ((this._r306785f235f1ef = e), this.var_167++);
  }
  get planeId() {
    return this._r72ff2a4767b3d4;
  }
  set planeId(e) {
    this._r72ff2a4767b3d4 = a._r08e8b4838eaa0e(e);
  }
  dispose() {
    ((this._asset = null),
      (this._r7a9b0ee1b7faa5 = null),
      (this._width = 0),
      (this._height = 0),
      (this._filters = null));
  }
}
