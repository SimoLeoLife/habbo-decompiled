// Extracted from HabboAirLauncher.deobf.js, line 283121.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneTexture.as
// Obfuscated name: _i7eef5fdd8710d5

class a {
  static {
    n(this, "PlaneTexture");
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
    o = null,
  ) {
    this.var_1314.push(new Yve(e, r, t, i, s, o));
  }
  getBitmap(e) {
    return this._r4b4e6a937f5138(e)?.bitmap ?? null;
  }
  _r4b4e6a937f5138(e) {
    if (e == null) return null;
    for (let r of this.var_1314)
      if (e.x >= r.normalMinX && e.x <= r.normalMaxX && e.y >= r.normalMinY && e.y <= r.normalMaxY) return r;
    return null;
  }
  getAssetName(e) {
    return this._r4b4e6a937f5138(e)?.assetName ?? null;
  }
}
