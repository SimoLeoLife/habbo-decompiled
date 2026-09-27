// Estratto da HabboAirLauncher.deobf.js, riga 361279.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/levelupper/ExponentialLevelUpper.as
// Nome offuscato: _i62b37be5b0966a

class extends AbstractLevelUpConfig {
  constructor(r, t, i) {
    super();
    this.var_4285 = r;
    this.var_1730 = i;
    ((this._strength = t / 100), (this.var_4040 = this.xpForLevel(this.var_1730)));
  }
  static {
    n(this, "ExponentialLevelUpper");
  }
  _strength;
  var_4040;
  get maxLevel() {
    return this.var_1730;
  }
  get maxXp() {
    return this.var_4040;
  }
  xpForLevel(r) {
    return r < 1
      ? 0
      : r > this.var_1730
        ? this.var_4040
        : (this.var_4285 * ((Math.pow(1 + this._strength, r - 1) - 1 + 1e-9) / this._strength)) | 0;
  }
  currentLevel(r) {
    if (((r = this.boundedValue(r)), r <= 0)) return 1;
    let t = 1 + this._strength,
      i = ((Math.log((r * this._strength) / this.var_4285 + 1) / Math.log(t)) | 0) + 1;
    return i > this.var_1730
      ? this.var_1730
      : i < 1
        ? 1
        : r < this.xpForLevel(i)
          ? Math.max(1, i - 1)
          : r >= this.xpForLevel(i + 1)
            ? Math.min(this.var_1730, i + 1)
            : i;
  }
  totalXpRequired(r) {
    if (((r = this.boundedValue(r)), this.isMaxed(r))) return 0;
    let t = this.currentLevel(r);
    return this.xpForLevel(t + 1) - this.xpForLevel(t);
  }
  progress(r) {
    return ((r = this.boundedValue(r)), this.isMaxed(r) ? 0 : r - this.xpForLevel(this.currentLevel(r)));
  }
  progressPercentage(r) {
    if (((r = this.boundedValue(r)), this.isMaxed(r))) return 0;
    let t = this.currentLevel(r),
      i = this.xpForLevel(t),
      s = this.xpForLevel(t + 1),
      o = r - i;
    return i === s ? 100 : ((o / (s - i)) * 100) | 0;
  }
  xpRemaining(r) {
    return (
      (r = this.boundedValue(r)),
      this.isMaxed(r) ? 0 : this.xpForLevel(this.currentLevel(r) + 1) - r
    );
  }
  isMaxed(r) {
    return ((r = this.boundedValue(r)), this.currentLevel(r) >= this.var_1730);
  }
}
