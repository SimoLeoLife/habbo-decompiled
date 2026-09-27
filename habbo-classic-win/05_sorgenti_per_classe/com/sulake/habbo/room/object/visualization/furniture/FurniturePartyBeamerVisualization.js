// Estratto da HabboAirLauncher.deobf.js, riga 201861.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurniturePartyBeamerVisualization.as
// Nome offuscato: _i9a7707260014d9

class a {
  static {
    n(this, "FurniturePartyBeamerVisualization");
  }
  static _r800d73f2140292 = 60;
  static AREA_DIAMETER_SMALL = 15;
  static _r4b1b2fc41a0923 = 40;
  static _r02280b2e778777 = 380;
  static const_737 = 1;
  var_2147(e, r, t = a.const_737, i = 100) {
    let s = Math.abs(r.centerX - e.centerX);
    return s > a._r02280b2e778777 || s < 1
      ? 0
      : (e.centerX <= r.centerX ? 1 : -1) * Math.min(Math.min(s, t / s), i);
  }
}
