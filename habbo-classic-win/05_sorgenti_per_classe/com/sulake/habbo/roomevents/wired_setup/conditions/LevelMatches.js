// Extracted from HabboAirLauncher.deobf.js, line 366767.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/LevelMatches.as
// Obfuscated name: _i0d0f466958d744

class extends DefaultConditionType {
  static {
    n(this, "LevelMatches");
  }
  var_2674 = null;
  var_3140 = null;
  get code() {
    return ConditionCodes.USER_LEVEL;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2674 = e.createSliderSection(
      "wiredfurni.params.level_selection",
      "level",
      new class_4181(),
      1,
      30,
      1,
    )),
      (this.var_2674.value = 1),
      (this.var_3140 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("comparison.0")),
        new RadioButtonParam(1, this.l("comparison.1")),
        new RadioButtonParam(2, this.l("comparison.2")),
      ])),
      t.addElements(
        this.var_2674,
        e.createSection(this.l("comparison_selection"), this.var_3140),
      ));
  }
  onEditStart(e) {
    ((this.var_2674.value = e.intParams[0]),
      (this.var_3140.selected = e.intParams[1]));
  }
  readIntParamsFromForm() {
    return [this.var_2674.value, this.var_3140.selected];
  }
}
