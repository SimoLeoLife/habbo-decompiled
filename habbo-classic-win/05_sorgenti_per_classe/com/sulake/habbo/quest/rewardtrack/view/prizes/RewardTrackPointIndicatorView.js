// Estratto da HabboAirLauncher.deobf.js, riga 266835.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/prizes/RewardTrackPointIndicatorView.as
// Nome offuscato: _i27f430edfb62d2

class {
  static {
    n(this, "RewardTrackPointIndicatorView");
  }
  var_292 = null;
  var_2352 = 0;
  _window;
  _disposed = !1;
  constructor(e) {
    this._window = e.clone();
  }
  initialize(e, r) {
    ((this.var_292 = e),
      (this.var_2352 = r),
      (this.pointsText.text = String(r)),
      this.refreshAvailability());
  }
  refreshAvailability() {
    this.var_292 !== null &&
      (this.availableIcon.assetUri =
        this.var_292.points >= this.var_2352
          ? "reward_track_available_icon"
          : "reward_track_not_available_icon");
  }
  clear() {
    ((this.var_292 = null), (this.var_2352 = 0), (this._window.visible = !1));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window.parent !== null &&
        this._window.parent.removeChild(this._window),
      this._window.dispose(),
      (this._window = null),
      (this.var_292 = null),
      (this.var_2352 = 0));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get availableIcon() {
    return this._window.findChildByName("available_icon");
  }
  get pointsText() {
    return this._window.findChildByName("points_txt");
  }
}
