// Extracted from HabboAirLauncher.deobf.js, line 363992.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4112.as
// Obfuscated name: _i67f59177d8d89d

class extends DefaultActionType {
  static {
    n(this, "class_4112");
  }
  get code() {
    return ActionTypeCodes.MOVE_FURNI_TO_FURNI;
  }
  furniSelectionTitle(e) {
    return `wiredfurni.params.sources.furni.title.mv.${e}`;
  }
  advancedAlwaysVisible() {
    return !0;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
}
