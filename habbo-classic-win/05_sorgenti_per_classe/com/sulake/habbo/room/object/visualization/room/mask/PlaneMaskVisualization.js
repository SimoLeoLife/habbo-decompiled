// Estratto da HabboAirLauncher.deobf.js, riga 281008.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/mask/PlaneMaskVisualization.as
// Nome offuscato: _i301ed78b84ced2

class a {
  static {
    n(this, "PlaneMaskVisualization");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  var_1314 = [];
  dispose() {
    for (let e of this.var_1314) e.dispose();
    this.var_1314 = [];
  }
  addBitmap(
    e,
    r = a.const_29,
    t = a.MAX_NORMAL_COORDINATE_VALUE,
    i = a.const_29,
    s = a.MAX_NORMAL_COORDINATE_VALUE,
  ) {
    this.var_1314.push(new Gve(e, r, t, i, s));
  }
  getAsset(e) {
    if (e == null) return null;
    for (let r of this.var_1314)
      if (e.x >= r.normalMinX && e.x <= r.normalMaxX && e.y >= r.normalMinY && e.y <= r.normalMaxY)
        return r.asset;
    return null;
  }
}
