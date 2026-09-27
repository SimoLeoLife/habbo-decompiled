// Estratto da HabboAirLauncher.deobf.js, riga 72411.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/enum/class_3472.as
// Nome offuscato: _i6fa2c66b00f662

class a {
  static {
    n(this, "class_3472");
  }
  static COMMON = 0;
  static const_269 = 1;
  static RARE = 2;
  static VERY_RARE = 3;
  static MYTHICAL = 4;
  static const_1197 = 5;
  static const_439 = 6;
  static const_554 = 11759111;
  static isRareOrHigher(e) {
    return e >= a.RARE;
  }
  static isStandaloneTier(e, r = !1) {
    return a.isRareOrHigher(e) || (r && e === a.const_269);
  }
  static getLocalizationKey(e, r = !1) {
    switch (e) {
      case a.const_269:
        return r ? "badge.rarity.uncommon" : "";
      case a.RARE:
        return "badge.rarity.rare";
      case a.VERY_RARE:
        return "badge.rarity.epic";
      case a.MYTHICAL:
        return "badge.rarity.mythical";
      case a.const_1197:
        return "badge.rarity.legendary";
      case a.const_439:
        return "badge.rarity.unique";
      default:
        return "";
    }
  }
  static getLabelLocalizationKey(e, r = !1) {
    return a.isStandaloneTier(e, r) ? a.getLocalizationKey(e, r) : "badge.rarity.common";
  }
  static _rb6aa484dbb343f(e, r = !1) {
    switch (e) {
      case a.const_269:
        return r ? 16758605 : 0;
      case a.RARE:
        return 8780159;
      case a.VERY_RARE:
        return 6732543;
      case a.MYTHICAL:
        return 12809942;
      case a.const_1197:
        return 14036772;
      case a.const_439:
        return 13406720;
      default:
        return 0;
    }
  }
  static getGlowColor(e, r = !1) {
    return r && e === a.const_269 ? a.const_554 : a._rb6aa484dbb343f(e, r);
  }
  static getWhiteBackgroundTagColor(e, r = !1) {
    switch (e) {
      case a.COMMON:
        return 7829367;
      case a.const_269:
        return r ? a._rb6aa484dbb343f(e, r) : 7829367;
      case a.RARE:
        return a._r5bb57a2f3d7cbf(a._rb6aa484dbb343f(e, r), 0.35);
      case a.VERY_RARE:
        return a._r5bb57a2f3d7cbf(a._rb6aa484dbb343f(e, r), 0.2);
      case a.MYTHICAL:
        return a._r5bb57a2f3d7cbf(a._rb6aa484dbb343f(e, r), 0.15);
      case a.const_1197:
        return a._r5bb57a2f3d7cbf(a._rb6aa484dbb343f(e, r), 0.1);
      default:
        return a._rb6aa484dbb343f(e, r);
    }
  }
  static _r5bb57a2f3d7cbf(e, r) {
    let t = 1 - r,
      i = Math.trunc(((e >> 16) & 255) * t),
      s = Math.trunc(((e >> 8) & 255) * t),
      o = Math.trunc((e & 255) * t);
    return (i << 16) | (s << 8) | o;
  }
}
