// Extracted from HabboAirLauncher.deobf.js, line 194999.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6f8f8f178369b3

class extends Om {
  static {
    n(this, "UnkClass_6f8f8f");
  }
  constructor(e, r) {
    super(e, r);
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
