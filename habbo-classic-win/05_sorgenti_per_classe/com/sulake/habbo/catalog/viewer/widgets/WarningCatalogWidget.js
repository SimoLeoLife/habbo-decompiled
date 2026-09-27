// Extracted from HabboAirLauncher.deobf.js, line 196265.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/WarningCatalogWidget.as
// Obfuscated name: _i8cce99c0f76e73

class extends CatalogWidget {
  static {
    n(this, "WarningCatalogWidget");
  }
  constructor(e) {
    super(e);
  }
  init() {
    if (!super.init()) return !1;
    let e = this._window?.findChildByName("warning_text");
    return (
      e != null && (e.caption = ""),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SHOW_WARNING_TEXT, this._r835b9b593dbee6),
      !0
    );
  }
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SHOW_WARNING_TEXT, this._r835b9b593dbee6), super.dispose());
  }
  _r835b9b593dbee6 = n((e) => {
    let r = this._window?.findChildByName("warning_text");
    r != null && (r.caption = e.text);
  }, "_r835b9b593dbee6");
}
