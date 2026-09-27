// Estratto da HabboAirLauncher.deobf.js, riga 177846.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconSetRailRowView.as
// Nome offuscato: _i673fbc0939999f

class a {
  constructor(e, r) {
    this.var_2669 = r;
    ((this._window = e.clone()),
      (this._progressView = new Wm(this.setRowProgressBar)),
      this._window.addEventListener(u.CLICK, this._rd74da87157b7a9),
      this._window.addEventListener(u.OVER, this._r72cc92f0c72db9),
      this._window.addEventListener(u.OUT, this._r479c354def12d1));
  }
  static {
    n(this, "HabbiconSetRailRowView");
  }
  static BACKGROUND_IDLE = 16313302;
  static BACKGROUND_HOVER = 16773830;
  static BACKGROUND_ACTIVE = 15781766;
  static BORDER_IDLE = 15920341;
  static BORDER_ACTIVE = 16777215;
  _window;
  var_304 = null;
  _progressView;
  _active = !1;
  var_1463 = !1;
  _disposed = !1;
  initialize(e) {
    ((this.var_304 = e),
      (this._window.visible = !0),
      (this.setRowTitle.text = e.title),
      this.updateIcon(),
      this.refreshProgress(!1),
      (this._active = !1),
      (this.var_1463 = !1),
      this.updateLook());
  }
  setActive(e) {
    ((this._active = e), this.updateLook());
  }
  refreshProgress(e) {
    (this._progressView.setRatio(this.var_304.progressRatio, e),
      (this.setRowProgressText.text = this.var_304.completed + " / " + this.var_304.total));
  }
  update(e) {
    this._progressView.update(e);
  }
  dispose() {
    this._disposed ||
      (this._window.parent != null &&
        this._window.parent.removeChild(this._window),
      this._window.removeEventListener(u.CLICK, this._rd74da87157b7a9),
      this._window.removeEventListener(u.OVER, this._r72cc92f0c72db9),
      this._window.removeEventListener(u.OUT, this._r479c354def12d1),
      this._r8e04191b96adaa(),
      this._progressView != null && (this._progressView.dispose(), (this._progressView = null)),
      this._window.dispose(),
      (this._window = null),
      (this.var_304 = null),
      (this.var_2669 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get set() {
    return this.var_304;
  }
  updateIcon() {
    let e = this.setIcon;
    if (e == null) return;
    this._r8e04191b96adaa();
    let r =
      this.var_304.habbicons?.length > 0
        ? Dr.getPreviewBitmap(this.var_304.habbicons[0].habbiconId, !1)
        : null;
    r != null
      ? ((e.disposesBitmap = !0), (e.bitmap = r.clone()), (e.visible = !0), e.invalidate())
      : (e.visible = !1);
  }
  _r8e04191b96adaa() {
    let e = this.setIcon;
    e != null && e.bitmap != null && (e.bitmap.dispose(), (e.bitmap = null), e.invalidate());
  }
  updateLook() {
    let e = this._active
        ? a.BACKGROUND_ACTIVE
        : this.var_1463
          ? a.BACKGROUND_HOVER
          : a.BACKGROUND_IDLE,
      r = this._active || this.var_1463 ? a.BORDER_ACTIVE : a.BORDER_IDLE;
    ((this.setRowBackground.color = (4278190080 | e) >>> 0),
      (this._window.color = (4278190080 | r) >>> 0));
  }
  _rd74da87157b7a9 = n((e) => {
    this.var_2669 != null &&
      this.var_304 != null &&
      this.var_2669(this.var_304);
  }, "_rd74da87157b7a9");
  _r72cc92f0c72db9 = n((e) => {
    ((this.var_1463 = !0), this.updateLook());
  }, "_r72cc92f0c72db9");
  _r479c354def12d1 = n((e) => {
    ((this.var_1463 = !1), this.updateLook());
  }, "_r479c354def12d1");
  get setRowTitle() {
    return this._window.findChildByName("set_row_title");
  }
  get setRowProgressBar() {
    return this._window.findChildByName("set_row_progress_bar");
  }
  get setRowProgressText() {
    return this._window.findChildByName("set_row_progress_text");
  }
  get setRowBackground() {
    return this._window.findChildByName("set_row_background");
  }
  get setIcon() {
    return this._window.findChildByName("set_icon");
  }
}
