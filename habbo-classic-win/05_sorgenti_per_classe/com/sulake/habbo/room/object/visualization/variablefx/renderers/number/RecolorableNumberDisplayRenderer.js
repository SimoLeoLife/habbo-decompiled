// Estratto da HabboAirLauncher.deobf.js, riga 290030.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/number/RecolorableNumberDisplayRenderer.as

class a extends NumberDisplayRendererBase {
  static {
    n(this, "RecolorableNumberDisplayRenderer");
  }
  var_2458;
  _r2b0a3ccef7fa3c = null;
  var_663;
  constructor(e) {
    super(e, a.resolveDesign(e));
    let r = a.resolveDesign(e);
    ((this.var_663 = class_3376.getOrCreate(e.config, () => this.createPrebake(e, r))),
      (this.var_2458 = this.resolvePaintRgb(e)));
  }
  drawDigit(e, r, t) {
    this.composer._re07cb7ce4d72ad(
      this.var_663._r0859b3ad471b24(this.var_2458 >>> 0),
      e.sourceX,
      0,
      e.width,
      this._r2e102a5d3539e0,
      r,
      t,
      ie.NORMAL,
      255,
    );
  }
  _r137642eecec9fe() {
    return this.var_663._ra7e1f8fbefe886;
  }
  _r1d380e008b0c4f(e, r) {
    this.var_2458 = this.resolvePaintRgb(e);
  }
  needsRendererUpdate() {
    return this._r2b0a3ccef7fa3c == null || this._r2b0a3ccef7fa3c !== this.var_2458;
  }
  calculateFilledPixelWidth() {
    this._r2b0a3ccef7fa3c = this.var_2458;
  }
  createPrebake(e, r) {
    return new _ia27cd49e2ca324(this._r83ed36d9c6626c(e, r));
  }
  _r83ed36d9c6626c(e, r) {
    return {
      darkening: this._rf6c54c1ffe9063(e, r.layers.darkening),
      lighting: this._rf6c54c1ffe9063(e, r.layers.lighting),
      _rcffab147cfe597: this._rf6c54c1ffe9063(e, r.layers._rcffab147cfe597),
      numbers: this.getLayer(e, r.layers.numbers),
    };
  }
  _rf6c54c1ffe9063(e, r) {
    return r == null ? null : this.getLayer(e, r);
  }
  getLayer(e, r) {
    let t = e.assetProvider?._r198ea9f0f21815(r);
    if (t == null) throw new Error("Missing Variable FX number display layer '" + r + "'.");
    return t;
  }
  resolvePaintRgb(e) {
    return class_3649.resolve(e.config.color)._r6416a703ecc99e === class_3649.DYNAMIC_TEAM_COLOR
      ? class_3649.resolveTargetPaintColor(e.config.color, e.config.extra, 0, e.status.extra).rgb | 0
      : class_3649._r0826336a1ed27b(e.config.color, e.config.extra).rgb | 0;
  }
  static resolveDesign(e) {
    let r = class_3649.readExtra(e.config.extra, "design"),
      t = class_4305.getRecolorableDesign(r);
    if (t == null)
      throw new Error("Unknown recolorable Variable FX number display design '" + (r ?? "") + "'.");
    return t;
  }
}
