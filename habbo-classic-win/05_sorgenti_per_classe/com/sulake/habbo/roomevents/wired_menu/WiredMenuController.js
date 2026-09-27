// Estratto da HabboAirLauncher.deobf.js, riga 359651.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/WiredMenuController.as
// Nome offuscato: _ic0965d9bf1e4d6

class a extends ue {
  static {
    n(this, "WiredMenuController");
  }
  static SHOW_NOTIFICATION_FOR_ERROR = [class_3093.var_5909];
  _roomEvents;
  _view = null;
  _messageEvents;
  var_3281 = !1;
  var_3810 = !1;
  _r16cc3a5cb72cf6;
  _r7eef93839b12d8;
  _rf70c2bba05b8c0;
  var_3214 = !1;
  var_3418 = !1;
  _playTestMode = !1;
  var_3466 = !1;
  var_3647 = !1;
  var_2964 = "volter";
  var_1271 = !1;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._messageEvents = [
        new class_3628((s) => this._r2d37026609f2cf(s)),
        new class_2121((s) => this._rc8d9b9819345aa(s)),
        new class_2999((s) => this.onControllerMessageEvent(s)),
        new class_2746((s) => this.onWiredMenuErrorEvent(s)),
      ]));
    for (let s of this._messageEvents) this.addMessageEvent(s);
    ((this._r16cc3a5cb72cf6 = new VariableManagementOverviewController(e, r, 0, i)),
      (this._r7eef93839b12d8 = new VariableManagementDetailController(e, r, 0, i)),
      (this._rf70c2bba05b8c0 = new WiredRoomLogListController(e, r, 0, i)));
  }
  get dependencies() {
    let e = n((t) => this._r33a6aa9dfdc0be(t), "_i33a6aa9dfdc0be"),
      r = n((t) => this._r136af7172e26af(t), "_i136af7172e26af");
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (t) => {
          this._r6358b2bd53ae19 = t;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (t) => {
        this._sessionDataManager = t;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (t) => {
        this._windowManager = t;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (t) => {
        this._localizationManager = t;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (t) => {
          this._roomEngine = t;
        },
        !1,
        [{ type: RoomEngineEvent.ROOM_DISPOSED, callback: e }],
      ),
      new ComponentDependency(new IIDHabboRoomSessionManager(), null, !1, [{ type: RoomSessionEvent.const_1398, callback: r }]),
    ]);
  }
  initComponent() {
    this.context._r7e43d9f4706607(this);
  }
  get disposed() {
    return this.var_1271;
  }
  get linkPattern() {
    return "wiredmenu/";
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get _rf5e384520bc525() {
    return this._roomEvents._rf5e384520bc525;
  }
  get _r757a5ebc533593() {
    return this._rf70c2bba05b8c0;
  }
  get view() {
    return this._view;
  }
  get isEnabled() {
    return this.getBoolean("wired.menu.enabled");
  }
  get _r0e0f569f7be727() {
    return this._r7443e8b7432aa8() ? !0 : this.var_3810;
  }
  get hasWritePermission() {
    return this._r7443e8b7432aa8() ? !0 : this.var_3281;
  }
  get _r62e1bd3b7b027a() {
    return this.var_3214;
  }
  set _r62e1bd3b7b027a(e) {
    ((this.var_3214 = e),
      this._roomEvents.events.dispatchEvent?.(new WiredMenuEvent(WiredMenuEvent.WIRED_MENU_BUTTON_PREFERENCE_CHANGED)));
  }
  get wiredInspectButton() {
    return this.var_3418;
  }
  set wiredInspectButton(e) {
    this.var_3418 = e;
  }
  get _r64205135e7d200() {
    return this.var_3647;
  }
  set _r64205135e7d200(e) {
    this.var_3647 = e;
  }
  get uiStyle() {
    return this.var_2964;
  }
  set uiStyle(e) {
    e !== this.var_2964 &&
      ((this.var_2964 = e),
      this.getBoolean("wired.ui_picker_enabled") &&
        this._roomEvents.presetManager._r2c487ad3c646cb(
          this.var_2964 === "" ? "volter" : this.var_2964,
        ));
  }
  get _r7722c9aa63290b() {
    return this.var_3466;
  }
  set _r7722c9aa63290b(e) {
    ((this.var_3466 = e), this._rdba8d58443ab74());
  }
  get playTestMode() {
    return this._playTestMode;
  }
  linkReceived(e) {
    if (!this.isEnabled || !this._r0e0f569f7be727) {
      this.windowManager.alert("${wiredmenu.invalid_room.title}", "${wiredmenu.invalid_room.desc}", 0, null);
      return;
    }
    let r = e.split("/");
    r.length < 2 ||
      (r[1] === "open" &&
        (this.showView(),
        r.length >= 3 &&
          (this.view.selectTab(r[2]),
          r[2] === Z1.TAB_INSPECTION_ID
            ? this.routeInspectionLink(e)
            : r[2] === Z1.TAB_OVERVIEW_ID && this.routeOverviewLink(e))),
      r[1] === "logs" &&
        (this.isShowing() ||
          (this.showView(), this.view.selectTab(Z1.TAB_MONITOR_ID)),
        this._rf70c2bba05b8c0.view == null || !this._rf70c2bba05b8c0.view.isShowing()
          ? this._rf70c2bba05b8c0.send(new _i3d9f3af732b347(1, _ifaf38892102cfa.PAGE_SIZE, -1, -1, ""))
          : this._rf70c2bba05b8c0.view.activate()));
  }
  routeInspectionLink(e) {
    let r = e.split("/");
    if (r.length < 5) return;
    let t = this.view.stopViewing;
    if (t == null) return;
    let i = Number.parseInt(r[4], 10);
    r[3] === String(Qs.var_5765)
      ? t.inspectFurni(i, !0)
      : r[3] === String(Qs.var_5943) && t.inspectUser(i, !0);
  }
  routeOverviewLink(e) {
    let r = e.split("/");
    if (r.length < 4) return;
    let t = this.view.stopViewing;
    t?._rf3cd9499aee8db(r[3]);
  }
  _r9f8e86b9bc7d27() {
    this.isShowing() ? this._r6167aac3809e80() : this.showView();
  }
  _r7443e8b7432aa8() {
    if (this._roomEvents._r2eac8239a09fe7 == null) return !1;
    let r = this._sessionDataManager.hasSecurity(class_1794.EMPLOYEE),
      t = this._roomEvents._r2eac8239a09fe7.isRoomOwner;
    return r || t;
  }
  send(e) {
    this._r6358b2bd53ae19.connection.send(e);
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._r6358b2bd53ae19._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._r6358b2bd53ae19._r7668362bf55fdd(e);
  }
  setPlayTestMode(e, r = !1, t = !1) {
    let i = this._roomEvents._r2eac8239a09fe7;
    if ((i != null && (i.playTestMode = e), this._playTestMode !== e && r)) {
      this._playTestMode = e;
      let s = `wiredmenu.settings.preferences.notification.playtest.${e ? "enabled" : "disabled"}`;
      if (
        (this._roomEvents.notifications.addItem(
          this.localizationManager.getLocalization(s),
          NotificationType.INFO,
          "icon_wired_notification_png",
          "wiredmenu/open/settings",
        ),
        t && (this._rdba8d58443ab74(), this._view != null))
      ) {
        let o = this._view.stopViewing;
        if (o == null) return;
        o._r5154508cf1bf20();
      }
    } else r || (this._playTestMode = e);
  }
  _r97aa3ab4b5a337(e) {
    !this.isEnabled ||
      this._view == null ||
      this._view.disposed ||
      (this._view._r8692e44752579e === Z1.TAB_INSPECTION_ID && this._view.stopViewing.inspectFurni(e));
  }
  userSelected(e) {
    !this.isEnabled ||
      this._view == null ||
      this._view.disposed ||
      (this._view._r8692e44752579e === Z1.TAB_INSPECTION_ID && this._view.stopViewing.inspectUser(e));
  }
  _rdba8d58443ab74() {
    this.send(
      new _i60e6b3515ace27(
        this._r62e1bd3b7b027a,
        this.wiredInspectButton,
        this.playTestMode,
        this._r7722c9aa63290b,
        this._r64205135e7d200,
        this.uiStyle,
      ),
    );
  }
  _r83ef40cef5b099() {
    return this._view != null && this._view.isShowing();
  }
  dispose() {
    if (!this.var_1271) {
      ((this.var_1271 = !0),
        this._r16cc3a5cb72cf6?.dispose(),
        (this._r16cc3a5cb72cf6 = null),
        this._r7eef93839b12d8?.dispose(),
        (this._r7eef93839b12d8 = null),
        this._rf70c2bba05b8c0?.dispose(),
        (this._rf70c2bba05b8c0 = null),
        this._view?.dispose(),
        (this._view = null));
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this._r6358b2bd53ae19 = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        (this._roomEngine = null),
        (this._roomEvents = null),
        super.dispose());
    }
  }
  showView() {
    !this.isEnabled ||
      !this._r0e0f569f7be727 ||
      ((this._view == null || this._view.disposed) &&
        ((this._view = new nBe(this, this._windowManager)), this._view.initialize()),
      this._view.show());
  }
  _r6167aac3809e80() {
    this._view == null || this._view.disposed || this._view.hide();
  }
  isShowing() {
    return this._view != null && !this._view.disposed && this._view.isShowing();
  }
  _r33a6aa9dfdc0be = n((e) => {
    this._roomEngine != null &&
      e.type === RoomEngineEvent.ROOM_DISPOSED &&
      (this._view?.dispose(), (this._view = null));
  }, "_r33a6aa9dfdc0be");
  _r2d37026609f2cf(e) {
    let r = ClassUtils.getParser(e, class_2685);
    r != null &&
      ((this.var_3281 = r.canModify),
      (this.var_3810 = r._r4b0f4dcd9b6c6f),
      this._view != null &&
        !this._view.disposed &&
        (this.var_3810 ? this._view._r7730f6cdc2e2b0() : (this._view.dispose(), (this._view = null))),
      this._roomEvents._r275ba11c2b7de0._r78ea73ed129903());
  }
  _rc8d9b9819345aa(e) {
    let r = ClassUtils.getParser(e, class_1928);
    r != null &&
      ((this.var_3214 = r._r62e1bd3b7b027a),
      (this.var_3418 = r.wiredInspectButton),
      this.setPlayTestMode(r.playTestMode),
      (this.var_3466 = r._r7722c9aa63290b),
      (this.var_3647 = r._r64205135e7d200),
      (this.uiStyle = r._r359f8956d08409));
  }
  onControllerMessageEvent(e) {
    this._roomEvents._r2eac8239a09fe7 != null &&
      this._playTestMode &&
      this._roomEvents.notifications.addItem(
        this.localizationManager.getLocalization("wiredmenu.settings.preferences.notification.playtest"),
        NotificationType.INFO,
        "icon_wired_notification_png",
        "wiredmenu/open/settings",
      );
  }
  onWiredMenuErrorEvent(e) {
    let r = ClassUtils.getParser(e, class_3093);
    r == null ||
      a.SHOW_NOTIFICATION_FOR_ERROR.indexOf(r.errorCode) === -1 ||
      this._roomEvents.notifications.addItem(
        `\${wiredmenu.error_message.${r.errorCode}}`,
        NotificationType.INFO,
        "icon_wired_error_png",
      );
  }
  _r136af7172e26af = n((e) => {
    e.type === RoomSessionEvent.const_1398 && (e.session.playTestMode = this._playTestMode);
  }, "_r136af7172e26af");
}
