// Extracted from HabboAirLauncher.deobf.js, line 313266.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingRecipeListController.as
// Obfuscated name: _i9027f6b019b9c4

class extends CraftingGridControllerBase {
  static {
    n(this, "CraftingRecipeListController");
  }
  var_2517 = null;
  _items = [];
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.clearItems(), (this.var_2517 = null), super.dispose());
  }
  clearItems() {
    for (let e of this._items) e.dispose();
    ((this._items.length = 0), this.container?._rbb4c26d068856f());
  }
  populateRecipeItems(e) {
    if (this.container == null) return;
    let r = this.getItemTemplate();
    if (!(r == null || this.var_17 == null)) {
      this.container.removeGridItems();
      for (let t of e) {
        let i = new CraftingRecipeItemRenderer(t, r.clone(), this.var_17);
        (this.container.addGridItem(i.window), this._items.push(i));
      }
    }
  }
  showRecipe(e, r) {
    if (this.var_17 == null) return;
    if (((this.var_2517 = e), r == null)) {
      this.var_17._ra88797d3b195c4(class_2920.RECIPE_INCOMPLETE);
      return;
    }
    this.var_17._rc1972bde4d1fd9.clearItems();
    let t = !0,
      i = [];
    for (let s of r) {
      let o = !1,
        d = this.var_17.sessionDataManager?.getFloorItemDataByName(s.furnitureClassName) ?? null;
      if (
        d == null &&
        ((d = this.var_17.sessionDataManager?.getWallItemDataByName(s.furnitureClassName) ?? null),
        (o = !0),
        d == null)
      )
        return;
      let c = [
        ...(this.var_17.handler.container?.inventory?._rcfe868f829c086(
          class_2106.FURNITURE,
          d.id,
          o,
        ) ?? []),
      ];
      c.length < s.count && (t = !1);
      for (let f = 0; f < s.count; f += 1) {
        let l = new CraftingFurnitureItem(null, null, d),
          b = 0;
        (c.length > 0
          ? (b = c.shift() ?? 0)
          : i.indexOf(d.localizedName) === -1 && i.push(d.localizedName),
          this.var_17._rc1972bde4d1fd9.addItemToMixer(l, b));
      }
    }
    t
      ? this.var_17._ra88797d3b195c4(class_2920.RECIPE_COMPLETE, this.var_2517.furnitureData)
      : this.var_17._ra88797d3b195c4(
          class_2920.RECIPE_INCOMPLETE,
          this.var_2517.furnitureData,
          i,
        );
  }
  get container() {
    return this.mainWindow?.findChildByName("itemgrid_products");
  }
}
