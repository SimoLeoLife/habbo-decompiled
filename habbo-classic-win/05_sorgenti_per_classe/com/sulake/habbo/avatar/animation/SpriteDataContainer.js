// Extracted from HabboAirLauncher.deobf.js, line 169329.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/animation/SpriteDataContainer.as
// Obfuscated name: _i77579afa3e636b

class {
  static {
    n(this, "SpriteDataContainer");
  }
  var_2117;
  _id;
  var_4064;
  var_4489;
  _rd4db3518ec5846;
  _rab2b0c0726c355;
  var_3825 = [];
  var_3703 = [];
  var_3615 = [];
  constructor(e, r) {
    ((this.var_2117 = e),
      (this._id = _ifdbe20062cc5b0(r, "id")),
      (this.var_4064 = _i897b98cdeac318(r, "ink")),
      (this.var_4489 = _ifdbe20062cc5b0(r, "member")),
      (this._rab2b0c0726c355 = _i897b98cdeac318(r, "staticY") !== 0),
      (this._rd4db3518ec5846 = _i897b98cdeac318(r, "directions") !== 0));
    for (let t of _ib5ee1bd09422e6(r, "direction")) {
      let i = _i897b98cdeac318(t, "id");
      ((this.var_3825[i] = _i897b98cdeac318(t, "dx")),
        (this.var_3703[i] = _i897b98cdeac318(t, "dy")),
        (this.var_3615[i] = _i897b98cdeac318(t, "dz")));
    }
  }
  _rec16170e9b85f5(e) {
    return this.var_3825[e] ?? 0;
  }
  getDirectionOffsetY(e) {
    return this.var_3703[e] ?? 0;
  }
  getDirectionOffsetZ(e) {
    return this.var_3615[e] ?? 0;
  }
  get animation() {
    return this.var_2117;
  }
  get id() {
    return this._id;
  }
  get ink() {
    return this.var_4064;
  }
  get member() {
    return this.var_4489;
  }
  get hasDirections() {
    return this._rd4db3518ec5846;
  }
  get _rea41af9bc7ea1c() {
    return this._rab2b0c0726c355;
  }
}
