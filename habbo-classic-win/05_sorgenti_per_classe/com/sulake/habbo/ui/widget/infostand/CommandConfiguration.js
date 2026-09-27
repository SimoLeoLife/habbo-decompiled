// Estratto da HabboAirLauncher.deobf.js, riga 319683.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/CommandConfiguration.as
// Nome offuscato: _i76a90094ad3bff

class {
  static {
    n(this, "CommandConfiguration");
  }
  var_4812;
  var_2627 = new Map();
  constructor(e, r) {
    this.var_4812 = e;
    for (let t of r) this.var_2627.set(t, !0);
  }
  get allCommandIds() {
    return this.var_4812;
  }
  isEnabled(e) {
    return this.var_2627.has(e);
  }
}
