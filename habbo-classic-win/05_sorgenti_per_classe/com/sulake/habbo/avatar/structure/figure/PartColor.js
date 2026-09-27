// Extracted from HabboAirLauncher.deobf.js, line 170176.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/figure/PartColor.as
// Obfuscated name: _if9120b8cf86723

class {
  static {
    n(this, "PartColor");
  }
  _id;
  _index;
  var_3695;
  var_5347 = !1;
  var_2586;
  _r;
  _g;
  _b;
  var_4163;
  var_3965;
  var_4269;
  var_536;
  constructor(e) {
    ((this._id = _i897b98cdeac318(e, "id")),
      (this._index = _i897b98cdeac318(e, "index")),
      (this.var_3695 = _i897b98cdeac318(e, "club")),
      (this.var_5347 = _i897b98cdeac318(e, "selectable") !== 0));
    let r = getTextContent(e, "0");
    ((this.var_2586 = Number.parseInt(r, 16) >>> 0),
      (this._r = (this.var_2586 >> 16) & 255),
      (this._g = (this.var_2586 >> 8) & 255),
      (this._b = this.var_2586 & 255),
      (this.var_4163 = this._r / 255),
      (this.var_3965 = this._g / 255),
      (this.var_4269 = this._b / 255),
      (this.var_536 = new UnkClass_4210dc(this.var_4163, this.var_3965, this.var_4269)));
  }
  get colorTransform() {
    return this.var_536;
  }
  get redMultiplier() {
    return this.var_4163;
  }
  get greenMultiplier() {
    return this.var_3965;
  }
  get blueMultiplier() {
    return this.var_4269;
  }
  get rgb() {
    return this.var_2586;
  }
  get r() {
    return this._r;
  }
  get g() {
    return this._g;
  }
  get b() {
    return this._b;
  }
  get id() {
    return this._id;
  }
  get index() {
    return this._index;
  }
  get clubLevel() {
    return this.var_3695;
  }
  get isSelectable() {
    return this.var_5347;
  }
}
