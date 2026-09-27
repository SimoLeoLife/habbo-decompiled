// Extracted from HabboAirLauncher.deobf.js, line 364679.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4256.as
// Obfuscated name: _i75dbe8c28e5601

class a extends DefaultActionType {
  static {
    n(this, "class_4256");
  }
  static const_387 = "^	";
  var_3072;
  get code() {
    return ActionTypeCodes.RESET_REWARD_TRACK;
  }
  get inputMode() {
    return So.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3072 = e.createNamedTextInput(
      new it("", 100, null, -1, a.const_387),
      "${wiredfurni.params.reward_track.track_id}",
    )),
      t.addElements(
        e.createSection("${wiredfurni.params.reward_track.reset.track}", this.var_3072),
      ));
  }
  readStringParamFromForm() {
    return this.var_3072.text;
  }
  onEditStart(e) {
    this.var_3072.text = e._r7e8836fc336e43;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
