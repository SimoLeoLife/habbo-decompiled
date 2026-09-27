// Estratto da HabboAirLauncher.deobf.js, riga 353982.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxPreviewPreset.as
// Nome offuscato: _ib0d9b15328b4d7

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxPreviewPreset");
  }
  static PREVIEW_WIDTH = 280;
  static PREVIEW_HEIGHT = 96;
  static PREVIEW_ANIMATION_INTERVAL_MS = 16;
  static PREVIEW_ZOOM = 2;
  var_479;
  _previewStatus;
  var_541 = null;
  var_2234 = null;
  _rendererRegistry = null;
  _rd0df026c1fc6bd = null;
  var_2663 = 1;
  _re7a03a855dfd32() {
    ((this.var_479 = this.var_102._r7f887955812c30(!0)),
      this.var_479.setBitmapSize(a.PREVIEW_WIDTH, a.PREVIEW_HEIGHT),
      (this.var_479.bitmapWindow.fitSizeToContents = !1),
      (this.var_479.bitmapWindow.disposesBitmap = !1),
      (this._previewStatus = new GWe()),
      (this._rd0df026c1fc6bd = new _i05394ecc0c0c4d(a.PREVIEW_ANIMATION_INTERVAL_MS)),
      this._rd0df026c1fc6bd.addEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3));
  }
  get zoom() {
    return this.var_2663;
  }
  init(e) {
    (this.ensureVisualizerDependencies(), this.refresh(e));
  }
  randomize(e) {
    let r = _ia411d8d8194a3a();
    (this._previewStatus.randomize(e),
      this.ensureVisualizerDependencies(),
      this.var_541 == null
        ? ((this.var_541 = new VariableFxVisualizer(
            e.toRuntimeConfig(),
            this._previewStatus.toStatusData(e),
            r,
            this.var_2234,
            this._rendererRegistry,
          )),
          this.renderCurrentFrame(r, !0))
        : (this.var_541.updateData(this._previewStatus.toStatusData(e), r),
          this.renderCurrentFrame(r)),
      this.startAnimation());
  }
  refresh(e) {
    let r = _ia411d8d8194a3a();
    (this.ensureVisualizerDependencies(),
      this.disposeVisualizer(),
      (this.var_541 = new VariableFxVisualizer(
        e.toRuntimeConfig(),
        this._previewStatus.toStatusData(e),
        r,
        this.var_2234,
        this._rendererRegistry,
      )),
      this.renderCurrentFrame(r, !0),
      this.startAnimation());
  }
  renderCurrentFrame(e, r = !1) {
    if (this.var_541 == null)
      return (this.updatePreviewScale(null), (this.var_479.bitmapWindow.bitmap = null), !1);
    let t = this.var_541.update(e),
      i = this.var_541.frame;
    return (
      r && this.updatePreviewScale(i),
      !t && this.var_479.bitmapWindow.bitmap === i.bitmapData
        ? !1
        : ((this.var_479.bitmapWindow.bitmap = i.bitmapData), t)
    );
  }
  updatePreviewScale(e) {
    let r = 1;
    (e?.bitmapData != null &&
      e.width * a.PREVIEW_ZOOM <= a.PREVIEW_WIDTH &&
      e.height * a.PREVIEW_ZOOM <= a.PREVIEW_HEIGHT &&
      (r = a.PREVIEW_ZOOM),
      (this.var_479.bitmapWindow.zoomX = r),
      (this.var_479.bitmapWindow.zoomY = r),
      (this.var_2663 = r));
  }
  startAnimation() {
    this._rd0df026c1fc6bd != null && !this._rd0df026c1fc6bd.running && this._rd0df026c1fc6bd.start();
  }
  _r2f64832ada039f() {
    this._rd0df026c1fc6bd?.running && this._rd0df026c1fc6bd.stop();
  }
  _r0c7da324149cb3 = n((e) => {
    if (this.var_541 == null) {
      this._r2f64832ada039f();
      return;
    }
    this.renderCurrentFrame(_ia411d8d8194a3a());
  }, "_r0c7da324149cb3");
  ensureVisualizerDependencies() {
    ((this.var_2234 ??= this._roomEvents._r56c7191bd7adc5),
      (this._rendererRegistry ??= this._roomEvents._r4f8149f8fd691b));
  }
  disposeVisualizer() {
    (this.var_541?.dispose(), (this.var_541 = null));
  }
  get window() {
    return this.var_479.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_479.resizeToWidth(e));
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return a.PREVIEW_WIDTH;
  }
  get childPresets() {
    return [this.var_479];
  }
  dispose() {
    this.disposed ||
      ((this.var_479.bitmapWindow.bitmap = null),
      this.disposeVisualizer(),
      this._r2f64832ada039f(),
      this._rd0df026c1fc6bd?.removeEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3),
      super.dispose(),
      (this.var_479 = null),
      (this._previewStatus = null),
      (this._rd0df026c1fc6bd = null),
      (this.var_2234 = null),
      (this._rendererRegistry = null));
  }
}
