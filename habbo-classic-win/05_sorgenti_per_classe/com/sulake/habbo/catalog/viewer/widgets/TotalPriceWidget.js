// Estratto da HabboAirLauncher.deobf.js, riga 195512.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/TotalPriceWidget.as
// Nome offuscato: _iba074b304e1a23

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "TotalPriceWidget");
  }
  static ELEMENT_TOTAL_PRICE_CONTAINER = "totalprice_container";
  static ELEMENT_PLUS = "plus";
  static const_335 = "amount_text_left";
  static ELEMENT_AMOUNT_TEXT_RIGHT = "amount_text_right";
  static const_1183 = "total_left";
  static ELEMENT_TOTAL_RIGHT = "total_right";
  static const_857 = "currency_indicator_bitmap_left";
  static ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT = "currency_indicator_bitmap_right";
  var_3864 = 0;
  var_2633 = 0;
  var_1870 = 0;
  _rf799278aa1f620 = 0;
  var_1596 = null;
  _r1235273da4778a = null;
  var_580 = null;
  var_314 = null;
  var_1205 = 1;
  dispose() {
    this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r087e8e7c3325e0),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rfdeca940cba891),
      (this._catalog = null),
      this.clear(),
      super.dispose());
  }
  init() {
    return super.init()
      ? (this._rd7318259311b4b(CatalogWidgetEnum.TOTAL_PRICE),
        this.window != null && (this.window.visible = !1),
        this._catalog?.multiplePurchaseEnabled &&
          (this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r087e8e7c3325e0),
          this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rfdeca940cba891),
          this.events?.dispatchEvent?.(new M(CatalogWidgetEventEnum.TOTAL_PRICE_WIDGET_INITIALIZED))),
        !0)
      : !1;
  }
  _r087e8e7c3325e0 = n((r) => {
    ((this.var_1205 = r.value), this.updateCurrencyIndicators());
  }, "_r087e8e7c3325e0");
  _rfdeca940cba891 = n((r) => {
    (this.window != null && (this.window.visible = r.offer.bundlePurchaseAllowed),
      (this.var_3864 = r.offer.priceInCredits),
      (this.var_2633 = r.offer.priceInActivityPoints),
      (this.var_1870 = r.offer.priceInSilver),
      (this._rf799278aa1f620 = r.offer.activityPointType),
      (this.var_1205 = 1),
      this.clear(),
      this.createCurrencyIndicators(),
      this.updateCurrencyIndicators());
  }, "_rfdeca940cba891");
  clear() {
    ((this.var_1596 = null),
      (this._r1235273da4778a = null),
      (this.var_580 = null),
      (this.var_314 = null),
      this._window?.findChildByName(a.ELEMENT_PLUS) &&
        (this._window.findChildByName(a.ELEMENT_PLUS).visible = !1),
      this._window?.findChildByName(a.const_335) &&
        (this._window.findChildByName(a.const_335).visible = !1),
      this._window?.findChildByName(a.const_1183) &&
        (this._window.findChildByName(a.const_1183).visible = !1),
      this._window?.findChildByName(a.ELEMENT_TOTAL_RIGHT) &&
        (this._window.findChildByName(a.ELEMENT_TOTAL_RIGHT).visible = !1),
      this._window?.findChildByName(a.const_857) &&
        (this._window.findChildByName(a.const_857).visible = !1));
  }
  updateCurrencyIndicators() {
    if (this._catalog == null) return;
    let r = this.var_1205 * this.var_3864,
      t = this.var_1205 * this.var_2633,
      i = this.var_1205 * this.var_1870,
      s = this._catalog._promoInfo
        ? this._catalog.utils._rfcca586527c6d5(!0, this.var_3864, this.var_1205)
        : r,
      o = this._catalog._promoInfo
        ? this._catalog.utils._rfcca586527c6d5(!0, this.var_2633, this.var_1205)
        : t,
      d = this._catalog._promoInfo
        ? this._catalog.utils._rfcca586527c6d5(!0, this.var_1870, this.var_1205)
        : i;
    if (
      (this.var_1596 != null &&
        (this.var_1596.caption = String(this._catalog._promoInfo ? s : r)),
      this._r1235273da4778a != null &&
        (this._r1235273da4778a.caption = String(
          this.var_1870 > 0
            ? this._catalog._promoInfo
              ? d
              : i
            : this._catalog._promoInfo
              ? o
              : t,
        )),
      this.var_580 != null)
    ) {
      this.var_580.visible = r !== s;
      let c = this.var_580.findChildByName("text");
      c && (c.caption = this.var_580.visible ? String(r) : "0");
      let f = this.var_580.findChildByName("strike");
      f != null && c != null && (f.width = c.width);
    }
    if (this.var_314 != null) {
      let c = this.var_1870 > 0 ? i : t,
        f = this.var_1870 > 0 ? d : o;
      this.var_314.visible = c !== f;
      let l = this.var_314.findChildByName("text");
      l && (l.caption = this.var_314.visible ? String(c) : "0");
      let b = this.var_314.findChildByName("strike");
      b != null && l != null && (b.width = l.width);
    }
  }
  createCurrencyIndicators() {
    if (this._window == null || this._catalog == null) return;
    if (this.var_3864 > 0) {
      let t;
      (this.var_2633 > 0 || this.var_1870 > 0
        ? ((this.var_1596 = this._window.findChildByName(a.const_335)),
          this.var_1596 && (this.var_1596.visible = !0),
          (this.var_580 = this._window.findChildByName(a.const_1183)),
          this.var_580 && (this.var_580.visible = !1),
          (t = this._window.findChildByName(a.const_857)),
          t && (t.visible = !0),
          this._window.findChildByName(a.ELEMENT_PLUS) &&
            (this._window.findChildByName(a.ELEMENT_PLUS).visible = !0))
        : ((this.var_1596 = this._window.findChildByName(a.ELEMENT_AMOUNT_TEXT_RIGHT)),
          (this.var_580 = this._window.findChildByName(a.ELEMENT_TOTAL_RIGHT)),
          this.var_580 && (this.var_580.visible = !1),
          (t = this._window.findChildByName(a.ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT))),
        t != null &&
          (this.page?.var_3503
            ? ((t.style = et.getIconStyleFor(
                this._catalog.getSeasonalCurrencyActivityPointType(),
                this._catalog,
                !0,
                !0,
              )),
              (t.width = 53))
            : ((t.style = et.getIconStyleFor(-1, this._catalog, !0)), (t.width = 22))));
    }
    if (this.var_2633 > 0 || this.var_1870 > 0) {
      ((this._r1235273da4778a = this._window.findChildByName(a.ELEMENT_AMOUNT_TEXT_RIGHT)),
        (this.var_314 = this._window.findChildByName(a.const_1183)),
        this.var_314 && (this.var_314.visible = !1));
      let t = this._window.findChildByName(a.ELEMENT_CURRENCY_INDICATOR_BITMAP_RIGHT);
      t != null &&
        (t.style = et.getIconStyleFor(
          this.var_1870 > 0 ? et.SILVER : this._rf799278aa1f620,
          this._catalog,
          !0,
        ));
    }
    this._window.findChildByName(a.ELEMENT_TOTAL_PRICE_CONTAINER)?.arrangeListItems();
  }
}
