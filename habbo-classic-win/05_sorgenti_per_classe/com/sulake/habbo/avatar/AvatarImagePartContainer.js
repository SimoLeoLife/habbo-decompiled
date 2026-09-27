// Estratto da HabboAirLauncher.deobf.js, riga 169552.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarImagePartContainer.as
// Nome offuscato: _i06e34bce61e8da

class {
  static {
    n(this, "AvatarImagePartContainer");
  }
  _bodyPartId;
  _partType;
  _flippedPartType;
  _partId;
  _color;
  _frames;
  _action;
  _isColorable;
  _isBlendable;
  _blendTransform;
  _paletteMapId;
  constructor(e, r, t, i, s, o, d, c, f = "", l = !1, b = 1) {
    ((this._bodyPartId = e),
      (this._partType = r),
      (this._partId = t),
      (this._color = i),
      (this._frames = s ?? [0]),
      (this._action = o),
      (this._isColorable = d),
      (this._paletteMapId = c),
      (this._flippedPartType = f),
      (this._isBlendable = l),
      (this._blendTransform = new _i4210dc3239901d(1, 1, 1, b)),
      this._partType === "ey" && (this._isColorable = !1));
  }
  getFrameIndex(e) {
    if (this._frames.length === 0) return 0;
    let r = e % this._frames.length,
      t = this._frames[r];
    return t instanceof _i4c2be2d686eb96 ? t.number : r;
  }
  getFrameDefinition(e) {
    let r = e % this._frames.length,
      t = this._frames[r];
    return t instanceof _i4c2be2d686eb96 ? t : null;
  }
  getCacheableKey(e) {
    let r = this.getFrameDefinition(e);
    return r != null
      ? `${this.partId}:${r.assetPartDefinition}:${r.number}`
      : `${this.partId}:${e % this._frames.length}`;
  }
  get bodyPartId() {
    return this._bodyPartId;
  }
  get partType() {
    return this._partType;
  }
  get partId() {
    return this._partId;
  }
  get color() {
    return this._color;
  }
  get action() {
    return this._action;
  }
  set isColorable(e) {
    this._isColorable = e;
  }
  get isColorable() {
    return this._isColorable;
  }
  get paletteMapId() {
    return this._paletteMapId;
  }
  get flippedPartType() {
    return this._flippedPartType;
  }
  get isBlendable() {
    return this._isBlendable;
  }
  get blendTransform() {
    return this._blendTransform;
  }
  toString() {
    return [this._bodyPartId, this._partType, this._partId].join(":");
  }
}
