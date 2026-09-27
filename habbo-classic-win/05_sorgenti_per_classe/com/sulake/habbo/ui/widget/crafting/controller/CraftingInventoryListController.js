// Estratto da HabboAirLauncher.deobf.js, riga 313089.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingInventoryListController.as
// Nome offuscato: _i638087170f178e

class extends CraftingGridControllerBase {
  static {
    n(this, "CraftingInventoryListController");
  }
  _items = [];
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.clearItems(), super.dispose());
  }
  clearItems() {
    for (let e of this._items) e.dispose();
    ((this._items.length = 0), this.container?._rbb4c26d068856f());
  }
  populateInventoryItems(e) {
    if (this.container == null) return;
    let r = this.getItemTemplate();
    if (!(r == null || this.var_17 == null)) {
      this.container.removeGridItems();
      for (let t of e) {
        let i = new CraftingInventoryItemRenderer(t, r.clone(), this.var_17);
        (this.container.addGridItem(i.window), this._items.push(i));
      }
    }
  }
  _rb0ba2f7b387bc0() {
    for (let e of this._items) e.updateItemCount();
  }
  get container() {
    return this.mainWindow?.findChildByName("itemgrid_inventory");
  }
}
