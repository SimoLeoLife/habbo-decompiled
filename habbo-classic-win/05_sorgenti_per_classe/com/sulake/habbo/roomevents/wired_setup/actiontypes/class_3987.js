// Extracted from HabboAirLauncher.deobf.js, line 363633.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3987.as
// Obfuscated name: _i7160f72a3b5dc8

class extends nY {
  static {
    n(this, "class_3987");
  }
  var_3106 = null;
  get code() {
    return ActionTypeCodes.GIVE_SCORE_TO_PREDEFINED_TEAM;
  }
  buildInputs(e, r, t) {
    (super.buildInputs(e, r, t),
      (this.var_3106 = e.createRadioGroup(
        [
          new RadioButtonParam(1, this.l("team.1")),
          new RadioButtonParam(2, this.l("team.2")),
          new RadioButtonParam(3, this.l("team.3")),
          new RadioButtonParam(4, this.l("team.4")),
        ],
        null,
        2,
      )),
      t.addElements(e.createSection(this.l("team"), this.var_3106)));
  }
  onEditStart(e) {
    (super.onEditStart(e), (this.var_3106.selected = e.intParams[2] ?? 1));
  }
  readIntParamsFromForm() {
    let e = super.readIntParamsFromForm();
    return (e.push(this.var_3106.selected), e);
  }
}
