// Extracted from HabboAirLauncher.deobf.js, line 265734.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/dailytasks/DailyTasksView.as
// Obfuscated name: _iae007fa0a34680

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("daily_tasks_xml")?.content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      this.closeButton?.addEventListener(u.CLICK, this.onWindowClose),
      this.unclaimedButton?.addEventListener(u.CLICK, this._r8f4dffb33eece4),
      this.getHCButton?.addEventListener(u.CLICK, this.onGetHcClicked),
      (this.var_2703 = this.tasksList?.removeListItemAt(0)),
      (this.var_2608 =
        this.var_2703?.findChildByName("rewards_list") != null
          ? this.var_2703.findChildByName("rewards_list").removeListItemAt(0)
          : null),
      (this._r65483ba44ed11d = new UnclaimedTasksView(this.var_63, this._windowManager)));
  }
  static {
    n(this, "DailyTasksView");
  }
  static const_1282 = 500;
  static DESKTOP_WINDOW_LAYER = 1;
  _window;
  var_2703 = null;
  var_2608 = null;
  var_948 = [];
  _lastTitleUpdateTime = 0;
  _r65483ba44ed11d;
  var_1271 = !1;
  initialize() {
    for (let e of this.var_63.tasks) this._r90501fc213622f(e);
    this._r0833496b983d9f();
  }
  show() {
    this._window == null ||
      this._window.parent != null ||
      this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(this._window);
  }
  isShowing() {
    return this._window != null && this._window.parent != null;
  }
  hide() {
    this._window == null ||
      this._window.parent == null ||
      this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(this._window);
  }
  _r0833496b983d9f() {
    let e = (this._r65483ba44ed11d?._r649b931e745b6b.length ?? 0) > 0;
    this.extraCont != null && (this.extraCont.visible = e);
    let r = e ? (this.extraCont?.height ?? 0) + (this.mainContainer?.spacing ?? 0) : 0;
    (this.tasksList != null &&
      ((this.tasksList.y = r),
      (this.tasksList.height =
        Math.min(Math.max(this.var_948.length, 1), 4) *
          ((this._r84b46bdf1cab67?.height ?? 0) + this.tasksList.spacing) -
        this.tasksList.spacing)),
      this.hcInfoBar != null &&
        (this.hcInfoBar.y =
          r + (this.tasksList?.height ?? 0) + (this.mainContainer?.spacing ?? 0)),
      this._window != null &&
        ((this._window.height =
          33 +
          r +
          (this.tasksList?.height ?? 0) +
          (this.mainContainer?.spacing ?? 0) +
          (this.hcInfoBar?.height ?? 0) +
          (this.mainContainer?.spacing ?? 0)),
        (this._window.width = this.tasksList?._rb4a5f64054fcb5
          ? this._window.limits.maxWidth
          : this._window.limits.minWidth)),
      this.extraCont != null &&
        this._window != null &&
        (this.extraCont.width = this._window.width),
      this.hcInfoBar != null &&
        this._window != null &&
        (this.hcInfoBar.width = this._window.width),
      this.setHcDoubleDuckets());
  }
  tasksCleared() {
    this.tasksList?.removeListItems();
    for (let e of this.var_948) e.dispose();
    ((this.var_948 = []), this._r65483ba44ed11d?.tasksCleared());
  }
  _r90501fc213622f(e) {
    if (e.isExpired) {
      this._r65483ba44ed11d?._r90501fc213622f(e);
      return;
    }
    let r = new kQ(e, this.var_63);
    (this.var_948.push(r), this.tasksList?.addListItem(r.window));
  }
  _rc701b693c2b118(e) {
    let r = this._r75303f67af1eaf(e);
    if (r == null) {
      this._r65483ba44ed11d?._rc701b693c2b118(e);
      return;
    }
    r.updateStatusAndRepeatsUI();
  }
  _r75303f67af1eaf(e) {
    return this.var_948.find((r) => r._r69698bba4f84e1.taskId === e) ?? null;
  }
  update(e) {
    for (let i of this.var_948) i.update(e);
    let r = 0;
    for (let i of this.var_63.tasks) i.secondsLeft > r && (r = i.secondsLeft);
    let t = _ia411d8d8194a3a() > this._lastTitleUpdateTime + a.const_1282;
    (this.isShowing() &&
      t &&
      this._window != null &&
      (r > 0
        ? (this._window.caption = `${this.var_63.localizationManager.getLocalization("dailytasks.title")} - ${this.var_63.localizationManager.getLocalizationWithParams("dailytasks.refreshes", "Refresh in %time", "time", ra.getFriendlyTime(this.var_63.localizationManager, r))}`)
        : (this._window.caption =
            this.var_63.localizationManager.getLocalization("dailytasks.title")),
      (this._lastTitleUpdateTime = _ia411d8d8194a3a())),
      (this.var_63.tasks.length === 0 || r < -5) && this.var_63._ra8fdc669971bc2());
  }
  dispose() {
    if (!this.var_1271) {
      (this._r65483ba44ed11d?.dispose(), (this._r65483ba44ed11d = null));
      for (let e of this.var_948) e.dispose();
      ((this.var_948 = []),
        (this.var_2703 = null),
        (this.var_2608 = null),
        this.hide(),
        this.closeButton?.removeEventListener(u.CLICK, this.onWindowClose),
        this.unclaimedButton?.removeEventListener(u.CLICK, this._r8f4dffb33eece4),
        this.getHCButton?.removeEventListener(u.CLICK, this.onGetHcClicked),
        this._window?.dispose(),
        (this._window = null),
        (this.var_1271 = !0));
    }
  }
  get disposed() {
    return this.var_1271;
  }
  get _r84b46bdf1cab67() {
    return this.var_2703;
  }
  get _r34ac8385061496() {
    return this.var_2608;
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  _r8f4dffb33eece4 = n(() => {
    this._r65483ba44ed11d?.show();
  }, "_r8f4dffb33eece4");
  onGetHcClicked = n(() => {
    this.var_63.questEngine.catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB, CatalogType.NORMAL);
  }, "onGetHcClicked");
  setHcDoubleDuckets() {
    let e = this.var_63.questEngine.sessionDataManager?.hasClub ?? !1;
    (this.hcDoubleDucketsInfoText != null &&
      (this.hcDoubleDucketsInfoText.text = e
        ? this.var_63.localizationManager.getLocalization(
            "hc.has.double_duckets.info",
            "You get double duckets as you are an HC member!",
          )
        : this.var_63.localizationManager.getLocalization(
            "hc.get.double_duckets.info",
            "Get HC membership to gain double duckets!",
          )),
      this.getHCButton != null && (this.getHCButton.visible = !e));
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close") ?? null;
  }
  get unclaimedButton() {
    return this._window?.findChildByName("unclaimed_btn");
  }
  get tasksList() {
    return this._window?.findChildByName("tasks_list");
  }
  get mainContainer() {
    return this._window?.findChildByName("main_cont");
  }
  get extraCont() {
    return this._window?.findChildByName("extra_cont");
  }
  get hcInfoBar() {
    return this._window?.findChildByName("hc_info_cont");
  }
  get hcDoubleDucketsInfoText() {
    return this._window?.findChildByName("hc_info_text");
  }
  get getHCButton() {
    return this._window?.findChildByName("get_hc_btn");
  }
}
