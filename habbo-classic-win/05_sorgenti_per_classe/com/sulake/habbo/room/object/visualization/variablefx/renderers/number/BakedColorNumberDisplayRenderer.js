// Extracted from HabboAirLauncher.deobf.js, line 289914.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/number/BakedColorNumberDisplayRenderer.as

class a extends NumberDisplayRendererBase {
  static {
    n(this, "BakedColorNumberDisplayRenderer");
  }
  static const_353 = "GREEN";
  var_5718;
  _r726306d85cb47e = null;
  _numbers;
  var_2044;
  _r394e500e289fb2;
  constructor(e) {
    super(e, a.resolveDesign(e));
    let r = a.resolveDesign(e);
    ((this.var_5718 = r),
      (this._numbers = this.getLayer(e, this.resolveNumbersAssetName(r))),
      (this._r394e500e289fb2 = class_3649.resolve(e.config.color)._r6416a703ecc99e === class_3649.DYNAMIC_TEAM_COLOR),
      (this.var_2044 = this.resolveSourceY(e, r)));
  }
  drawDigit(e, r, t) {
    this.composer._re07cb7ce4d72ad(
      this._numbers,
      e.sourceX,
      this.var_2044,
      e.width,
      this._r2e102a5d3539e0,
      r,
      t,
      ie.NORMAL,
      255,
    );
  }
  _r137642eecec9fe() {
    return this._numbers;
  }
  _r1d380e008b0c4f(e, r) {
    this._r394e500e289fb2 && (this.var_2044 = this.resolveSourceY(e, this.var_5718));
  }
  needsRendererUpdate() {
    return this._r726306d85cb47e == null || this._r726306d85cb47e !== this.var_2044;
  }
  calculateFilledPixelWidth() {
    this._r726306d85cb47e = this.var_2044;
  }
  resolveSourceY(e, r) {
    let t = class_3649.resolve(e.config.color)._r6416a703ecc99e,
      i = t === class_3649.DYNAMIC_TEAM_COLOR ? this._r88a4ba0a33e33c(e, r) : t,
      s = r._r83097e2b38c14d[i];
    return (s == null && (s = r._r83097e2b38c14d[a.const_353]), s == null ? 0 : s | 0);
  }
  _r88a4ba0a33e33c(e, r) {
    let t = class_3649._r959270f593763c(class_3649.readExtra(e.status.extra, "delegated_color"));
    if (t != null) {
      for (let i in r._r83097e2b38c14d) if (class_3649.resolve(i).rgb >>> 0 === t >>> 0) return i;
    }
    return r._r83097e2b38c14d[class_3649.WHITE] != null ? class_3649.WHITE : a.const_353;
  }
  resolveNumbersAssetName(e) {
    return "variablefx_number_" + String(e.design) + "_numbers";
  }
  getLayer(e, r) {
    let t = e.assetProvider?._r198ea9f0f21815(r);
    if (t == null) throw new Error("Missing Variable FX number display layer '" + r + "'.");
    return t;
  }
  static resolveDesign(e) {
    let r = class_3649.readExtra(e.config.extra, "design"),
      t = class_4305.getBakedColorDesign(r);
    if (t == null)
      throw new Error("Unknown baked-color Variable FX number display design '" + (r ?? "") + "'.");
    return t;
  }
}
