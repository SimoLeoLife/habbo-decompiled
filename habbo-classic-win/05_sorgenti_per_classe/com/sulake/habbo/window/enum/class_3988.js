// Extracted from HabboAirLauncher.deobf.js, line 144816.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/enum/class_3988.as
// Obfuscated name: _ic6e62e5c7f9c7f

class a {
  static {
    n(this, "class_3988");
  }
  static const_885 = "up, left";
  static UP_CENTER = "up, center";
  static UP_RIGHT = "up, right";
  static DOWN_LEFT = "down, left";
  static DOWN_CENTER = "down, center";
  static DOWN_RIGHT = "down, right";
  static const_183 = "left, top";
  static const_1321 = "left, middle";
  static LEFT_BOTTOM = "left, bottom";
  static const_567 = "right, top";
  static const_1281 = "right, middle";
  static RIGHT_BOTTOM = "right, bottom";
  static ALL = [
    a.const_885,
    a.UP_CENTER,
    a.UP_RIGHT,
    a.DOWN_LEFT,
    a.DOWN_CENTER,
    a.DOWN_RIGHT,
    a.const_183,
    a.const_1321,
    a.LEFT_BOTTOM,
    a.const_567,
    a.const_1281,
    a.RIGHT_BOTTOM,
  ];
  static UP = "up";
  static DOWN = "down";
  static const_27 = "left";
  static RIGHT = "right";
  static const_88 = "minimum";
  static const_792 = "middle";
  static MAXIMUM = "maximum";
  static directionFromPivot(e) {
    return e.substring(0, e.indexOf(","));
  }
  static positionFromPivot(e) {
    switch (e) {
      case a.const_885:
      case a.DOWN_LEFT:
      case a.const_183:
      case a.const_567:
        return a.const_88;
      case a.UP_RIGHT:
      case a.DOWN_RIGHT:
      case a.LEFT_BOTTOM:
      case a.RIGHT_BOTTOM:
        return a.MAXIMUM;
      default:
        return a.const_792;
    }
  }
}
