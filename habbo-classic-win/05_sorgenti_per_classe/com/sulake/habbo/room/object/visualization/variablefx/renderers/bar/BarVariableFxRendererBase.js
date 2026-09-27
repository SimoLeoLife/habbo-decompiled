// Estratto da HabboAirLauncher.deobf.js, riga 286009.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/BarVariableFxRendererBase.as
// Nome offuscato: _ica159a57a288c6

class a {
  constructor(e) {
    this._context = e;
  }
  static {
    n(this, "BarVariableFxRendererBase");
  }
  static FILL_COLOR_TRANSITION_MS = 300;
  _fillColor = new swe(a.FILL_COLOR_TRANSITION_MS);
  _frame = new _i5ec3143bd5c7df();
  _initialized = !1;
  _r5467d5853bd2e6 = -1;
  value = -1;
  var_1639 = new ag(1e-5, 0.003, 1e-4, 8e-6);
  get frame() {
    return this._frame;
  }
  get isContinuous() {
    return !1;
  }
  updateData(e, r) {
    if (((this._context = e), !this._initialized || e.status.isInitialize)) {
      (this.var_1639.var_1190(e.progress, r),
        this._fillColor.var_1190(this._rcf4509b4464b72(), r),
        (this._initialized = !0));
      return;
    }
    (this.var_1639.setTarget(e.progress, r),
      this._fillColor.setTarget(this._rcf4509b4464b72(), r));
  }
  needsUpdate(e) {
    return (
      this.hasRenderChange(e) ||
      this.var_1639.needsUpdate(e, this.progressPixelWidth) ||
      this._fillColor.needsUpdate(e)
    );
  }
  update(e) {
    return (
      this.advanceAnimation(e),
      this.hasRenderChange(e)
        ? (this.ensureFrameBitmap(),
          this.renderFrame(e),
          (this._r5467d5853bd2e6 = this._fillColor.value),
          (this.value = this._lastRenderedPixelWidth()),
          this.calculateFilledPixelWidth(e),
          this._frame.updateId++,
          !0)
        : !1
    );
  }
  dispose() {
    this._frame._r14564fee3a9aa6();
  }
  get context() {
    return this._context;
  }
  get _r26a058940f9f41() {
    return this._fillColor.argb;
  }
  get _r355679f9b275be() {
    return this._fillColor.value;
  }
  get _r2d143cbe2547ea() {
    return this.var_1639.value;
  }
  get _rbac222daf2632a() {
    return this._frame;
  }
  get frameWidth() {
    return 0;
  }
  get frameHeight() {
    return 0;
  }
  get progressPixelWidth() {
    return 0;
  }
  _lastRenderedPixelWidth() {
    return Math.max(0, Math.min(this.progressPixelWidth, (this._r2d143cbe2547ea * this.progressPixelWidth) | 0));
  }
  createFrameBitmap(e, r) {
    return new A(e, r, !0, 0);
  }
  renderFrame(e) {}
  _r32b780ad42db07(e) {
    return !1;
  }
  calculateFilledPixelWidth(e) {}
  advanceAnimation(e) {
    (this.var_1639.update(e), this._fillColor.update(this._rcf4509b4464b72(), e));
  }
  hasRenderChange(e) {
    let r = this._lastRenderedPixelWidth();
    return this._frame.bitmapData == null ||
      this._frame.width !== this.frameWidth ||
      this._frame.height !== this.frameHeight ||
      r !== this.value
      ? !0
      : (this._fillColor.value !== this._r5467d5853bd2e6 && (r > 0 || this.value > 0)) ||
          this._r32b780ad42db07(e);
  }
  ensureFrameBitmap() {
    if (
      this._frame.bitmapData != null &&
      this._frame.width === this.frameWidth &&
      this._frame.height === this.frameHeight
    )
      return;
    this._frame._r14564fee3a9aa6();
    let e = this.createFrameBitmap(this.frameWidth, this.frameHeight);
    if (e == null) throw new Error("Variable FX bar renderer could not allocate a frame bitmap.");
    ((this._frame.bitmapData = e),
      (this._frame.nativeTexture = null),
      (this._frame.width = e.width),
      (this._frame.height = e.height),
      (this._r5467d5853bd2e6 = -1),
      (this.value = -1));
  }
  _rcf4509b4464b72() {
    return {
      color: this._context.config.color,
      extra: this._context.config.extra,
      progress: this._r2d143cbe2547ea,
      _r14ffa1101ec65b: this._context.status.extra,
    };
  }
}
