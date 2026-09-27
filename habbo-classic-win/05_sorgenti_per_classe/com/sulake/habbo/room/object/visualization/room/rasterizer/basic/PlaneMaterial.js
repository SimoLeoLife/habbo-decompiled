// Extracted from HabboAirLauncher.deobf.js, line 283054.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneMaterial.as
// Obfuscated name: _i551ffa6716215f

class a {
  static {
    n(this, "PlaneMaterial");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  _planeMaterialItems = [];
  var_3157 = !1;
  dispose() {
    for (let e of this._planeMaterialItems) e.dispose();
    this._planeMaterialItems = [];
  }
  clearCache() {
    if (this.var_3157) {
      for (let e of this._planeMaterialItems) e.clearCache();
      this.var_3157 = !1;
    }
  }
  addMaterialCellMatrix(
    e,
    r,
    t,
    i = a.const_29,
    s = a.MAX_NORMAL_COORDINATE_VALUE,
    o = a.const_29,
    d = a.MAX_NORMAL_COORDINATE_VALUE,
  ) {
    let c = new pc(e, r, t, i, s, o, d);
    return (this._planeMaterialItems.push(c), c);
  }
  getMaterialCellMatrix(e) {
    if (e == null) return null;
    for (let r of this._planeMaterialItems)
      if (e.x >= r.normalMinX && e.x <= r.normalMaxX && e.y >= r.normalMinY && e.y <= r.normalMaxY) return r;
    return null;
  }
  render(e, r, t, i, s, o, d, c) {
    ((r = Math.max(1, r)), (t = Math.max(1, t)));
    let f = this.getMaterialCellMatrix(i);
    return f != null ? ((this.var_3157 = !0), f.render(e, r, t, i, s, o, d, c)) : null;
  }
}
