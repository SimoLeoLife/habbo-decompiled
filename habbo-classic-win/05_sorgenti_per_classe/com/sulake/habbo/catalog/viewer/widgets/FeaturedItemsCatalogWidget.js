// Extracted from HabboAirLauncher.deobf.js, line 189561.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/FeaturedItemsCatalogWidget.as
// Obfuscated name: _i355653ba20ab27

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "FeaturedItemsCatalogWidget");
  }
  var_1619 = null;
  var_1643 = null;
  dispose() {
    (this.disposed ||
      ((this._catalog = null),
      this.var_1619?.dispose(),
      (this.var_1619 = null),
      this.var_1643?.dispose(),
      (this.var_1643 = null)),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    ((this.var_1619 = this.window?.findChildByName("itemlist_featured")),
      (this.var_1643 = this.var_1619?.getListItemByName("featured_item_template")),
      this.var_1619?.removeListItems());
    let r = this._catalog?.class_2157 ?? [];
    if (r.length === 0) return !0;
    let t = this.window?.findChildByName("firstitem");
    t != null && this.populateItem(r[0], t, 0);
    for (let i = 1; i < Math.min(4, r.length); i++) {
      let s = this._rc25dedba1f3f69(r[i], i);
      s != null && this.var_1619?.addListItem(s);
    }
    return !0;
  }
  _rc25dedba1f3f69(r, t) {
    return this.var_1643 != null ? this.populateItem(r, this.var_1643.clone(), t) : null;
  }
  populateItem(r, t, i) {
    let s = t.findChildByName("item_title");
    if ((s != null && (s.caption = r.itemName), r.itemPromoImage !== "")) {
      let d = t.findChildByName("item_image");
      if (d != null) {
        let c = this._catalog?.getProperty("image.library.url") ?? "";
        d.assetUri = `${c}${r.itemPromoImage}`;
      }
    }
    let o = t.getChildByName("event_catcher_region") ?? t;
    return ((o.id = i), (o.procedure = this.eventProc), t);
  }
  eventProc = n((r, t) => {
    if (r.type !== u.DOWN) return;
    let i = t.id,
      s = this._catalog?.class_2157?.[i] ?? null;
    if (s != null)
      switch (s.type) {
        case Zv.const_219:
          if (s._r3ef0fc613bba28 === CatalogPageName.CATALOG_PAGE_MOBILE_BUNDLES) {
            this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_BUNDLES, CatalogType.NORMAL);
            return;
          }
          if (s._r3ef0fc613bba28 === CatalogPageName.CATALOG_PAGE_MOBILE_SUBSCRIPTIONS) {
            this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB, CatalogType.NORMAL);
            return;
          }
          this._catalog?.openCatalogPage(s._r3ef0fc613bba28, CatalogType.NORMAL);
          break;
        case Zv.const_160:
          this._catalog?._r104372015639cf(s._r01d6d09c7bea95, CatalogType.NORMAL);
          break;
        default:
          break;
      }
  }, "eventProc");
}
