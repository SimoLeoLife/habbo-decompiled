// Estratto da HabboAirLauncher.deobf.js, riga 264216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementCategory.as

class {
  constructor(e) {
    this._code = e;
  }
  static {
    n(this, "AchievementCategory");
  }
  var_1625 = [];
  add(e) {
    this.var_1625.push(e);
  }
  update(e) {
    for (let r = 0; r < this.var_1625.length; r++)
      this.var_1625[r]?.achievementId === e.achievementId && (this.var_1625[r] = e);
  }
  _r229b578b87b7b8() {
    let e = 0;
    for (let r of this.var_1625) e += r._r48f0df39b9bc8e ? r.level : r.level - 1;
    return e;
  }
  _r6950137b2e3b19() {
    let e = 0;
    for (let r of this.var_1625) e += r._rafd3119a0313c2;
    return e;
  }
  get code() {
    return this._code;
  }
  get achievements() {
    return this.var_1625;
  }
  _r0bde5cd7a4e3dd() {
    return this._code !== tg.ACHIEVEMENT_CATEGORY_NEW && this._code !== tg.ACHIEVEMENT_CATEGORY_WIRED_GAMES;
  }
}
