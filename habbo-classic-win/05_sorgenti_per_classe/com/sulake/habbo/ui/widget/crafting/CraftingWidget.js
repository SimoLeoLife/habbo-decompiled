// Extracted from HabboAirLauncher.deobf.js, line 313341.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/CraftingWidget.as
// Obfuscated name: _i6e791c446e0c07

class a extends RoomWidgetBase {
  constructor(r, t, i) {
    super(r, t, i?.assets ?? null, null);
    this._rf205fceb9b7fe8 = i;
    ((this.var_1353 = new CraftingInventoryListController(this)),
      (this._rc91a37c090b1c4 = new CraftingRecipeListController(this)),
      (this.var_1412 = new YIe(this)),
      (this._r642e69bb8a5d70 = new jIe(this)),
      (this._assets = i?.assets ?? null),
      (this.handler.widget = this));
  }
  static {
    n(this, "CraftingWidget");
  }
  static MODE_NONE = 0;
  static MODE_SECRET_RECIPE = 1;
  static MODE_PUBLIC_RECIPE = 2;
  _r5beaa61e3ca3e1 = null;
  var_313 = null;
  var_1764 = null;
  var_1353;
  _rc91a37c090b1c4;
  var_1412;
  _r642e69bb8a5d70;
  _rc3c5f42908dd3a = a.MODE_NONE;
  dispose() {
    this.disposed ||
      (this.hide(),
      (this._rf205fceb9b7fe8 = null),
      this.var_1353?.dispose(),
      (this.var_1353 = null),
      this._rc91a37c090b1c4?.dispose(),
      (this._rc91a37c090b1c4 = null),
      this.var_1412?.dispose(),
      (this.var_1412 = null),
      this._r642e69bb8a5d70?.dispose(),
      (this._r642e69bb8a5d70 = null),
      this.var_1764?.dispose(),
      (this.var_1764 = null),
      super.dispose());
  }
  hide() {
    (this.handler._re3ea3eb2a306be(),
      this.var_1412?.clearItems(),
      this.var_1353?.clearItems(),
      this._rc91a37c090b1c4?.clearItems(),
      this._r2292b359576f1e && this._r642e69bb8a5d70?._r4815bb5d004544(),
      (this._rc3c5f42908dd3a = a.MODE_NONE),
      this.var_313?.dispose(),
      (this.var_313 = null));
  }
  createMainWindow() {
    if (this.window != null) return;
    let r = this.assets?.getAssetByName("craftingwidget_xml"),
      t = r != null ? (this.windowManager?.buildModalDialogFromXML(r.content) ?? null) : null;
    this.var_313 = t;
    let i = this.var_313?.rootWindow;
    if (i == null) return;
    i.findChildByTag("close")?.addEventListener?.(u.CLICK, this.onClose);
    let o = i.findChildByName("itemgrid_products");
    ((this.var_1764 = o?.getGridItemAt(0)),
      this.var_1764 && o?.removeGridItem(this.var_1764),
      (i.procedure = this._r64e450f8ad70fb),
      i.center());
  }
  populateInventoryItems(r) {
    this.var_1353?.populateInventoryItems(r);
  }
  populateRecipeItems(r) {
    this._rc91a37c090b1c4?.populateRecipeItems(r);
  }
  _ra88797d3b195c4(r, ...t) {
    this._r642e69bb8a5d70?.setState(r, ...t);
  }
  _r64e450f8ad70fb = n((r, t) => {
    r.type === u.DOWN && t.name === "header_button_close" && this.hide();
  }, "_r64e450f8ad70fb");
  onClose = n((r) => {
    this.hide();
  }, "onClose");
  setInfoText(r) {
    let t = this.window?.findChildByName("header_mixer");
    t != null && (t.text = r);
  }
  _r988bd8f420d230() {
    this.window == null &&
      (this.createMainWindow(), this.setInfoText(""), this._ra88797d3b195c4(class_2920.DEFAULT_VIEW));
  }
  showCraftingCategories(r, t, i, s) {
    if (s == null) return;
    let o = [];
    for (let d of t) {
      let c = !1,
        f = s.getFloorItemDataByName(d);
      if (f == null && ((f = s.getWallItemDataByName(d)), (c = !0), f == null)) continue;
      let l = new CraftingFurnitureItem(null, null, f),
        b = this.handler.container?.inventory?._rcfe868f829c086(class_2106.FURNITURE, l.typeId, c);
      (b != null && b.length > 0 && (l.inventoryIds = b), o.push(l));
    }
    (this.populateInventoryItems(o), (o = []));
    for (let d of r) {
      let c = s.getFloorItemDataByName(d.furnitureClassName),
        f = s.getWallItemDataByName(d.furnitureClassName);
      c != null
        ? o.push(new CraftingFurnitureItem(d._rdb4fd02ec6f839, d._raeb033db5aa083, c))
        : f != null && o.push(new CraftingFurnitureItem(d._rdb4fd02ec6f839, d._raeb033db5aa083, f));
    }
    this.populateRecipeItems(o);
  }
  _r0cba33b44db147(r) {
    ((this._r5beaa61e3ca3e1 = r),
      this._r5beaa61e3ca3e1 != null &&
        (this.setInfoText(this._r5beaa61e3ca3e1.furnitureData?.localizedName ?? ""),
        this.handler.getCraftingRecipe(
          this._r5beaa61e3ca3e1._rdb4fd02ec6f839,
          this._r5beaa61e3ca3e1._raeb033db5aa083,
        )));
  }
  _r556b3abec6f096(r) {
    (this._r038af73bc4bee7(), this._rc91a37c090b1c4?.showRecipe(this._r5beaa61e3ca3e1, r));
  }
  _ra150f104b5208e() {
    this.var_1412?.clearItems();
  }
  _r328d38d9e55570(r) {
    r.length > 0
      ? (this._ra88797d3b195c4(class_2920.STATE_WORKING), this.handler._r83815d236b153e(r))
      : this._ra88797d3b195c4(class_2920.const_939);
  }
  _re913aeeb615403() {
    (this._rc3c5f42908dd3a !== a.MODE_SECRET_RECIPE && this._ra150f104b5208e(),
      (this._rc3c5f42908dd3a = a.MODE_SECRET_RECIPE),
      this.setInfoText(""),
      this._ra88797d3b195c4(class_2920.const_939));
  }
  _r038af73bc4bee7() {
    (this._rc3c5f42908dd3a !== a.MODE_PUBLIC_RECIPE && this._ra150f104b5208e(),
      (this._rc3c5f42908dd3a = a.MODE_PUBLIC_RECIPE),
      this._ra88797d3b195c4(class_2920.RECIPE_EMPTY));
  }
  _rd685edc1a24b27() {
    switch (this._rc3c5f42908dd3a) {
      case a.MODE_SECRET_RECIPE:
        this.handler._r086379c6bd0b16();
        break;
      case a.MODE_PUBLIC_RECIPE:
        this.handler._rad1c36f2e5c5bd();
        break;
    }
  }
  _r3f6ee5b99d3df0() {
    return this.var_1412?._ra511e2e29cdbb0() ?? [];
  }
  get _r366c8ca10055df() {
    return this._rc3c5f42908dd3a === a.MODE_SECRET_RECIPE;
  }
  get _r2292b359576f1e() {
    return this.handler._r2292b359576f1e;
  }
  get _r99dbebb17f07b6() {
    return this.handler._r99dbebb17f07b6;
  }
  get _r5eb908c4c91dbf() {
    return this.var_1764;
  }
  get handler() {
    return this._handler;
  }
  get sessionDataManager() {
    return this.handler.container?.sessionDataManager ?? null;
  }
  get _r220b146ec9d8d4() {
    return this.var_1353;
  }
  get _r599ee80449735e() {
    return this._rc91a37c090b1c4;
  }
  get _rc1972bde4d1fd9() {
    return this.var_1412;
  }
  get _r358ab1645ce8ea() {
    return this._r642e69bb8a5d70;
  }
  get window() {
    return this.var_313?.rootWindow;
  }
}
