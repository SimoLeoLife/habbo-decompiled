// Extracted from HabboAirLauncher.deobf.js, line 313156.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingMixerController.as
// Obfuscated name: _i1195931c9dfcca

class a extends CraftingGridControllerBase {
  static {
    n(this, "CraftingMixerController");
  }
  static MAX_ITEMS = 10;
  _renderers = [];
  constructor(e) {
    super(e);
  }
  dispose() {
    (this.returnItemsToInventory(), super.dispose());
  }
  returnItemsToInventory() {
    for (let e of this._renderers) e?.returnItemToInventory();
    ((this._renderers.length = 0),
      this.container?._rbb4c26d068856f(),
      this.var_17?._r220b146ec9d8d4?._rb0ba2f7b387bc0());
  }
  clearItems() {
    (this.returnItemsToInventory(), this.container?._rbb4c26d068856f());
  }
  _r449560f4a29e7c() {
    return this._renderers.length < a.MAX_ITEMS;
  }
  addItemToMixer(e, r) {
    if (this.container == null || this.var_17 == null) return !1;
    let t = this.getItemTemplate();
    if (t == null) return !1;
    let i = new CraftingMixerItemRenderer(e, t.clone(), this.var_17);
    return (
      (i.inventoryId = r),
      this.container.addGridItem(i.window),
      this._renderers.push(i),
      this.var_17._r366c8ca10055df &&
        this.var_17._r328d38d9e55570(this._ra511e2e29cdbb0()),
      !0
    );
  }
  removeListItem(e) {
    if (this.container == null || this.var_17 == null) return;
    let r = this._renderers.indexOf(e);
    if (r < 0) return;
    let t = this._renderers.splice(r, 1)[0] ?? null;
    (t?.window != null && (this.container.removeGridItem(t.window), this.container._r876553622f56ef()),
      t?.returnItemToInventory(),
      this.var_17._r220b146ec9d8d4._rb0ba2f7b387bc0(),
      this.var_17._r328d38d9e55570(this._ra511e2e29cdbb0()));
  }
  _ra511e2e29cdbb0() {
    return this._renderers.map((e) => e.inventoryId);
  }
  get container() {
    return this.mainWindow?.findChildByName("itemgrid_mixer");
  }
}
