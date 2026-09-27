// Extracted from HabboAirLauncher.deobf.js, line 195162.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie6f44ff569d9f3

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "UnkCatalogWidgetSubclass_e6f44f");
  }
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? (this._rd7318259311b4b(CatalogWidgetEnum.SOLD_LIMITED_ITEMS),
        this.window != null && (this.window.visible = !1),
        this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
        !0)
      : !1;
  }
  _raaed999dcb0c8a = n((r) => {
    if (r.offer?.product == null) return;
    if (this.page?.mode === Ju._r0d1a664a7fc91e) {
      let i = this._catalog?.getNodeById?._r369c0978d14dff(r.offer.offerId) ?? [];
      for (let s of i)
        if (s.pageName.indexOf(CatalogPageName.CATALOG_PAGE_SOLD_RARES) > -1) {
          (this.window != null && (this.window.visible = !0),
            this.events?.dispatchEvent?.(new UnkClass_51916a(CatalogWidgetEnum.PURCHASE, !1)));
          return;
        }
    }
    if (this.page?._rf3871e54af1151 === "sold_ltd_items") {
      (this.window != null && (this.window.visible = !0),
        this.events?.dispatchEvent?.(new UnkClass_51916a(CatalogWidgetEnum.PURCHASE, !1)));
      return;
    }
    let t = r.offer.product._r651925293e1d0b && r.offer.product._r807decfd331c6c === 0;
    (this.window != null && (this.window.visible = t), this.events?.dispatchEvent?.(new UnkClass_51916a(CatalogWidgetEnum.PURCHASE, !t)));
  }, "_raaed999dcb0c8a");
}
