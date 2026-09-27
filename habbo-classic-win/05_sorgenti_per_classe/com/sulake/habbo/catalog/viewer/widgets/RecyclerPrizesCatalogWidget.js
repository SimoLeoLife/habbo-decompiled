// Estratto da HabboAirLauncher.deobf.js, riga 194484.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/RecyclerPrizesCatalogWidget.as
// Nome offuscato: _i9cff5a83918bc0

class a extends CatalogWidget {
  static {
    n(this, "RecyclerPrizesCatalogWidget");
  }
  static STAR_LEVELS = ["bronze", "silver", "gold", "diamond", "ruby", "pink", "green", "grey"];
  _prizes = null;
  _itemList = null;
  _gridItemLayout = null;
  _levelItemLayout = null;
  var_265 = null;
  dispose() {
    ((this._prizes = null),
      (this._itemList = null),
      (this._gridItemLayout = null),
      (this._levelItemLayout = null),
      (this.var_265 = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    this._itemList = this.window?.findChildByName("itemList");
    let e = this.catalog?.assets.getAssetByName("gridItem"),
      r = this.catalog?.assets.getAssetByName("recyclerPrizesWidgetLevelItem");
    ((this._gridItemLayout = e?.content ?? null), (this._levelItemLayout = r?.content ?? null));
    let t = this.recycler?._r7261aac1a38a08(this._r5b671d009e1dba);
    return (t != null && this._r5b671d009e1dba(t), !0);
  }
  select(e, r) {
    if (e == null) return;
    (this.var_265?.deactivate(), (this.var_265 = e), e.activate());
    let t = this.window?.findChildByName("productView"),
      i = e;
    this.viewProduct(
      this.page?.viewer.roomEngine ?? null,
      t,
      i.productItemType,
      i.productItemTypeId,
      i.title,
      "",
    );
  }
  startDragAndDrop(e) {
    return !1;
  }
  viewProduct(e, r, t, i, s, o) {
    let c = r?.findChildByName("product_viewer")?.widget;
    c != null && (c.productInfo = new RecycleRewardDisplayWrapper(t, i));
    let f = r?.findChildByName("ctlg_product_name"),
      l = r?.findChildByName("ctlg_description");
    (f != null && (f.caption = s), l != null && (l.caption = o || ""));
  }
  get recycler() {
    return this.catalog?.viewer() ?? null;
  }
  get catalog() {
    return this.page?.viewer.catalog ?? null;
  }
  _r5b671d009e1dba = n((e) => {
    e != null &&
      ((this._prizes = e),
      this.populateItemGrid(),
      (this._prizes[0]?.prizes.length ?? 0) > 0 &&
        this.select(this._prizes[0].prizes[0], !1));
  }, "_r5b671d009e1dba");
  populateItemGrid() {
    for (let e of this._prizes ?? []) this.createLevelItem(e);
  }
  createLevelItem(e) {
    if (this._itemList == null || this._levelItemLayout == null) return;
    let r = this.catalog?.windowManager.buildFromXML(this._levelItemLayout);
    if (r == null) return;
    this._itemList.addListItem(r);
    let t = r.findChildByName("level_title");
    t != null &&
      (t.caption =
        this.catalog?.localization?.getLocalization(`recycler.prizes.category.${e.prizeLevelId}`) ?? "");
    let i = r.findChildByName("level_chances");
    i != null &&
      (e.prizeLevelId === 1
        ? (i.visible = !1)
        : ((i.visible = !0),
          (i.caption =
            this.catalog?.localization?.getLocalizationWithParams(
              "recycler.prizes.odds",
              "",
              "odds",
              `1:${e._ree58da3a3dbd5a}`,
            ) ?? "")));
    let s = r.findChildByName("level_splitter");
    s != null && (s.visible = e.prizeLevelId > 1);
    let o = r.findChildByName("star_icon");
    o != null &&
      (o.assetUri = `star_small_${a.STAR_LEVELS[e.prizeLevelId - 1] ?? a.STAR_LEVELS[0]}`);
    let d = r.findChildByName("itemGrid");
    for (let c of e.prizes) this.createPrizeItem(c, d);
  }
  createPrizeItem(e, r) {
    if (e == null || r == null || r.disposed || this._gridItemLayout == null) return;
    let t = this.catalog?.windowManager.buildFromXML(this._gridItemLayout);
    if (t == null) return;
    let i = t.findChildByName("clubLevelIcon");
    (i != null && (i.visible = !1),
      (e.view = t),
      (e.grid = this),
      e.setIcon(this.page?.viewer.roomEngine ?? null),
      r.addGridItem(t),
      (r.height = r.visibleRegion.height),
      e instanceof DealPrizeContainer && (r.width = r.visibleRegion.width));
  }
}
