// Extracted from HabboAirLauncher.deobf.js, line 189201.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia904a4c6661ba7

class extends CatalogWidget {
  static {
    n(this, "UnkCatalogWidgetSubclass_a904a4");
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
      this.events?.dispatchEvent?.(new UnkClass_dfee61(this.page.offers[0]));
  }, "_rd886c8bcbe0933");
}
