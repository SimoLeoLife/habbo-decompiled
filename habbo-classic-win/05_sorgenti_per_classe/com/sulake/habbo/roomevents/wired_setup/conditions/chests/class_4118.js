// Extracted from HabboAirLauncher.deobf.js, line 366268.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/chests/class_4118.as
// Obfuscated name: _ia588d27ab32e78

class extends ChestHasAmount {
  static {
    n(this, "class_4118");
  }
  get code() {
    return ConditionCodes.CHEST_HAS_ITEM_TYPES;
  }
  furniSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.furni.title.item_types"
      : "wiredfurni.params.sources.furni.title.chests";
  }
  mergedSelections() {
    return [[2, 0]];
  }
}
