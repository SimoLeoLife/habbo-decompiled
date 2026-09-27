// Extracted from HabboAirLauncher.deobf.js, line 174175.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/renderer/collections/class_4367.as
// Obfuscated name: _ib130e0ed7be04a

class a {
  static {
    n(this, "class_4367");
  }
  static NO_DISPLAY = 0;
  static var_5808 = 1;
  static var_4104 = 50;
  static endPercentage = 99;
  static startColor = 12278528;
  static midColor = 12952320;
  static endColor = 8958976;
  static notStartedColor = 8912917;
  static completionColor = 37130;
  static getColor(e, r) {
    if (e === r) return a.completionColor;
    if (e === 0) return a.notStartedColor;
    let t = (e * 100) / r;
    if (t <= a.var_4104) {
      let s = (t - a.var_5808) / (a.var_4104 - a.var_5808);
      return a.interpolate(a.startColor, a.midColor, s);
    }
    let i = (t - a.var_4104) / (a.endPercentage - a.var_4104);
    return a.interpolate(a.midColor, a.endColor, i);
  }
  static interpolate(e, r, t) {
    let i = a.hexToRGB(e),
      s = a.hexToRGB(r);
    return a.RGBToHex(i.r + t * (s.r - i.r), i.g + t * (s.g - i.g), i.b + t * (s.b - i.b));
  }
  static hexToRGB(e) {
    return { r: (e >> 16) & 255, g: (e >> 8) & 255, b: e & 255 };
  }
  static RGBToHex(e, r, t) {
    return ((Math.round(e) << 16) | (Math.round(r) << 8) | Math.round(t)) >>> 0;
  }
}
