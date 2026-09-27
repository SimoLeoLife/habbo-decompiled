// Estratto da HabboAirLauncher.deobf.js, riga 353131.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/model/VariableFxCategoryDefinition.as
// Nome offuscato: _i8a45695680e9bf

class {
  constructor(e, r, t) {
    this.id = e;
    this.runtimeCategory = r;
    this.styles = t;
  }
  static {
    n(this, "VariableFxCategoryDefinition");
  }
  _r22c9347ecec607(e) {
    for (let r of this.styles) if (r.id === e) return r;
    return this.styles[0];
  }
}
