// Estratto da HabboAirLauncher.deobf.js, riga 267587.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/tasks/RewardTrackTaskListView.as
// Nome offuscato: _i5805a0e6b2bec0

class {
  constructor(e, r, t, i, s, o) {
    this.var_63 = e;
    this._window = r;
    this.var_2703 = t;
    this.var_1610 = i;
    this.var_292 = s;
    this._theme = o;
    (this.getPremiumButton.addEventListener(u.CLICK, this.onGetPremiumClicked),
      this.initializeFilters(),
      this.initializeTasks());
  }
  static {
    n(this, "RewardTrackTaskListView");
  }
  var_150 = class_4342.ALL;
  var_1105 = [];
  var_1284 = [];
  var_451 = null;
  var_3390 = !1;
  _disposed = !1;
  initializeFilters() {
    let e = this.tabSelection.removeListItemAt(0),
      r = this.tabSelection.removeListItemAt(0),
      t = this.tabSelection.removeListItemAt(0);
    (this.var_1105.push(
      new PQ(e, class_4342.ALL, "reward_track.tasks.tab.all_tasks", this, this._theme),
    ),
      this.var_1105.push(
        new PQ(r, class_4342.IN_PROGRESS, "reward_track.tasks.tab.in_progress", this, this._theme),
      ),
      this.var_1105.push(
        new PQ(t, class_4342.COMPLETED, "reward_track.tasks.tab.completed", this, this._theme),
      ));
    for (let i of this.var_1105) this.tabSelection.addListItem(i.window);
    this.refreshFilterButtons();
  }
  initializeTasks() {
    for (let e of this.var_292.tasks)
      this.var_1284.push(
        new RewardTrackTaskRowView(this.var_2703, this.var_63, this, e, this._theme),
      );
    (this.applyFilter(), this.refresh(!1));
  }
  setFilter(e) {
    this.var_150 !== e && ((this.var_150 = e), this.refreshFilterButtons(), this.applyFilter());
  }
  selectTask(e) {
    if (this.var_451 !== null && this.var_451 !== e) {
      let t = this.getRowView(this.var_451);
      t !== null && t.setSelected(!1);
    }
    this.var_451 = e;
    let r = this.getRowView(e);
    (r !== null && r.setSelected(!0), this.var_1610.selectTask(e, this.var_3390));
  }
  refresh(e) {
    ((this.var_3390 = e), this.refreshTasksCompletion(), this.refreshPremiumInfo());
    for (let r of this.var_1284) r.refresh(e);
    (this.var_451 !== null && this.var_1610.refresh(e), this.applyFilter());
  }
  taskProgressUpdated(e, r, t, i) {
    this.var_3390 = i;
    let s = this.getRowView(e);
    (s !== null && s.refresh(i),
      t !== e.isComplete && this.refreshTasksCompletion(),
      this.hasFilterMembershipChanged(e, r, t) && this.applyFilter(),
      this.var_451 === e && this.var_1610.refresh(i));
  }
  _r3ab41ca62e950f() {
    this.refreshPremiumInfo();
  }
  update(e) {
    for (let r of this.var_1284) r.update(e);
    this.var_1610.update(e);
  }
  applyFilter() {
    this.tasksList.removeListItems();
    let e = null;
    for (let r of this.var_1284)
      this.matchesFilter(r.task) &&
        (this.tasksList.addListItem(r.window), e === null && (e = r.task));
    (this.var_451 === null || !this.matchesFilter(this.var_451)) &&
      (e !== null ? this.selectTask(e) : (this._r51af44f78b4de0(), this.var_1610.clear()));
  }
  _r51af44f78b4de0() {
    if (this.var_451 !== null) {
      let e = this.getRowView(this.var_451);
      e !== null && e.setSelected(!1);
    }
    this.var_451 = null;
  }
  matchesFilter(e) {
    return this.var_150 === class_4342.IN_PROGRESS
      ? e._r6be89bb89fe21b && !e.isComplete
      : this.var_150 === class_4342.COMPLETED
        ? e.isComplete
        : !0;
  }
  hasFilterMembershipChanged(e, r, t) {
    return this.var_150 === class_4342.IN_PROGRESS
      ? r !== e._r6be89bb89fe21b || t !== e.isComplete
      : this.var_150 === class_4342.COMPLETED
        ? t !== e.isComplete
        : !1;
  }
  getRowView(e) {
    for (let r of this.var_1284) if (r.task === e) return r;
    return null;
  }
  refreshTasksCompletion() {
    this.tasksCompletionText.text = this.var_63.localizationManager.getLocalizationWithParams(
      "reward_track.tasks.progress",
      "",
      "progress",
      String(this.var_292._rf4f33a9062d24b),
      "total",
      String(this.var_292.completedTaskCount),
    );
  }
  refreshPremiumInfo() {
    ((this.rewardInfo.visible =
      !this.var_292.hasPremiumConfig || this.var_292.premium),
      (this.rewardInfoNotPremium.visible =
        this.var_292.hasPremiumConfig && !this.var_292.premium));
  }
  refreshFilterButtons() {
    for (let e of this.var_1105)
      e.setActive(e.window === this.var_1105[this.var_150].window);
  }
  onGetPremiumClicked = n(() => {
    this.var_63._rc3b63e1ff6bba2(this.var_292);
  }, "onGetPremiumClicked");
  dispose() {
    if (!this._disposed) {
      ((this._disposed = !0),
        this.getPremiumButton.removeEventListener(u.CLICK, this.onGetPremiumClicked),
        this.tasksList.removeListItems());
      for (let e of this.var_1284) e.dispose();
      for (let e of this.var_1105) e.dispose();
      ((this.var_1284 = null),
        (this.var_1105 = null),
        (this.var_63 = null),
        (this._window = null),
        (this.var_2703 = null),
        (this.var_1610 = null),
        (this.var_292 = null),
        (this._theme = null),
        (this.var_451 = null));
    }
  }
  get disposed() {
    return this._disposed;
  }
  get tasksCompletionText() {
    return this._window.findChildByName("tasks_completion_txt");
  }
  get tabSelection() {
    return this._window.findChildByName("tab_selection");
  }
  get tasksList() {
    return this._window.findChildByName("tasks");
  }
  get rewardInfo() {
    return this._window.findChildByName("reward_info");
  }
  get rewardInfoNotPremium() {
    return this._window.findChildByName("reward_info_not_premium");
  }
  get getPremiumButton() {
    return this._window.findChildByName("get_premium_btn");
  }
}
