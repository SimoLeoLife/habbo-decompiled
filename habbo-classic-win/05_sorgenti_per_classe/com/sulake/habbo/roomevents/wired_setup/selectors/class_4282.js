// Extracted from HabboAirLauncher.deobf.js, line 368167.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_4282.as
// Obfuscated name: _i320f1a20f8ab34

class extends DefaultSelectorType {
  static {
    n(this, "class_4282");
  }
  var_2841 = null;
  get code() {
    return SelectorCodes.USERS_BY_TYPE;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2841 = e.createRadioGroup([
      new RadioButtonParam(1, this.l("usertype.1")),
      new RadioButtonParam(2, this.l("usertype.2")),
      new RadioButtonParam(4, this.l("usertype.4")),
    ])),
      (this.var_2841.selected = 1));
    let i = e.createSection(this.l("usertype"), this.var_2841);
    t.addElements(i);
  }
  onEditStart(e) {
    this.var_2841.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_2841.selected];
  }
}
