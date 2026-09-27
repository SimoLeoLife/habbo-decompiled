// Estratto da HabboAirLauncher.deobf.js, riga 144269.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purse/class_1937.as
// Nome offuscato: _icd51a8939628e1

class a {
  static {
    n(this, "class_1937");
  }
  static CREDITS = 7;
  static DUCKET = 0;
  static EMERALD = 1001;
  static const_476 = 5;
  static NO_OP_1 = 1;
  static NO_OP_2 = 2;
  static NO_OP_4 = 4;
  static SEASONAL_1 = 101;
  static SEASONAL_2 = 102;
  static SEASONAL_3 = 103;
  static SEASONAL_4 = 104;
  static SEASONAL_5 = 105;
  static SILVER = 1e3;
  static const_642 = 3;
  static const_34 = a.createSeasonalCurrencyIconMap();
  static createSeasonalCurrencyIconMap() {
    let e = new B();
    return (
      e.add("snowflakes", [27, 27]),
      e.add("horseshoes", [31, 30]),
      e.add("nuts", [39, 38]),
      e.add("stars", [45, 44]),
      e.add("clouds", [46, 47]),
      e.add("plain_pumpkins", [49, 50]),
      e.add("seashells", [55, 55]),
      e.add("flowers", [59, 58]),
      e.add("candy", [61, 60]),
      e.add("popsicles", [63, 62]),
      e.add("golden_fishes", [65, 64]),
      e.add("balloons", [67, 66]),
      e.add("pumpkins", [69, 68]),
      e.add("easter_eggs", [73, 72]),
      e.add("truffles", [75, 74]),
      e.add("blue_balloons", [77, 76]),
      e.add("mushrooms", [79, 78]),
      e.add("acorn", [81, 80]),
      e.add("coconuts", [83, 82]),
      e.add("cards", [85, 84]),
      e
    );
  }
  static values() {
    return [
      a.DUCKET,
      a.SEASONAL_1,
      a.SEASONAL_2,
      a.SEASONAL_3,
      a.SEASONAL_4,
      a.SEASONAL_5,
      a.NO_OP_1,
      a.NO_OP_2,
      a.NO_OP_4,
    ];
  }
  static getIconStyleFor(e, r, t, i = !1) {
    if (e === -1 || e === a.CREDITS) return t ? 34 : 35;
    if (e === a.DUCKET) return t ? 32 : 33;
    if (e === a.const_642) return t ? 36 : 37;
    if (e === a.const_476) return r?.getBoolean("diamonds.enabled") ? (t ? 41 : 42) : t ? 53 : 54;
    if (e === a.SILVER) return t ? 56 : 57;
    if (e === a.EMERALD) return t ? 70 : 71;
    if (a.isSeasonal(e)) {
      let o = r?.getProperty(`seasonalcurrency.id.${e}`) ?? "";
      if (a.const_34.hasKey(o)) {
        let d = a.const_34.getValue(o) ?? [0, 0];
        return t ? d[1] : d[0];
      }
    }
    let s = `currencyiconstyle.${t ? "big" : "small"}.${e}${i ? ".combo" : ""}`;
    return r?.getInteger(s, 0) ?? 0;
  }
  static isVisible(e) {
    return [a.NO_OP_1, a.NO_OP_2, a.NO_OP_4].indexOf(e) === 1;
  }
  static isSeasonal(e) {
    return e >= a.SEASONAL_1 && e <= a.SEASONAL_5;
  }
}
