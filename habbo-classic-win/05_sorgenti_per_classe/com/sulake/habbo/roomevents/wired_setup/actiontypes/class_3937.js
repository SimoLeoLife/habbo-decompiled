// Extracted from HabboAirLauncher.deobf.js, line 364009.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3937.as
// Obfuscated name: _i68988647c8a33d

class extends DefaultActionType {
  static {
    n(this, "class_3937");
  }
  get code() {
    return ActionTypeCodes.MOVE_FURNI_TO_USER;
  }
  furniSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.mv.0";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.furni.title.mv_user";
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
