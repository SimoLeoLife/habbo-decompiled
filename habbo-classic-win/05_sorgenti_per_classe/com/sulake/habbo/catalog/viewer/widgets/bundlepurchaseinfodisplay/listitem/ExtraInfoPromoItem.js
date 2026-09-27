// Extracted from HabboAirLauncher.deobf.js, line 188826.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/listitem/ExtraInfoPromoItem.as
// Obfuscated name: _ib3e70b5308853b

class a extends UpdateableExtraInfoListItem {
  constructor(r, t, i, s) {
    super(r, t, i, bo.ALIGN_TOP);
    this._catalog = s;
    (this.createNextDiscountMap(),
      this.resolveNextDiscountLevel(),
      (this._r7640245f5b76c0 = new UnkEventDispatcherWrapperSubclass_05394e(50)),
      this._r7640245f5b76c0.addEventListener(DeBouncer.addEventListener, this.var_2011),
      this._r7640245f5b76c0.start());
  }
  static {
    n(this, "ExtraInfoPromoItem");
  }
  static const_1110 = "catalog.bundlewidget.discount.promo";
  _window = null;
  _dirty = !0;
  _r4f5895718d321e = new Map();
  var_3046 = 0;
  var_1321 = 0;
  _r7640245f5b76c0 = null;
  dispose() {
    (this.disposed ||
      (this._r7640245f5b76c0?.stop(),
      this._r7640245f5b76c0?.removeEventListener(DeBouncer.addEventListener, this.var_2011),
      (this._r7640245f5b76c0 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r4f5895718d321e.clear()),
      super.dispose());
  }
  update(r) {
    super.update(r);
    let t = this.var_3046;
    (this.resolveNextDiscountLevel(),
      this.var_3046 !== t && (this.var_1321 = 1),
      (this._dirty = !0),
      this.render());
  }
  _rda4cde3b8bef4b() {
    return (
      this._window == null && this.createWindow(),
      this._dirty && this.render(),
      this._window
    );
  }
  createWindow() {
    ((this._window = this._catalog.utils.createWindow("discountPromoItem")),
      (this._window.procedure = this.windowProcedure));
    let r = this._window?.findChildByName("icon_bitmap"),
      t = this._catalog.assets.getAssetByName("thumb_up")?.content;
    r != null && t != null && x0.replaceCenteredImage(r, t.clone());
  }
  render() {
    if (this._window == null) return;
    (this._catalog.localization?._r43eae9731f5b27(
      a.const_1110,
      "quantity",
      String(this.var_3046),
    ),
      this._catalog.localization?._r43eae9731f5b27(
        a.const_1110,
        "discount",
        String(this._r4f5895718d321e.get(this.var_3046) ?? 0),
      ));
    let r = this._catalog.localization?.getLocalization(a.const_1110, "") ?? "",
      t = this._window.findChildByName("promo_text"),
      i = this._window.findChildByName("promo_text_effect");
    (t != null && (t.caption = r), i != null && (i.caption = r), (this._dirty = !1));
  }
  resolveNextDiscountLevel() {
    this.var_3046 = 0;
    let r = Array.from(this._r4f5895718d321e.keys()).sort((t, i) => t - i);
    for (let t of r)
      if (t > this.data.quantity) {
        this.var_3046 = t;
        break;
      }
  }
  createNextDiscountMap() {
    let r = 0;
    for (let t = 1; t <= 100; t++) {
      let i = this._catalog.utils._rfcca586527c6d5(!0, 1, t),
        s = t - i;
      s > r &&
        this._catalog.utils._rbf728fddc728fb.indexOf(t) === -1 &&
        (this._r4f5895718d321e.set(t, s), (r = s));
    }
  }
  var_2011 = n((r) => {
    if (this.var_1321 <= 0 || this._window == null) return;
    this.var_1321 = Math.max(0, this.var_1321 - 0.1);
    let t = this._window.findChildByName("promo_text_effect");
    t != null && (t.blend = this.var_1321);
  }, "var_2011");
  windowProcedure = n((r, t) => {
    if (!(t.name !== "click_region" || this.var_17 == null))
      switch (r.type) {
        case u.CLICK:
          this.var_17.events?.dispatchEvent?.(new CatalogWidgetBundleDisplayExtraInfoEvent(CatalogWidgetBundleDisplayExtraInfoEvent.ITEM_CLICKED, this.data, this.id));
          break;
        case u.OVER: {
          let i = this._window?.findChildByName("promo_text");
          i != null && (i.textColor = 12582911);
          break;
        }
        case u.OUT: {
          let i = this._window?.findChildByName("promo_text");
          i != null && (i.textColor = 16777215);
          break;
        }
      }
  }, "windowProcedure");
}
