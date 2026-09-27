// Extracted from HabboAirLauncher.deobf.js, line 353795.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/levelupper/AbstractLevelUpConfig.as
// Obfuscated name: _i424e917c37d0d2

class {
  static {
    n(this, "AbstractLevelUpConfig");
  }
  get maxLevel() {
    return this.abstractMethod("maxLevel");
  }
  get maxXp() {
    return this.abstractMethod("maxXp");
  }
  xpForLevel(e) {
    return this.abstractMethod("xpForLevel");
  }
  currentLevel(e) {
    return this.abstractMethod("currentLevel");
  }
  totalXpRequired(e) {
    return this.abstractMethod("totalXpRequired");
  }
  progress(e) {
    return this.abstractMethod("progress");
  }
  progressPercentage(e) {
    return this.abstractMethod("progressPercentage");
  }
  xpRemaining(e) {
    return this.abstractMethod("xpRemaining");
  }
  isMaxed(e) {
    return this.abstractMethod("isMaxed");
  }
  boundedValue(e) {
    return e < 0 ? 0 : Math.min(e, this.maxXp);
  }
  abstractMethod(e) {
    throw new Error(`AbstractLevelUpConfig.${e} must be implemented by a subclass.`);
  }
}
