// Extracted from HabboAirLauncher.deobf.js, line 369116.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_4211.as
// Obfuscated name: _i3fb382f3a060d4

class extends class_3900 {
  static {
    n(this, "class_4211");
  }
  get code() {
    return TriggerConfCodes.PERIODIC_LONG;
  }
  readIntParamsFromForm() {
    return [this.var_2811.value];
  }
  get inputMode() {
    return class_3900.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2811 = e.createSliderSection("wiredfurni.params.settime3", "", new SliderValueSeconds5(), 1, 120, 1)),
      (this.var_2811.value = 1),
      t.addElements(this.var_2811));
  }
  onEditStart(e) {
    this.var_2811.value = e.intParams[0];
  }
}
