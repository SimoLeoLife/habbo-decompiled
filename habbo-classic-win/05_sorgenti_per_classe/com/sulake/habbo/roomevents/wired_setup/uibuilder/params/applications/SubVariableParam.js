// Estratto da HabboAirLauncher.deobf.js, riga 360851.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/applications/SubVariableParam.as
// Nome offuscato: _i8b560f19d3d6d0

class {
  constructor(e, r, t = !1) {
    this._id = e;
    this._name = r;
    this.var_5131 = t;
  }
  static {
    n(this, "SubVariableParam");
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get hasExtraText() {
    return this.var_5131;
  }
}
