// Extracted from HabboAirLauncher.deobf.js, line 367916.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/FurniWithAltitude.as
// Obfuscated name: _i327193416281a9

class extends DefaultSelectorType {
  static {
    n(this, "FurniWithAltitude");
  }
  var_2874 = null;
  var_3140 = null;
  get code() {
    return SelectorCodes.FURNI_WITH_ALTITUDE;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2874 = e.createSliderSection(
      "wiredfurni.params.setaltitude",
      "altitude",
      new SliderValueHundredth(),
      0,
      8e3,
      1,
    )),
      (this.var_2874.value = 0),
      (this.var_3140 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("comparison.0")),
        new RadioButtonParam(1, this.l("comparison.1")),
        new RadioButtonParam(2, this.l("comparison.2")),
      ])),
      t.addElements(
        e.createSection(this.l("comparison_selection"), this.var_3140),
        this.var_2874,
      ));
  }
  onEditStart(e) {
    ((this.var_2874.value = e.intParams[0]),
      (this.var_3140.selected = e.intParams[1]));
  }
  readIntParamsFromForm() {
    return [this.var_2874.value, this.var_3140.selected];
  }
}
