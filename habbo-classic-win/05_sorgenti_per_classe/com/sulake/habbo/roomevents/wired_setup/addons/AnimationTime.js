// Extracted from HabboAirLauncher.deobf.js, line 360178.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/AnimationTime.as
// Obfuscated name: _ifc8bde7cbd8eac

class extends DefaultAddonType {
  static {
    n(this, "AnimationTime");
  }
  var_1324 = null;
  get code() {
    return AddonCodes.ANIMATION_TIME;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1324 = e.createSliderSection(
      "wiredfurni.params.setanimationtime2",
      "",
      SliderSection.CONVERTER_ECHO,
      50,
      2e3,
      50,
    )),
      t.addElements(this.var_1324));
  }
  onEditStart(e) {
    this.var_1324.value = e.intParams[0] ?? 0;
  }
  readIntParamsFromForm() {
    return [this.var_1324.value];
  }
}
