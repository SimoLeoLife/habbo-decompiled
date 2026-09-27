// Estratto da HabboAirLauncher.deobf.js, riga 144693.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/SetExtraPurchaseParameterEvent.as
// Nome offuscato: _i5e4b84a807e641

class extends _ic4d6c8d627ab4e {
  constructor(r, t = !1, i = !1) {
    super(CatalogWidgetEventEnum.SET_EXTRA_PARAMETER, t, i);
    this.var_2471 = r;
  }
  static {
    n(this, "SetExtraPurchaseParameterEvent");
  }
  get parameter() {
    return this.var_2471;
  }
}
