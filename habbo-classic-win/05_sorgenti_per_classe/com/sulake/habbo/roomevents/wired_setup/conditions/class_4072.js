// Extracted from HabboAirLauncher.deobf.js, line 366913.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4072.as
// Obfuscated name: _i47042946d9b804

class extends DefaultConditionType {
  static {
    n(this, "class_4072");
  }
  var_3106 = null;
  var_3706 = null;
  get code() {
    return ConditionCodes.TEAM_IS_WINNING;
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
      (this.var_3706 = e.createRadioGroup(
        [
          new RadioButtonParam(0, this.l("placement.1")),
          new RadioButtonParam(1, this.l("placement.2")),
          new RadioButtonParam(2, this.l("placement.3")),
          new RadioButtonParam(3, this.l("placement.4")),
        ],
        null,
        4,
      )),
      t.addElements(
        e.createSection(this.l("team"), this.var_3106),
        e.createSection(this.l("placement_selection"), this.var_3706),
      ));
  }
  onEditStart(e) {
    ((this.var_3106.selected = e.intParams[0]),
      (this.var_3706.selected = e.intParams[1]));
  }
  readIntParamsFromForm() {
    return [this.var_3106.selected, this.var_3706.selected];
  }
}
