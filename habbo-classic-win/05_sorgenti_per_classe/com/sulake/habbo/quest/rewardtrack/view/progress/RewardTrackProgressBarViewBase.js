// Extracted from HabboAirLauncher.deobf.js, line 266505.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/progress/RewardTrackProgressBarViewBase.as
// Obfuscated name: _i7223902fc9f378

class a {
  constructor(e, r = !1) {
    this._rcf5a7a64a5a0ba = r;
    ((this._container = e),
      (this.var_1639 = e.findChildByName("progress")),
      (this._maxWidth = e.width),
      (this._r2e2faf2e872625 = new Ej(a.ACCELERATION_PER_MS, a.MAX_SPEED_PER_MS, a.const_296)),
      this._rcf5a7a64a5a0ba &&
        ((this.var_3840 = this.var_1639.findChildByName("loading_bar")),
        (this._completionColor = new AnimatedColor(a.FILL_COLOR_TRANSITION_MS)),
        this._completionColor.var_1190(a.INCOMPLETE_COLOR, this.var_906)));
  }
  static {
    n(this, "RewardTrackProgressBarViewBase");
  }
  static ACCELERATION_PER_MS = 1e-5;
  static MAX_SPEED_PER_MS = 0.003;
  static const_296 = 1e-4;
  static FILL_COLOR_TRANSITION_MS = 300;
  static INCOMPLETE_COLOR = 15443468;
  static COMPLETE_COLOR = 7450404;
  _container;
  var_1639;
  _r2e2faf2e872625;
  var_906 = 0;
  var_3840 = null;
  _completionColor = null;
  _maxWidth;
  _disposed = !1;
  setRatio(e, r) {
    let t = this._re49a5bca8368c7(e);
    (r
      ? this._r2e2faf2e872625.setTarget(t, this.var_906)
      : this._r2e2faf2e872625.var_1190(t, this.var_906),
      this.syncCompletionColor(r),
      this.render());
  }
  update(e) {
    this.var_906 += e;
    let r = this._r2e2faf2e872625.update(this.var_906);
    (this._rcf5a7a64a5a0ba &&
      (this.syncCompletionColor(!0), (r = this._completionColor.update(this.var_906) || r)),
      r && this.render());
  }
  get isUpdating() {
    return (
      this._r2e2faf2e872625.needsUpdate(this.var_906, this._maxWidth) ||
      (this._rcf5a7a64a5a0ba && this._completionColor.needsUpdate(this.var_906))
    );
  }
  render() {
    ((this.var_1639.width = Math.max(
      0,
      Math.min(this._maxWidth, Math.round(this._maxWidth * this._r2e2faf2e872625.value)),
    )),
      this._rcf5a7a64a5a0ba && (this.var_3840.color = this._completionColor.value));
  }
  _re49a5bca8368c7(e) {
    return Math.max(0, Math.min(1, e));
  }
  syncCompletionColor(e) {
    if (!this._rcf5a7a64a5a0ba) return;
    let r = this._r2e2faf2e872625.value >= 1 ? a.COMPLETE_COLOR : a.INCOMPLETE_COLOR;
    e
      ? this._completionColor.setTarget(r, this.var_906)
      : this._completionColor.var_1190(r, this.var_906);
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._container = null),
      (this.var_1639 = null),
      (this._r2e2faf2e872625 = null),
      (this.var_3840 = null),
      (this._completionColor = null));
  }
  get disposed() {
    return this._disposed;
  }
}
