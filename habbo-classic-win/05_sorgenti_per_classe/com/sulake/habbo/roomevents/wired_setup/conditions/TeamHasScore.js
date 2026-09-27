// Extracted from HabboAirLauncher.deobf.js, line 366859.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/TeamHasScore.as
// Obfuscated name: _i1d921306cbeb3f

class extends DefaultConditionType {
  static {
    n(this, "TeamHasScore");
  }
  var_3106 = null;
  var_3140 = null;
  var_2508 = null;
  get code() {
    return ConditionCodes.TEAM_HAS_SCORE;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3106 = e.createRadioGroup(
      [
        new RadioButtonParam(0, this.l("team.triggerer"), null, null, !0),
        new RadioButtonParam(1, this.l("team.1")),
        new RadioButtonParam(2, this.l("team.2")),
        new RadioButtonParam(3, this.l("team.3")),
        new RadioButtonParam(4, this.l("team.4")),
      ],
      null,
      2,
    )),
      (this.var_3140 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("comparison.0")),
        new RadioButtonParam(1, this.l("comparison.1")),
        new RadioButtonParam(2, this.l("comparison.2")),
      ])),
      (this.var_2508 = e.createSliderSection(
        "wiredfurni.params.setscore2",
        "points",
        new class_4181(),
        0,
        1e3,
        1,
      )),
      (this.var_2508.value = 1),
      t.addElements(
        e.createSection(this.l("team"), this.var_3106),
        e.createSection(this.l("comparison_selection"), this.var_3140),
        this.var_2508,
      ));
  }
  onEditStart(e) {
    ((this.var_3106.selected = e.intParams[0]),
      (this.var_2508.value = e.intParams[1]),
      (this.var_3140.selected = e.intParams[2]));
  }
  readIntParamsFromForm() {
    return [this.var_3106.selected, this.var_2508.value, this.var_3140.selected];
  }
}
