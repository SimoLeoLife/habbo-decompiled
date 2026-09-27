// Estratto da HabboAirLauncher.deobf.js, riga 286432.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/BlockProgressBarRenderer.as

class a extends hb {
  static {
    n(this, "BlockProgressBarRenderer");
  }
  static _rdbbfb1bffe6c16 = {
    background: "variablefx_block_bar_background",
    bar: "variablefx_block_bar_fill",
    darkening: "variablefx_block_bar_darkening",
    lighting: "variablefx_block_bar_lighting",
    metallic: "variablefx_block_bar_metallic",
    splitters: "variablefx_block_bar_splitters",
  };
  static _r70e035648577e4 = 7;
  static SPLITTER_WIDTH = 1;
  static _r634d9835cc749c = 3;
  static FRAME_HEIGHT = 13;
  static _r89196e2dcc6d75 = 3;
  static FILL_HEIGHT = 7;
  static _r8763156651d499 = a._r70e035648577e4 + a.SPLITTER_WIDTH;
  _assets;
  var_4417;
  _rd0804e809ecf9b = null;
  var_4695 = -1;
  var_3319;
  var_4203;
  _iconLayout;
  _layout;
  constructor(e) {
    super(e);
    let r = class_3376.getOrCreate(e.config, () => this.createPrebake(e)).data;
    ((this._assets = r.assets),
      (this.var_4417 = r.backgroundPrebake),
      (this.var_3319 = r.barPrebake),
      (this.var_4203 = r.foregroundPrebake),
      (this._iconLayout = r.iconLayout),
      (this._layout = r.layout),
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
            t.drawLayer(this._r7a2a01756c04f8(), 0, 0, ie.NORMAL, 255, this.resolveProgressClip(i)),
          t.drawLayer(this.var_4203, 0, 0, ie.NORMAL, 255));
      } finally {
        r.unlock();
      }
    }
  }
  dispose() {
    (super.dispose(), this._rd0804e809ecf9b?.dispose(), (this._rd0804e809ecf9b = null));
  }
  static resolveBlockProgressBarBlockCount(e, r) {
    return VariableFxSegmentedProgress.resolveSegmentCount(e, r, this.resolveDefaultBlockProgressBarBlockCount);
  }
  static resolveDefaultBlockProgressBarBlockCount(e) {
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
      d = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      c = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      f = class_3649.isDynamicPaintColor(e.config.color) ? null : this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight);
    return (
      this.prebakeBackground(d, t, r, s),
      this.prebakeForeground(c, t, r, s, i),
      f != null && this.drawBarBitmap(f, (4278190080 | o.rgb) >>> 0, t, r, s),
      new _i011e37bea19c9d(
        {
          assets: t,
          backgroundPrebake: d,
          barPrebake: f,
          foregroundPrebake: c,
          iconLayout: s,
          layout: r,
        },
        () => {
          (d.dispose(), c.dispose(), f?.dispose());
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
    e.lock();
    try {
      let o = new Tt(e);
      (o.clear(0),
        this._r8c824a694cec33(o, r.splitters, i.var_140, i.var_178, t),
        s != null &&
          o.drawLayer(s.bitmapData, i.var_2920, i.var_2978, ie.NORMAL, 255));
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
            this._layout,
            this._iconLayout,
          )),
        this._rd0804e809ecf9b);
  }
  drawBarBitmap(e, r, t, i, s) {
    let o = s.var_140,
      d = s.var_178,
      c = this.resolveProgressClip(i.fillWidth, i, s);
    e.lock();
    try {
      let f = new Tt(e);
      (f.clear(0),
        f.fillRect(
          o + (i._r6ecc321323dcc8 | 0),
          d + (i._r2a769a55bd8039 | 0),
          i.fillWidth,
          i.fillHeight,
          r,
        ),
        this.drawRepeatedFillLayer(f, t.bar, ie.MULTIPLY, o, d, c, i),
        t.metallic != null && this.drawRepeatedFillLayer(f, t.metallic, ie.NORMAL, o, d, c, i));
      for (let l of t.overlays) this.drawRepeatedFillLayer(f, l.layer, l.blendMode, o, d, c, i);
    } finally {
      e.unlock();
    }
  }
  drawRepeatedFillLayer(e, r, t, i, s, o, d) {
    o.width <= 0 ||
      e.drawTiledChunk(
        r,
        new VariableFxClipRect(0, 0, a._r8763156651d499, d.fillHeight),
        i + (d._r6ecc321323dcc8 | 0),
        s + (d._r2a769a55bd8039 | 0),
        d.fillWidth,
        d.fillHeight,
        t,
        255,
        o,
      );
  }
  _r8c824a694cec33(e, r, t, i, s) {
    for (let o = 1; o <= (s.blockCount | 0); o++) {
      let d = t + (s._r6ecc321323dcc8 | 0) + o * a._r8763156651d499 - (s._rac0dca8967f19a | 0);
      e.drawTiledChunk(
        r,
        new VariableFxClipRect(0, s._r2a769a55bd8039, s._rac0dca8967f19a, s.fillHeight),
        d,
        i + (s._r2a769a55bd8039 | 0),
        s._rac0dca8967f19a,
        s.fillHeight,
        ie.NORMAL,
        255,
      );
    }
  }
  resolveProgressClip(e, r = this._layout, t = this._iconLayout) {
    return new VariableFxClipRect(
      t.var_140 + (r._r6ecc321323dcc8 | 0),
      t.var_178 + (r._r2a769a55bd8039 | 0),
      e,
      r.fillHeight,
    );
  }
  resolveAssets() {
    let e = class_3649._r0826336a1ed27b(this.context.config.color, this.context.config.extra)._rdc05eda693c910,
      r = a._rdbbfb1bffe6c16,
      t = this.getLayer(r.darkening),
      i = this.getLayer(r.lighting);
    return {
      background: this.getLayer(r.background),
      bar: this.getLayer(r.bar),
      metallic: e ? this.getLayer(r.metallic) : null,
      splitters: this.getLayer(r.splitters),
      overlays: e
        ? [
            { blendMode: ie.ADD, layer: i },
            { blendMode: ie.MULTIPLY, layer: t },
            { blendMode: ie.ADD, layer: i },
            { blendMode: ie.MULTIPLY, layer: t },
          ]
        : [
            { blendMode: ie.MULTIPLY, layer: t },
            { blendMode: ie.ADD, layer: i },
          ],
    };
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX block progress bar layer '" + e + "'.");
    return r;
  }
  resolveIconOverlayLayout(e, r) {
    return Ns.resolveBarIconOverlayLayout(e.width, e.height, r, Ns.resolveAlignment(this.context));
  }
  _rb068360d763b33(e, r) {
    let t = a.resolveBlockProgressBarBlockCount(e, r),
      i = t * a._r70e035648577e4 + (t - 1) * a.SPLITTER_WIDTH;
    return {
      blockCount: t,
      blockWidth: a._r70e035648577e4,
      fillHeight: a.FILL_HEIGHT,
      fillWidth: i,
      _r6ecc321323dcc8: a._r634d9835cc749c,
      _r2a769a55bd8039: a._r89196e2dcc6d75,
      height: a.FRAME_HEIGHT,
      sliceLeftWidth: a._r634d9835cc749c,
      sliceRightWidth: a._r634d9835cc749c,
      _rac0dca8967f19a: a.SPLITTER_WIDTH,
      width: i + a._r634d9835cc749c * 2,
    };
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e, r, !0, 0);
  }
}
