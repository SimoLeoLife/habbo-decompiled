// Extracted from HabboAirLauncher.deobf.js, line 144595.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetShowWarningTextEvent.as
// Obfuscated name: _ic8c9a5fb2eb6ca

class extends UnkClass_c4d6c8 {
  constructor(r, t = !1, i = !1) {
    super(CatalogWidgetEventEnum.SHOW_WARNING_TEXT, t, i);
    this._text = r;
  }
  static {
    n(this, "CatalogWidgetShowWarningTextEvent");
  }
  get text() {
    return this._text;
  }
}
