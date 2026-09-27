// Extracted from HabboAirLauncher.deobf.js, line 67838.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/class_1837.as
// Obfuscated name: _i57117169f5f691

class a {
  static {
    n(this, "class_1837");
  }
  static MAX_CLUB_FURNI_ID = 2147483647;
  static _r860ff08ed3af89 = a.MAX_CLUB_FURNI_ID - 65535;
  static _rce8140051062a2 = a._r860ff08ed3af89 - 1;
  static _rbf123adbf90fd5 = a._rce8140051062a2 - 16383;
  static _rc41131de470a52 = a._rbf123adbf90fd5 - 1;
  static isBuilderClubId(e) {
    return e >= a._r860ff08ed3af89 && e <= a.MAX_CLUB_FURNI_ID;
  }
  static isTempId(e) {
    return e >= a._rbf123adbf90fd5 && e <= a._rce8140051062a2;
  }
  static _rf4777ce83ade62(e) {
    return e <= a._rc41131de470a52;
  }
}
