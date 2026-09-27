// Extracted from HabboAirLauncher.deobf.js, line 267819.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/RewardTrackView.as
// Obfuscated name: _ibfd29addab3910

class {
  constructor(e, r) {
    this.var_63 = e;
    this.var_292 = r;
    ((this._theme = Mge.resolve(this.var_292.theme)),
      (this._window = this.var_63.windowManager.buildFromXML(
        rr(this.var_63.assets.getAssetByName("reward_track_main_xml").content),
        th.DESKTOP_WINDOW_LAYER,
      )),
      this._theme._r196e3a5ab136d2(this._window),
      this.extractTemplates(),
      this._window.enableLookupCache(),
      this.closeButton.addEventListener(u.CLICK, this.onCloseClicked));
  }
  static {
    n(this, "RewardTrackView");
  }
  _window;
  var_2650 = null;
  var_3034 = null;
  var_2712 = null;
  var_2703 = null;
  var_1110 = null;
  _theme;
  _headerView = null;
  _rae5fb44a097f56 = null;
  _r5047e107e99168 = null;
  var_2036 = null;
  _disposed = !1;
  initialize() {
    ((this._headerView = new RewardTrackHeaderView(this.var_63, this.headerContainer, this.var_292)),
      (this.var_2036 = new RewardTrackTaskDetailsView(
        this.var_63,
        this.taskInfoContainer,
        this.var_1110,
        this._theme,
      )),
      (this._r5047e107e99168 = new RewardTrackTaskListView(
        this.var_63,
        this.taskListContainer,
        this.var_2703,
        this.var_2036,
        this.var_292,
        this._theme,
      )),
      (this._rae5fb44a097f56 = new yge(
        this.var_63,
        this.var_292,
        this.prizeContent,
        this.pointsIndicator,
        this.mainLoadingBar,
        this.var_2650,
        this.var_3034,
        this.var_2712,
        this.previousButton,
        this.nextButton,
        this.previousUnclaimedIndicator,
        this.nextUnclaimedIndicator,
      )));
  }
  extractTemplates() {
    ((this.var_2650 = this.prizeContent.removeChild(
      this.prizeContent.findChildByName("prize_template"),
    )),
      (this.var_3034 = this.prizeContent.removeChild(
        this.prizeContent.findChildByName("prize_template_premium"),
      )),
      (this.var_2712 = this.pointsIndicator.removeChild(
        this.pointsIndicator.findChildByName("point_indicator_template"),
      )),
      (this.var_2703 = this.tasksList.removeListItemAt(0)),
      (this.var_1110 = this.levelsList.removeListItemAt(0)));
  }
  show() {
    if ((this._headerView._r9800e65d4a08d9(), this._window.parent === null)) {
      let e = this.var_63.windowManager.getDesktop(th.DESKTOP_WINDOW_LAYER);
      e !== null && e.addChild(this._window);
    }
  }
  hide() {
    if (this._window.parent !== null) {
      let e = this.var_63.windowManager.getDesktop(th.DESKTOP_WINDOW_LAYER);
      e !== null && e.removeChild(this._window);
    }
  }
  activate() {
    this._window.activate();
  }
  center() {
    this._window.center();
  }
  isShowing() {
    return this._window.parent !== null;
  }
  get shouldAnimate() {
    return this.isShowing();
  }
  taskProgressUpdated(e, r, t) {
    (this._headerView.refreshPoints(),
      this._rae5fb44a097f56.var_1298(this.shouldAnimate),
      e !== null && this._r5047e107e99168.taskProgressUpdated(e, r, t, this.shouldAnimate));
  }
  _r194481619afab8(e) {
    (this._headerView.refreshRewardsCollected(), this._rae5fb44a097f56._r194481619afab8(e));
  }
  _r977a010d2fb75e() {
    (this._headerView.refreshPoints(),
      this._r5047e107e99168._r3ab41ca62e950f(),
      this._rae5fb44a097f56._r3ab41ca62e950f(this.shouldAnimate));
  }
  update(e) {
    (this._r5047e107e99168.update(e), this._rae5fb44a097f56.update(e));
  }
  get location() {
    return new E(this._window.x, this._window.y);
  }
  _rf91a6212aca31a(e) {
    ((this._window.x = e.x), (this._window.y = e.y));
  }
  onCloseClicked = n(() => {
    this.hide();
  }, "onCloseClicked");
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._rae5fb44a097f56 !== null && this._rae5fb44a097f56.dispose(),
      this._r5047e107e99168 !== null && this._r5047e107e99168.dispose(),
      this.var_2036 !== null && this.var_2036.dispose(),
      this._headerView !== null && this._headerView.dispose(),
      this.closeButton.removeEventListener(u.CLICK, this.onCloseClicked),
      this.hide(),
      this.var_2650.dispose(),
      this.var_3034.dispose(),
      this.var_2712.dispose(),
      this.var_2703.dispose(),
      this.var_1110.dispose(),
      this._window.dispose(),
      (this._rae5fb44a097f56 = null),
      (this._r5047e107e99168 = null),
      (this.var_2036 = null),
      (this._headerView = null),
      (this.var_2650 = null),
      (this.var_3034 = null),
      (this.var_2712 = null),
      (this.var_2703 = null),
      (this.var_1110 = null),
      (this._window = null),
      (this.var_63 = null),
      (this.var_292 = null),
      (this._theme = null));
  }
  get disposed() {
    return this._disposed;
  }
  get track() {
    return this.var_292;
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get headerContainer() {
    return this._window.findChildByName("header");
  }
  get prizeContent() {
    return this._window.findChildByName("prize_content");
  }
  get pointsIndicator() {
    return this._window.findChildByName("points_indicator");
  }
  get trackContainer() {
    return this._window.findChildByName("track");
  }
  get mainLoadingBar() {
    return this.trackContainer.findChildByName("loading_bar");
  }
  get previousButton() {
    return this._window.findChildByName("previous_btn");
  }
  get nextButton() {
    return this._window.findChildByName("next_btn");
  }
  get previousUnclaimedIndicator() {
    return this._window.findChildByName("previous_unclaimed_indicator");
  }
  get nextUnclaimedIndicator() {
    return this._window.findChildByName("next_unclaimed_indicator");
  }
  get taskListContainer() {
    return this._window.findChildByName("task_list");
  }
  get taskInfoContainer() {
    return this._window.findChildByName("task_info");
  }
  get tasksList() {
    return this._window.findChildByName("tasks");
  }
  get levelsList() {
    return this._window.findChildByName("levels");
  }
}
