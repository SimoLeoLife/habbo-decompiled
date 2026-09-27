// Estratto da HabboAirLauncher.deobf.js, riga 258565.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/HabboNavigator.as

class extends ue {
  static {
    n(this, "HabboNavigator");
  }
  var_1090 = null;
  _rb0c4c647f984db = !0;
  _r55ff3d78d3b221 = null;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDHabboConfigurationManager(), (e) => {
        this._configuration = e;
      }),
      new ComponentDependency(new IIDHabboRoomSessionManager(), (e) => {
        this._roomSessionManager = e;
      }),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (e) => {
          this._toolbar = e;
        },
        !1,
        [{ type: HabboToolbarEvent.TOOLBAR_CLICK, callback: n((e) => this.IIDHabboCatalog(e), "callback") }],
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionData = e;
        },
        !0,
        [{ type: d0.PERKS_UPDATED, callback: n((e) => this._rde9cb5beb33523(e), "callback") }],
      ),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._r943cf45602d873 = e;
      }),
      new ComponentDependency(
        new IIDHabboHelp(),
        (e) => {
          this._habboHelp = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    ((this._data ??= new NavigatorData(this)),
      (this.activate ??= new wme(this)),
      (this.var_1300 ??= new RoomInfoViewCtrl(this)),
      (this._passwordInput ??= new CQ(this)),
      (this._rd1571c7d6889a3 ??= new GuestRoomPasswordInput(this)),
      (this._rfe0221cd85ad5f ??= new GuestRoomDoorbell(this)),
      (this._re842dacc40aa7f ??= new We(this)),
      (this._r657baf4e8021c5 ??= new IQ(this)),
      (this.var_4015 ??= new RoomEventViewCtrl(this)),
      (this.var_2435 ??= new gQ(this)),
      (this._r8f0a81b34c4fd5 ??= new RoomFilterCtrl(this)),
      (this._r4f1b55aaf19d1b ??= new EnforceCategoryCtrl(this)),
      (this._incomingMessages = new _ifffc223d172097____(this)));
    let e = this._roomSessionManager?.events;
    ((this._r51a3d93f53aeb6 ??= (t) => this._rca2c89b6ba6752(t)),
      e?.addEventListener?.(RoomSessionEvent.const_481, this._r51a3d93f53aeb6),
      (this.var_918 = new TI(this, this._configuration)),
      this._sessionData?.isPerkAllowed("NAVIGATOR_PHASE_TWO_2014") ||
        this.context._r7e43d9f4706607(this));
    let r = this.getProperty("navigator.default_tab");
    (this.getInteger("new.identity", 0) > 0 && (r = this.getProperty("new.identity.navigator.default_tab")),
      this._re842dacc40aa7f._r18cd8a1aeaed88(We.tabIdFromName(r, We._r3788a24f86509c)),
      (this.var_2016 = new MQ(this)),
      ur.available && (globalThis[Ae.GOTO_ROOM_FROM_WEB_CALLBACK] = this.enterRoomWebRequest));
  }
  dispose() {
    if (this.disposed) return;
    (this.activate?.dispose(),
      this._roomSessionManager?.events?.removeEventListener?.(RoomSessionEvent.const_481, this._r51a3d93f53aeb6),
      this.context._r7485c47d8bd77c(this),
      this.var_1300?.dispose(),
      this.var_918?.dispose(),
      (this.var_918 = null),
      this._r8f0a81b34c4fd5?.dispose(),
      this._passwordInput?.dispose(),
      this._r657baf4e8021c5?.dispose(),
      this.var_4015?.dispose(),
      this.var_2016?.dispose(),
      this.var_1090?.dispose(),
      this._rd1571c7d6889a3?.dispose(),
      this._rfe0221cd85ad5f?.dispose(),
      (this._incomingMessages = null),
      (this.var_2435 = null),
      (this._r4f1b55aaf19d1b = null),
      (this._communication = null),
      (this._roomSessionManager = null),
      (this._windowManager = null),
      (this._localization = null),
      (this._sessionData = null),
      (this._tracking = null),
      (this._catalog = null),
      (this._habboHelp = null),
      (this._r943cf45602d873 = null),
      (this._toolbar = null),
      super.dispose());
  }
  get data() {
    return this._data;
  }
  get _r970f774dfe2577() {
    return this.activate;
  }
  get tabs() {
    return this._re842dacc40aa7f;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _r878c741bfdd13d() {
    return this.var_1300;
  }
  get _r23bf93dfc48759() {
    return this._passwordInput;
  }
  get communication() {
    return this._communication;
  }
  get roomSettingsCtrl() {
    return this.var_2016;
  }
  get sessionData() {
    return this._sessionData;
  }
  get passwordInput() {
    return this._rd1571c7d6889a3;
  }
  get doorbell() {
    return this._rfe0221cd85ad5f;
  }
  get SimpleAlertView() {
    return this.var_4015;
  }
  get officialRoomEntryManager() {
    return this._r657baf4e8021c5;
  }
  get toolbar() {
    return this._toolbar;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get _r41a6589dfa9df5() {
    return this.var_2435;
  }
  get _r515faa3e76c305() {
    return this._r8f0a81b34c4fd5;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get _r39ca8e01929189() {
    return this._r4f1b55aaf19d1b;
  }
  get _r34fab0dd99b1c7() {
    return this.var_918;
  }
  get localization() {
    return this._localization;
  }
  get tracking() {
    return this._tracking;
  }
  get _r3dfd89b26af6cd() {
    return this._data?._r3dfd89b26af6cd ?? 0;
  }
  get _rff8822efc4b68b() {
    return this._data?._rd27e27c96c37cd ?? null;
  }
  get _r34ab8227ed918d() {
    return this._data?._r34ab8227ed918d ?? [];
  }
  get _rb7581184283846() {
    return this._rb0c4c647f984db;
  }
  get _r4c7d33103215de() {
    return this._r55ff3d78d3b221;
  }
  get linkPattern() {
    return "navigator/";
  }
  enterRoomWebRequest = n((e, r = !1, t = null) => {
    ((this._rb0c4c647f984db = r), (this._r55ff3d78d3b221 = t), this.send(new _i299bf932cfbc24(e)));
  }, "enterRoomWebRequest");
  _r545ad49cf926cc() {
    this._passwordInput?.show();
  }
  _r32d169e0ccf735(e) {
    this.send(new class_2142(e, !1, !0));
  }
  _r37e55c511f5b0e(e) {
    this.send(new _i4ee8fc56f28855(e));
  }
  _r251807bd7fb8c9(e) {
    let r = this._roomSessionManager?.getSession(e) ?? null;
    return r?._rea9739215487be === RoomControllerLevelEnum.ROOM_CONTROLLER && !r.isRoomOwner;
  }
  _rf54c0f47881811(e, r) {
    this.var_1300?.close();
    let t = r && (this._data?._r3dfd89b26af6cd ?? 0) > 0 ? this._data._r3dfd89b26af6cd : 0;
    this._roomSessionManager?._rdac8cbe17d02d8(e, t);
  }
  goToRoom(e, r, t = "", i = -1, s = !1) {
    (r && this.activate?.close(), this._roomSessionManager?.gotoRoom(e, t, "", s));
    let o = this._re842dacc40aa7f?.getSelected() ?? null;
    if (o == null) return;
    let d = i > -1 ? i + 1 : 0;
    switch (o.id) {
      case We.OfficialTabPageDecorator:
        this.trackNavigationDataPoint(o.tabSelected.filterCategory ?? "", "go.official", String(e), d);
        break;
      case We.MyRoomsTabPageDecorator:
        this.trackNavigationDataPoint(o.tabSelected.filterCategory ?? "", "go.me", String(e), d);
        break;
      case We._r3788a24f86509c:
        this.trackNavigationDataPoint(o.tabSelected.filterCategory ?? "", "go.rooms", String(e), d);
        break;
      case We.EventsTabPageDecorator:
        this.trackNavigationDataPoint("Events", "go.events", String(e), d);
        break;
      case We._r54c62c548aaab8:
        this.trackNavigationDataPoint("Search", "go.search", String(e), d);
        break;
    }
  }
  goToHomeRoom() {
    return (this._data?._r3dfd89b26af6cd ?? 0) < 1
      ? !1
      : (this.goToRoom(this._data?._r3dfd89b26af6cd ?? 0, !0), !0);
  }
  send(e, r = !1) {
    this._communication?.connection.send(e);
  }
  getXmlWindow(e, r = 1) {
    let i = this.assets.getAssetByName(`${e}_xml`)?.content ?? null;
    return i == null
      ? (ErrorReportStorage.addDebugData("HabboNavigator", `Missing xml asset ${e}_xml`), null)
      : (this._windowManager?.buildFromXML(i, r) ?? null);
  }
  getText(e) {
    let r = this._localization?.getLocalization(e) ?? "";
    return r !== "" ? r : e;
  }
  _r43eae9731f5b27(e, r, t, i = "%") {
    return this._localization?._r43eae9731f5b27(e, r, t, i) ?? null;
  }
  getButton(e, r, t, i = 0, s = 0, o = 0) {
    let d = this._r6bd8f6d6bfdbb5(r);
    if (d == null) return null;
    let c = this._windowManager?.createWindow(
      e,
      "",
      HabboWindowType._r7080bcdb60a805,
      HabboWindowStyle.NULL,
      class_2094._r26338c8d88c4e5 | class_2094._r5f5ff9955e2bf4,
      new D(i, s, d.width, d.height),
      t,
      o,
    );
    return (c != null && ((c.bitmap = d), (c.disposesBitmap = !1)), c);
  }
  refreshButton(e, r, t, i, s, o = null) {
    let d = e.findChildByName(r);
    if (d != null) {
      if (!t) {
        d.visible = !1;
        return;
      }
      ((d.id = s),
        (d.procedure = i),
        d.bitmap == null &&
          ((d.bitmap = this._r6bd8f6d6bfdbb5(o ?? r)),
          (d.disposesBitmap = !1),
          (d.width = d.bitmap?.width ?? d.width),
          (d.height = d.bitmap?.height ?? d.height)),
        (d.visible = !0));
    }
  }
  _r6bd8f6d6bfdbb5(e, r = "_png") {
    return this.assets.getAssetByName(`${e}${r}`)?.content ?? null;
  }
  _r2a0df8adec219d(e) {
    this._catalog?.openClubCenter();
  }
  _r95e9ef312eb388() {
    this._catalog?.openCatalogPage("room_ad");
  }
  _rcd7c3122876c17(e, r, t, i) {
    let s = this._data?._rd27e27c96c37cd?.roomName ?? "";
    this._catalog?.openRoomAdCatalogPageInExtendedMode?.("room_ad", e, r, s, t, i);
  }
  performTagSearch(e) {
    (e.includes(" ") && (e = `"${e}"`),
      this.activate?.startSearch(We._r54c62c548aaab8, We.SEARCHTYPE_TAG_SEARCH, e),
      this.trackNavigationDataPoint("Search", "search.tag", e),
      this.activate?.mainWindow?.activate());
  }
  performTextSearch(e) {
    (this.activate?.startSearch(We._r54c62c548aaab8, We.SEARCHTYPE_TEXT_SEARCH, e),
      this.trackNavigationDataPoint("Search", "search", e),
      this.activate?.mainWindow?.activate(),
      this.activate?.searchInput?.setText(e, We.SEARCHTYPE_TEXT_SEARCH));
  }
  performGuildBaseSearch() {
    this.activate?.startSearch(We._r54c62c548aaab8, We.SEARCHTYPE_GUILD_BASES, "");
  }
  performCompetitionRoomsSearch(e, r) {
    (this._data != null && (this._data._r296e1461c77065 = new class_2277(null, e, r)),
      this.activate?.startSearch(We._r54c62c548aaab8, We.SEARCHTYPE_COMPETITION_ROOMS, ""));
  }
  showOwnRooms() {
    this._r43c3dc75c818a5(We._r8a4642632c386a);
  }
  showFavouriteRooms() {
    this._r43c3dc75c818a5(We._r94854e4c2ed9da);
  }
  showHistoryRooms() {
    this._r43c3dc75c818a5(We.const_200);
  }
  showFrequentRooms() {
    this._r43c3dc75c818a5(We.const_1369);
  }
  trackNavigationDataPoint(e, r, t = "", i = 0) {
    this._tracking?.trackEventLog("Navigation", e, r, t, i);
  }
  trackGoogle(e, r) {
    this._tracking?.trackGoogle(e, r);
  }
  _r52fa4af48d31b1(e = null) {
    this.activate?._r8885c4aa700228(e);
  }
  _r4d7124da99408e() {
    this.activate?.close();
  }
  _r38c44cbd7deb08() {
    (this._passwordInput?.hide(), this.var_1300?.close());
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "raidprotection":
          this.var_918._rffa2029859d1eb(r.length === 3 ? r[2] : null);
          break;
        case "goto":
          r[2] === "home"
            ? this.goToHomeRoom()
            : (Number(r[2]) || 0) > 0
              ? this._r32d169e0ccf735(Number(r[2]))
              : r[2] != null && this.send(new _id30c13571de965(r[2]));
          break;
        case "search":
          r[2] != null && this.performTextSearch(r[2]);
          break;
        case "tag":
          r[2] != null && this.performTagSearch(r[2]);
          break;
        case "tab":
          r[2] != null &&
            (this._re842dacc40aa7f?._r18cd8a1aeaed88(We.tabIdFromName(r[2], We._r3788a24f86509c)),
            this._r52fa4af48d31b1(null));
          break;
        case "report":
          r.length > 3 && this.enterRoomWebRequest(r[2] ?? "", !0, r[3] ?? null);
          break;
      }
  }
  _r503afe7046a967(e) {
    (this.var_1090 == null && (this.var_1090 = new xme(this)), this.var_1090.show(e));
  }
  _raee2c33b60ee59(e) {
    this.var_1090 != null &&
      (e ? this.var_1090.hideDelayed() : this.var_1090.hide());
  }
  isPerkAllowed(e) {
    return this._sessionData?.isPerkAllowed(e) ?? !1;
  }
  _r2fec64fe1f887e() {
    return this._data?._r43a02485c61e00 ?? !1;
  }
  _r0af75c3a396faa(e) {
    return this._data?._rc263ba8eeb2e0b(e) ?? !1;
  }
  _r15f67a9e1b27c9(e) {
    return this._data?._r15f67a9e1b27c9(e) ?? !1;
  }
  _r2fc1e9a895a4db() {
    this.var_1300?.toggle();
  }
  _r43c3dc75c818a5(e) {
    (this.activate?.startSearch(We.MyRoomsTabPageDecorator, e),
      this._re842dacc40aa7f?._r554ac914236787(We.MyRoomsTabPageDecorator)?.tabSelected._r2683ac06d69911(e));
  }
  _rca2c89b6ba6752 = n((e) => {
    this.var_1300?.close();
  }, "_rca2c89b6ba6752");
  IIDHabboCatalog = n((e) => {
    if (e.type === HabboToolbarEvent.TOOLBAR_CLICK)
      switch (e._re9c693c8b69b04) {
        case Me.ROOMINFO:
          this._r2fc1e9a895a4db();
          break;
        case Me.NAVIGATOR_ME_TAB:
          this.showOwnRooms();
          break;
        case Me.GAMES:
          this.getBoolean("game.center.enabled") && this._r4d7124da99408e();
          break;
        case Me.HOME:
          this.goToHomeRoom();
          break;
      }
  }, "IIDHabboCatalog");
  _rde9cb5beb33523 = n((e) => {
    this._sessionData?.isPerkAllowed("NAVIGATOR_PHASE_TWO_2014")
      ? this.context._r7485c47d8bd77c(this)
      : (this.activate != null &&
          this.activate._r9dcf961fca1107 !== this.isPerkAllowed("NAVIGATOR_PHASE_ONE_2014") &&
          this.activate.close(),
        this.context._r7e43d9f4706607(this));
  }, "_rde9cb5beb33523");
}
