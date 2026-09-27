// Estratto da HabboAirLauncher.deobf.js, riga 189201.

class extends CatalogWidget {
  static {
    n(this, "_ia904a4c6661ba7");
  }
  constructor(e) {
    super(e);
  }
  init() {
    return super.init()
      ? (this.events?.addEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933), !0)
      : !1;
  }
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.WIDGETS_INITIALIZED, this._rd886c8bcbe0933), super.dispose());
  }
  _rd886c8bcbe0933 = n((e) => {
    (this.page?.offers.length ?? 0) === 0 ||
      this.page == null ||
      this.events?.dispatchEvent?.(new _idfee6137b0eb86(this.page.offers[0]));
  }, "_rd886c8bcbe0933");
}
