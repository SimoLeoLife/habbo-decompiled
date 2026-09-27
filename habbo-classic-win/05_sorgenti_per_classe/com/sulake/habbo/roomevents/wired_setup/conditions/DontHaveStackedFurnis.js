// Extracted from HabboAirLauncher.deobf.js, line 366523.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/DontHaveStackedFurnis.as
// Obfuscated name: _ie18681b2065aca

class extends DefaultConditionType {
  static {
    n(this, "DontHaveStackedFurnis");
  }
  var_3131 = null;
  get code() {
    return ConditionCodes.NOT_HAS_STACKED_FURNIS;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3131 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("not_requireall.0")),
      new RadioButtonParam(1, this.l("not_requireall.1")),
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
