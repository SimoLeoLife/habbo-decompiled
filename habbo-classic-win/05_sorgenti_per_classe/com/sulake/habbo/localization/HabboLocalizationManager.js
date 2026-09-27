// Extracted from HabboAirLauncher.deobf.js, line 127594.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/localization/HabboLocalizationManager.as
// Obfuscated name: _ibd5fe54eb935d3

class extends Sne {
  static {
    n(this, "HabboLocalizationManager");
  }
  _r6455c5d66c082a = !1;
  _rae85fc67753802 = new globalThis.Map();
  _rc4c0dfcc7ce582 = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
    "XXII",
    "XXIII",
    "XXIV",
    "XXV",
    "XXVI",
    "XXVII",
    "XXVIII",
    "XXIX",
    "XXX",
  ];
  constructor(e, r = 0, t = null) {
    (super(e, r, t), (this._r1eb424d7150a7f = this._r33b83d98863d25()));
  }
  dispose() {
    super.dispose();
  }
  initComponent() {
    (super.initComponent(),
      (this._r1eb424d7150a7f = this._r33b83d98863d25()),
      (this._r34cabb72b06e8a ??= (e) => this._r3ff765f17f3159(e)),
      this._rdbf7fa263e8f27(),
      this._r1eb424d7150a7f
        ? this.events.dispatchEvent?.(new M(M.ComponentDependency))
        : this.context.events?.addEventListener?.(HabboCommunicationEvent.AUTHENTICATED, this._r34cabb72b06e8a));
  }
  resetHabboWebApiSession(e, r = !0) {
    let t = `default_localizations_${e}`,
      i = this.assets.getAssetByName(t);
    if (i == null && e !== "en" && r) return this.resetHabboWebApiSession("en", !1);
    let s = this.assets.getAssetByName("default_localizations");
    return (
      s != null && this._r6f216f4e014611(String(s.content ?? "")),
      i != null ? (this._r6f216f4e014611(String(i.content ?? "")), !0) : !1
    );
  }
  getLocalizationWithParams(e, r = "", ...t) {
    if (t.length > 0) {
      let i = Math.floor(t.length / 2);
      for (let s = 0; s < i; s++) this._r43eae9731f5b27(e, t[s * 2], t[s * 2 + 1]);
    }
    return this.getLocalization(e, r);
  }
  getLocalizationWithParamMap(e, r = "", t = null) {
    if (t != null)
      for (let i = 0; i < t.length; i++) {
        let s = t.getKey(i);
        s != null && this._r43eae9731f5b27(e, String(s), String(t.getWithIndex(i) ?? ""));
      }
    return this.getLocalization(e, r);
  }
  _r68d2fdd449edb3() {
    return this._rd76d40bf1474dc()?._r68d2fdd449edb3() ?? "";
  }
  _rcdbdbfe4130cf2() {
    return this._rd76d40bf1474dc()?._rcdbdbfe4130cf2() ?? "";
  }
  _r10fc54ff641b80(e) {
    return super._rd76d40bf1474dc()._r87ac24c37cf137(e);
  }
  _r2cce3a2ff49746(e) {
    return super._rd76d40bf1474dc()._r617b653be267ec(e);
  }
  _red912863ccba35() {
    return super._red912863ccba35();
  }
  getLocalization(e, r = "") {
    return this.interpolate(super.getLocalization(e, r));
  }
  getAchievementName(e) {
    let r = new BadgeBaseAndLevel(e),
      t = this._r56201c13dfa94a([
        `badge_name_al_${e}`,
        `badge_name_al_${r.base}`,
        `badge_name_${e}`,
        `badge_name_${r.base}`,
      ]);
    return (
      this._r43eae9731f5b27(t, "roman", this.getRomanNumeral(r.level)),
      this.getLocalization(t) ?? ""
    );
  }
  getAchievementDesc(e, r) {
    let t = new BadgeBaseAndLevel(e),
      i = this._r56201c13dfa94a([
        `badge_desc_al_${e}`,
        `badge_desc_al_${t.base}`,
        `badge_desc_${e}`,
        `badge_desc_${t.base}`,
      ]);
    return (
      this._r43eae9731f5b27(i, "limit", `${r}`),
      this._r43eae9731f5b27(i, "roman", this.getRomanNumeral(t.level)),
      this.getLocalization(i)
    );
  }
  getAchievementInstruction(e) {
    let r = new BadgeBaseAndLevel(e),
      t = this._r56201c13dfa94a([`badge_instruction_${r.base}`]);
    return (this._r43eae9731f5b27(t, "limit", `${this.getBadgePointLimit(e)}`), this.getLocalization(t) ?? "");
  }
  _rfe88beed17f2db(e) {
    return new BadgeBaseAndLevel(e).base;
  }
  getBadgeName(e) {
    let r = new BadgeBaseAndLevel(e),
      t = this._rce9b29b44fbbc1(this._r56201c13dfa94a([`badge_name_${e}`, `badge_name_${r.base}`]));
    return (this._r43eae9731f5b27(t, "roman", this.getRomanNumeral(r.level)), this.getLocalization(t));
  }
  getBadgeDesc(e) {
    let r = new BadgeBaseAndLevel(e),
      t = this._rce9b29b44fbbc1(this._r56201c13dfa94a([`badge_desc_${e}`, `badge_desc_${r.base}`]));
    (this._r43eae9731f5b27(t, "limit", `${this.getBadgePointLimit(e)}`),
      this._r43eae9731f5b27(t, "roman", this.getRomanNumeral(r.level)));
    let i = this.getLocalization(t);
    return t === i ? "" : i;
  }
  _rf1f06517cc1f28(e) {
    let r = new BadgeBaseAndLevel(e);
    return ((r.level -= 1), r.badgeId);
  }
  _r8827ad97cbf6d0(e, r) {
    this._rae85fc67753802.set(e, r);
  }
  _r851c18a2435de4() {
    this._r6455c5d66c082a ||
      ((this._r6455c5d66c082a = !0),
      (this._rb9135561c7af2a ??= (e) => this._r087b8503856eb0(e)),
      (this._r68f2d5e685b0ed ??= (e) => this._r49ce68030e1347(e)),
      this.events.addEventListener?.(class_2079_.const_71, this._rb9135561c7af2a),
      this.events.addEventListener?.(class_2079_.const_76, this._r68f2d5e685b0ed),
      super.loadLocalizationFromURL(this._rd293c1a7d46597(), this.getProperty(HabboProperty.const_682)));
  }
  _r3ff765f17f3159(e) {
    this._r851c18a2435de4();
  }
  _rdbf7fa263e8f27() {
    let e = 1;
    for (; this.propertyExists(`localization.${e}`);) {
      let r = this.getProperty(`localization.${e}`),
        t = this.getProperty(`localization.${e}.code`),
        i = this.getProperty(`localization.${e}.name`),
        s = this.getProperty(`localization.${e}.url`);
      (this._r244566c7baaea4(r, i, s, t), (e += 1));
    }
  }
  getBadgePointLimit(e) {
    return this._rae85fc67753802.get(e) ?? 0;
  }
  _r56201c13dfa94a(e) {
    for (let r of e) if (this.getLocalization(r) !== "") return r;
    return e[0] ?? "";
  }
  getRomanNumeral(e) {
    return this._rc4c0dfcc7ce582[Math.max(0, e - 1)] ?? "";
  }
  _r33b83d98863d25() {
    return (this.flags & HabboLocalizationFlags.SKIP_EXTERNAL_LOCALIZATIONS) > 0;
  }
  _ra698d14cecf451() {
    for (let r of ["development_localizations", "default_localizations"]) {
      let t = this.assets.getAssetByName(r);
      t != null && (this._r6f216f4e014611(String(t.content ?? "")), t.dispose());
    }
    let e = this.assets.getAssetByName("development_localizations");
    e != null && this.assets.removeAsset(e);
  }
  _rce9b29b44fbbc1(e) {
    return e.replace("${", "$").replace("{", "$").replace("}", "$");
  }
  _r49ce68030e1347(e) {
    ((this._r6455c5d66c082a = !1), class_14.crash("Failed loading gamedata hashes", class_14.ERROR_CATEGORY_DOWNLOAD_LOCALIZATION));
  }
  _r087b8503856eb0(e) {
    ((this._r6455c5d66c082a = !1),
      this.events.removeEventListener?.(class_2079_.const_71, this._rb9135561c7af2a),
      this.events.removeEventListener?.(class_2079_.const_76, this._r68f2d5e685b0ed),
      this._r271290bace54d7());
  }
  _rd293c1a7d46597() {
    let e = this.getProperty("gamedata.hashes2.url");
    if (e.length > 0) return e;
    let r = this.getProperty("gamedata.hashes.url");
    return r.includes("/gamedata/hashes") && !r.includes("/gamedata/hashes2")
      ? r.replace("/gamedata/hashes", "/gamedata/hashes2")
      : r;
  }
  _r271290bace54d7() {
    this.events.dispatchEvent?.(new M(M.ComponentDependency));
  }
}
