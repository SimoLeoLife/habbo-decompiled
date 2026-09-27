// Estratto da HabboAirLauncher.deobf.js, riga 169635.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/AvatarCanvas.as
// Nome offuscato: _i59c0f895a1fce3

class {
  static {
    n(this, "AvatarCanvas");
  }
  _id;
  _width;
  _height;
  _offset;
  _regPoint;
  constructor(e, r) {
    ((this._id = _ifdbe20062cc5b0(e, "id")),
      (this._width = _i897b98cdeac318(e, "width")),
      (this._height = _i897b98cdeac318(e, "height")),
      (this._offset = new E(_i897b98cdeac318(e, "dx"), _i897b98cdeac318(e, "dy"))),
      (this._regPoint =
        r === "h" ? new E((this._width - 64) / 2, 0) : new E((this._width - 32) / 2, 0)));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get offset() {
    return this._offset;
  }
  get id() {
    return this._id;
  }
  get regPoint() {
    return this._regPoint;
  }
}
