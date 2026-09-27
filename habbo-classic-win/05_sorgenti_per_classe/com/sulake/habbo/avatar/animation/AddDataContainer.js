// Extracted from HabboAirLauncher.deobf.js, line 169188.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/animation/AddDataContainer.as
// Obfuscated name: _i044aaccceba670

class {
  static {
    n(this, "AddDataContainer");
  }
  _id;
  _align;
  var_2990;
  var_4064;
  var_1119 = 1;
  constructor(e) {
    ((this._id = _ifdbe20062cc5b0(e, "id")),
      (this._align = _ifdbe20062cc5b0(e, "align")),
      (this.var_2990 = _ifdbe20062cc5b0(e, "base")),
      (this.var_4064 = _ifdbe20062cc5b0(e, "ink")),
      _ifdbe20062cc5b0(e, "blend").length > 0 &&
        ((this.var_1119 = _iad9be79b4e3584(e, "blend", 1)),
        this.var_1119 > 1 && (this.var_1119 /= 100)));
  }
  get id() {
    return this._id;
  }
  get align() {
    return this._align;
  }
  get base() {
    return this.var_2990;
  }
  get ink() {
    return this.var_4064;
  }
  get blend() {
    return this.var_1119;
  }
  get isBlended() {
    return this.var_1119 !== 1;
  }
}
