// Estratto da HabboAirLauncher.deobf.js, riga 366268.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/chests/class_4118.as
// Nome offuscato: _ia588d27ab32e78

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
