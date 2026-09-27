// Extracted from HabboAirLauncher.deobf.js, line 287841.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/ThermometerHealthPointsRenderer.as

class a extends hb {
  static {
    n(this, "ThermometerHealthPointsRenderer");
  }
  static _rd49091945a19a1 = {
    background: "variablefx_thermometer_health_points_background",
    darkening: "variablefx_thermometer_health_points_darkening",
    fill: "variablefx_thermometer_health_points_fill",
    lighting: "variablefx_thermometer_health_points_lighting",
    splitters: "variablefx_thermometer_health_points_splitters",
    top: "variablefx_thermometer_health_points_top",
  };
  static _rd55d0b0920e0e2 = 3;
  static DARKENING_SLICE_WIDTH = 4;
  static _rc074d9e67a9397 = 2;
  static _r89196e2dcc6d75 = 2;
  static _rad630686d9917a = 3;
  static _r12c0cc86ad4c2d = a._r89196e2dcc6d75 + 1;
  static _r88e65c689f4f08 = a._rad630686d9917a;
  static _r4803c886502afd = a._r12c0cc86ad4c2d - a._r89196e2dcc6d75;
  static _rc798e442d56c84 = 1;
  static _r9a113234ff841a = 1;
  static const_820 = 5;
  static SPLITTER_WIDTH = 2;
  static const_373 = 0;
  static _r0b0c72dfc76b2b = a._r89196e2dcc6d75;
  var_4417;
  var_3319;
  var_5284;
  _layout;
  var_5505;
  constructor(e) {
    super(e);
    let r = class_3376.getOrCreate(e.config, () => this.createPrebake(e)).data;
    ((this.var_4417 = r.backgroundPrebake),
      (this.var_3319 = r.barPrebake),
      (this.var_5284 = r.darkeningPrebake),
      (this._layout = r.layout),
      (this.var_5505 = r.splittersPrebake));
  }
  get frameWidth() {
    return this._layout.width | 0;
  }
  get frameHeight() {
    return this._layout.height | 0;
  }
  get progressPixelWidth() {
    return this._layout.fillWidth | 0;
  }
  createFrameBitmap(e, r) {
    return this._rc5cebd2cfa1126(e, r);
  }
  renderFrame(e) {
    let r = this._rbac222daf2632a.bitmapData;
    if (r != null) {
      r.lock();
      try {
        let t = new Tt(r),
          i = this._lastRenderedPixelWidth();
        (t.drawLayer(this.var_4417, 0, 0, ie.NORMAL, 255),
          i > 0 && t.drawLayer(this.var_3319, 0, 0, ie.NORMAL, 255, this.createFillClip(i)),
          t.drawLayer(this.var_5284, 0, 0, ie.MULTIPLY, 255),
          t.drawLayer(this.var_5505, 0, 0, ie.NORMAL, 255));
      } finally {
        r.unlock();
      }
    }
  }
  static _r9f48e56db28483(e, r = null) {
    return this._r5c988bb0a58b5f(e, r) * this.const_820 + this._rc074d9e67a9397 * 2 + 1;
  }
  static _r5c988bb0a58b5f(e, r = null) {
    return VariableFxSegmentedProgress.resolveSegmentCount(e, r, this.resolveDefaultThermometerHealthPointsSegmentCount);
  }
  static resolveDefaultThermometerHealthPointsSegmentCount(e) {
    switch (e) {
      case VariableFxWidth.const_463:
        return 4;
      case VariableFxWidth.SMALL:
        return 6;
      case VariableFxWidth.LARGE:
        return 12;
      case VariableFxWidth.EXTRA_LARGE:
        return 15;
      default:
        return 9;
    }
  }
  createPrebake(e) {
    let r = this.resolveAssets(),
      t = this._rb068360d763b33(e.config.width, e.config.extra, r.background),
      i = this._rc5cebd2cfa1126(t.width, t.height),
      s = this._rc5cebd2cfa1126(t.width, t.height),
      o = this._rc5cebd2cfa1126(t.width, t.height),
      d = this._rc5cebd2cfa1126(t.width, t.height);
    return (
      this.prebakeBackground(i, r, t),
      this._rf4c37706bc9118(s, r, t),
      this._r4baf04dd6d58e0(o, r, t),
      this._r30305455895b8a(d, r, t),
      new UnkClass_011e37(
        { backgroundPrebake: i, barPrebake: s, darkeningPrebake: o, layout: t, splittersPrebake: d },
        () => {
          (i.dispose(), s.dispose(), o.dispose(), d.dispose());
        },
      )
    );
  }
  prebakeBackground(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0),
        i.drawThreeSlice(
          r.background,
          VariableFxBarSliceUtils.resolveBackgroundSliceLeftWidth(t),
          VariableFxBarSliceUtils.resolveBackgroundSliceRightWidth(t),
          t.width,
          0,
          0,
          ie.NORMAL,
          255,
        ));
    } finally {
      e.unlock();
    }
  }
  _rf4c37706bc9118(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0),
        this._rec7fa391408ae1(i, r.fill, t.fillWidth, t),
        this._r330727e215927a(i, r.lighting, t.fillWidth, t));
    } finally {
      e.unlock();
    }
  }
  _r4baf04dd6d58e0(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0), this._r6a9aa3ac691b70(i, r.darkening, ie.NORMAL, t));
    } finally {
      e.unlock();
    }
  }
  _r30305455895b8a(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0), this._rf4d95aecd44837(i, r.top, t), this._r8c824a694cec33(i, r.splitters, t));
    } finally {
      e.unlock();
    }
  }
  _rec7fa391408ae1(e, r, t, i) {
    t <= 0 ||
      r.width <= 0 ||
      r.height <= 0 ||
      e.drawTiledChunk(
        r,
        new VariableFxClipRect(0, 0, 1, 1),
        i._r6ecc321323dcc8,
        i._r2a769a55bd8039,
        t,
        i.fillHeight,
        ie.NORMAL,
        255,
      );
  }
  _r6a9aa3ac691b70(e, r, t, i) {
    e.drawThreeSlice(
      r,
      a.DARKENING_SLICE_WIDTH,
      a.DARKENING_SLICE_WIDTH,
      i.fillWidth,
      i._r6ecc321323dcc8,
      i._r2a769a55bd8039,
      t,
      255,
    );
  }
  _r330727e215927a(e, r, t, i) {
    let s = Math.min(t - a._rad630686d9917a, (i.fillWidth | 0) - a._rad630686d9917a * 2);
    s <= 0 ||
      r.width < a._r88e65c689f4f08 + a._rc798e442d56c84 ||
      r.height < a._r4803c886502afd + a._r9a113234ff841a ||
      e.drawTiledChunk(
        r,
        new VariableFxClipRect(a._r88e65c689f4f08, a._r4803c886502afd, a._rc798e442d56c84, a._r9a113234ff841a),
        (i._r6ecc321323dcc8 | 0) + a._rad630686d9917a,
        a._r12c0cc86ad4c2d,
        s,
        1,
        ie.ADD,
        255,
      );
  }
  _rf4d95aecd44837(e, r, t) {
    let i = Math.min(a._rc074d9e67a9397, r.width - 1),
      s = Math.max(0, r.width - a._rc074d9e67a9397 - 1),
      o = Math.min(a._r89196e2dcc6d75, r.height - 1),
      d = Math.max(0, r.height - a._r89196e2dcc6d75 - 1),
      c = t._r6ecc321323dcc8 | 0,
      f = (t.width | 0) - (t._r6ecc321323dcc8 | 0) - 1,
      l = t._r2a769a55bd8039 | 0,
      b = (t._r2a769a55bd8039 | 0) + (t.fillHeight | 0) - 1;
    (this.drawSingleSourcePixel(e, r, i, o, c, l),
      this.drawSingleSourcePixel(e, r, i, d, c, b),
      this.drawSingleSourcePixel(e, r, s, o, f, l),
      this.drawSingleSourcePixel(e, r, s, d, f, b));
  }
  drawSingleSourcePixel(e, r, t, i, s, o) {
    e.drawTiledChunk(r, new VariableFxClipRect(t, i, 1, 1), s, o, 1, 1, ie.NORMAL, 255);
  }
  _r8c824a694cec33(e, r, t) {
    let i = Math.min(t.fillHeight | 0, r.height - a._r0b0c72dfc76b2b),
      s = Math.min(a.SPLITTER_WIDTH, r.width - a.const_373),
      o = this.createFillClip(t.fillWidth, t);
    if (!(s <= 0 || i <= 0))
      for (
        let d = a.const_820;
        d <= (t.fillWidth | 0) - a.const_820 - 1;
        d += a.const_820
      )
        e.drawTiledChunk(
          r,
          new VariableFxClipRect(a.const_373, a._r0b0c72dfc76b2b, s, i),
          (t._r6ecc321323dcc8 | 0) + d,
          t._r2a769a55bd8039,
          s,
          t.fillHeight,
          ie.NORMAL,
          255,
          o,
        );
  }
  createFillClip(e, r = this._layout) {
    return new VariableFxClipRect(r._r6ecc321323dcc8, r._r2a769a55bd8039, e, r.fillHeight);
  }
  resolveAssets() {
    let e = a._rd49091945a19a1;
    return {
      background: this.getLayer(e.background),
      darkening: this.getLayer(e.darkening),
      fill: this.getLayer(e.fill),
      lighting: this.getLayer(e.lighting),
      splitters: this.getLayer(e.splitters),
      top: this.getLayer(e.top),
    };
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX thermometer health points layer '" + e + "'.");
    return r;
  }
  _rb068360d763b33(e, r, t) {
    let i = a._r9f48e56db28483(e, r);
    return {
      fillHeight: Math.max(1, t.height - a._r89196e2dcc6d75 * 2),
      fillWidth: Math.max(0, i - a._rc074d9e67a9397 * 2),
      _r6ecc321323dcc8: a._rc074d9e67a9397,
      _r2a769a55bd8039: a._r89196e2dcc6d75,
      height: t.height,
      sliceLeftWidth: a._rd55d0b0920e0e2,
      sliceRightWidth: a._rd55d0b0920e0e2,
      width: i,
    };
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e, r, !0, 0);
  }
}
