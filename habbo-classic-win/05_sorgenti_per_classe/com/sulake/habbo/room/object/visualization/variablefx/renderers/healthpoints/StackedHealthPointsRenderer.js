// Estratto da HabboAirLauncher.deobf.js, riga 288289.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/healthpoints/StackedHealthPointsRenderer.as

class a {
  constructor(e) {
    this._context = e;
    ((this.var_663 = class_3376.getOrCreate(e.config, () => this.createPrebake(e))),
      (this.var_2881 = this.resolveFillArgb(e)));
  }
  static {
    n(this, "StackedHealthPointsRenderer");
  }
  static _ra7d245c28b4e9d = {
    background: "variablefx_stacked_health_points_background",
    darkening: "variablefx_stacked_health_points_darkening",
    _r3569e80ecbe147: "variablefx_stacked_health_points_darkening_metallic",
    lighting: "variablefx_stacked_health_points_lighting",
    _r6506a0a6675498: "variablefx_stacked_health_points_lighting_metallic",
    metallic: "variablefx_stacked_health_points_metallic",
  };
  static HORIZONTAL_SPACING = 1;
  static VERTICAL_SPACING = 3;
  static MAX_ROWS = 20;
  var_2881 = -1;
  _frame = new _i5ec3143bd5c7df();
  _r9e3b62772cf495 = new mwe();
  _initialized = !1;
  var_3458 = "";
  var_663;
  var_3913 = 0;
  get frame() {
    return this._frame;
  }
  get isContinuous() {
    return !1;
  }
  updateData(e, r) {
    if (
      ((this._context = e),
      (this.var_2881 = this.resolveFillArgb(e)),
      (this.var_3913 = this._r8afc56c031a734()),
      !this._initialized || e.status.isInitialize)
    ) {
      (this._r9e3b62772cf495.var_1190(this.var_3913, r), (this._initialized = !0));
      return;
    }
    this._r9e3b62772cf495.setTarget(this.var_3913, r);
  }
  needsUpdate(e) {
    return (
      this._frame.bitmapData == null ||
      this._frame.width !== this.frameWidth ||
      this._frame.height !== this.frameHeight ||
      this.createRenderedSignature() !== this.var_3458 ||
      this._r9e3b62772cf495.needsUpdate(e, 1)
    );
  }
  update(e) {
    return !this._r9e3b62772cf495.update(e) && !this.needsUpdate(e)
      ? !1
      : (this.ensureFrameBitmap(),
        this.renderFrame(),
        (this.var_3458 = this.createRenderedSignature()),
        this._frame.updateId++,
        !0);
  }
  dispose() {
    this._frame._r14564fee3a9aa6();
  }
  get heartWidth() {
    return this.var_663.heartWidth;
  }
  get _r650efaf638394f() {
    return this.var_663._r650efaf638394f;
  }
  get heartsPerRow() {
    return a.resolveStackedHealthPointsPerRow(this._context.config.width);
  }
  get renderHeartCount() {
    return this._r9e3b62772cf495.visibleHeartCount;
  }
  get _r9209ec8e485e4b() {
    return Math.max(this.var_3913, this._r9e3b62772cf495.visibleHeartCount);
  }
  get _r27085d812e0693() {
    return Math.max(1, Math.ceil(this._r9209ec8e485e4b / this.heartsPerRow));
  }
  get columnCount() {
    let e = this._r9e3b62772cf495.visibleHeartCount;
    return Math.ceil(e / this.heartsPerRow) > 1
      ? this.heartsPerRow
      : Math.max(1, Math.min(this.heartsPerRow, e));
  }
  get frameWidth() {
    return this.columnCount * this.heartWidth + (this.columnCount - 1) * a.HORIZONTAL_SPACING;
  }
  get frameHeight() {
    return this._r27085d812e0693 * this._r650efaf638394f + (this._r27085d812e0693 - 1) * a.VERTICAL_SPACING;
  }
  static resolveStackedHealthPointsPerRow(e) {
    return e === VariableFxWidth.LARGE ? 5 : 3;
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
        let r = new Tt(e);
        r.clear(0);
        for (let t = 0; t < this.renderHeartCount; t++) {
          let i = this.resolveHeartOpacity(t);
          i > 0 && this.drawHeart(r, t, i);
        }
      } finally {
        e.unlock();
      }
    }
  }
  drawHeart(e, r, t) {
    let i = (r / this.heartsPerRow) | 0,
      s = r % this.heartsPerRow;
    e.drawLayer(
      this.var_663._r316a1335076288(this.var_2881 >>> 0),
      s * (this.heartWidth + a.HORIZONTAL_SPACING),
      (this._r27085d812e0693 - i - 1) * (this._r650efaf638394f + a.VERTICAL_SPACING),
      ie.NORMAL,
      t,
    );
  }
  resolveHeartOpacity(e) {
    return Math.max(0, Math.min(255, Math.round((this._r9e3b62772cf495._rf8461f9e828fee(e) + 1e-9) * 255)));
  }
  createRenderedSignature() {
    let e = [];
    for (let r = 0; r < this.renderHeartCount; r++) e.push(this.resolveHeartOpacity(r));
    return this.frameWidth + "x" + this.frameHeight + ":" + this.var_2881 + ":" + e.join(",");
  }
  _r8afc56c031a734() {
    let e = this._context.status.value - this._context.var_3827,
      r = this._context.var_2946 - this._context.var_3827;
    return !Number.isFinite(e) || !Number.isFinite(r)
      ? 0
      : Math.min(Math.max(0, e | 0), Math.max(0, r | 0), this.heartsPerRow * a.MAX_ROWS);
  }
  createPrebake(e) {
    return new StackedHealthPointsHeartPrebake(this.resolveAssets(e));
  }
  resolveAssets(e) {
    let r = class_3649._r0826336a1ed27b(e.config.color, e.config.extra)._rdc05eda693c910,
      t = a._ra7d245c28b4e9d,
      i = this.getLayer(e, r ? t._r3569e80ecbe147 : t.darkening),
      s = this.getLayer(e, r ? t._r6506a0a6675498 : t.lighting);
    return {
      background: this.getLayer(e, t.background),
      metallic: r ? this.getLayer(e, t.metallic) : null,
      overlays: [
        { blendMode: ie.MULTIPLY, layer: i },
        { blendMode: ie.ADD, layer: s },
      ],
    };
  }
  getLayer(e, r) {
    let t = e.assetProvider?._r198ea9f0f21815(r);
    if (t == null) throw new Error("Missing Variable FX stacked health points layer '" + r + "'.");
    return t;
  }
  resolveFillArgb(e) {
    return 4278190080 | class_3649.resolveTargetPaintColor(e.config.color, e.config.extra, e.progress, e.status.extra).rgb;
  }
}
