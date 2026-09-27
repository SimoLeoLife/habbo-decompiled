// Extracted from HabboAirLauncher.deobf.js, line 313211.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/renderer/CraftingRecipeItemRenderer.as
// Obfuscated name: _ie4cee413b7dab0

class extends xg {
  static {
    n(this, "CraftingRecipeItemRenderer");
  }
  constructor(e, r, t) {
    (super(e, r, t), this.hideItemCount());
  }
  onTriggered() {
    this.var_17 == null ||
      this.content == null ||
      this.var_17._r2292b359576f1e ||
      this.var_17._r0cba33b44db147(this.content);
  }
}
