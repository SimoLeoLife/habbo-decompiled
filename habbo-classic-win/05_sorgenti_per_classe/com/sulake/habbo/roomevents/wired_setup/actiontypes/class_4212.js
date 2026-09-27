// Extracted from HabboAirLauncher.deobf.js, line 363752.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4212.as
// Obfuscated name: _i789fae52d3ad06

class extends DefaultActionType {
  static {
    n(this, "class_4212");
  }
  var_3106 = null;
  var_2960 = null;
  get code() {
    return ActionTypeCodes.JOIN_TEAM;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this.var_3106 = e.createRadioGroup(
      [
        new RadioButtonParam(1, this.l("team.1")),
        new RadioButtonParam(2, this.l("team.2")),
        new RadioButtonParam(3, this.l("team.3")),
        new RadioButtonParam(4, this.l("team.4")),
      ],
      null,
      2,
    );
    let i = e.createSection(this.l("team"), this.var_3106);
    this.var_2960 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("team_type.0")),
      new RadioButtonParam(1, this.l("team_type.1")),
      new RadioButtonParam(2, this.l("team_type.2")),
    ]);
    let s = e.createSection(this.l("choose_type"), this.var_2960);
    t.addElements(i, s);
  }
  onEditStart(e) {
    ((this.var_3106.selected = e.intParams[0] ?? 1),
      (this.var_2960.selected = e.intParams[1] ?? 0));
  }
  readIntParamsFromForm() {
    return [this.var_3106.selected, this.var_2960.selected];
  }
}
