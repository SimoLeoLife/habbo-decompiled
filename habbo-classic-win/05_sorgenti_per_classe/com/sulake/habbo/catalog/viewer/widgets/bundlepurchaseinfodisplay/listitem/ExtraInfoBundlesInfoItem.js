// Estratto da HabboAirLauncher.deobf.js, riga 188644.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/listitem/ExtraInfoBundlesInfoItem.as
// Nome offuscato: _iaeaf9985589af5

class extends bo {
  constructor(r, t, i, s) {
    super(r, t, i, bo.ALIGN_OVERLAY, !0);
    this._catalog = s;
  }
  static {
    n(this, "ExtraInfoBundlesInfoItem");
  }
  _window = null;
  _rda4cde3b8bef4b() {
    return (
      this._window == null &&
        ((this._window = this._catalog.utils.createWindow("bundlesInfoItem")),
        this._window != null && (this._window.procedure = this.windowProcedure)),
      this._window
    );
  }
  windowProcedure = n((r, t) => {
    r.type === u.CLICK &&
      this.var_17?.events?.dispatchEvent?.(new CatalogWidgetBundleDisplayExtraInfoEvent(CatalogWidgetBundleDisplayExtraInfoEvent.ITEM_CLICKED, this.data, this.id));
  }, "windowProcedure");
}
