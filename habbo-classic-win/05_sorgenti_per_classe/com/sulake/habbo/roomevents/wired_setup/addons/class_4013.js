// Extracted from HabboAirLauncher.deobf.js, line 360297.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4013.as
// Obfuscated name: _i5f286c3873b333

class extends DefaultAddonType {
  static {
    n(this, "class_4013");
  }
  var_3581 = null;
  var_3787 = null;
  get code() {
    return AddonCodes.var_5920;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3581 = e.createSliderSection(
      "wiredfurni.params.setexecutions",
      "amount",
      SliderSection.CONVERTER_ECHO,
      1,
      100,
      1,
      !1,
    )),
      (this.var_3787 = e.createSliderSection(
        "wiredfurni.params.settimewindow",
        "timewindow",
        new SliderValuePulses(),
        1,
        20,
        1,
        !1,
      )),
      t.addElements(this.var_3581, this.var_3787));
  }
  onEditStart(e) {
    ((this.var_3581.value = e.intParams[0] ?? 0),
      (this.var_3787.value = e.intParams[1] ?? 0));
  }
  readIntParamsFromForm() {
    return [this.var_3581.value, this.var_3787.value];
  }
}
