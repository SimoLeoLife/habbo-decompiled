// Estratto da HabboAirLauncher.deobf.js, riga 267150.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/tasks/RewardTrackTaskLevelView.as
// Nome offuscato: _ibc17860aa681d0

class a {
  static {
    n(this, "RewardTrackTaskLevelView");
  }
  static const_26 = [];
  var_63 = null;
  var_287 = null;
  var_1655 = null;
  _theme = null;
  _index = 0;
  _window;
  _r834034b605f603;
  _r468edc4ef92813;
  _disposed = !1;
  constructor(e) {
    ((this._window = e.clone()),
      (this._r834034b605f603 = new RewardTrackTaskProgressBarView(this.loadingBar)),
      (this._r468edc4ef92813 = this.levelBorder.color));
  }
  static create(e, r, t, i, s, o) {
    let d = this.const_26.length > 0 ? this.const_26.pop() : new a(e);
    return (d.initialize(r, t, i, s, o), d);
  }
  initialize(e, r, t, i, s) {
    ((this.var_63 = e),
      (this.var_287 = r),
      (this.var_1655 = t),
      (this._index = i),
      (this._theme = s),
      (this.levelNameText.text = e.localizationManager.getLocalizationWithParams(
        "reward_track.levels.level",
        "",
        "level",
        String(i + 1),
      )),
      (this.rewardText.text = String(t._r4d5c0d3406eb1e)),
      this.refresh(!1));
  }
  refresh(e) {
    let r = this.var_287.progressRatioFor(this.var_1655);
    (this._r834034b605f603._r3650e352fda488(r, e),
      (this.progressText.text =
        this.var_287.progressCount + " / " + this.var_1655.requiredCount),
      (this.completedIcon.visible = r >= 1),
      (this.lockedIcon.visible = !1),
      (this.levelBorder.color =
        this._index === this.var_287._r76ecf2833aa0e5
          ? this._theme._r0aeac1e037881c
          : this._r468edc4ef92813));
  }
  update(e) {
    this._r834034b605f603.update(e);
  }
  recycle() {
    ((this.var_63 = null),
      (this.var_287 = null),
      (this.var_1655 = null),
      (this._theme = null),
      (this._index = 0),
      a.const_26.push(this));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r834034b605f603.dispose(),
      (this._r834034b605f603 = null),
      this._window.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_287 = null),
      (this.var_1655 = null),
      (this._theme = null));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get levelNameText() {
    return this._window.findChildByName("level_name");
  }
  get levelBorder() {
    return this._window.findChildByName("level_border");
  }
  get progressText() {
    return this._window.findChildByName("level_progress_txt");
  }
  get rewardText() {
    return this._window.findChildByName("level_reward_txt");
  }
  get completedIcon() {
    return this._window.findChildByName("completed_icon");
  }
  get lockedIcon() {
    return this._window.findChildByName("locked_icon");
  }
  get loadingBar() {
    return this._window.findChildByName("loading_bar");
  }
}
