// Extracted from HabboAirLauncher.deobf.js, line 289384.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelWithProgressRenderer.as

class a {
  static {
    n(this, "LevelWithProgressRenderer");
  }
  static _rf2a2b0e5caf703 = {
    background: "variablefx_level_with_progress_background",
    darkening: "variablefx_level_with_progress_darkening",
    _r3569e80ecbe147: "variablefx_level_with_progress_darkening_metallic",
    frame: "variablefx_level_with_progress_frame",
    lighting: "variablefx_level_with_progress_lighting",
    _r6506a0a6675498: "variablefx_level_with_progress_lighting_metallic",
    numbers: "variablefx_numbers_large",
  };
  static FRAME_HEIGHT = 21;
  static PROGRESS_BAR_OVERLAP_WIDTH = 3;
  var_1772 = null;
  _badgeRenderKey = "";
  _context;
  _frame = new UnkClass_5ec314();
  var_3458 = "";
  _r3262c8d749092c = new oh();
  _r248aab6b3b2127 = !1;
  var_663;
  _r8970afe1875d8b = null;
  _ra13de0c45227ca = null;
  constructor(e) {
    ((this._context = e),
      (this.var_663 = class_3376.getOrCreate(e.config, () => this.createPrebake(e))),
      this.initializeProgressRenderer(e));
  }
  get frame() {
    return this._frame;
  }
  get isContinuous() {
    return this._r8970afe1875d8b != null && this._r8970afe1875d8b.isContinuous;
  }
  updateData(e, r) {
    ((this._context = e), this.updateLevelProgressTarget(e, r), this._rb7a1074ac30fa4(e, r));
  }
  needsUpdate(e) {
    return this._r8a2143610dbd19()
      ? !1
      : this._r3262c8d749092c.needsUpdate(e, this._r518a9f4d13d69e) ||
          (this._r8970afe1875d8b != null && this._r8970afe1875d8b.needsUpdate(e)) ||
          this.hasRenderChange();
  }
  update(e) {
    return this._r8a2143610dbd19() ||
      (this._r3262c8d749092c.update(e) && this._rb7a1074ac30fa4(this._context, e),
      !(this._r8970afe1875d8b != null && this._r8970afe1875d8b.update(e)) && !this.hasRenderChange())
      ? !1
      : (this.ensureFrameBitmap(),
        this.renderFrame(),
        (this.var_3458 = this.createRenderedSignature()),
        this._frame.updateId++,
        !0);
  }
  dispose() {
    (this.disposeCurrentBadgeRender(), this._r90d1ff45964340(), this._frame._r14564fee3a9aa6());
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
  get frameWidth() {
    let e = this._r8970afe1875d8b == null ? 0 : this._r8970afe1875d8b.frame.width;
    return e <= 0 ? this._ref70c804704e23 : this._r3825ac244153f4 + e;
  }
  get frameHeight() {
    return Math.max(
      a.FRAME_HEIGHT,
      this._r8970afe1875d8b == null ? 0 : this._r8970afe1875d8b.frame.height,
    );
  }
  get _r3825ac244153f4() {
    return Math.max(0, this._ref70c804704e23 - a.PROGRESS_BAR_OVERLAP_WIDTH);
  }
  get _r4c55c80400e299() {
    let e = this._r8970afe1875d8b == null ? 0 : this._r8970afe1875d8b.frame.height;
    return e <= 0 ? 0 : Math.max(0, ((this.frameHeight - e) / 2) | 0);
  }
  get _r518a9f4d13d69e() {
    return Math.max(
      1,
      this._r8970afe1875d8b == null ? this._ref70c804704e23 : this._r8970afe1875d8b.frame.width,
    );
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
      t = this.resolveAssets(e, !!r._rdc05eda693c910);
    return new UnkClass_9dcec8(new ug(t, { height: a.FRAME_HEIGHT, width: 21, x: 0, y: 0 }));
  }
  resolveAssets(e, r) {
    let t = a._rf2a2b0e5caf703;
    return {
      background: this.getLayer(e, t.background),
      darkening: this.getLayer(e, r ? t._r3569e80ecbe147 : t.darkening),
      frame: this.getLayer(e, t.frame),
      lighting: this.getLayer(e, r ? t._r6506a0a6675498 : t.lighting),
      numbers: this.getLayer(e, t.numbers),
    };
  }
  getLayer(e, r) {
    let t = e.assetProvider?._r198ea9f0f21815(r);
    if (t == null) throw new Error("Missing Variable FX level with progress layer '" + r + "'.");
    return t;
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
          t = this._r8970afe1875d8b == null ? null : this._r8970afe1875d8b.frame.bitmapData,
          i = this.getCurrentBadgeRender();
        (r.clear(0),
          t != null && r.drawLayer(t, this._r3825ac244153f4, this._r4c55c80400e299, ie.NORMAL, 255),
          this.var_663._rc0fe48b2354652.drawBadge(r, i, this._r792dca0475928e, 0, 0));
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
  initializeProgressRenderer(e) {
    let r = this.resolveSubRendererId(e),
      t = r == null ? null : class_2881.resolveById(r | 0);
    if (r == null || t == null || t === e.config.renderer) return;
    let i = this.resolveSubRendererFactory(e, r | 0, t);
    i != null &&
      ((this._ra13de0c45227ca = this.var_663._r0529ec95b0e982(() =>
        this.createProgressRendererConfig(e, r | 0, t),
      )),
      (this._r8970afe1875d8b = i(this._rdf6e3a6a1b67d7(e))));
  }
  _rb7a1074ac30fa4(e, r) {
    this._r8970afe1875d8b != null && this._r8970afe1875d8b.updateData(this._rdf6e3a6a1b67d7(e), r);
  }
  resolveSubRendererId(e) {
    let r = class_3649.readExtra(e.config.extra, "sub_renderer");
    if (r == null || r.length === 0) return null;
    let t = Number(r);
    return Number.isFinite(t) ? t | 0 : null;
  }
  resolveSubRendererFactory(e, r, t) {
    return e.var_2509 == null
      ? null
      : e.var_2509._r53b0234aebe9d4(r) || e.var_2509.resolve("progress_bar", t);
  }
  createProgressRendererConfig(e, r, t) {
    let i = e.config.color === class_3649.DYNAMIC_LEVELLING ? class_3649.DYNAMIC_DELEGATED : e.config.color;
    return new G1(
      "progress_bar",
      t,
      t,
      e.config.width,
      i,
      0,
      1,
      e.config.extra,
      e.config.categoryId,
      e.config.var_780,
      r,
    );
  }
  _rdf6e3a6a1b67d7(e) {
    let r = this._r3262c8d749092c._r2d143cbe2547ea;
    return new VariableFxRendererContext(
      e.assetProvider,
      this._ra13de0c45227ca,
      new VariableFxStatusData(r, null, null, this._r8a6afad6c3209c(this._ra13de0c45227ca), !0),
      0,
      1,
      r,
      e.var_2509,
    );
  }
  _r90d1ff45964340() {
    (this._r8970afe1875d8b != null && (this._r8970afe1875d8b.dispose(), (this._r8970afe1875d8b = null)),
      (this._ra13de0c45227ca = null));
  }
  updateLevelProgressTarget(e, r) {
    let t = this.resolveLevelProgressSample(e);
    if (!this._r248aab6b3b2127 || e.status.isInitialize) {
      (this._r3262c8d749092c.var_1190(t, r), (this._r248aab6b3b2127 = !0));
      return;
    }
    this._r3262c8d749092c.setTarget(t, r);
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
  _r8a6afad6c3209c(e) {
    let r = new B();
    if (e.color !== class_3649.DYNAMIC_DELEGATED) {
      let t =
        e.color === class_3649.DYNAMIC_TEAM_COLOR
          ? class_3649.readExtra(this._context.status.extra, "delegated_color")
          : null;
      return (t != null && r.add("delegated_color", t), r);
    }
    return (r.add("delegated_color", this.formatRgbHex(this.displayedFrameArgb & 16777215)), r);
  }
  formatRgbHex(e) {
    let r = (e & 16777215).toString(16);
    for (; r.length < 6;) r = "0" + r;
    return "#" + r;
  }
}
