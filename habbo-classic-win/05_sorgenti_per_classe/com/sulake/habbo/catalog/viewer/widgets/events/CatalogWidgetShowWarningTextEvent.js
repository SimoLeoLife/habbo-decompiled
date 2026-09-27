// Estratto da HabboAirLauncher.deobf.js, riga 144595.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetShowWarningTextEvent.as
// Nome offuscato: _ic8c9a5fb2eb6ca

class extends _ic4d6c8d627ab4e {
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
