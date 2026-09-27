// Estratto da HabboAirLauncher.deobf.js, riga 267251.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/tasks/RewardTrackTaskDetailsView.as
// Nome offuscato: _i46c55e44a04943

class {
  constructor(e, r, t, i) {
    this.var_63 = e;
    this._window = r;
    this.var_1110 = t;
    this._theme = i;
    (this.hintButton.addEventListener(u.CLICK, this.onHintClicked), this.initializeStaffActions());
  }
  static {
    n(this, "RewardTrackTaskDetailsView");
  }
  var_287 = null;
  var_532 = [];
  _r5bacf930933119 = null;
  _disposed = !1;
  initializeStaffActions() {
    ((this.taskNameRegion._r824ae5dcbb4686 = !this.var_63._ra5fbf8bddad7bd),
      this.var_63._ra5fbf8bddad7bd &&
        this.taskNameRegion.addEventListener(u.CLICK, this._r87840f75398f2a));
  }
  selectTask(e, r) {
    ((this.var_287 = e),
      (this._window.visible = !0),
      (this.taskNameText.text = this.localize(
        "reward_track." + e.track.id + ".task." + e.id + ".name",
      )),
      (this.taskDescriptionText.text = this.localize(
        "reward_track." + e.track.id + ".task." + e.id + ".desc",
      )),
      (this.taskImage.assetUri = "reward_track_tasks_" + e.actionType.toLowerCase()),
      (this.taskHintText.text = this.localize(
        "reward_track." + e.track.id + ".task." + e.id + ".hint.desc",
      )));
    let t = "reward_track." + e.track.id + ".task." + e.id + ".hint";
    ((this._r5bacf930933119 = this.var_63.getProperty(t + ".internal_link")),
      (this.hintButton.visible = this._r5bacf930933119 !== ""),
      (this.hintButton.caption = "${" + t + ".button_text}"),
      this._rcff06136ea7099(r),
      this._rd8cd296464eb7e());
  }
  clear() {
    ((this.var_287 = null),
      (this._window.visible = !1),
      this.levelsList.removeListItems());
    for (let e of this.var_532) e.recycle();
    this.var_532 = [];
  }
  refresh(e) {
    for (let r of this.var_532) r.refresh(e);
  }
  update(e) {
    for (let r of this.var_532) r.update(e);
  }
  _rcff06136ea7099(e) {
    this.levelsList.removeListItems();
    for (let r of this.var_532) r.recycle();
    this.var_532 = [];
    for (let r = 0; r < this.var_287.levels.length; r++) {
      let t = this.var_287.levels[r],
        i = Ige.create(
          this.var_1110,
          this.var_63,
          this.var_287,
          t,
          r,
          this._theme,
        );
      (this.var_532.push(i), this.levelsList.addListItem(i.window), i.refresh(e));
    }
  }
  _rd8cd296464eb7e() {
    if (this.levelsList._r5733287651adec <= 0) {
      this.levelsList.var_46 = 0;
      return;
    }
    let e = this.var_532[this.var_287._r76ecf2833aa0e5],
      r = this.levelsList._rbab5041f1931e4,
      t = Math.trunc(e.window.y),
      i = Math.trunc(t + e.window.height),
      s = Math.trunc(r.y);
    (t < r.y ? (s = t) : i > r.bottom && (s = Math.trunc(i - r.height)),
      s !== r.y && (this.levelsList.var_46 = s / this.levelsList._r5733287651adec));
  }
  onHintClicked = n(() => {
    this._r5bacf930933119 !== "" && this.var_63.context._r6b6c989018eb05(this._r5bacf930933119);
  }, "onHintClicked");
  _r87840f75398f2a = n(() => {
    this.var_63.copyTaskId(this.var_287.id);
  }, "_r87840f75398f2a");
  localize(e) {
    return this.var_63.localizationManager.getLocalization(e, e);
  }
  dispose() {
    if (!this._disposed) {
      ((this._disposed = !0),
        this.hintButton.removeEventListener(u.CLICK, this.onHintClicked),
        this.taskNameRegion.removeEventListener(u.CLICK, this._r87840f75398f2a),
        this.levelsList.removeListItems());
      for (let e of this.var_532) e.recycle();
      ((this.var_532 = null),
        (this.var_63 = null),
        (this._window = null),
        (this.var_1110 = null),
        (this._theme = null),
        (this.var_287 = null));
    }
  }
  get disposed() {
    return this._disposed;
  }
  get taskNameText() {
    return this._window.findChildByName("task_info_name");
  }
  get taskNameRegion() {
    return this._window.findChildByName("task_info_name_region");
  }
  get taskDescriptionText() {
    return this._window.findChildByName("task_info_description");
  }
  get taskImage() {
    return this._window.findChildByName("task_info_img");
  }
  get levelsList() {
    return this._window.findChildByName("levels");
  }
  get taskHintText() {
    return this._window.findChildByName("task_hint_text");
  }
  get hintButton() {
    return this._window.findChildByName("hint_redirect_btn");
  }
}
