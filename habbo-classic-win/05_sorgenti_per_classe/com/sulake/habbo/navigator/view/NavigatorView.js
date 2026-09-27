// Extracted from HabboAirLauncher.deobf.js, line 260679.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/NavigatorView.as
// Obfuscated name: _if8a8c569a7f379

class a {
  static {
    n(this, "NavigatorView");
  }
  static _r08e3192f28a345 = 4e3;
  static MAX_WINDOW_WIDTH = 578;
  static STARTING_TAB_POSITION = 115;
  static _r02f826b4f11e6a = 7;
  static _rd77cf87c40e02b = 7;
  _navigator;
  _rc3b12fd33b7b17 = null;
  _r64d33016621008 = null;
  filteringData = null;
  _rd62dcd80647856 = null;
  var_1572 = null;
  guestRooms = null;
  _r73c027df1ea656 = null;
  _roomInfoPopup = null;
  _r367b0dd9ce0ae8 = null;
  _rfae760254495c9 = null;
  _r1e01f472713b01 = null;
  _window = null;
  _r299763d78261a3 = !1;
  _rdb5030c6559aee = _ia411d8d8194a3a();
  _rb5492f91f9202c = -1;
  _r664196a53167df = -1;
  _lastWindowWidth = -1;
  var_1397 = -1;
  _lastLeftPaneHidden = !1;
  _r2a3446fc799a5e = -1;
  _rdc11db067a77cd = a._r08e3192f28a345;
  var_5746 = !1;
  var_2228 = 0;
  _raf455680a9ed64 = 0;
  _r6bde80e7d20111 = null;
  _rf08d9f672a07f2 = 0;
  roomInfoGlobalRectangle = new D();
  constructor(e) {
    this._navigator = e;
  }
  set visible(e) {
    (e && this._navigator.isReady
      ? (this.var_1572 == null && (this.var_1572 = new RoomEntryElementFactory(this._navigator)),
        this.guestRooms == null &&
          (this.guestRooms = new Nme(this._navigator, this.var_1572)),
        this._r993fa8aedadaf1(),
        this._window == null &&
          (this.createMainWindow(),
          this._navigator.registerUpdateReceiver(this, 1e3),
          this._r64d33016621008?.setQuickLinks(this._navigator.contextContainer._rff6faffdb109ff)),
        this._navigator._r863f575e329672 != null
          ? this.onSearchResults(this._navigator._r863f575e329672)
          : this._r299763d78261a3 || this._navigator.performSearch(xd.OFFICIAL_VIEW_CODE),
        this._window?.activate())
      : this._roomInfoPopup && this._roomInfoPopup.show(!1),
      this._window && (this._window.visible = e));
  }
  get visible() {
    return this._window?.visible ?? !1;
  }
  setInitialWindowDimensions(e, r, t, i, s) {
    this._window
      ? (this.setLeftPaneVisibility(!i),
        (this._window.x = e),
        (this._window.y = r),
        (this._window.height = t))
      : ((this._rb5492f91f9202c = e),
        (this._r664196a53167df = r),
        (this.var_1397 = t),
        (this._lastLeftPaneHidden = i));
  }
  _rf5b6a7f64c4898(e) {
    this._r64d33016621008?.setQuickLinks(e);
  }
  onSearchResults(e, r = "") {
    if (!(
      this._navigator.newResultsRendered ||
      !this.var_1572 ||
      !this._rd62dcd80647856 ||
      !this._window
    )) {
      if (
        ((this.var_1572.viewMode = xd.searchCodeOriginal(e.var_485)),
        this._rd62dcd80647856.displayCurrentResults(),
        this._navigator.contextContainer._rbcf9d553de266a(e.var_485))
      ) {
        let t = this._navigator.contextContainer._r02bbc706f6aea8().indexOf(e.var_485);
        t !== -1 && this._r73c027df1ea656?.selectTabByIndex(t);
      }
      ((this._r8767860069a7d4("create_room").procedure = this._rd1cc4eed5dd2e8(
        this._rc785de68340616.bind(this),
      )),
        (this._r8767860069a7d4("random_room_border").visible = !1),
        (this._r8767860069a7d4("promote_room_border").visible = !1),
        e.var_485 === xd.ROOM_ADS_VIEW_CODE || e.var_485 === xd.MYWORLD_VIEW_CODE
          ? ((this._r8767860069a7d4("promote_room_border").visible = !0),
            (this._r8767860069a7d4("promote_room").procedure = this._rd1cc4eed5dd2e8(
              this.promoteRoomProcedure.bind(this),
            )))
          : ((this._r8767860069a7d4("random_room_border").visible = !0),
            (this._r8767860069a7d4("random_room").procedure = this._rd1cc4eed5dd2e8(
              this.randomRoomProcedure.bind(this),
            ))),
        this.filteringData?.setTextAndSearchModeFromFilter(e._r9c1a4c7a359c22, r),
        (this._navigator.newResultsRendered = !0),
        (this.isBusy = !1),
        this._roomInfoPopup?.show(!1));
    }
  }
  _r4aaed77b8eb1e6() {
    return this.filteringData?.currentInput ?? null;
  }
  _r5a97df8ffba89a() {
    this._rc3b12fd33b7b17?.refresh();
  }
  showRoomInfoBubbleAt(e, r, t, i = !1) {
    ((this.var_5746 = !0),
      this._window &&
        (this._roomInfoPopup || (this._roomInfoPopup = new RoomInfoPopup(this._navigator)),
        this._roomInfoPopup.visible && !i
          ? this._roomInfoPopup.show(!1)
          : (this._roomInfoPopup.setData(e),
            e.habboGroupId !== 0 &&
              this._navigator.getCachedGroupDetails(e.habboGroupId) == null &&
              (this._navigator.getGuildInfo(e.habboGroupId, !1),
              (this._r2a3446fc799a5e = e.habboGroupId)),
            this._roomInfoPopup.showAt(!0, r, t),
            this._navigator.trackEventLog(
              "browse.openroominfo",
              "Results",
              e.roomName,
              e.flatId,
            ),
            (this._rdc11db067a77cd = a._r08e3192f28a345))));
  }
  get mainWindow() {
    return this._window;
  }
  set isBusy(e) {
    (this._window &&
      ((this._window.caption = e ? "${navigator.title.is.busy}" : "${navigator.title}"),
      (this._r8767860069a7d4("search_waiting_for_results_mask").visible = e)),
      (this._r299763d78261a3 = e));
  }
  get isBusy() {
    return this._r299763d78261a3;
  }
  setLeftPaneVisibility(e) {
    if (!this._window || !this._r6bde80e7d20111) return;
    let r = this._r8767860069a7d4("left_pane"),
      t = this._raf455680a9ed64 - this._rf08d9f672a07f2 + a._rd77cf87c40e02b;
    if (
      (this._r6bde80e7d20111.setParamFlag(N._r77a58b25a3d55d, !0),
      this._r6bde80e7d20111.setParamFlag(N._rf567d650b39a78, !1),
      !e)
    )
      ((r.visible = !1),
        (this._r6bde80e7d20111.x = this.var_2228),
        (this._window.limits.minWidth = this._window.width - t + this.var_2228),
        (this._window.limits.maxWidth = this._window.width - t + this.var_2228),
        (this._window.width = this._window.width - t + this.var_2228));
    else {
      ((r.visible = !0), (this._r6bde80e7d20111.x = this._raf455680a9ed64));
      let s = this._window.width + t - this.var_2228;
      ((this._window.limits.minWidth = s > a.MAX_WINDOW_WIDTH ? a.MAX_WINDOW_WIDTH : s),
        (this._window.limits.maxWidth = s > a.MAX_WINDOW_WIDTH ? a.MAX_WINDOW_WIDTH : s),
        (this._window.width = s > a.MAX_WINDOW_WIDTH ? a.MAX_WINDOW_WIDTH : s));
    }
    (this._r6bde80e7d20111.setParamFlag(N._r77a58b25a3d55d, !1),
      this._r6bde80e7d20111.setParamFlag(N._rf567d650b39a78, !0),
      (this._r8767860069a7d4("left_hide_container").visible = e),
      (this._r8767860069a7d4("left_show_container").visible = !e));
    let i = e ? a.STARTING_TAB_POSITION : a.STARTING_TAB_POSITION - t / 2;
    this._r8767860069a7d4("top_view_select_tab_context").x = i;
  }
  update(e) {
    let r = _ia411d8d8194a3a();
    (this.leftPaneShowHideProcedure && r - this._rdb5030c6559aee > 5e3 && this.sendWindowPreferences(),
      this._r5b57e0e47d11ce(),
      (this._rdc11db067a77cd -= e),
      this._rac155c1dbd00e7 &&
        this._roomInfoPopup &&
        this._window &&
        this._rdc11db067a77cd < 0 &&
        (this._roomInfoPopup.getGlobalRectangle(this.roomInfoGlobalRectangle),
        this.roomInfoGlobalRectangle.contains(
          this._window.desktop.mouseX,
          this._window.desktop.mouseY,
        ) || this._roomInfoPopup.show(!1)));
  }
  dispose() {
    this._navigator.removeUpdateReceiver(this);
  }
  get disposed() {
    return !1;
  }
  _ra923663a48a075(e) {
    this._r2a3446fc799a5e === e && (this._r2a3446fc799a5e = -1);
  }
  get _rac155c1dbd00e7() {
    return this._roomInfoPopup?.visible ?? !1;
  }
  _r04da86a9df65db() {
    this._roomInfoPopup?.refreshHomeState();
  }
  _r993fa8aedadaf1() {
    (this._rd62dcd80647856 == null &&
      ((this._rd62dcd80647856 = new Lme(this._navigator)),
      (this._rd62dcd80647856._r6009cb294d3636 = this.guestRooms),
      this.guestRooms && (this.guestRooms._rf8d1a812903cb2 = this._rd62dcd80647856)),
      this.filteringData == null && (this.filteringData = new Dme(this._navigator)),
      this._r64d33016621008 == null && (this._r64d33016621008 = new QuickLinksView(this._navigator)),
      this._r73c027df1ea656 == null && (this._r73c027df1ea656 = new TopViewSelector_(this._navigator)));
  }
  createMainWindow() {
    let e = this._navigator.windowManager.buildFromXML(
      rr(this._ra5bebce2af9b7c("navigator_frame_2_xml")),
    );
    e.findChildByName("block_results").autoHideScrollBar = !1;
    let r = e.findChildByName("navigator_entry_row_container"),
      t = e.findChildByName("navigator_entry_tile_container").clone(),
      i = this._rde030f2db94049(t, "navigator_entry_tile").clone(),
      s = e.findChildByName("category_container"),
      o = e.findChildByName("category_container_collapsed"),
      d = e.findChildByName("no_results_container"),
      c = e.findChildByName("quick_link"),
      f = e.findChildByName("top_view_select_tab_context"),
      l = this._r8eb5fa72984d71(f, 0).clone();
    ((this.var_1572._r21d3964b3a0052 = r.clone()),
      r.destroy(),
      (this.var_1572._r0ab46ef3e01c9e = i),
      t.destroyListItems(),
      (this.var_1572._rcbb3f25cd31a1f = t),
      e.findChildByName("category_content").destroyListItems(),
      (this.guestRooms._ra043958bd92956 = s.clone()),
      e.findChildByName("block_results").removeListItemAt(0),
      s.destroy(),
      (this.guestRooms._rc540e9e9b2b2c2 = o.clone()),
      e.findChildByName("block_results").removeListItemAt(0),
      o.destroy(),
      (this.guestRooms._rc17d3f06c46dc5 = d.clone()),
      e.findChildByName("block_results").removeListItemAt(0),
      d.destroy(),
      (this._rd62dcd80647856.itemList = e.findChildByName("block_results")),
      (this.filteringData.container = e.findChildByName("search_tools")),
      (this._r86a049cc2dac7b(c, "quick_link_text").caption = ""),
      (this._r64d33016621008.template = c.clone()),
      (this._r64d33016621008.itemList = e.findChildByName("quicklinks_list")),
      e.findChildByName("quicklinks_list").removeListItems(),
      c.destroy(),
      (this._r73c027df1ea656.template = l),
      (this._r73c027df1ea656.tabContext = f),
      f._ra8b044f5467c44(l),
      this._r73c027df1ea656.refresh(),
      (this._rf08d9f672a07f2 = this._r86a049cc2dac7b(e, "left_pane").x),
      (this._r86a049cc2dac7b(e, "refreshButton").procedure = this._rd1cc4eed5dd2e8(
        this.refreshSearchResults.bind(this),
      )),
      (this._r86a049cc2dac7b(e, "header_button_close").procedure = this._rd1cc4eed5dd2e8(
        this.headerProcedure.bind(this),
      )),
      (this.var_2228 = a._r02f826b4f11e6a),
      (this._r86a049cc2dac7b(e, "temp_back").procedure = this._rd1cc4eed5dd2e8(
        this.windowPreferencesChanged.bind(this),
      )),
      (this._r6bde80e7d20111 = this._r86a049cc2dac7b(e, "right_pane")),
      (this._raf455680a9ed64 = this._r6bde80e7d20111.x),
      (this._window = e),
      this.setLeftPaneVisibility(!1),
      this._rb5492f91f9202c === -1 && this._r664196a53167df === -1
        ? ((this._rb5492f91f9202c = this._window.x),
          (this._r664196a53167df = this._window.y),
          (this._lastWindowWidth = this._window.width),
          (this.var_1397 = this._window.height))
        : (this._lastLeftPaneHidden && this.setLeftPaneVisibility(!0),
          (this._window.x = this._rb5492f91f9202c),
          (this._window.y = this._r664196a53167df),
          (this._window.height = this.var_1397)),
      (this._rdb5030c6559aee = _ia411d8d8194a3a()));
  }
  refreshSearchResults(e, r) {
    e.type === u.CLICK && r.name === "refreshButton" && this._navigator._r98a28e0ebaeb75();
  }
  headerProcedure(e, r) {
    e.type === u.CLICK && r.name === "header_button_close" && (this.visible = !1);
  }
  _rc785de68340616(e, r) {
    e.type === u.CLICK && (this._navigator._r45a41d9ebca32b(), this._roomInfoPopup?.show(!1));
  }
  promoteRoomProcedure(e, r) {
    e.type === u.CLICK &&
      (this._navigator.context._r6b6c989018eb05("catalog/open/room_ad"),
      this._roomInfoPopup?.show(!1));
  }
  randomRoomProcedure(e, r) {
    e.type === u.CLICK &&
      (this._navigator.context._r6b6c989018eb05("navigator/goto/random_friending_room"),
      this._roomInfoPopup?.show(!1),
      (this.visible = !1));
  }
  windowPreferencesChanged(e, r) {
    if (e.type === u.CLICK && this._window) {
      let t = this._r8767860069a7d4("left_pane");
      (this.setLeftPaneVisibility(!t.visible), this._roomInfoPopup?.show(!1));
    }
  }
  _r5b57e0e47d11ce() {
    this._window &&
      ((this._window.x = Math.max(0, this._window.x)),
      (this._window.y = Math.max(0, this._window.y)),
      this._window.desktop &&
        ((this._window.x = Math.min(
          this._window.desktop.width - this._window.width,
          this._window.x,
        )),
        (this._window.y = Math.min(
          this._window.desktop.height - this._window.height,
          this._window.y,
        ))));
  }
  sendWindowPreferences() {
    this._window &&
      ((this._rb5492f91f9202c = this._window.x),
      (this._r664196a53167df = this._window.y),
      (this._lastWindowWidth = this._window.width),
      (this.var_1397 = this._window.height),
      (this._lastLeftPaneHidden = this._r8767860069a7d4("left_pane").visible),
      (this._rdb5030c6559aee = _ia411d8d8194a3a()),
      this._navigator.sendWindowPreferences(
        this._rb5492f91f9202c,
        this._r664196a53167df,
        this._lastWindowWidth,
        this.var_1397,
        this._lastLeftPaneHidden,
        UnkConstants_3fbb45._r038bfe744af0bc,
      ),
      this._navigator.trackEventLog(
        "windowsettings",
        "Interface",
        `${this._window.width} x ${this._window.height}`,
      ));
  }
  get leftPaneShowHideProcedure() {
    return this._window
      ? this._lastLeftPaneHidden !== this._r8767860069a7d4("left_pane").visible ||
        this._rb5492f91f9202c !== this._window.x ||
        this._r664196a53167df !== this._window.y
        ? !0
        : this.var_1397 !== this._window.height
      : !1;
  }
  _ra5bebce2af9b7c(e) {
    let r = this._navigator.assets.getAssetByName(e);
    if (r == null) throw new Error(`Missing navigator asset: ${e}`);
    return r.content;
  }
  _r8767860069a7d4(e) {
    if (this._window == null) throw new Error("Navigator main window has not been created yet.");
    let r = this._window.findChildByName(e);
    if (r == null) throw new Error(`Missing navigator child window: ${e}`);
    return r;
  }
  _r86a049cc2dac7b(e, r) {
    let t = e.findChildByName(r);
    if (t == null) throw new Error(`Missing navigator child window: ${r}`);
    return t;
  }
  _rde030f2db94049(e, r) {
    let t = e.getListItemByName(r);
    if (t == null) throw new Error(`Missing navigator list item: ${r}`);
    return t;
  }
  _r8eb5fa72984d71(e, r) {
    let t = e.getTabItemAt(r);
    if (t == null) throw new Error(`Missing navigator tab item at index ${r}`);
    return t;
  }
  _rd1cc4eed5dd2e8(e) {
    return e;
  }
}
