// Extracted from HabboAirLauncher.deobf.js, line 287429.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/StripedProgressBarRenderer.as

class a extends hb {
  static {
    n(this, "StripedProgressBarRenderer");
  }
  static _r0c7703774b1340 = {
    background: "variablefx_striped_bar_background",
    bar: "variablefx_striped_bar_fill",
    darkening: "variablefx_striped_bar_darkening",
    _r3569e80ecbe147: "variablefx_striped_bar_darkening_metallic",
    lighting: "variablefx_striped_bar_lighting",
    _r6506a0a6675498: "variablefx_striped_bar_lighting_metallic",
    metallic: "variablefx_striped_bar_metallic",
    stripe: "variablefx_striped_bar_stripe",
  };
  static FRAME_HEIGHT = 13;
  static _r634d9835cc749c = 3;
  static _r89196e2dcc6d75 = 3;
  static FILL_HEIGHT = 7;
  static _r5c9356edbd5529 = 3;
  static LIGHTING_SLICE_LEFT_WIDTH = 9;
  static BAR_END_WIDTH = 2;
  static BAR_END_MINIMUM_FILL_WIDTH = 4;
  static STRIPE_PERIOD_PX = 10;
  static STRIPE_STEP_MS = 70;
  static STRIPE_VALUE_SCALE = 0.5;
  _assets;
  var_4417;
  _rd0804e809ecf9b = null;
  var_4695 = -1;
  _r6663b1b71b1358 = null;
  var_3973;
  var_3319;
  var_5594;
  var_4203;
  _iconLayout;
  _r206bbdffac1360 = -1;
  _layout;
  _overlays;
  createTransparentBitmap = null;
  _re2321d77369dd4 = -1;
  _stripesOverlayCache;
  _refc62a791247e3;
  constructor(e) {
    super(e);
    let r = class_3376.getOrCreate(e.config, () => this.createPrebake(e)).data;
    ((this._assets = r.assets),
      (this.var_4417 = r.backgroundPrebake),
      (this.var_3973 = r.barEndPrebake),
      (this.var_3319 = r.barPrebake),
      (this.var_5594 = r.barShapePrebake),
      (this.var_4203 = r.foregroundPrebake),
      (this._iconLayout = r.iconLayout),
      (this._layout = r.layout),
      (this._overlays = r.overlays),
      (this._stripesOverlayCache = r.stripesOverlayPrebake),
      (this._refc62a791247e3 = r.stripesOverlayShapePrebake),
      this.var_3319 == null &&
        ((this._rd0804e809ecf9b = this._rc5cebd2cfa1126(
          this._iconLayout.frameWidth,
          this._iconLayout.frameHeight,
        )),
        (this._r6663b1b71b1358 = this._rc5cebd2cfa1126(
          a.BAR_END_WIDTH,
          this._iconLayout.frameHeight,
        ))),
      this._stripesOverlayCache == null &&
        (this.createTransparentBitmap = this._rc5cebd2cfa1126(
          this._refc62a791247e3.width,
          this._refc62a791247e3.height,
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
  get isContinuous() {
    return this._lastRenderedPixelWidth() > 0;
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
        if ((t.drawLayer(this.var_4417, 0, 0, ie.NORMAL, 255), i > 0)) {
          let s = this.createFillClip(i);
          (t.drawLayer(this._r7a2a01756c04f8(), 0, 0, ie.NORMAL, 255, s),
            this._r3ab82f5ab67cbf(i) &&
              t.drawLayer(
                this._ra54ba39b189d8c(),
                this._iconLayout.var_140 +
                  (this._layout._r6ecc321323dcc8 | 0) +
                  i -
                  a.BAR_END_WIDTH,
                0,
                ie.NORMAL,
                255,
                this.createFillClip(this._layout.fillWidth),
              ),
            t.drawLayer(this._r1064abb03303d3(), this._r9b6218786513dd(e), 0, ie.MULTIPLY, 255, s));
        }
        this.var_4203 != null && t.drawLayer(this.var_4203, 0, 0, ie.NORMAL, 255);
      } finally {
        r.unlock();
      }
    }
  }
  _r32b780ad42db07(e) {
    return this._lastRenderedPixelWidth() > 0 && this._r3a5157ff181b80(e) !== this._r206bbdffac1360;
  }
  calculateFilledPixelWidth(e) {
    this._r206bbdffac1360 = this._r3a5157ff181b80(e);
  }
  dispose() {
    (super.dispose(),
      this._rd0804e809ecf9b?.dispose(),
      (this._rd0804e809ecf9b = null),
      this._r6663b1b71b1358?.dispose(),
      (this._r6663b1b71b1358 = null),
      this.createTransparentBitmap?.dispose(),
      (this.createTransparentBitmap = null));
  }
  static resolveStripedProgressBarFrameWidth(e) {
    switch (e) {
      case VariableFxWidth.const_463:
        return 29;
      case VariableFxWidth.SMALL:
        return 37;
      case VariableFxWidth.LARGE:
        return 69;
      case VariableFxWidth.EXTRA_LARGE:
        return 85;
      default:
        return 53;
    }
  }
  createPrebake(e) {
    let r = this._rb068360d763b33(e.config.width),
      t = this.resolveAssets(),
      i = Ns.resolve(e),
      s = this.resolveIconOverlayLayout(r, i),
      o = class_3649._r0826336a1ed27b(e.config.color, e.config.extra),
      d = this._r456001cea078b3(t),
      c = class_3649.isDynamicPaintColor(e.config.color),
      f = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      l = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      b = s._r611c8d0924f606 ? this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight) : null,
      _ = this._rc5cebd2cfa1126(s.frameWidth + a.STRIPE_PERIOD_PX + t.stripe.width, s.frameHeight),
      h = c ? null : this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      p = c ? null : this._rc5cebd2cfa1126(a.BAR_END_WIDTH, s.frameHeight),
      m = c ? null : this._rc5cebd2cfa1126(_.width, _.height);
    return (
      this.prebakeBackground(f, t, r, s),
      this._r526cb2c38aa16a(l, t, r, s),
      this.prebakeForeground(b, i, s),
      this._rd1e84bc516feaa(_, t, r, s),
      h != null &&
        p != null &&
        m != null &&
        (this.drawBarBitmap(h, p, (4278190080 | o.rgb) >>> 0, l, t, d, r, s),
        this._rd9f9b978a87fca(m, (4278190080 | this._rc3a77210c63093(o.rgb)) >>> 0, _)),
      new UnkClass_011e37(
        {
          assets: t,
          backgroundPrebake: f,
          barEndPrebake: p,
          barPrebake: h,
          barShapePrebake: l,
          foregroundPrebake: b,
          iconLayout: s,
          layout: r,
          overlays: d,
          stripesOverlayPrebake: m,
          stripesOverlayShapePrebake: _,
        },
        () => {
          (f.dispose(), l.dispose(), _.dispose(), h?.dispose(), p?.dispose(), b?.dispose(), m?.dispose());
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
  _r526cb2c38aa16a(e, r, t, i) {
    e.lock();
    try {
      let s = new Tt(e);
      (s.clear(0),
        s.drawThreeSlice(
          r.bar,
          t.sliceLeftWidth,
          t.sliceRightWidth,
          t.fillWidth,
          i.var_140 + (t._r6ecc321323dcc8 | 0),
          i.var_178 + (t._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
        ));
    } finally {
      e.unlock();
    }
  }
  prebakeForeground(e, r, t) {
    if (!(e == null || r == null)) {
      e.lock();
      try {
        let i = new Tt(e);
        (i.clear(0),
          i.drawLayer(r.bitmapData, t.var_2920, t.var_2978, ie.NORMAL, 255));
      } finally {
        e.unlock();
      }
    }
  }
  _rd1e84bc516feaa(e, r, t, i) {
    e.lock();
    try {
      let s = new Tt(e);
      s.clear(0);
      for (let o = 0; o <= (t.fillWidth | 0) + a.STRIPE_PERIOD_PX; o += a.STRIPE_PERIOD_PX)
        s.drawLayer(
          r.stripe,
          i.var_140 + (t._r6ecc321323dcc8 | 0) + o,
          i.var_178 + (t._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
        );
    } finally {
      e.unlock();
    }
  }
  _r7a2a01756c04f8() {
    return this.var_3319 != null
      ? this.var_3319
      : (this._r5b16043bcef54a(), this._rd0804e809ecf9b);
  }
  _ra54ba39b189d8c() {
    return this.var_3973 != null
      ? this.var_3973
      : (this._r5b16043bcef54a(), this._r6663b1b71b1358);
  }
  _r1064abb03303d3() {
    if (this._stripesOverlayCache != null) return this._stripesOverlayCache;
    let e = (4278190080 | this._rc3a77210c63093(this._r26a058940f9f41 & 16777215)) >>> 0;
    return (
      this._re2321d77369dd4 !== (e | 0) &&
        ((this._re2321d77369dd4 = e | 0),
        this._rd9f9b978a87fca(this.createTransparentBitmap, e, this._refc62a791247e3)),
      this.createTransparentBitmap
    );
  }
  _r5b16043bcef54a() {
    let e = this._r26a058940f9f41;
    this.var_4695 !== (e | 0) &&
      ((this.var_4695 = e | 0),
      this.drawBarBitmap(
        this._rd0804e809ecf9b,
        this._r6663b1b71b1358,
        e,
        this.var_5594,
        this._assets,
        this._overlays,
        this._layout,
        this._iconLayout,
      ));
  }
  drawBarBitmap(e, r, t, i, s, o, d, c) {
    (e.lock(), r.lock());
    try {
      let f = new Tt(e);
      (f.clear(0),
        f.drawTintedLayer(i, 0, 0, t, ie.NORMAL, 255),
        s.metallic != null &&
          this.drawFullFillLayer(f, s.metallic, ie.ADD, d, c, a.LIGHTING_SLICE_LEFT_WIDTH, a._r5c9356edbd5529));
      for (let l of o)
        this.drawFullFillLayer(f, l.layer, l.blendMode, d, c, l.sliceLeftWidth, l.sliceRightWidth);
      this.drawBarEndBitmap(r, e, d, c);
    } finally {
      (r.unlock(), e.unlock());
    }
  }
  _rd9f9b978a87fca(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0), i.drawTintedLayer(t, 0, 0, r, ie.NORMAL, 255));
    } finally {
      e.unlock();
    }
  }
  drawBarEndBitmap(e, r, t, i) {
    let s = new Tt(e);
    (s.clear(0),
      s.drawLayer(
        r,
        -(i.var_140 + (t._r6ecc321323dcc8 | 0) + (t.fillWidth | 0) - a.BAR_END_WIDTH),
        0,
        ie.NORMAL,
        255,
      ));
  }
  drawFullFillLayer(e, r, t, i, s, o, d) {
    e.drawRepeatedThreeSlice(
      r,
      o,
      d,
      i.fillWidth,
      s.var_140 + (i._r6ecc321323dcc8 | 0),
      s.var_178 + (i._r2a769a55bd8039 | 0),
      t,
      255,
    );
  }
  createFillClip(e, r = this._layout, t = this._iconLayout) {
    return new VariableFxClipRect(
      t.var_140 + (r._r6ecc321323dcc8 | 0),
      t.var_178 + (r._r2a769a55bd8039 | 0),
      e,
      r.fillHeight,
    );
  }
  _r3ab82f5ab67cbf(e) {
    return e >= a.BAR_END_MINIMUM_FILL_WIDTH;
  }
  _r9b6218786513dd(e) {
    return this._r3a5157ff181b80(e) - a.STRIPE_PERIOD_PX;
  }
  _r3a5157ff181b80(e) {
    return e <= 0 ? 0 : ((e / a.STRIPE_STEP_MS) | 0) % a.STRIPE_PERIOD_PX;
  }
  _rc3a77210c63093(e) {
    return VariableFxColorUtils._r07ede42d2c7c28(e, a.STRIPE_VALUE_SCALE);
  }
  resolveAssets() {
    let e = class_3649._r0826336a1ed27b(this.context.config.color, this.context.config.extra)._rdc05eda693c910,
      r = a._r0c7703774b1340;
    return {
      background: this.getLayer(r.background),
      bar: this.getLayer(r.bar),
      darkening: this.getLayer(e ? r._r3569e80ecbe147 : r.darkening),
      lighting: this.getLayer(e ? r._r6506a0a6675498 : r.lighting),
      metallic: e ? this.getLayer(r.metallic) : null,
      stripe: this.getLayer(r.stripe),
    };
  }
  _r456001cea078b3(e) {
    return [
      {
        blendMode: ie.MULTIPLY,
        layer: e.darkening,
        sliceLeftWidth: a._r5c9356edbd5529,
        sliceRightWidth: a._r5c9356edbd5529,
      },
      {
        blendMode: ie.ADD,
        layer: e.lighting,
        sliceLeftWidth: a.LIGHTING_SLICE_LEFT_WIDTH,
        sliceRightWidth: a._r5c9356edbd5529,
      },
    ];
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX striped progress bar layer '" + e + "'.");
    return r;
  }
  _rb068360d763b33(e) {
    let r = a.resolveStripedProgressBarFrameWidth(e);
    return {
      fillHeight: a.FILL_HEIGHT,
      fillWidth: Math.max(0, r - a._r634d9835cc749c * 2),
      _r6ecc321323dcc8: a._r634d9835cc749c,
      _r2a769a55bd8039: a._r89196e2dcc6d75,
      height: a.FRAME_HEIGHT,
      sliceLeftWidth: a._r634d9835cc749c,
      sliceRightWidth: a._r634d9835cc749c,
      width: r,
    };
  }
  resolveIconOverlayLayout(e, r) {
    return Ns.resolveBarIconOverlayLayout(e.width, e.height, r, Ns.resolveAlignment(this.context));
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e, r, !0, 0);
  }
}
