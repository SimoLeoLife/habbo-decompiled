// Extracted from HabboAirLauncher.deobf.js, line 366284.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/ClockTimeMatches.as
// Obfuscated name: _i3cd7f33a85b073

class extends DefaultConditionType {
  static {
    n(this, "ClockTimeMatches");
  }
  var_3205 = null;
  var_3783 = null;
  var_3140 = null;
  get code() {
    return ConditionCodes.CLOCK_TIME_MATCHES;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3205 = e.createSliderSection(
      "wiredfurni.params.clock_seconds_elapsed",
      "seconds",
      new SliderValuePulses(),
      0,
      119,
      1,
      !1,
    )),
      (this.var_3783 = e.createSliderSection(
        "wiredfurni.params.clock_minutes_elapsed",
        "minutes",
        new class_4181(),
        0,
        99,
        1,
        !1,
      )),
      (this.var_3140 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("comparison.0")),
        new RadioButtonParam(1, this.l("comparison.1")),
        new RadioButtonParam(2, this.l("comparison.2")),
      ])),
      t.addElements(
        e.createSection(this.l("comparison_selection"), this.var_3140),
        this.var_3783,
        this.var_3205,
      ));
  }
  onEditStart(e) {
    let r = e.intParams[0],
      t = e.intParams[1],
      i = e.intParams[2];
    ((this.var_3205.value = r * 2 + i),
      (this.var_3783.value = t),
      (this.var_3140.selected = e.intParams[3]));
  }
  readIntParamsFromForm() {
    let e = this.var_3205.value,
      r = Math.floor(e / 2),
      t = e % 2;
    return [r, this.var_3783.value, t, this.var_3140.selected];
  }
}
