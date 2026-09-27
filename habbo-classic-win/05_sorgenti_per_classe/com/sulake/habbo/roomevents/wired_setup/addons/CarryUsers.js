// Extracted from HabboAirLauncher.deobf.js, line 360207.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/CarryUsers.as
// Obfuscated name: _if63f0b9622d075

class extends DefaultAddonType {
  static {
    n(this, "CarryUsers");
  }
  carryUsersMode = null;
  get code() {
    return AddonCodes.CARRY_USERS;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [
        new RadioButtonParam(0, this.loc("wiredfurni.params.carry_mode.0")),
        new RadioButtonParam(1, this.loc("wiredfurni.params.carry_mode.1")),
      ],
      s = e.createRadioGroup(i),
      o = e.createSection(this.loc("wiredfurni.params.carry_mode"), s);
    (t.addElements(o), (this.carryUsersMode = s));
  }
  readIntParamsFromForm() {
    return [this.carryUsersMode.selected];
  }
  onEditStart(e) {
    this.carryUsersMode.selected = e.intParams[0] ?? 0;
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title.carry";
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
