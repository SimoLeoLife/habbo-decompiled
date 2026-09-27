// Estratto da HabboAirLauncher.deobf.js, riga 365896.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_3962.as
// Nome offuscato: _i2aca40e25c6683

class extends DefaultConditionType {
  static {
    n(this, "class_3962");
  }
  var_3106 = null;
  get code() {
    return ConditionCodes.ACTOR_IS_IN_TEAM;
  }
  get negativeCode() {
    return ConditionCodes.NOT_ACTOR_IS_IN_TEAM;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3106 = e.createRadioGroup(
      [
        new RadioButtonParam(0, this.l("team.any"), null, null, !0),
        new RadioButtonParam(1, this.l("team.1")),
        new RadioButtonParam(2, this.l("team.2")),
        new RadioButtonParam(3, this.l("team.3")),
        new RadioButtonParam(4, this.l("team.4")),
      ],
      null,
      2,
    )),
      t.addElements(e.createSection(this.l("team"), this.var_3106)));
  }
  onEditStart(e) {
    this.var_3106.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_3106.selected];
  }
}
