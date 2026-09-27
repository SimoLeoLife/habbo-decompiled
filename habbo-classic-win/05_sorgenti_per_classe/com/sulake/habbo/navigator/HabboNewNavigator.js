// Estratto da HabboAirLauncher.deobf.js, riga 261450.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/HabboNewNavigator.as
// Nome offuscato: _ic54658da6eb483

class a extends ue {
  static {
    n(this, "HabboNewNavigator");
  }
  _currentResults = null;
  _rfc8ba962305b59 = new B();
  _r5f2e0e6927c720 = new B();
  _r333fc81fe4ca32 = [];
  _r9737016bcc49d2 = xd.OFFICIAL_VIEW_CODE;
  _r8dce9f2932e020 = "";
  _navigatorCache = "";
  var_2288 = -1;
  var_3324 = !1;
  _noPushToHistoryDueToNavigation = !1;
  constructor(e, r = 0, t = null) {
    (super(e, r, t), (this._r9175a58f6083e6 = new LegacyNavigator(this, this._r380110a391c3c3)));
  }
  get windowManager() {
    return this._r356718ca29352c(this._windowManager, "windowManager");
  }
  get communication() {
    return this._r356718ca29352c(this._communication, "communication");
  }
  get sessionData() {
    return this._r356718ca29352c(this._sessionData, "sessionData");
  }
  get roomSessionManager() {
    return this._r356718ca29352c(this._roomSessionManager, "roomSessionManager");
  }
  get localization() {
    return this._r356718ca29352c(this._localization, "localization");
  }
  get _r8d305e819155a0() {
    return this._r75d6f0b19b56c3();
  }
  get linkPattern() {
    return "navigator/";
  }
  get newResultsRendered() {
    return this.var_3324;
  }
  set newResultsRendered(e) {
    this.var_3324 = e;
  }
  get _r126d1d667eed47() {
    return this._r333fc81fe4ca32;
  }
  get isReady() {
    return this._r93616eb4c6570d != null && this._r93616eb4c6570d.isReady();
  }
  get contextContainer() {
    return this._r356718ca29352c(this._r93616eb4c6570d, "contextContainer");
  }
  get searchContextHistoryManager() {
    return this._r356718ca29352c(this._ra8574b7a1b1b6a, "searchContextHistoryManager");
  }
  get liftDataContainer() {
    return this._r356718ca29352c(this._r8c86f94bd19298, "liftDataContainer");
  }
  get _r863f575e329672() {
    return this._currentResults;
  }
  get data() {
    return this._r75d6f0b19b56c3().data;
  }
  get habboHelp() {
    return this._r356718ca29352c(this._habboHelp, "habboHelp");
  }
  get view() {
    return this._r356718ca29352c(this.var_205, "navigatorView");
  }
  get imageLibraryBaseUrl() {
    return this.context.configuration?.getProperty("image.library.url") ?? "";
  }
  get mainWindow() {
    return this.var_205?.mainWindow ?? null;
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
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
        [{ type: HabboToolbarEvent.TOOLBAR_CLICK, callback: this.IIDHabboCatalog.bind(this) }],
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
        [{ type: d0.PERKS_UPDATED, callback: this._rde9cb5beb33523.bind(this) }],
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
      new ComponentDependency(
        new IIDHabboNavigator(),
        (e) => {
          ((this._r380110a391c3c3 = e),
            this._r9175a58f6083e6 && (this._r9175a58f6083e6.oldNavigator = e));
        },
        !0,
      ),
    ]);
  }
  initComponent() {
    ((this._incomingMessages = new class_2184(this)),
      this.context._r7e43d9f4706607(this),
      (this.var_205 = new Ome(this)),
      (this._r93616eb4c6570d = new _i2cf5f62c71f608(this)),
      (this._ra8574b7a1b1b6a = new SearchContextHistoryManager(this)),
      (this._r8c86f94bd19298 = new kme(this)),
      (this._r0ed3433e10fc97 = new Wme()),
      this.communication.connection.send(new _i104bceecbdd90f()),
      (this._initialized = !0));
  }
  dispose() {
    this.disposed ||
      (this.context._r7485c47d8bd77c(this),
      this._incomingMessages && (this._incomingMessages._r66704af929412c(), (this._incomingMessages = null)),
      this._r9175a58f6083e6 && (this._r9175a58f6083e6.dispose(), (this._r9175a58f6083e6 = null)),
      super.dispose());
  }
  initialize(e) {
    this.contextContainer.initialize(e);
  }
  _rc5e08d1ba0be95(e) {
    ((this.var_3324 = !1),
      (this._currentResults = e),
      this._r52d753382bd5d0(e._r982d2da6f7e52d),
      this._noPushToHistoryDueToNavigation ||
        this.searchContextHistoryManager.addSearchContextAtCurrentOffset(new SearchContext(e.var_485, e._r9c1a4c7a359c22)),
      this._r0ed3433e10fc97?.put(`${e.var_485}/${e._r9c1a4c7a359c22}`, e),
      (this._noPushToHistoryDueToNavigation = !1),
      this.var_205?.visible && this.var_205.onSearchResults(e, this._navigatorCache));
  }
  _r9a09514347d38f(e) {
    (this.liftDataContainer.setLiftedRooms(e.liftedRooms), this.var_205?._r5a97df8ffba89a());
  }
  _rbd26aa6217eca8(e) {
    this.var_205?.setInitialWindowDimensions(
      e._r02a1531c5600e7,
      e._r9dc06e4415e238,
      e._r47a31970387a01,
      e._r8a52bbad798d98,
      e._rabd41c81709263,
    );
  }
  _rf5b6a7f64c4898(e) {
    ((this.contextContainer._rff6faffdb109ff = e._rff6faffdb109ff.concat([])),
      this.var_205?._rf5b6a7f64c4898(this.contextContainer._rff6faffdb109ff));
  }
  onGroupDetails(e) {
    (this._rfc8ba962305b59.hasKey(e.groupId) && this._rfc8ba962305b59.remove(e.groupId),
      this._rfc8ba962305b59.add(e.groupId, e),
      this.var_205?._ra923663a48a075(e.groupId));
  }
  _r1b1a2e97c8a61a(e) {
    this._r333fc81fe4ca32 = e.concat();
  }
  getCachedGroupDetails(e) {
    return this._rfc8ba962305b59.getValue(e) ?? null;
  }
  goBack() {
    (this.searchContextHistoryManager._rb1bf6ae5a6032b &&
      ((this._noPushToHistoryDueToNavigation = !0),
      this.performSearchByContext(this.searchContextHistoryManager._rb2179aadb46f5f())),
      this.trackEventLog("browse.back", "Results"));
  }
  _r98a28e0ebaeb75() {
    this._r9737016bcc49d2 != null &&
      this._r8dce9f2932e020 != null &&
      (this._r0ed3433e10fc97?.removeEntry(`${this._r9737016bcc49d2}/${this._r8dce9f2932e020}`),
      this.performSearch(this._r9737016bcc49d2, this._r8dce9f2932e020));
  }
  performSearch(e, r = "", t = "") {
    ((this.var_205.isBusy = !0), (this._navigatorCache = t));
    let i = this._r0ed3433e10fc97?.getEntry(`${e}/${r}`) ?? null;
    (i
      ? this._rc5e08d1ba0be95(i)
      : ((this._r9737016bcc49d2 = e),
        (this._r8dce9f2932e020 = r),
        this.communication.connection.send(new _idc4ebaaeb6fc2f(e, r)),
        this.trackEventLog("search", "Search", a.getEventLogExtraStringFromSearch(e, r))),
      this.open());
  }
  performSearchByContext(e) {
    this.performSearch(e.searchCode, e.filtering);
  }
  addSavedSearch(e, r) {
    (this._currentResults != null && this.communication.connection.send(new _i93dfd5fdbe959d(e, r)),
      this.trackEventLog("savedsearch.add", "SavedSearch", a.getEventLogExtraStringFromSearch(e, r)),
      this.var_205?.setLeftPaneVisibility(!0));
  }
  deleteSavedSearch(e) {
    (this.communication.connection.send(new class_1995(e)),
      this.trackEventLog("savedsearch.delete", "SavedSearch"));
  }
  static getEventLogExtraStringFromSearch(e, r) {
    return e + (r === "" ? "" : `:${r}`);
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "raidprotection":
          this._r75d6f0b19b56c3()._r34fab0dd99b1c7?._rffa2029859d1eb(r.length === 3 ? r[2] : null);
          break;
        case "goto":
          if (r.length > 2)
            switch (r[2]) {
              case "home":
                this._r75d6f0b19b56c3().goToHomeRoom();
                break;
              default: {
                let t = Number(r[2]);
                t > 0
                  ? this._r75d6f0b19b56c3()._r32d169e0ccf735(t)
                  : this.communication.connection.send(new _id30c13571de965(r[2]));
              }
            }
          break;
        case "search":
        case "tag":
          r.length > 2 && this.performSearch("hotel_view", r[2]);
          break;
        case "tab":
          r.length > 2 && this.performSearch(this.getSearchCodeForTabLink(r[2]));
          break;
        case "report":
          r.length > 3 && this._r75d6f0b19b56c3()._rfc45c7125c46f2(r[2], kie.decode(r[3]));
          break;
        case "ask_forward":
          r.length > 2 &&
            ((this.var_2288 = Number(r[2])),
            this.communication.connection.send(new class_2142(this.var_2288, !1, !1)));
          break;
        default:
      }
  }
  getSearchCodeForTabLink(e) {
    switch (e) {
      case "me":
        return xd.MYWORLD_VIEW_CODE;
      default:
        return e;
    }
  }
  onRoomInfo(e) {
    if (this.var_2288 !== -1 && e.flatId === this.var_2288) {
      this.var_2288 = -1;
      let r = this.localization.getLocalizationWithParams(
        "navigator.forward_confirmation.desc",
        "",
        "room_name",
        e.roomName,
      );
      this.windowManager.confirm("${navigator.forward_confirmation.title}", r, 0, (t, i) => {
        (t.dispose(),
          i.type === y.const_1300 && this._r75d6f0b19b56c3()._r32d169e0ccf735(e.flatId));
      });
    }
  }
  showOwnRooms() {}
  _r503afe7046a967(e) {}
  _raee2c33b60ee59(e) {}
  goToRoom(e, r = "mainview") {
    (this.communication.connection.send(new class_2142(e, !1, !0)),
      this.var_205 && (this.var_205.visible = !1));
    let t = this._r5f2e0e6927c720.getValue(e);
    this.trackEventLog("go", r, t ?? "", e);
  }
  _rc280e702c544c6(e) {
    this.communication.connection.send(new class_2134(e));
  }
  performTagSearch(e) {
    this.performSearch("hotel_view", `tag:${e}`);
  }
  _r45a41d9ebca32b() {
    this._r75d6f0b19b56c3()._r23bf93dfc48759.show();
  }
  open() {
    this.var_205 != null && (this.var_205.visible || (this.var_205.visible = !0));
  }
  close() {
    this.var_205?.visible && (this.var_205.visible = !1);
  }
  toggle() {
    this.var_205 != null &&
      ((this.var_205.visible = !this.var_205.visible),
      this.var_205.visible && this._r98a28e0ebaeb75());
  }
  refresh() {
    this._currentResults && this.var_205?.onSearchResults(this._currentResults);
  }
  sendWindowPreferences(e, r, t, i, s, o) {
    this.communication.connection.send(new class_2097(e, r, t, i, s, o));
  }
  getGuildInfo(e, r = !0) {
    this.communication.connection.send(new _i494540f04bf21d(e, r));
  }
  _rb7aa5df54dedd5(e) {
    this.communication.connection.send(new _i2a0f86a73b0c16(e));
  }
  _rec774b9a9ac62d(e) {
    this.communication.connection.send(new _if2374ffb1f6bf4(e));
  }
  goToHomeRoom() {
    this.goToRoom(this._r75d6f0b19b56c3().data._r3dfd89b26af6cd, "external");
  }
  trackEventLog(e, r, t = "", i = 0) {
    this._tracking?.trackEventLog("NewNavigator", r, e, t, i);
  }
  toggleSearchCodeViewMode(e, r) {
    (this.communication.connection.send(new class_1766(e, r)),
      this.trackEventLog("browse.toggleviewmode", "ViewMode", "", r));
  }
  performTextSearch(e) {}
  performGuildBaseSearch() {}
  performCompetitionRoomsSearch(e, r) {}
  IIDHabboCatalog(e) {
    e.type === HabboToolbarEvent.TOOLBAR_CLICK && e._re9c693c8b69b04 === Me.NAVIGATOR && this.toggle();
  }
  _r52d753382bd5d0(e) {
    this._r5f2e0e6927c720 = new B();
    for (let r of e.blocks)
      for (let t of r.actionAllowed) this._r5f2e0e6927c720.add(t.flatId, t.roomName);
  }
  _rde9cb5beb33523(e) {
    if (!this.sessionData.isPerkAllowed(class_2156.NAVIGATOR_PHASE_TWO_2014)) {
      (this.context._r7485c47d8bd77c(this),
        this._initialized && (this._incomingMessages?._r66704af929412c(), this.close()));
      return;
    }
    this._initialized
      ? this.sessionData.isPerkAllowed(class_2156.NAVIGATOR_PHASE_TWO_2014) &&
        this._incomingMessages?._r30c6713a5c0c0c()
      : this.initComponent();
  }
  _r356718ca29352c(e, r) {
    if (e == null) throw new Error(`HabboNewNavigator ${r} is not available.`);
    return e;
  }
  _r75d6f0b19b56c3() {
    return ((this._r9175a58f6083e6 ??= new LegacyNavigator(this, this._r380110a391c3c3)), this._r9175a58f6083e6);
  }
}
