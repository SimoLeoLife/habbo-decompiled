// Estratto da HabboAirLauncher.deobf.js, riga 286706.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/ClassicProgressBarRenderer.as

class a extends hb {
  static {
    n(this, "ClassicProgressBarRenderer");
  }
  static _rf293b68d5ac324 = {
    background: "variablefx_classic_bar_background",
    bar: "variablefx_classic_bar_fill",
    darkening: "variablefx_classic_bar_darkening",
    lighting: "variablefx_classic_bar_lighting",
    metallic: "variablefx_classic_bar_metallic",
  };
  static _r3891fdc6ad7b0a = {
    _r6ecc321323dcc8: 1,
    _r2a769a55bd8039: 1,
    sliceLeftWidth: 2,
    sliceRightWidth: 2,
  };
  static _r93222d6684362a = { leftWidth: 3, rightWidth: 3 };
  _assets;
  var_4417;
  _rd0804e809ecf9b = null;
  var_4695 = -1;
  _r6663b1b71b1358 = null;
  var_3973;
  var_3319;
  _icon;
  _iconLayout;
  _layout;
  constructor(e) {
    super(e);
    let r = class_3376.getOrCreate(e.config, () => this.createPrebake(e)).data;
    ((this._assets = r.assets),
      (this.var_4417 = r.backgroundPrebake),
      (this.var_3973 = r.barEndPrebake),
      (this.var_3319 = r.barPrebake),
      (this._icon = r.icon),
      (this._iconLayout = r.iconLayout),
      (this._layout = r.layout),
      this.var_3319 == null &&
        ((this._rd0804e809ecf9b = this._rc5cebd2cfa1126(
          this._iconLayout.frameWidth,
          this._iconLayout.frameHeight,
        )),
        (this._r6663b1b71b1358 = this._rc5cebd2cfa1126(
          this.barEndWidthPx,
          this._layout.height,
        ))));
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
  get assetNames() {
    return a._rf293b68d5ac324;
  }
  get _re3a188096741de() {
    return a._r3891fdc6ad7b0a;
  }
  get _r473d221aaa099d() {
    return Ns.BAR_ICON_CONTENT_Y_OFFSET_PX;
  }
  get layerDescription() {
    return "classic progress bar";
  }
  get _r99bb53ff974bc5() {
    return a._r93222d6684362a;
  }
  get barEndWidthPx() {
    return 2;
  }
  get _r93fbe96d078034() {
    return 4;
  }
  get _r3e0f90c727fce9() {
    return !0;
  }
  get barEndSourceRightPaddingPx() {
    return 1;
  }
  get barEndBaseSourceRightPaddingPx() {
    return this.barEndSourceRightPaddingPx;
  }
  get usesSeparateBarEndOverlaySource() {
    return !1;
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
            (t.drawLayer(this._r7a2a01756c04f8(), 0, 0, ie.NORMAL, 255, this._r46dc5c72276161(i)),
            this._r3ab82f5ab67cbf(i) &&
              t.drawLayer(
                this._ra54ba39b189d8c(),
                this._iconLayout.var_140 +
                  (this._layout._r6ecc321323dcc8 | 0) +
                  i -
                  this.barEndWidthPx,
                this._iconLayout.var_178,
                ie.NORMAL,
                255,
                this._r4336e7f3fc7dc1(i),
              )),
          this.drawIconOverlay(t, this._layout, this._iconLayout, this._icon));
      } finally {
        r.unlock();
      }
    }
  }
  dispose() {
    (super.dispose(),
      this._rd0804e809ecf9b?.dispose(),
      (this._rd0804e809ecf9b = null),
      this._r6663b1b71b1358?.dispose(),
      (this._r6663b1b71b1358 = null));
  }
  drawIconOverlay(e, r, t, i) {
    i != null && e.drawLayer(i.bitmapData, t.var_2920, t.var_2978, ie.NORMAL, 255);
  }
  resolveFrameWidth(e) {
    switch (e) {
      case VariableFxWidth.const_463:
        return 29;
      case VariableFxWidth.SMALL:
        return 45;
      case VariableFxWidth.MEDIUM:
        return 61;
      case VariableFxWidth.LARGE:
        return 77;
      case VariableFxWidth.EXTRA_LARGE:
        return 93;
      default:
        return 61;
    }
  }
  _r753571e06c3542(e, r) {
    return [
      { blendMode: ie.ADD, layer: r },
      { blendMode: ie.MULTIPLY, layer: e },
      { blendMode: ie.ADD, layer: r },
      { blendMode: ie.MULTIPLY, layer: e },
    ];
  }
  _r82b9a979acd5ef(e, r) {
    return [
      { blendMode: ie.MULTIPLY, layer: e },
      { blendMode: ie.ADD, layer: r },
    ];
  }
  createPrebake(e) {
    let r = this._rb068360d763b33(e.config.width),
      t = this.resolveAssets(),
      i = Ns.resolve(e),
      s = this.resolveIconOverlayLayout(r, i),
      o = class_3649._r0826336a1ed27b(e.config.color, e.config.extra),
      d = class_3649.isDynamicPaintColor(e.config.color),
      c = this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      f = d ? null : this._rc5cebd2cfa1126(s.frameWidth, s.frameHeight),
      l = d ? null : this._rc5cebd2cfa1126(this.barEndWidthPx, r.height);
    return (
      this.prebakeBackground(c, t, r, s),
      f != null && l != null && this.drawBarBitmap(f, l, (4278190080 | o.rgb) >>> 0, t, r, s),
      new _i011e37bea19c9d(
        {
          assets: t,
          backgroundPrebake: c,
          barEndPrebake: l,
          barPrebake: f,
          icon: i,
          iconLayout: s,
          layout: r,
        },
        () => {
          (c.dispose(), f?.dispose(), l?.dispose());
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
  _r5b16043bcef54a() {
    let e = this._r26a058940f9f41;
    this.var_4695 !== (e | 0) &&
      ((this.var_4695 = e | 0),
      this.drawBarBitmap(
        this._rd0804e809ecf9b,
        this._r6663b1b71b1358,
        e,
        this._assets,
        this._layout,
        this._iconLayout,
      ));
  }
  drawBarBitmap(e, r, t, i, s, o) {
    (e.lock(), r.lock());
    try {
      let d = new Tt(e),
        c = o.var_140,
        f = o.var_178;
      (d.clear(0),
        d.drawThreeSlice(
          i.bar,
          s.sliceLeftWidth,
          s.sliceRightWidth,
          s.fillWidth,
          c + (s._r6ecc321323dcc8 | 0),
          f + (s._r2a769a55bd8039 | 0),
          ie.NORMAL,
          255,
          this.fillY(s, o),
          t,
        ),
        i.metallic != null && this.drawOverlayLayer(d, i.metallic, ie.ADD, s.fillWidth, c, f, s));
      for (let l of i.overlays) this.drawOverlayLayer(d, l.layer, l.blendMode, s.fillWidth, c, f, s);
      this.drawBarEndBitmap(r, e, i, s, o);
    } finally {
      (r.unlock(), e.unlock());
    }
  }
  drawBarEndBitmap(e, r, t, i, s) {
    let o = new Tt(e),
      d = s.var_140 + (i.width | 0) - this.barEndSourceRightPaddingPx - this.barEndWidthPx,
      c = s.var_178;
    if ((o.clear(0), this.usesSeparateBarEndOverlaySource)) {
      ((d = s.var_140 + (i.width | 0) - this.barEndBaseSourceRightPaddingPx - this.barEndWidthPx),
        o.drawLayer(r, -d, -c, ie.NORMAL, 255),
        t.metallic != null && this.drawOverlayEndLayer(o, t.metallic, ie.ADD, i));
      for (let f of t.overlays) this.drawOverlayEndLayer(o, f.layer, f.blendMode, i);
      return;
    }
    o.drawLayer(r, -d, -c, ie.NORMAL, 255);
  }
  drawOverlayEndLayer(e, r, t, i) {
    let s = (i.fillWidth | 0) - this.barEndSourceRightPaddingPx - this.barEndWidthPx;
    e.drawThreeSlice(
      r,
      this._r99bb53ff974bc5.leftWidth,
      this._r99bb53ff974bc5.rightWidth,
      i.fillWidth,
      -s,
      i._r2a769a55bd8039,
      t,
      255,
    );
  }
  drawOverlayLayer(e, r, t, i, s, o, d, c = null) {
    i <= 0 ||
      e.drawThreeSlice(
        r,
        this._r99bb53ff974bc5.leftWidth,
        this._r99bb53ff974bc5.rightWidth,
        Math.min(d.fillWidth | 0, i),
        s + (d._r6ecc321323dcc8 | 0),
        o + (d._r2a769a55bd8039 | 0),
        t,
        255,
        c,
      );
  }
  _r46dc5c72276161(e) {
    return new VariableFxClipRect(
      this._iconLayout.var_140 + (this._layout._r6ecc321323dcc8 | 0),
      this._iconLayout.var_178 + (this._layout._r2a769a55bd8039 | 0),
      this._r3e0f90c727fce9 ? e : Math.max(0, e - this.barEndWidthPx),
      this._layout.fillHeight,
    );
  }
  _r3ab82f5ab67cbf(e) {
    return e >= this._r93fbe96d078034;
  }
  _r4336e7f3fc7dc1(e) {
    return this.fillY(this._layout, this._iconLayout);
  }
  fillY(e, r) {
    return new VariableFxClipRect(
      r.var_140 + (e._r6ecc321323dcc8 | 0),
      r.var_178 + (e._r2a769a55bd8039 | 0),
      e.fillWidth,
      e.fillHeight,
    );
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e, r, !0, 0);
  }
  resolveAssets() {
    let e = class_3649._r0826336a1ed27b(this.context.config.color, this.context.config.extra),
      r = this.assetNames,
      t = this.getLayer(r.darkening),
      i = this.getLayer(r.lighting);
    return {
      background: this.getLayer(r.background),
      bar: this.getLayer(r.bar),
      metallic: e._rdc05eda693c910 && r.metallic != null ? this.getLayer(r.metallic) : null,
      overlays: e._rdc05eda693c910 ? this._r753571e06c3542(t, i) : this._r82b9a979acd5ef(t, i),
    };
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX " + this.layerDescription + " layer '" + e + "'.");
    return r;
  }
  _rb068360d763b33(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(this.assetNames.background),
      t = this._re3a188096741de,
      i = this.resolveFrameWidth(e);
    if (r == null)
      throw new Error(
        "Missing Variable FX " + this.layerDescription + " background layer for layout resolution.",
      );
    return {
      fillHeight: Math.max(1, r.height - (t._r2a769a55bd8039 | 0) * 2),
      fillWidth: Math.max(0, i - (t._r6ecc321323dcc8 | 0) * 2),
      _r6ecc321323dcc8: t._r6ecc321323dcc8 | 0,
      _r2a769a55bd8039: t._r2a769a55bd8039 | 0,
      height: r.height,
      sliceLeftWidth: t.sliceLeftWidth | 0,
      sliceRightWidth: t.sliceRightWidth | 0,
      width: i,
    };
  }
  resolveIconOverlayLayout(e, r) {
    return Ns.resolveBarIconOverlayLayout(
      e.width,
      e.height,
      r,
      Ns.resolveAlignment(this.context),
      this._r473d221aaa099d,
    );
  }
}
