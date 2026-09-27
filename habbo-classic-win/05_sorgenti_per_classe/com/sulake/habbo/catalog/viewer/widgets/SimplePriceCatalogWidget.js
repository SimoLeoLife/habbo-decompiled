// Extracted from HabboAirLauncher.deobf.js, line 195020.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/SimplePriceCatalogWidget.as
// Obfuscated name: _i32f4678ea2cf3a

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "SimplePriceCatalogWidget");
  }
  _r20003195d951b6 = null;
  dispose() {
    this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      (this._catalog = null),
      (this._r20003195d951b6 = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? (this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413), !0)
      : !1;
  }
  _rae8e17ddaeb413 = n((r) => {
    let t = this._window?.findChildByName("fake_productimage") ?? null;
    this._catalog?.utils == null ||
      this._window == null ||
      (this._r20003195d951b6 = this._catalog.utils.showPriceOnProduct(
        r.offer,
        this._window,
        this._r20003195d951b6,
        t,
        0,
        !0,
        0,
      ));
  }, "_rae8e17ddaeb413");
}
