// Extracted from HabboAirLauncher.deobf.js, line 368735.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/ClockReachTime.as
// Obfuscated name: _i65872c91f1ba0b

class extends DefaultTriggerConf {
  static {
    n(this, "ClockReachTime");
  }
  var_3887 = null;
  _sliderMinutes = null;
  get code() {
    return TriggerConfCodes.CLOCK_REACH_TIME;
  }
  readIntParamsFromForm() {
    let e = this.var_3887.value,
      r = Math.floor(e / 2),
      t = e % 2;
    return [r, this._sliderMinutes.value, t];
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3887 = e.createSliderSection(
      "wiredfurni.params.clock_seconds_elapsed",
      "seconds",
      new SliderValuePulses(),
      0,
      119,
      1,
      !1,
    )),
      (this._sliderMinutes = e.createSliderSection(
        "wiredfurni.params.clock_minutes_elapsed",
        "minutes",
        new class_4181(),
        0,
        99,
        1,
        !1,
      )),
      t.addElements(this._sliderMinutes, this.var_3887));
  }
  onEditStart(e) {
    let r = e.intParams[0],
      t = e.intParams[1],
      i = e.intParams[2];
    ((this.var_3887.value = r * 2 + i), (this._sliderMinutes.value = t));
  }
}
