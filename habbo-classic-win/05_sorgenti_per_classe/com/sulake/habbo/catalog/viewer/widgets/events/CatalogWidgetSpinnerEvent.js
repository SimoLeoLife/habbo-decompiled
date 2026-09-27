// Extracted from HabboAirLauncher.deobf.js, line 144607.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetSpinnerEvent.as
// Obfuscated name: _i40ea7a3aa53cbd

class extends M {
  constructor(r, t = 1, i = null) {
    super(r);
    this._value = t;
    this.var_2741 = i;
  }
  static {
    n(this, "CatalogWidgetSpinnerEvent");
  }
  static VALUE_CHANGED = "CWSE_VALUE_CHANGED";
  static RESET = "CWSE_RESET";
  static SHOW = "CWSE_SHOW";
  static HIDE = "CWSE_HIDE";
  static const_735 = "CWSE_SET_MAX";
  static SET_MIN = "CWSE_SET_MIN";
  get value() {
    return this._value;
  }
  get skipSteps() {
    return this.var_2741;
  }
}
