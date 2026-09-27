// Estratto da HabboAirLauncher.deobf.js, riga 264327.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/ProgressBar.as

class a {
  constructor(e, r, t, i, s, o, d = !1) {
    this._questEngine = e;
    this._window = r;
    this._progressBarWidth = t;
    this._progressKey = i;
    this._hasFrame = s;
    this.var_5590 = d;
    let c = this._window.findChildByName("progress_bar_cont");
    c == null &&
      this._questEngine != null &&
      ((c = this._questEngine.getXmlWindow("ProgressBar")),
      c != null &&
        (this._window.addChild(c),
        (c.x = o.x),
        (c.y = o.y),
        (c.width = this._progressBarWidth + a.CONTAINER_SPACING)));
  }
  static {
    n(this, "ProgressBar");
  }
  static PROGRESS_TEXT_X_OFFSET = 3;
  static CONTAINER_SPACING = 10;
  _currentAmount = 0;
  _maxAmount = 0;
  var_3335 = 0;
  var_5520 = 0;
  _startProgressWidth = 0;
  _currentProgressWidth = 0;
  _update = !1;
  refresh(e, r, t, i) {
    let s = t !== this.var_5520 || r !== this._maxAmount;
    ((this._maxAmount = r),
      (this._currentAmount = e),
      (this._startProgressWidth = this._currentProgressWidth),
      (this.var_5520 = t),
      (this.var_3335 = i),
      s && (this._currentProgressWidth = this.getProgressWidth(this._currentAmount)),
      (this._update = !0),
      this.updateView());
  }
  set visible(e) {
    let r = this._window.findChildByName("progress_bar_cont");
    r != null && (r.visible = e);
  }
  updateView(e = 0) {
    if (!this._update || this._questEngine == null) return;
    let r = this._window.findChildByName("bar_a_bkg"),
      t = this._window.findChildByName("bar_a_c"),
      i = this._window.findChildByName("bar_a_r"),
      s = this._window.findChildByName("bar_l"),
      o = this._window.findChildByName("bar_c"),
      d = this._window.findChildByName("bar_r");
    if (r == null || t == null || i == null || s == null || o == null || d == null) return;
    ((s.visible = this._hasFrame),
      (o.visible = this._hasFrame),
      (d.visible = this._hasFrame),
      this._hasFrame && ((o.width = this._progressBarWidth), (d.x = this._progressBarWidth + t.x)));
    let c = this.getProgressWidth(this._currentAmount);
    if (this._currentProgressWidth !== c) {
      let _ = e / 32,
        h = c - this._currentProgressWidth,
        p = Math.max(1, _ * Math.round(Math.sqrt(Math.abs(h))));
      this._currentProgressWidth < c
        ? (this._currentProgressWidth = Math.min(c, this._currentProgressWidth + p))
        : (this._currentProgressWidth = Math.max(c, this._currentProgressWidth - p));
    }
    let f = this._currentProgressWidth >= 0;
    if (((r.visible = f), (t.visible = f), (i.visible = f), f)) {
      let _ = c - this._startProgressWidth;
      ((t.blend = _ === 0 ? 1 : 1 - (c - this._currentProgressWidth) / _),
        (t.width = this._currentProgressWidth),
        (i.x = this._currentProgressWidth + t.x),
        (r.width = i.right - t.left));
    }
    this._update = this._currentProgressWidth !== c;
    let l = this._window.findChildByName("progress_txt");
    if (l == null) return;
    let b = this._update
      ? Math.round((this._currentProgressWidth / this._progressBarWidth) * this._maxAmount)
      : this._currentAmount;
    (this.var_5590
      ? this._questEngine.localization._r43eae9731f5b27(
          this._progressKey,
          "progress",
          `${Math.floor(((b * 1) / this._maxAmount) * 100)}`,
        )
      : (this._questEngine.localization._r43eae9731f5b27(
          this._progressKey,
          "progress",
          `${b + this.var_3335}`,
        ),
        this._questEngine.localization._r43eae9731f5b27(
          this._progressKey,
          "limit",
          `${this._maxAmount + this.var_3335}`,
        )),
      (l.caption = this._questEngine.localization.getLocalization(
        this._progressKey,
        this._progressKey,
      )),
      (l.x = a.PROGRESS_TEXT_X_OFFSET + t.x + (this._progressBarWidth - l.width) / 2));
  }
  dispose() {
    this._questEngine = null;
  }
  get disposed() {
    return this._questEngine == null;
  }
  get isUpdating() {
    return this._update;
  }
  getProgressWidth(e) {
    return this._maxAmount <= 0
      ? 0
      : Math.max(0, Math.round((this._progressBarWidth * e) / this._maxAmount));
  }
}
