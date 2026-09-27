// Estratto da HabboAirLauncher.deobf.js, riga 68208.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/class_2812.as
// Nome offuscato: _i72c6d2cd1cab8d

class a {
  static {
    n(this, "class_2812");
  }
  static normalize(e, r, t) {
    return (e - r) / (t - r);
  }
  static lerp(e, r, t) {
    return e * (t - r) + r;
  }
  static clamp(e, r = 0, t = 1) {
    return Math.max(r, Math.min(t, e));
  }
  static map(e, r, t, i, s) {
    return a.lerp(a.normalize(e, r, t), i, s);
  }
  static rectangleTransformMatrix(e, r) {
    let t = new Pe();
    return (
      (t.a = r.width / e.width),
      (t.d = r.height / e.height),
      (t.tx = r.x - e.x * t.a),
      (t.ty = r.y - e.y * t.d),
      t
    );
  }
}
