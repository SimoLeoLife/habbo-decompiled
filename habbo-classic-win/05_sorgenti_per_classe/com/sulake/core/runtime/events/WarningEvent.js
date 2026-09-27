// Estratto da HabboAirLauncher.deobf.js, riga 59161.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/events/WarningEvent.as
// Nome offuscato: _i4ccc8a3b2bfcec

class extends M {
  constructor(r, t) {
    super(r);
    this.var_1065 = t;
    this.var_1065 = this.var_1065 ?? "undefined";
  }
  static {
    n(this, "WarningEvent");
  }
  get message() {
    return this.var_1065;
  }
}
