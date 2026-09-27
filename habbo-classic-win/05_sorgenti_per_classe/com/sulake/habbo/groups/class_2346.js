// Estratto da HabboAirLauncher.deobf.js, riga 158680.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/class_2346.as
// Nome offuscato: _i40e826c0f1452b

class a {
  static {
    n(this, "class_2346");
  }
  static FRAME_STYLE_UNCOMMON = 10007;
  static LINK_ID = "badge_leaderboard";
  static _r1a5c1a300715cc = `${a.LINK_ID}/`;
  static const_337 = 1e3;
  static DEFAULT_RARITY = -1;
  static _r44f115799afb60 = 0;
  static PAGE_SIZE = 10;
  static TOTAL_BADGES = 0;
  static BADGES_BY_RARITY = 1;
  static ACHIEVEMENT_LEVEL = 2;
  static FRAME_STYLE_TOTAL_BADGES = 1e4;
  static FRAME_STYLE_ACHIEVEMENT_LEVEL = 10001;
  static FRAME_STYLE_RARE = 10002;
  static FRAME_STYLE_VERY_RARE = 10003;
  static FRAME_STYLE_MYTHICAL = 10004;
  static FRAME_STYLE_LEGENDARY = 10005;
  static FRAME_STYLE_UNIQUE = 10006;
  static getLink(e, r = a.DEFAULT_RARITY, t = a._r44f115799afb60) {
    return `${a._r1a5c1a300715cc}${e}/${r}/${t}`;
  }
  static _ra70999e3f22915(e) {
    return e < 0 ? a._r44f115799afb60 : Math.trunc(Math.max(0, e - 1) / a.PAGE_SIZE);
  }
  static _r141535094129a5(e) {
    return e >= a.const_337 ? `${a.const_337}+` : String(e);
  }
  static shouldShowOwnerCount(e) {
    return e > 0 && e < a.const_337;
  }
}
