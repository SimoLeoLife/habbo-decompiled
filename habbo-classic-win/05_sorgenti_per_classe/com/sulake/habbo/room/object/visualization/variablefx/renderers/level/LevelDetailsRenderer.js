// Extracted from HabboAirLauncher.deobf.js, line 289014.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelDetailsRenderer.as

class a {
  static {
    n(this, "LevelDetailsRenderer");
  }
  static BADGE_X = 5;
  static BADGE_Y = 4;
  static _r0b135cccb830fc = 21;
  static _r4975f406253625 = 21;
  static BAR_SPACING_X = 3;
  static BAR_Y = 19;
  static NUMBER_Y = 7;
  static _raa0410d27b27e2 = 6;
  static FRAME_HEIGHT = 29;
  static _r7ab6f668244605 = a.BADGE_X + a._r0b135cccb830fc + a.BAR_SPACING_X;
  static _r265fc63f06d3a4 = a._raa0410d27b27e2;
  static _rae454bc10cd1d3 = {
    background: "variablefx_level_details_background",
    darkening: "variablefx_level_details_darkening",
    _r3569e80ecbe147: "variablefx_level_details_darkening_metallic",
    frame: "variablefx_level_details_frame",
    lighting: "variablefx_level_details_lighting",
    _r6506a0a6675498: "variablefx_level_details_lighting_metallic",
    numbers: "variablefx_numbers_large",
    _rb780ad28f80470: "variablefx_numbers_small",
  };
  var_1772 = null;
  _badgeRenderKey = "";
  _context;
  _frame = new UnkClass_5ec314();
  var_5827 = 0;
  _r9c81e682746f4c = "";
  var_3458 = "";
  _r3262c8d749092c = new oh();
  _r248aab6b3b2127 = !1;
  _r782a97be8ef65b = new ywe();
  var_663;
  _r8970afe1875d8b;
  _ra13de0c45227ca;
  constructor(e) {
    ((this._context = e),
      (this.var_663 = class_3376.getOrCreate(e.config, () => this.createPrebake(e))),
      (this._ra13de0c45227ca = this.var_663._r0529ec95b0e982(() => this.createProgressRendererConfig(e))),
      (this._r8970afe1875d8b = new aX(this._rdf6e3a6a1b67d7(e))));
  }
  get frame() {
    return this._frame;
  }
  get isContinuous() {
    return this._r8970afe1875d8b.isContinuous;
  }
  updateData(e, r) {
    this._context = e;
    let t = this.resolveLevelProgressSample(e);
    (this.updateLevelProgressTarget(e, t, r), this._r15309ae3883076(e, t), this._rb7a1074ac30fa4(e, r));
  }
  needsUpdate(e) {
    return this._r8a2143610dbd19()
      ? !1
      : this._r3262c8d749092c.needsUpdate(e, this._r518a9f4d13d69e) ||
          this._r8970afe1875d8b.needsUpdate(e) ||
          this.hasRenderChange() ||
          this.hasFinalNumberRenderChange();
  }
  update(e) {
    return this._r8a2143610dbd19() ||
      (this._r3262c8d749092c.update(e) && this._rb7a1074ac30fa4(this._context, e),
      !this._r8970afe1875d8b.update(e) && !this.hasRenderChange() && !this.hasFinalNumberRenderChange())
      ? !1
      : (this.ensureFrameBitmap(),
        this.renderFrame(),
        (this.var_3458 = this.createRenderedSignature()),
        this._frame.updateId++,
        !0);
  }
  dispose() {
    (this.disposeCurrentBadgeRender(), this._r8970afe1875d8b.dispose(), this._frame._r14564fee3a9aa6());
  }
  get _r792dca0475928e() {
    return String(this._r3262c8d749092c._levelProgress);
  }
  get _r690fbf8e57c223() {
    return Math.max(1, this._r792dca0475928e.length);
  }
  get _ref70c804704e23() {
    return this.var_663._rc0fe48b2354652.resolveFrameWidth(this._r690fbf8e57c223);
  }
  get _r3825ac244153f4() {
    return a.BADGE_X + this._ref70c804704e23 + a.BAR_SPACING_X;
  }
  get _r3c1784e5748687() {
    return this._r8970afe1875d8b.frame.width > 0
      ? this._r8970afe1875d8b.frame.width
      : this._rd111fc8615b794(this._context.config.width);
  }
  get frameWidth() {
    return this._r3825ac244153f4 + this._r3c1784e5748687 + a._raa0410d27b27e2;
  }
  get frameHeight() {
    return a.FRAME_HEIGHT;
  }
  get _r518a9f4d13d69e() {
    return Math.max(1, this._r3c1784e5748687);
  }
  get displayedFrameArgb() {
    return (
      (4278190080 |
        class_3649.resolveTargetPaintColor(
          this._context.config.color,
          this._context.config.extra,
          this._r3262c8d749092c._r2d143cbe2547ea,
          this.createDisplayedLevelStatusExtra(),
        ).rgb) >>>
      0
    );
  }
  createPrebake(e) {
    let r = class_3649._r0826336a1ed27b(e.config.color, e.config.extra),
      t = this._r9a47c9f32d3a1b(!!r._rdc05eda693c910),
      i = this.getLayer(a._rae454bc10cd1d3.background),
      s = new ug(t, {
        height: a._r4975f406253625,
        width: a._r0b135cccb830fc,
        x: a.BADGE_X,
        y: a.BADGE_Y,
      });
    return new UnkClass_446b73(i, s, new wwe(this.getLayer(a._rae454bc10cd1d3._rb780ad28f80470)));
  }
  _r9a47c9f32d3a1b(e) {
    let r = a._rae454bc10cd1d3;
    return {
      background: null,
      darkening: this.getLayer(e ? r._r3569e80ecbe147 : r.darkening),
      frame: this.getLayer(r.frame),
      lighting: this.getLayer(e ? r._r6506a0a6675498 : r.lighting),
      numbers: this.getLayer(r.numbers),
    };
  }
  getLayer(e) {
    let r = this._context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX level details layer '" + e + "'.");
    return r;
  }
  ensureFrameBitmap() {
    if (
      this._frame.bitmapData != null &&
      this._frame.width === this.frameWidth &&
      this._frame.height === this.frameHeight
    )
      return;
    this._frame._r14564fee3a9aa6();
    let e = new A(this.frameWidth, this.frameHeight, !0, 0);
    ((this._frame.bitmapData = e),
      (this._frame.nativeTexture = null),
      (this._frame.width = e.width),
      (this._frame.height = e.height),
      (this.var_3458 = ""));
  }
  renderFrame() {
    let e = this._frame.bitmapData;
    if (e != null) {
      e.lock();
      try {
        let r = new Tt(e),
          t = this._r690fbf8e57c223,
          i = this.var_663._rf93cc1efdcd25b(t, this.frameWidth),
          s = this._r8970afe1875d8b.frame.bitmapData,
          o = this.getCurrentBadgeRender(),
          d = this._ra05434317e5bd8();
        try {
          (r.clear(0),
            r.drawLayer(i.bitmapData, 0, 0, ie.NORMAL, 255),
            s != null && r.drawLayer(s, this._r3825ac244153f4, a.BAR_Y, ie.NORMAL, 255),
            this.var_663._r4005dc89d5506f.draw(r, d, this._rba7819dd949f9c(d), a.NUMBER_Y),
            this.var_663._rc0fe48b2354652.drawBadge(
              r,
              o,
              this._r792dca0475928e,
              a.BADGE_X,
              a.BADGE_Y,
            ),
            (this.var_5827 = t),
            (this._r9c81e682746f4c = d.key));
        } finally {
          i._r87797ec5168f75 === !0 && i.bitmapData.dispose();
        }
      } finally {
        e.unlock();
      }
    }
  }
  getCurrentBadgeRender() {
    let e = this._r690fbf8e57c223 + ":" + String(this.displayedFrameArgb);
    return this.var_1772 != null && this._badgeRenderKey === e
      ? this.var_1772
      : (this.disposeCurrentBadgeRender(),
        (this.var_1772 = this.var_663._rc0fe48b2354652._rc0244cf7f46859(
          this._r690fbf8e57c223,
          this.displayedFrameArgb,
        )),
        (this._badgeRenderKey = e),
        this.var_1772);
  }
  disposeCurrentBadgeRender() {
    (this.var_663?._rc0fe48b2354652?._r3bb25c46b9c43f(this.var_1772),
      (this.var_1772 = null),
      (this._badgeRenderKey = ""));
  }
  createRenderedSignature() {
    return (
      this.frameWidth +
      "x" +
      this.frameHeight +
      ":" +
      this._r3262c8d749092c._levelProgress +
      ":" +
      this.displayedFrameArgb
    );
  }
  hasRenderChange() {
    return (
      this._frame.bitmapData == null ||
      this._frame.width !== this.frameWidth ||
      this._frame.height !== this.frameHeight ||
      this.createRenderedSignature() !== this.var_3458
    );
  }
  _r8a2143610dbd19() {
    return this.var_663 == null || this.var_663.disposed;
  }
  hasFinalNumberRenderChange() {
    return (
      this._r782a97be8ef65b.isAtTarget(this._r3262c8d749092c._rba0bbc86bfbf67) &&
      this._ra05434317e5bd8().key !== this._r9c81e682746f4c
    );
  }
  _ra05434317e5bd8() {
    let e = this._r782a97be8ef65b.resolveDisplay(this._r3262c8d749092c._rba0bbc86bfbf67);
    return this.var_663._r4005dc89d5506f.createRenderPlan(
      e.currentText,
      e._r95bbec0759cd56,
      this._r3c1784e5748687,
    );
  }
  _rba7819dd949f9c(e) {
    return this._r3825ac244153f4 + (((this._r3c1784e5748687 - (e.width | 0)) / 2) | 0);
  }
  _rb7a1074ac30fa4(e, r) {
    this._r8970afe1875d8b.updateData(this._rdf6e3a6a1b67d7(e), r);
  }
  createProgressRendererConfig(e) {
    let r = e.config.color === class_3649.DYNAMIC_LEVELLING ? class_3649.DYNAMIC_DELEGATED : e.config.color;
    return new G1(
      "progress_bar",
      class_2881.CLASSIC_MINI_PROGRESS,
      class_2881.CLASSIC_MINI_PROGRESS,
      e.config.width,
      r,
      0,
      1,
      this.createProgressRendererConfigExtra(e),
      e.config.categoryId,
      e.config.var_780,
      class_2881.CLASSIC_MINI_PROGRESS_ID,
    );
  }
  createProgressRendererConfigExtra(e) {
    let r = new B(),
      t = class_3649.readExtra(e.config.extra, "color"),
      i = class_3649.readExtra(e.config.extra, "metallic");
    return (t != null && r.add("color", t), i != null && r.add("metallic", i), r);
  }
  _rdf6e3a6a1b67d7(e) {
    let r = this._r3262c8d749092c._r2d143cbe2547ea;
    return new VariableFxRendererContext(
      e.assetProvider,
      this._ra13de0c45227ca,
      new VariableFxStatusData(r, null, null, this._r8a6afad6c3209c(), !0),
      0,
      1,
      r,
      e.var_2509,
    );
  }
  updateLevelProgressTarget(e, r, t) {
    if (!this._r248aab6b3b2127 || e.status.isInitialize) {
      (this._r3262c8d749092c.var_1190(r, t), (this._r248aab6b3b2127 = !0));
      return;
    }
    this._r3262c8d749092c.setTarget(r, t);
  }
  _r15309ae3883076(e, r) {
    let t = {
      maxValue: e.var_2946,
      _re01717f1b7075f: r,
      value: Math.min(e.var_2946, e.status.value),
    };
    if (e.status.isInitialize) {
      this._r782a97be8ef65b.var_1190(t);
      return;
    }
    this._r782a97be8ef65b.setTarget(t, this._r3262c8d749092c._rba0bbc86bfbf67);
  }
  resolveLevelProgressSample(e) {
    let r = Number(class_3649.readExtra(e.status.extra, "current_level")),
      t = Number(class_3649.readExtra(e.status.extra, "max_level")),
      i = String(class_3649.readExtra(e.status.extra, "is_maxed")).toLowerCase() === "true",
      s = oh.resolveLevelProgressSampleProgress(e.progress, e.status.value, e.var_3827, e.var_2946, i);
    return new P0(r, s, i, Number.isFinite(t) ? t : null);
  }
  createDisplayedLevelStatusExtra() {
    let e = new B();
    (e.add("max_level", class_3649.readExtra(this._context.status.extra, "max_level")),
      e.add("is_maxed", class_3649.readExtra(this._context.status.extra, "is_maxed")),
      e.add("current_level", String(this._r3262c8d749092c._levelProgress)));
    let r = class_3649.readExtra(this._context.status.extra, "delegated_color");
    return (r != null && e.add("delegated_color", r), e);
  }
  _r8a6afad6c3209c() {
    let e = new B();
    if (this._ra13de0c45227ca.color !== class_3649.DYNAMIC_DELEGATED) {
      let r =
        this._ra13de0c45227ca.color === class_3649.DYNAMIC_TEAM_COLOR
          ? class_3649.readExtra(this._context.status.extra, "delegated_color")
          : null;
      return (r != null && e.add("delegated_color", r), e);
    }
    return (e.add("delegated_color", this.formatRgbHex(this.displayedFrameArgb & 16777215)), e);
  }
  _rd111fc8615b794(e) {
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
  formatRgbHex(e) {
    let r = (e & 16777215).toString(16);
    for (; r.length < 6;) r = "0" + r;
    return "#" + r;
  }
}
