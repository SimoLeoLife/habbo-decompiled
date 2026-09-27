// Extracted from HabboAirLauncher.deobf.js, line 368272.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_4061.as
// Obfuscated name: _i82354248884481

class extends DefaultSelectorType {
  static {
    n(this, "class_4061");
  }
  var_3106 = null;
  get code() {
    return SelectorCodes.USERS_IN_TEAM;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_3106 = e.createRadioGroup(
      [
        new RadioButtonParam(0, this.l("team.any"), null, null, !0),
        new RadioButtonParam(1, this.l("team.1")),
        new RadioButtonParam(2, this.l("team.2")),
        new RadioButtonParam(3, this.l("team.3")),
        new RadioButtonParam(4, this.l("team.4")),
      ],
      null,
      2,
    );
    let i = e.createSection(this.l("team"), this.var_3106);
    t.addElements(i);
  }
  onEditStart(e) {
    this.var_3106.selected = e.intParams[0];
  }
  readIntParamsFromForm() {
    return [this.var_3106.selected];
  }
}
