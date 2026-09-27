// Extracted from HabboAirLauncher.deobf.js, line 353833.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/levelupper/LinearLevelUpper.as
// Obfuscated name: _i4b3d4c68501bcd

class extends AbstractLevelUpConfig {
  constructor(r, t) {
    super();
    this.var_1513 = r;
    this.var_1730 = t;
  }
  static {
    n(this, "LinearLevelUpper");
  }
  get maxLevel() {
    return this.var_1730;
  }
  get maxXp() {
    return this.var_1730 * this.var_1513;
  }
  xpForLevel(r) {
    return r <= 1 ? 0 : this.var_1513 * (r - 1);
  }
  currentLevel(r) {
    return (
      (r = this.boundedValue(r)),
      r < 0 ? 1 : Math.min(this.var_1730, 1 + ((r / this.var_1513) | 0))
    );
  }
  totalXpRequired(r) {
    return this.isMaxed(r) ? 0 : this.var_1513;
  }
  progress(r) {
    return ((r = this.boundedValue(r)), this.isMaxed(r) ? 0 : r % this.var_1513);
  }
  progressPercentage(r) {
    return (
      (r = this.boundedValue(r)),
      this.isMaxed(r) ? 0 : ((this.progress(r) / this.var_1513) * 100) | 0
    );
  }
  xpRemaining(r) {
    return (
      (r = this.boundedValue(r)),
      this.isMaxed(r) ? 0 : this.var_1513 - (r % this.var_1513)
    );
  }
  isMaxed(r) {
    return this.currentLevel(r) >= this.var_1730;
  }
}
