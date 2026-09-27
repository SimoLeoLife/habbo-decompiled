// Extracted from HabboAirLauncher.deobf.js, line 366842.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/StuffTypeMatches.as
// Obfuscated name: _i694b9b32b55be6

class extends DefaultConditionType {
  static {
    n(this, "StuffTypeMatches");
  }
  get code() {
    return ConditionCodes.STUFF_TYPE_MATCHES;
  }
  get negativeCode() {
    return ConditionCodes.NOT_STUFF_TYPE_MATCHES;
  }
  furniSelectionTitle(e) {
    return `wiredfurni.params.sources.furni.title.match.${e}`;
  }
  advancedAlwaysVisible() {
    return !0;
  }
}
