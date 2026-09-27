// Extracted from HabboAirLauncher.deobf.js, line 363277.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3911.as
// Obfuscated name: _i129df422c6ef16

class extends DefaultActionType {
  static {
    n(this, "class_3911");
  }
  var_2491 = null;
  get code() {
    return ActionTypeCodes.CONTROL_CLOCK;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2491 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("clock_control.0")),
      new RadioButtonParam(1, this.l("clock_control.1")),
      new RadioButtonParam(2, this.l("clock_control.2")),
      new RadioButtonParam(3, this.l("clock_control.3")),
      new RadioButtonParam(4, this.l("clock_control.4")),
    ])),
      (this.var_2491.selected = 0),
      t.addElements(e.createSection(this.l("clock_control"), this.var_2491)));
  }
  onEditStart(e) {
    this.var_2491.selected = e.intParams[0] ?? 0;
  }
  readIntParamsFromForm() {
    return [this.var_2491.selected];
  }
}
