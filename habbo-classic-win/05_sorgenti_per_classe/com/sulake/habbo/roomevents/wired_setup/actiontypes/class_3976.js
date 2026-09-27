// Extracted from HabboAirLauncher.deobf.js, line 362707.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3976.as
// Obfuscated name: _i8859a6b9e833b4

class extends DefaultActionType {
  static {
    n(this, "class_3976");
  }
  userSelectionTitle(e) {
    return e === 0 ? "wiredfurni.params.sources.users.title.bots" : super.userSelectionTitle(e);
  }
}
