// Extracted from HabboAirLauncher.deobf.js, line 65612.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/enum/PivotPoint.as
// Obfuscated name: _i75481cb19a87f0

class a {
  static {
    n(this, "PivotPoint");
  }
  static BOTTOM_CENTER = 7;
  static BOTTOM_LEFT = 6;
  static BOTTOM_RIGHT = 8;
  static CENTER = 4;
  static const_1058 = 3;
  static CENTER_RIGHT = 5;
  static PIVOT_NAMES = [
    "top left",
    "top center",
    "top right",
    "center left",
    "center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ];
  static TOP_CENTER = 1;
  static TOP_LEFT = 0;
  static TOP_RIGHT = 2;
  static pivotFromName(e) {
    return a.PIVOT_NAMES.indexOf(e);
  }
}
