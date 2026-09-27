// Estratto da HabboAirLauncher.deobf.js, riga 264251.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/AchievementCategories.as
// Nome offuscato: _i11dd5c1c79640b

class a {
  constructor(e, r) {
    this._questEngine = r;
    let t = null,
      i = new AchievementCategory(a.ACHIEVEMENT_CATEGORY_ARCHIVED);
    this._ra818aeb4302522.set(a.ACHIEVEMENT_CATEGORY_ARCHIVED, i);
    let s = new AchievementCategory(a.ACHIEVEMENT_CATEGORY_WIRED_GAMES);
    this._ra818aeb4302522.set(a.ACHIEVEMENT_CATEGORY_WIRED_GAMES, s);
    let o = [],
      d = this.getNewAchievementCodes();
    for (let c of e) {
      if (c.category === "" || (c.state === a.ACHIEVEMENT_CONTROL_BY_WIRED && c.category !== a.ACHIEVEMENT_CATEGORY_WIRED_GAMES))
        continue;
      let f =
        c.state === a.ACHIEVEMENT_ARCHIVED
          ? (this._ra818aeb4302522.get(a.ACHIEVEMENT_CATEGORY_ARCHIVED) ?? null)
          : (this._ra818aeb4302522.get(c.category) ?? null);
      (f == null &&
        ((f = new AchievementCategory(c.category)),
        this._ra818aeb4302522.set(c.category, f),
        c.category !== "misc" ? this.var_986.push(f) : (t = f)),
        f.add(c),
        this.achievementIsNew(d, c) && o.push(c));
    }
    if (
      (t != null && this.var_986.push(t),
      this.var_986.push(i),
      this.var_986.push(s),
      o.length > 0)
    ) {
      let c = new AchievementCategory(a.ACHIEVEMENT_CATEGORY_NEW);
      (this._ra818aeb4302522.set(a.ACHIEVEMENT_CATEGORY_NEW, c), this.var_986.push(c));
      for (let f of o) c.add(f);
    }
  }
  static {
    n(this, "AchievementCategories");
  }
  static ACHIEVEMENT_ARCHIVED = 2;
  static ACHIEVEMENT_CONTROL_BY_WIRED = 4;
  static ACHIEVEMENT_CATEGORY_ARCHIVED = "archive";
  static ACHIEVEMENT_CATEGORY_NEW = "new";
  static ACHIEVEMENT_CATEGORY_WIRED_GAMES = "wired_games";
  _ra818aeb4302522 = new Map();
  var_986 = [];
  update(e) {
    e == null ||
      e.category === "" ||
      (this._ra818aeb4302522.get(e.category)?.update(e),
      this._ra818aeb4302522.get(a.ACHIEVEMENT_CATEGORY_NEW)?.update(e));
  }
  get categoryList() {
    return this.var_986;
  }
  _r6950137b2e3b19() {
    let e = 0;
    for (let r of this.var_986) e += r._r6950137b2e3b19();
    return e;
  }
  _r229b578b87b7b8() {
    let e = 0;
    for (let r of this.var_986) e += r._r229b578b87b7b8();
    return e;
  }
  getCategoryByCode(e) {
    for (let r of this.var_986) if (r.code === e) return r;
    return null;
  }
  achievementIsNew(e, r) {
    return e.indexOf(r.code) !== -1;
  }
  getNewAchievementCodes() {
    let e = this._questEngine.getProperty("achievements.new");
    return e === "" ? [] : e.split(",");
  }
}
