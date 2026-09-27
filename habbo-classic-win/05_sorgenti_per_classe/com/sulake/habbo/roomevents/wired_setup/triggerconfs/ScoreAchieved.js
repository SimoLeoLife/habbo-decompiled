// Estratto da HabboAirLauncher.deobf.js, riga 368919.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/ScoreAchieved.as
// Nome offuscato: _ib3c460de01524f

class extends DefaultTriggerConf {
  static {
    n(this, "ScoreAchieved");
  }
  var_2508 = null;
  var_3106 = null;
  get code() {
    return TriggerConfCodes.SCORE_ACHIEVED;
  }
  readIntParamsFromForm() {
    return [this.var_2508.value, this.var_3106.selected];
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
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
      (this.var_2508 = e.createSliderSection(
        "wiredfurni.params.setscore2",
        "points",
        new class_4181(),
        1,
        1e3,
        1,
      )),
      (this.var_2508.value = 1),
      t.addElements(e.createSection(this.l("team"), this.var_3106), this.var_2508));
  }
  onEditStart(e) {
    ((this.var_2508.value = e.intParams[0]),
      (this.var_3106.selected = e.intParams[1]));
  }
}
