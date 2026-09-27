// Extracted from HabboAirLauncher.deobf.js, line 365931.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4258.as
// Obfuscated name: _ibd19bd655cf51d

class extends DefaultConditionType {
  static {
    n(this, "class_4258");
  }
  get code() {
    return ConditionCodes.TRIGGERER_IS_ON_FURNI;
  }
  get negativeCode() {
    return ConditionCodes.NOT_TRIGGERER_IS_ON_FURNI;
  }
}
