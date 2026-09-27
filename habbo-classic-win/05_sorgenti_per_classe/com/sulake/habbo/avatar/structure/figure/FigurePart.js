// Extracted from HabboAirLauncher.deobf.js, line 170266.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/figure/FigurePart.as
// Obfuscated name: _i45dbf55d91c9cd

class {
  static {
    n(this, "FigurePart");
  }
  _id;
  _type;
  var_4890 = -1;
  _rb4b501e4f1f212;
  _index;
  _paletteMapId = -1;
  constructor(e) {
    ((this._id = _i897b98cdeac318(e, "id")),
      (this._type = _ifdbe20062cc5b0(e, "type")),
      (this._index = _i897b98cdeac318(e, "index")),
      (this._rb4b501e4f1f212 = _i897b98cdeac318(e, "colorindex")));
    let r = _ifdbe20062cc5b0(e, "palettemapid");
    r !== "" && (this._paletteMapId = Number.parseInt(r, 10));
    let t = _ifdbe20062cc5b0(e, "breed");
    t !== "" && (this.var_4890 = Number.parseInt(t, 10));
  }
  dispose() {}
  get id() {
    return this._id;
  }
  get type() {
    return this._type;
  }
  get breed() {
    return this.var_4890;
  }
  get _rf7b43ebbad6f14() {
    return this._rb4b501e4f1f212;
  }
  get index() {
    return this._index;
  }
  get paletteMap() {
    return this._paletteMapId;
  }
}
