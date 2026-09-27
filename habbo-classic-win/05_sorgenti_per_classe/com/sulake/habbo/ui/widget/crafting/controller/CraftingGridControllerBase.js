// Extracted from HabboAirLauncher.deobf.js, line 313072.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingGridControllerBase.as
// Obfuscated name: _if37f59f47bfab8

class {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "CraftingGridControllerBase");
  }
  dispose() {
    this.var_17 = null;
  }
  get mainWindow() {
    return this.var_17?.window ?? null;
  }
  getItemTemplate() {
    return this.var_17?._r5eb908c4c91dbf ?? null;
  }
}
