// Extracted from HabboAirLauncher.deobf.js, line 313045.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/renderer/CraftingInventoryItemRenderer.as
// Obfuscated name: _i438ecf5cc0af85

class extends xg {
  static {
    n(this, "CraftingInventoryItemRenderer");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  onTriggered() {
    if (
      this.var_17 == null ||
      this.var_17._r2292b359576f1e ||
      this.var_17._r99dbebb17f07b6 ||
      !this.var_17._rc1972bde4d1fd9._r449560f4a29e7c()
    )
      return;
    let e = this.content?.getItemToMixer() ?? 0;
    e !== 0 &&
      (this.var_17._re913aeeb615403(),
      this.var_17._rc1972bde4d1fd9.addItemToMixer(this.content, e),
      this.var_17._r220b146ec9d8d4._rb0ba2f7b387bc0());
  }
  updateItemCount() {
    this.content != null &&
      (this.updateGroupItemCount(this.content._reb7882866323fe),
      this.updateBitmapBlend(this.content._reb7882866323fe > 0));
  }
}
