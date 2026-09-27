// Extracted from HabboAirLauncher.deobf.js, line 313122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/renderer/CraftingMixerItemRenderer.as
// Obfuscated name: _if5400bfec99bca

class extends xg {
  static {
    n(this, "CraftingMixerItemRenderer");
  }
  var_2106 = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  onTriggered() {
    if (!(
      this.var_17 == null ||
      this.var_17._r2292b359576f1e ||
      this.var_17._r99dbebb17f07b6
    )) {
      if (this.var_2106 === 0) {
        this.var_17._ra88797d3b195c4(class_2920.ITEM_NOT_IN_INVENTORY, this.furnitureData);
        return;
      }
      this.var_17._r366c8ca10055df && this.var_17._rc1972bde4d1fd9.removeListItem(this);
    }
  }
  returnItemToInventory() {
    (this.var_2106 !== 0 && this._data?.returnItemToInventory(this.var_2106), this.dispose());
  }
  updateItemCount() {
    this.updateBitmapBlend(this.var_2106 !== 0);
  }
  get inventoryId() {
    return this.var_2106;
  }
  set inventoryId(e) {
    ((this.var_2106 = e), this.updateItemCount());
  }
}
