// Extracted from HabboAirLauncher.deobf.js, line 364150.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3994.as
// Obfuscated name: _ib98dd48963137f

class extends DefaultActionType {
  static {
    n(this, "class_3994");
  }
  var_2526 = null;
  var_1324 = null;
  get code() {
    return ActionTypeCodes.MUTE_USER;
  }
  readStringParamFromForm() {
    return this.var_2526.text;
  }
  readIntParamsFromForm() {
    return [this.var_1324.value];
  }
  onEditStart(e) {
    ((this.var_2526.text = e._r7e8836fc336e43),
      (this.var_1324.value = e.intParams[0] ?? 1));
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  validate() {
    if (this.var_2526.text.length > 100) {
      let r = "wiredfurni.chatmsgtoolong";
      return this._r41f5cc7d3516ce.localization.getLocalization(r, r);
    }
    return null;
  }
  buildInputs(e, r, t) {
    this.var_2526 = e._r178edc7e663bd7(new it("", 100));
    let i = e.createSection("${wiredfurni.params.message}", this.var_2526);
    ((this.var_1324 = e.createSliderSection(
      "wiredfurni.params.length.minutes",
      "minutes",
      SliderSection.CONVERTER_ECHO,
      0,
      10,
      1,
    )),
      (this.var_1324.value = 1),
      t.addElements(i, this.var_1324));
  }
}
