// Estratto da HabboAirLauncher.deobf.js, riga 267470.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/tasks/RewardTrackTaskRowView.as
// Nome offuscato: _i1de53ca6ce61c2

class {
  constructor(e, r, t, i, s) {
    this.var_63 = r;
    this.var_3295 = t;
    this.var_287 = i;
    this._theme = s;
    ((this._window = e.clone()),
      (this._r834034b605f603 = new RewardTrackTaskProgressBarView(this.loadingBar)),
      (this._r468edc4ef92813 = this.taskBorder.color),
      this._window.addEventListener(u.CLICK, this._onClick),
      this._window.addEventListener(u.OVER, this._rd7f9b139aa246e),
      this._window.addEventListener(u.OUT, this.onMouseOut),
      (this.var_3911 = this.var_287._r76ecf2833aa0e5),
      this.initialize());
  }
  static {
    n(this, "RewardTrackTaskRowView");
  }
  _window;
  _r834034b605f603;
  _r468edc4ef92813;
  var_3911;
  _selected = !1;
  var_1463 = !1;
  _disposed = !1;
  initialize() {
    ((this.taskNameText.text = this.localize(
      "reward_track." + this.var_287.track.id + ".task." + this.var_287.id + ".name",
    )),
      (this.taskDescriptionText.text = this.localize(
        "reward_track." + this.var_287.track.id + ".task." + this.var_287.id + ".desc",
      )),
      (this.taskImage.assetUri =
        "reward_track_tasks_" + this.var_287.actionType.toLowerCase()),
      this.refresh(!1));
  }
  refresh(e) {
    let r = this.var_3911;
    ((this.var_3911 = this.var_287._r76ecf2833aa0e5),
      this._r834034b605f603._r997813a092d3e4(this.var_287, e, r),
      (this.progressText.text =
        this.var_287.progressCount +
        " / " +
        this.var_287._rb7d6125d6db3f4.requiredCount),
      (this.rewardText.text = String(this.var_287._rb7d6125d6db3f4._r4d5c0d3406eb1e)));
  }
  setSelected(e) {
    this._selected !== e && ((this._selected = e), this.refreshBorder());
  }
  update(e) {
    this._r834034b605f603.update(e);
  }
  _onClick = n(() => {
    this.var_3295.selectTask(this.var_287);
  }, "_onClick");
  _rd7f9b139aa246e = n(() => {
    ((this.var_1463 = !0), this.refreshBorder());
  }, "_rd7f9b139aa246e");
  onMouseOut = n(() => {
    ((this.var_1463 = !1), this.refreshBorder());
  }, "onMouseOut");
  refreshBorder() {
    this._selected
      ? (this.taskBorder.color = this._theme._r0aeac1e037881c)
      : this.var_1463
        ? (this.taskBorder.color = this._theme.lightColor)
        : (this.taskBorder.color = this._r468edc4ef92813);
  }
  localize(e) {
    return this.var_63.localizationManager.getLocalization(e, e);
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window.removeEventListener(u.CLICK, this._onClick),
      this._window.removeEventListener(u.OVER, this._rd7f9b139aa246e),
      this._window.removeEventListener(u.OUT, this.onMouseOut),
      this._r834034b605f603.dispose(),
      (this._r834034b605f603 = null),
      this._window.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_3295 = null),
      (this.var_287 = null),
      (this._theme = null));
  }
  get disposed() {
    return this._disposed;
  }
  get task() {
    return this.var_287;
  }
  get window() {
    return this._window;
  }
  get taskNameText() {
    return this._window.findChildByName("task_name");
  }
  get taskDescriptionText() {
    return this._window.findChildByName("task_description");
  }
  get taskBorder() {
    return this._window.findChildByName("task_border");
  }
  get progressText() {
    return this._window.findChildByName("task_progress_txt");
  }
  get rewardText() {
    return this._window.findChildByName("track_reward_txt");
  }
  get taskImage() {
    return this._window.findChildByName("task_image");
  }
  get loadingBar() {
    return this._window.findChildByName("loading_bar");
  }
}
