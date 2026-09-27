// Extracted from HabboAirLauncher.deobf.js, line 177577.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconProgressBarView.as
// Obfuscated name: _i45071396a0cc39

class a {
  constructor(e) {
    this._container = e;
    ((this.var_1639 = this._container.findChildByName("progress")),
      (this._fill = this.var_1639.findChildByName("fill")),
      (this._highlight = this.var_1639.findChildByName("highlight")),
      (this._maxWidth = Math.trunc(this._container.width)),
      (this._r2e2faf2e872625 = new Ej(a.ACCELERATION_PER_MS, a.MAX_SPEED_PER_MS, a.const_296)),
      (this._fillColor = new AnimatedColor(a.FILL_COLOR_TRANSITION_MS)),
      this._fillColor.var_1190(a.INCOMPLETE_COLOR, this.var_906),
      this.render());
  }
  static {
    n(this, "HabbiconProgressBarView");
  }
  static ACCELERATION_PER_MS = 1e-5;
  static MAX_SPEED_PER_MS = 0.003;
  static const_296 = 1e-4;
  static FILL_COLOR_TRANSITION_MS = 250;
  static INCOMPLETE_COLOR = 5548264;
  static COMPLETE_COLOR = 7915868;
  static CAP_OVERSHOOT = 4;
  var_1639;
  _fill;
  _highlight;
  _r2e2faf2e872625;
  _fillColor;
  var_906 = 0;
  _maxWidth;
  _disposed = !1;
  setRatio(e, r) {
    let t = Math.max(0, Math.min(1, e));
    (r
      ? this._r2e2faf2e872625.setTarget(t, this.var_906)
      : this._r2e2faf2e872625.var_1190(t, this.var_906),
      this.syncCompletionColor(r),
      this.render());
  }
  update(e) {
    this.var_906 += e;
    let r = this._r2e2faf2e872625.update(this.var_906);
    (this.syncCompletionColor(!0),
      (r = this._fillColor.update(this.var_906) || r),
      r && this.render());
  }
  render() {
    let e = Math.max(
        0,
        Math.min(this._maxWidth, Math.round(this._maxWidth * this._r2e2faf2e872625.value)),
      ),
      r = e >= this._maxWidth - a.CAP_OVERSHOOT ? this._maxWidth : e + a.CAP_OVERSHOOT;
    ((this.var_1639.width = e),
      (this.var_1639.visible = e > 0),
      (this._fill.width = Math.max(0, r)),
      (this._fill.color = this._fillColor.value),
      (this._highlight.width = Math.max(0, r - 2)),
      this._container.invalidate());
  }
  syncCompletionColor(e) {
    let r = this._r2e2faf2e872625.value >= 1 ? a.COMPLETE_COLOR : a.INCOMPLETE_COLOR;
    e
      ? this._fillColor.setTarget(r, this.var_906)
      : this._fillColor.var_1190(r, this.var_906);
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._container = null),
      (this.var_1639 = null),
      (this._fill = null),
      (this._highlight = null),
      (this._r2e2faf2e872625 = null),
      (this._fillColor = null));
  }
  get disposed() {
    return this._disposed;
  }
}
