// Extracted from HabboAirLauncher.deobf.js, line 366960.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4042.as
// Obfuscated name: _ibd2930912061d9

class extends DefaultConditionType {
  static {
    n(this, "class_4042");
  }
  var_2811 = null;
  get code() {
    return ConditionCodes.TIME_ELAPSED_LESS;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2811 = e.createSliderSection(
      "wiredfurni.params.allowbefore2",
      "",
      SliderSection.CONVERTER_PULSES,
      1,
      1200,
      1,
    )),
      (this.var_2811.value = 1),
      t.addElements(this.var_2811));
  }
  onEditStart(e) {
    this.var_2811.value = e.intParams[0] - 1;
  }
  readIntParamsFromForm() {
    return [this.var_2811.value + 1];
  }
}
