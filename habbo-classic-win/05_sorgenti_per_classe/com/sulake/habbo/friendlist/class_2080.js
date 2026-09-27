// Extracted from HabboAirLauncher.deobf.js, line 158572.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/class_2080.as
// Obfuscated name: _i48a6c3347862bd

class a {
  static {
    n(this, "class_2080");
  }
  static BOBBA = 3;
  static const_522 = 1;
  static NONE = 0;
  static SMILE = 2;
  static _asString = ["none", "heart", "smile", "bobba"];
  static get displayableStatuses() {
    return [a.const_522, a.SMILE, a.BOBBA];
  }
  static _r23cf619d44ca19(e) {
    return a._asString[e] ?? a._asString[a.NONE];
  }
  static _r6c4c1123ec41a2(e) {
    for (let r of a.displayableStatuses) if (a._r23cf619d44ca19(r) === e) return r;
    return a.NONE;
  }
}
