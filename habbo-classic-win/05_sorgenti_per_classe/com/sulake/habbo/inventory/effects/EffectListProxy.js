// Extracted from HabboAirLauncher.deobf.js, line 236498.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/effects/EffectListProxy.as
// Obfuscated name: _iabbc38aaa08728

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
