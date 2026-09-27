// Estratto da HabboAirLauncher.deobf.js, riga 236498.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/effects/EffectListProxy.as
// Nome offuscato: _iabbc38aaa08728

class {
  constructor(e, r) {
    this.var_38 = e;
    this.var_150 = r;
  }
  static {
    n(this, "EffectListProxy");
  }
  dispose() {
    this.var_38 = null;
  }
  getDrawableList() {
    return this.var_38?.getEffects(this.var_150) ?? [];
  }
}
