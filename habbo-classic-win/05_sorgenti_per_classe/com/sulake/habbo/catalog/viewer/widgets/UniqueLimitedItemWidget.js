// Estratto da HabboAirLauncher.deobf.js, riga 195914.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/UniqueLimitedItemWidget.as
// Nome offuscato: _ic177a6d1710e9c

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "UniqueLimitedItemWidget");
  }
  static SUPPLY_REFRESH_PERIOD_MS = 2e4;
  _r47717c33070d56 = null;
  var_1303 = null;
  _rc6398cd3bbdeff = null;
  dispose() {
    (this.disposed ||
      (this.var_1303?.stop(),
      this.var_1303?.removeEventListener?.(DeBouncer.addEventListener, this.onSupplyLeftTimer),
      this.window != null && (this.window.visible = !1),
      (this._catalog = null),
      (this._r47717c33070d56 = null),
      this._rc6398cd3bbdeff?.dispose(),
      (this._rc6398cd3bbdeff = null),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.const_1080, this._rce61fa4648e9ea)),
      (this.var_1303 = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    let r = this.window?.findChildByName("unique_item_overlay_container");
    return (
      (this._rc6398cd3bbdeff = r?.widget),
      this.window != null && (this.window.visible = !1),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.const_1080, this._rce61fa4648e9ea),
      (this.var_1303 = new _i05394ecc0c0c4d(a.SUPPLY_REFRESH_PERIOD_MS)),
      this.var_1303.addEventListener(DeBouncer.addEventListener, this.onSupplyLeftTimer),
      !0
    );
  }
  _rae8e17ddaeb413 = n((r) => {
    ((this._r47717c33070d56 = r.offer), this.update(r.offer, !0));
  }, "_rae8e17ddaeb413");
  _rce61fa4648e9ea = n((r) => {
    ((this._r47717c33070d56 = r.offer), this.update(r.offer));
  }, "_rce61fa4648e9ea");
  update(r, t = !1) {
    if (r.pricingModel === hn.PRICING_MODEL_SINGLE && r.product?._r651925293e1d0b) {
      (this._rc6398cd3bbdeff != null &&
        r.product != null &&
        ((this._rc6398cd3bbdeff.supplyLeft = r.product._r807decfd331c6c),
        (this._rc6398cd3bbdeff.seriesSize = r.product._raba7e4532bd54d)),
        this.window != null && (this.window.visible = !0),
        t && this._catalog?._r0d4b993beffea4(r.offerId),
        this.var_1303?.start());
      return;
    }
    (this.window != null && (this.window.visible = !1), this.var_1303?.stop());
  }
  onSupplyLeftTimer = n((r) => {
    this.window?.visible && this._r47717c33070d56 != null && this.update(this._r47717c33070d56, !0);
  }, "onSupplyLeftTimer");
}
