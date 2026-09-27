// Extracted from HabboAirLauncher.deobf.js, line 364114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3875.as
// Obfuscated name: _i4c2271805b682a

class extends DefaultActionType {
  static {
    n(this, "class_3875");
  }
  var_2870 = null;
  get code() {
    return ActionTypeCodes.MOVE_USER_TO_FURNI;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2870 = e.createRadioGroup([
      new RadioButtonParam(0, this.l("user_move.walkmode.0")),
      new RadioButtonParam(1, this.l("user_move.walkmode.1")),
      new RadioButtonParam(2, this.l("user_move.walkmode.2")),
    ])),
      (this.var_2870.selected = 0),
      t.addElements(e.createSection(this.l("user_move.walkmode"), this.var_2870)));
  }
  onEditStart(e) {
    this.var_2870.selected = e.intParams[0] ?? 0;
  }
  readIntParamsFromForm() {
    return [this.var_2870.selected];
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.mv.1";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.mv_user2";
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
