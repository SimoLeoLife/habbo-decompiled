// Estratto da HabboAirLauncher.deobf.js, riga 366629.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/HasStackedFurnis.as
// Nome offuscato: _i6f5db4eff2cabc

class extends DefaultConditionType {
  static {
    n(this, "HasStackedFurnis");
  }
  var_3131 = null;
  get code() {
    return ConditionCodes.HAS_STACKED_FURNIS;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3131 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("requireall.0")),
      new RadioButtonParam(1, this.l("requireall.1")),
    ])),
      t.addElements(e.createSection(this.l("requireall"), this.var_3131)));
  }
  onEditStart(e) {
    this.var_3131.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_3131.selected];
  }
}
