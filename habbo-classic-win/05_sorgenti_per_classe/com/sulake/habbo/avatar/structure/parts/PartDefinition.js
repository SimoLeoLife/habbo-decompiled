// Extracted from HabboAirLauncher.deobf.js, line 170524.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/parts/PartDefinition.as
// Obfuscated name: _i6d938d8ffc2023

class {
  static {
    n(this, "PartDefinition");
  }
  _setType;
  _flippedSetType;
  _removeSetType;
  _appendToFigure = !1;
  _staticId = -1;
  constructor(e) {
    ((this._setType = _ifdbe20062cc5b0(e, "set-type")),
      (this._flippedSetType = _ifdbe20062cc5b0(e, "flipped-set-type")),
      (this._removeSetType = _ifdbe20062cc5b0(e, "remove-set-type")));
  }
  hasStaticId() {
    return this._staticId >= 0;
  }
  get staticId() {
    return this._staticId;
  }
  set staticId(e) {
    this._staticId = e;
  }
  get setType() {
    return this._setType;
  }
  get flippedSetType() {
    return this._flippedSetType;
  }
  set flippedSetType(e) {
    this._flippedSetType = e;
  }
  get removeSetType() {
    return this._removeSetType;
  }
  get appendToFigure() {
    return this._appendToFigure;
  }
  set appendToFigure(e) {
    this._appendToFigure = e;
  }
}
