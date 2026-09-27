// Estratto da HabboAirLauncher.deobf.js, riga 188440.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetBundleDisplayExtraInfoEvent.as
// Nome offuscato: _i160989254bb93c

class extends M {
  constructor(r, t = null, i = -1) {
    super(r);
    this._data = t;
    this._id = i;
  }
  static {
    n(this, "CatalogWidgetBundleDisplayExtraInfoEvent");
  }
  static RESET = "CWPPEIE_RESET";
  static HIDE = "CWPPEIE_HIDE";
  static ITEM_CLICKED = "CWPPEIE_ITEM_CLICKED";
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
}
