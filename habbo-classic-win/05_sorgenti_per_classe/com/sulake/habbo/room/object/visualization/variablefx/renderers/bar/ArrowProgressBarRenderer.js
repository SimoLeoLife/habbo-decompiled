// Extracted from HabboAirLauncher.deobf.js, line 286149.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/ArrowProgressBarRenderer.as

class a extends hb {
  static {
    n(this, "ArrowProgressBarRenderer");
  }
  static _r5fec2a3a9e4757 = {
    background: "variablefx_arrow_bar_background",
    _rc840e73c5e0418: "variablefx_arrow_bar_chunk",
    darkening: "variablefx_arrow_bar_darkening",
    lighting: "variablefx_arrow_bar_lighting",
    metallic: "variablefx_arrow_bar_metallic",
    splitter: "variablefx_arrow_bar_splitter",
    splitterLeft: "variablefx_arrow_bar_splitter_left",
  };
  static FRAME_HEIGHT = 13;
  static _r634d9835cc749c = 3;
  static _r89196e2dcc6d75 = 3;
  static FILL_HEIGHT = 7;
  static ARROW_WIDTH = 9;
  static BAR_CHUNK_WIDTH = 11;
  static _rdf252340739b89 = 7;
  _assets;
  var_4417;
  _rd0804e809ecf9b = null;
  var_4695 = -1;
  var_3319;
  var_4203;
  _iconLayout;
  _layout;
  _overlays;
  constructor(e) {
    super(e);
    let r = class_3376.getOrCreate(e.config, () => this.createPrebake(e)).data;
    ((this._assets = r.assets),
      (this.var_4417 = r.backgroundPrebake),
      (this.var_3319 = r.barPrebake),
      (this.var_4203 = r.foregroundPrebake),
      (this._iconLayout = r.iconLayout),
      (this._layout = r.layout),
      (this._overlays = r.overlays),
      this.var_3319 == null &&
        (this._rd0804e809ecf9b = this._rc5cebd2cfa1126(
          this._iconLayout.frameWidth,
          this._iconLayout.frameHeight,
        )));
  }
  get frameWidth() {
    return this._iconLayout.frameWidth;
  }
  get frameHeight() {
    return this._iconLayout.frameHeight;
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
          i > 0 &&
            t.drawLayer(this._r7a2a01756c04f8(), 0, 0, ie.NORMAL, 255, this.createFillClip(i)),
          t.drawLayer(this.var_4203, 0, 0, ie.NORMAL, 255));
      } finally {
        r.unlock();
      }
    }
  }
  dispose() {
    (super.dispose(), this._rd0804e809ecf9b?.dispose(), (this._rd0804e809ecf9b = null));
  }
  static _r03237259366ec0(e, r) {
    return VariableFxSegmentedProgress.resolveSegmentCount(e, r, this.resolveDefaultArrowProgressBarArrowCount);
  }
  static _r521fbdb4fb39eb(e, r) {
    return this._r634d9835cc749c * 2 + this._r03237259366ec0(e, r) * this.ARROW_WIDTH;
  }
  static resolveDefaultArrowProgressBarArrowCount(e) {
    switch (e) {
      case VariableFxWidth.const_463:
        return 3;
      case VariableFxWidth.SMALL:
        return 4;
      case VariableFxWidth.LARGE:
        return 8;
      case VariableFxWidth.EXTRA_LARGE:
        return 10;
      default:
        return 6;
    }
  }
  createPrebake(e) {
    let r = this._rb068360d763b33(e.config.width, e.config.extra),
      t = this.resolveAssets(),
      i = Ns.resolve(e),
      s = this.resolveIconOverlayLayout(r, i),
      o = class_3649._r0826336a1ed27b(e.config.color, e.config.extra),
      d = this._r456001cea078b3(t, o._rdc05eda693c910),
      c = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      f = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      l = class_3649.isDynamicPaintColor(e.config.color) ? null : this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight);
    return (
      this.prebakeBackground(c, t, r, s),
      this.prebakeForeground(f, t, r, s, i),
      l != null && this.drawBarBitmap(l, (4278190080 | o.rgb) >>> 0, t, d, r, s),
      new UnkClass_011e37(
        {
          assets: t,
          backgroundPrebake: c,
          barPrebake: l,
          foregroundPrebake: f,
          iconLayout: s,
          layout: r,
          overlays: d,
        },
        () => {
          (c.dispose(), f.dispose(), l?.dispose());
        },
      )
    );
  }
  prebakeBackground(e, r, t, i) {
    e.lock();
    try {
      let s = new Tt(e);
      (s.clear(0),
        s.drawThreeSlice(
          r.background,
          VariableFxBarSliceUtils.resolveBackgroundSliceLeftWidth(t),
          VariableFxBarSliceUtils.resolveBackgroundSliceRightWidth(t),
          t.width,
          i.var_140,
          i.var_178,
          ie.NORMAL,
          255,
        ));
    } finally {
      e.unlock();
    }
  }
  prebakeForeground(e, r, t, i, s) {
    let o = this.createFillClip(t.fillWidth, t, i);
    e.lock();
    try {
      let d = new Tt(e);
      (d.clear(0),
        d.drawLayer(
          r.splitterLeft,
          i.var_140 + (t._r6ecc321323dcc8 | 0),
          i.var_178 + (t._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
          o,
        ));
      for (let c = a._rdf252340739b89; c < (t.fillWidth | 0); c += a.ARROW_WIDTH)
        d.drawLayer(
          r.splitter,
          i.var_140 + (t._r6ecc321323dcc8 | 0) + c,
          i.var_178 + (t._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
          o,
        );
      s != null && d.drawLayer(s.bitmapData, i.var_2920, i.var_2978, ie.NORMAL, 255);
    } finally {
      e.unlock();
    }
  }
  _r7a2a01756c04f8() {
    return this.var_3319 != null
      ? this.var_3319
      : (this.var_4695 !== (this._r26a058940f9f41 | 0) &&
          ((this.var_4695 = this._r26a058940f9f41 | 0),
          this.drawBarBitmap(
            this._rd0804e809ecf9b,
            this._r26a058940f9f41,
            this._assets,
            this._overlays,
            this._layout,
            this._iconLayout,
          )),
        this._rd0804e809ecf9b);
  }
  drawBarBitmap(e, r, t, i, s, o) {
    let d = this.createBarChunkBitmap(r, t, i),
      c = this.createFillClip(s.fillWidth, s, o);
    e.lock();
    try {
      let f = new Tt(e);
      f.clear(0);
      for (let l = 0; l < (s.fillWidth | 0); l += a.ARROW_WIDTH)
        f.drawLayer(
          d,
          o.var_140 + (s._r6ecc321323dcc8 | 0) + l,
          o.var_178 + (s._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
          c,
        );
    } finally {
      (e.unlock(), d.dispose());
    }
  }
  createBarChunkBitmap(e, r, t) {
    let i = this._rc5cebd2cfa1126(a.BAR_CHUNK_WIDTH, a.FILL_HEIGHT);
    i.lock();
    try {
      let s = new Tt(i);
      (s.clear(0),
        s.drawTintedLayer(r._rc840e73c5e0418, 0, 0, e, ie.NORMAL, 255),
        r.metallic != null && s.drawLayer(r.metallic, 0, 0, ie.ADD, 255));
      for (let o of t) s.drawLayer(o.layer, 0, 0, o.blendMode, 255);
    } finally {
      i.unlock();
    }
    return i;
  }
  createFillClip(e = -1, r = this._layout, t = this._iconLayout) {
    return new VariableFxClipRect(
      t.var_140 + (r._r6ecc321323dcc8 | 0),
      t.var_178 + (r._r2a769a55bd8039 | 0),
      e < 0 ? r.fillWidth | 0 : e,
      r.fillHeight,
    );
  }
  resolveAssets() {
    let e = class_3649._r0826336a1ed27b(this.context.config.color, this.context.config.extra)._rdc05eda693c910,
      r = a._r5fec2a3a9e4757;
    return {
      background: this.getLayer(r.background),
      _rc840e73c5e0418: this.getLayer(r._rc840e73c5e0418),
      darkening: this.getLayer(r.darkening),
      lighting: this.getLayer(r.lighting),
      metallic: e ? this.getLayer(r.metallic) : null,
      splitter: this.getLayer(r.splitter),
      splitterLeft: this.getLayer(r.splitterLeft),
    };
  }
  _r456001cea078b3(e, r) {
    return r
      ? [
          { blendMode: ie.ADD, layer: e.lighting },
          { blendMode: ie.MULTIPLY, layer: e.darkening },
          { blendMode: ie.ADD, layer: e.lighting },
          { blendMode: ie.MULTIPLY, layer: e.darkening },
        ]
      : [
          { blendMode: ie.MULTIPLY, layer: e.darkening },
          { blendMode: ie.ADD, layer: e.lighting },
        ];
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX arrow progress bar layer '" + e + "'.");
    return r;
  }
  resolveIconOverlayLayout(e, r) {
    return Ns.resolveBarIconOverlayLayout(e.width, e.height, r, Ns.resolveAlignment(this.context));
  }
  _rb068360d763b33(e, r) {
    let t = a._r03237259366ec0(e, r),
      i = t * a.ARROW_WIDTH;
    return {
      _r1982d5692f1d82: t,
      fillHeight: a.FILL_HEIGHT,
      fillWidth: i,
      _r6ecc321323dcc8: a._r634d9835cc749c,
      _r2a769a55bd8039: a._r89196e2dcc6d75,
      height: a.FRAME_HEIGHT,
      sliceLeftWidth: a._r634d9835cc749c,
      sliceRightWidth: a._r634d9835cc749c,
      width: i + a._r634d9835cc749c * 2,
    };
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e, r, !0, 0);
  }
}
