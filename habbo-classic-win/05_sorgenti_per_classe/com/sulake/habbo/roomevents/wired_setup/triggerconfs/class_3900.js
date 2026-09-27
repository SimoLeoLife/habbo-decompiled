// Extracted from HabboAirLauncher.deobf.js, line 369076.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_3900.as
// Obfuscated name: _id5f32242ddb3b9

class extends DefaultTriggerConf {
  static {
    n(this, "class_3900");
  }
  var_2811 = null;
  get code() {
    return TriggerConfCodes.TRIGGER_PERIODICALLY;
  }
  readIntParamsFromForm() {
    return [this.var_2811.value];
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2811 = e.createSliderSection("wiredfurni.params.settime3", "", new SliderValuePulses(), 1, 120, 1)),
      (this.var_2811.value = 1),
      t.addElements(this.var_2811));
  }
  onEditStart(e) {
    this.var_2811.value = e.intParams[0];
  }
}
