// Estratto da HabboAirLauncher.deobf.js, riga 182138.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/HabboTracking.as
// Nome offuscato: _id97c2b808a4229

class a extends ue {
  static {
    n(this, "HabboTracking");
  }
  static ERROR_DATA_FLAG_COUNT = 11;
  static var_325 = null;
  var_3337;
  _r3ea03ca4601b46 = !1;
  _ra45f9a03850862 = !1;
  _currentTime = -1;
  var_4182 = 0;
  var_4000 = 0;
  _r9c87b3f97d02b4 = null;
  _rf3a61b4143f976 = 0;
  _rb3a9af521fa495 = -1;
  _r0c8a49b7bb68e8 = [];
  static getInstance() {
    return this.var_325;
  }
  constructor(e, r = 0, t = null) {
    let i = a.var_325 == null;
    (super(e, r, t),
      i && (a.var_325 = this),
      (this.var_3337 = new Array(a.ERROR_DATA_FLAG_COUNT).fill(0)));
    let s = "development";
    (e.root.events?.addEventListener?.(ue.COMPONENT_EVENT_ERROR, this._onError),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_CLIENT_START_TIME, Date.now().toString()),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_USER_AGENT, s),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_CAPABILITIES, _ic7f867ad53849e._rfc02824d36aa13),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_IS_IN_ROOM, String(!1)),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_LAST_VISITED_ROOM, String(0)),
      this.registerUpdateReceiver(this, 1));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(
        new IIDHabboConfigurationManager(),
        (e) => {
          e != null && this.setErrorContextFlag(1, 0);
        },
        !1,
        [{ type: M.ComponentDependency, callback: n((e) => this.IIDHabboLocalizationManager(e), "callback") }],
      ),
      new ComponentDependency(
        new IIDHabboLocalizationManager(),
        (e) => {
          e != null && this.setErrorContextFlag(1, 1);
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), null, !1, [
        {
          type: HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_INPUT,
          callback: n((e) => this._r5a3513b68d8da1(e), "callback"),
        },
        {
          type: HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_RENDER,
          callback: n((e) => this._r5a3513b68d8da1(e), "callback"),
        },
        {
          type: HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_SLEEP,
          callback: n((e) => this._r5a3513b68d8da1(e), "callback"),
        },
      ]),
      new ComponentDependency(new IIDHabboNavigator(), null, !1, [
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_CLOSED,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_EVENTS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ROOMS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ME,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCH,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_OFFICIAL,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FAVOURITES,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FRIENDS_ROOMS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_HISTORY,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_ROOMS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_OFFICIALROOMS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_POPULAR_ROOMS,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WHERE_MY_FRIENDS_ARE,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WITH_HIGHEST_SCORE,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TAG_SEARCH,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TEXT_SEARCH,
          callback: n((e) => this._r77d651b7a85cb8(e), "callback"),
        },
        {
          type: HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_CLOSED,
          callback: n((e) => this._rc346f34a937e60(e), "callback"),
        },
        {
          type: HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_DEFAULT,
          callback: n((e) => this._rc346f34a937e60(e), "callback"),
        },
        {
          type: HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_ADVANCED,
          callback: n((e) => this._rc346f34a937e60(e), "callback"),
        },
        {
          type: HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_THUMBS,
          callback: n((e) => this._rc346f34a937e60(e), "callback"),
        },
        { type: HabboToolbarEvent.const_85, callback: n((e) => this._re9323db372a794(e), "callback") },
      ]),
      new ComponentDependency(new IIDHabboCatalog(), null, !1, [
        { type: vj.CATALOG_PAGE_OPENED, callback: n((e) => this.onCatalogPageOpened(e), "callback") },
        {
          type: HabboCatalogTrackingEvent.HABBO_CATALOG_TRACKING_EVENT_OPEN,
          callback: n((e) => this._rc4fe730e43ccb7(e), "callback"),
        },
        {
          type: HabboCatalogTrackingEvent.HABBO_CATALOG_TRACKING_EVENT_CLOSE,
          callback: n((e) => this._rc4fe730e43ccb7(e), "callback"),
        },
        { type: gj.CATALOG_FURNI_PURCHASE, callback: n((e) => this._rc4fe730e43ccb7(e), "callback") },
      ]),
      new ComponentDependency(new IIDHabboInventory(), null, !1, [
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_CLOSED,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_FURNI,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_POSTERS,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_BADGES,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_ACHIEVEMENTS,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
        {
          type: HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_TRADING,
          callback: n((e) => this._r1408e659eced3e(e), "callback"),
        },
      ]),
      new ComponentDependency(new IIDHabboFriendList(), null, !1, [
        {
          type: HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_CLOSED,
          callback: n((e) => this._r067f945d15f8e3(e), "callback"),
        },
        {
          type: HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_FRIENDS,
          callback: n((e) => this._r067f945d15f8e3(e), "callback"),
        },
        {
          type: HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_SEARCH,
          callback: n((e) => this._r067f945d15f8e3(e), "callback"),
        },
        {
          type: HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_REQUEST,
          callback: n((e) => this._r067f945d15f8e3(e), "callback"),
        },
        { type: HabboFriendListTrackingEvent.const_649, callback: n((e) => this._r067f945d15f8e3(e), "callback") },
      ]),
      new ComponentDependency(new IIDHabboHelp(), null, !1, [
        {
          type: HabboHelpTrackingEvent.HABBO_HELP_TRACKING_EVENT_CLOSED,
          callback: n((e) => this._r8ed1e469a0d0a1(e), "callback"),
        },
        {
          type: HabboHelpTrackingEvent.HABBO_HELP_TRACKING_EVENT_DEFAULT,
          callback: n((e) => this._r8ed1e469a0d0a1(e), "callback"),
        },
      ]),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
        [
          { type: gi.ROOM_AD_FURNI_CLICK, callback: n((e) => this.onRoomAdClick(e), "callback") },
          { type: RoomEngineEvent.ROOM_INITIALIZED, callback: n((e) => this._rb71609878357ff(e), "callback") },
          { type: RoomEngineEvent.ROOM_DISPOSED, callback: n((e) => this._rb71609878357ff(e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboAdManager(), null, !1, [
        { type: AdEvent.ROOM_AD_SHOW, callback: n((e) => this.onRoomAdLoad(e), "callback") },
      ]),
      new ComponentDependency(new IIDHabboToolbar(), null, !1, [
        { type: HabboToolbarEvent.TOOLBAR_CLICK, callback: n((e) => this._r8cbcd8b1559390(e), "callback") },
      ]),
    ]);
  }
  initComponent() {
    ((this._rf91dc567c16b9b = new LatencyTracker(this)),
      (this._r435ac30e774755 = new k8e(this)),
      (this._rc792cad1f03f6b = new FramerateTracker(this)),
      (this._rd48adb3fe1a61d = new LagWarningLogger(this)),
      (this._r07e48bb14fd4ce = new ToolbarClickTracker(this)),
      (this._messageEvents = []),
      this.addMessageEvent(new class_2016(this._r8c8f3666e31760)),
      this.addMessageEvent(new class_2117(this._r234f8e9aec4f43)),
      this.addMessageEvent(new class_3670(this._rdfec877e8c88b5)),
      this.addMessageEvent(new _idba656405e2f9a(this._r2ca2fcceb517eb)));
    let e = this.context.events;
    (e.addEventListener?.(HabboCommunicationEvent.INIT, this._rcf0da94d217980),
      e.addEventListener?.(HabboCommunicationEvent.ESTABLISHED, this._rcf0da94d217980),
      e.addEventListener?.(HabboCommunicationEvent.HANDSHAKING, this._rcf0da94d217980),
      e.addEventListener?.(HabboCommunicationEvent.const_132, this._rcf0da94d217980),
      e.addEventListener?.(HabboCommunicationEvent.const_97, this._rcf0da94d217980),
      e.addEventListener?.(HabboCommunicationEvent.AUTHENTICATED, this._rcf0da94d217980),
      e.addEventListener?.(HabboHotelViewEvent.START_LOAD, this._rec3b9489107534),
      e.addEventListener?.(HabboHotelViewEvent.ERROR, this._rec3b9489107534),
      e.addEventListener?.(HabboHotelViewEvent.LOADED, this._rec3b9489107534));
  }
  dispose() {
    if (!this.disposed) {
      if (
        (a.var_325 === this && (a.var_325 = null),
        this.removeUpdateReceiver(this),
        this._messageEvents != null && this._communication != null)
      )
        for (let e of this._messageEvents) this._communication._r7668362bf55fdd(e);
      (this._r9c87b3f97d02b4 != null &&
        (this._r9c87b3f97d02b4.stop(),
        this._r9c87b3f97d02b4.removeEventListener?.(DeBouncer.addEventListener, this._r1feebedab62510),
        (this._r9c87b3f97d02b4 = null)),
        this._rf91dc567c16b9b?.dispose(),
        (this._rf91dc567c16b9b = null),
        (this._r435ac30e774755 = null),
        (this._rc792cad1f03f6b = null),
        (this._rd48adb3fe1a61d = null),
        (this._r07e48bb14fd4ce = null),
        (this._messageEvents = null),
        super.dispose());
    }
  }
  legacyTrackGoogle(e, r, t = null) {
    try {
      ur.available && ur.call("FlashExternalInterface.legacyTrack", e, r, t ?? []);
    } catch {}
  }
  trackGoogle(e, r, t = -1) {
    try {
      ur.available && ur.call("FlashExternalInterface.track", e, r, t);
    } catch {}
  }
  trackEventLog(e, r, t, i = "", s = 0) {
    this._communication?.connection != null &&
      this._communication.connection.connected &&
      this._communication.connection.send(new class_2154(e, r, t, i, s));
  }
  _rff30e139de703a(e, r, t, i = "", s = 0) {
    let o = `${e}${r}${t}`;
    this._r0c8a49b7bb68e8.includes(o) ||
      (this.trackEventLog(e, r, t, i, s), this._r0c8a49b7bb68e8.push(o));
  }
  trackTalentTrackOpen(e, r) {
    this.trackEventLog("Talent", e, "talent.open", r);
  }
  logError(e) {
    try {
      ur.available && ur.call("FlashExternalInterface.logError", e);
    } catch {}
  }
  _r74ee831af16cd2(e) {
    this._rd48adb3fe1a61d?._r74ee831af16cd2(e);
  }
  update(e) {
    let r = _ia411d8d8194a3a();
    (this._currentTime > -1 &&
      r < this._currentTime &&
      (this.var_4182++,
      ErrorReportStorage.addDebugData("Invalid time counter", `Invalid times: ${this.var_4182}`)),
      this._currentTime > -1 &&
        r - this._currentTime > 15 * 1e3 &&
        (this.var_4000++,
        ErrorReportStorage.addDebugData("Time leap counter", `Time leaps: ${this.var_4000}`)),
      (this._currentTime = r),
      this._r435ac30e774755?.update(e, this._currentTime),
      this._rf91dc567c16b9b?.update(e, this._currentTime),
      this._rc792cad1f03f6b?.trackUpdate(e, this._currentTime),
      this._rd48adb3fe1a61d?.update(this._currentTime));
  }
  get latencyPingMs() {
    return this._rf91dc567c16b9b?.latestLatency ?? -1;
  }
  get communication() {
    return this._communication;
  }
  send(e) {
    this._communication?.connection != null &&
      this._communication.connection.connected &&
      this._communication.connection.send(e);
  }
  trackLoginStep(e, r = null) {
    if (this.getBoolean("processlog.enabled"))
      try {
        ur.available &&
          (r != null
            ? ur.call("FlashExternalInterface.logLoginStep", e, r)
            : ur.call("FlashExternalInterface.logLoginStep", e));
      } catch {}
  }
  addMessageEvent(e) {
    this._communication == null ||
      this._messageEvents == null ||
      this._messageEvents.push(this._communication._r2e106e2349a0b6(e));
  }
  setErrorContextFlag(e, r) {
    this.var_3337[r] = e;
  }
  loadConversionTrackingFrame() {
    try {
      ur.available && ur.call("FlashExternalInterface.loadConversionTrackingFrame");
    } catch {}
  }
  _raa0fdd3b90f7f0(e) {
    (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_IS_FATAL, e.critical.toString()),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_CLIENT_CRASH_TIME, Date.now().toString()));
    let r = "";
    for (let t of this.var_3337) r += String(t);
    if (
      (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_CONTEXT, r),
      this._r435ac30e774755 != null &&
        (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_FLASH_VERSION, this._r435ac30e774755._r4d0bf039ebbe72),
        ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_AVERAGE_UPDATE_INTERVAL, String(this._r435ac30e774755._r6363731f388e21))),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_PARAM_KEY_DESCRIPTION, e.message),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_PARAM_KEY_CATEGORY, String(e.category)),
      e.error != null)
    ) {
      let t = Al.getChainedStackTrace(e.error);
      t != null && ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_PARAM_KEY_DATA, t);
    }
    (this._communication?._r6f08e0335a0ab2(),
      ErrorReportStorage.addDebugData(
        "Flash memory usage",
        `Memory usage: ${Math.round(Bi.totalMemory / (1024 * 1024))} MB`,
      ));
  }
  getAliasFromAdTechUrl(e) {
    let r = e.match(/;alias=([^;]+)/);
    return r != null && r.length > 1 ? r[1] : "unknown";
  }
  _rec3b9489107534 = n((e) => {
    switch (e.type) {
      case HabboHotelViewEvent.START_LOAD:
        this.trackLoginStep(HabboLoginTrackingStep.HOTELVIEW_LOAD_START);
        break;
      case HabboHotelViewEvent.LOADED:
        this.trackLoginStep(HabboLoginTrackingStep.HOTELVIEW_LOAD_OK);
        break;
      case HabboHotelViewEvent.ERROR:
        this.trackLoginStep(HabboLoginTrackingStep.HOTELVIEW_LOAD_FAILED);
        break;
    }
  }, "_rec3b9489107534");
  _rcf0da94d217980 = n((e) => {
    switch (e.type) {
      case HabboCommunicationEvent.INIT:
        this.trackLoginStep(HabboLoginTrackingStep.CONNECTION_INIT);
        break;
      case HabboCommunicationEvent.ESTABLISHED:
        this.trackLoginStep(HabboLoginTrackingStep.CONNECTION_ESTABLISHED, String(this._communication?.port ?? 0));
        break;
      case HabboCommunicationEvent.HANDSHAKING:
        this.trackLoginStep(HabboLoginTrackingStep.HANDSHAKING);
        break;
      case HabboCommunicationEvent.const_97:
        this.trackLoginStep(HabboLoginTrackingStep.const_97);
        break;
      case HabboCommunicationEvent.const_132:
        (this.setErrorContextFlag(2, 0), this.trackLoginStep(HabboLoginTrackingStep.const_132));
        break;
      case HabboCommunicationEvent.AUTHENTICATED:
        (this.setErrorContextFlag(3, 0),
          this.loadConversionTrackingFrame(),
          this.trackLoginStep(HabboLoginTrackingStep.AUTHENTICATED));
        break;
    }
    this.context.events.removeEventListener?.(e.type, this._rcf0da94d217980);
  }, "_rcf0da94d217980");
  _r5a3513b68d8da1(e) {
    switch (e.type) {
      case HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_SLEEP:
        this.setErrorContextFlag(0, 3);
        break;
      case HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_RENDER:
        this.setErrorContextFlag(1, 3);
        break;
      case HabboWindowTrackingEvent.HABBO_WINDOW_TRACKING_EVENT_INPUT:
        this.setErrorContextFlag(2, 3);
        break;
    }
  }
  _onError = n((e) => {
    (this._raa0fdd3b90f7f0(e),
      e.critical && (this._r3ea03ca4601b46 = !0),
      this.logError(this.context.root._r3961db622275a7()));
  }, "_onError");
  _r77d651b7a85cb8(e) {
    switch (e.type) {
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_CLOSED:
        this.setErrorContextFlag(0, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_EVENTS:
        this.setErrorContextFlag(1, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ROOMS:
        this.setErrorContextFlag(2, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ME:
        this.setErrorContextFlag(3, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_OFFICIAL:
        this.setErrorContextFlag(4, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCH:
        this.setErrorContextFlag(5, 4);
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FAVOURITES:
        this.legacyTrackGoogle("navigator", "my_favorites");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FRIENDS_ROOMS:
        this.legacyTrackGoogle("navigator", "my_friends_rooms");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_HISTORY:
        this.legacyTrackGoogle("navigator", "my_history");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_ROOMS:
        this.legacyTrackGoogle("navigator", "my_rooms");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_OFFICIALROOMS:
        this.legacyTrackGoogle("navigator", "official_rooms");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_POPULAR_ROOMS:
        this.legacyTrackGoogle("navigator", "popular_rooms");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WHERE_MY_FRIENDS_ARE:
        this.legacyTrackGoogle("navigator", "rooms_where_my_friends_are");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WITH_HIGHEST_SCORE:
        this.legacyTrackGoogle("navigator", "highest_score");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TAG_SEARCH:
        this.legacyTrackGoogle("navigator", "tag_search");
        break;
      case HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TEXT_SEARCH:
        this.legacyTrackGoogle("navigator", "text_search");
        break;
    }
  }
  _rc346f34a937e60(e) {
    switch (e.type) {
      case HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_CLOSED:
        this.setErrorContextFlag(0, 7);
        break;
      case HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_DEFAULT:
        this.setErrorContextFlag(1, 7);
        break;
      case HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_ADVANCED:
        this.setErrorContextFlag(2, 7);
        break;
    }
  }
  _r1408e659eced3e(e) {
    switch (e.type) {
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_CLOSED:
        this.setErrorContextFlag(0, 5);
        break;
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_FURNI:
        this.setErrorContextFlag(1, 5);
        break;
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_POSTERS:
        this.setErrorContextFlag(2, 5);
        break;
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_BADGES:
        this.setErrorContextFlag(3, 5);
        break;
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_ACHIEVEMENTS:
        this.setErrorContextFlag(4, 5);
        break;
      case HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_TRADING:
        this.setErrorContextFlag(5, 5);
        break;
    }
  }
  _rdfec877e8c88b5 = n((e) => {
    let r = ClassUtils.getParser(e, _iebbf99541a195c);
    if (r == null) return;
    let t = r.data?._rc9fc89e7eb27a7;
    t != null && this.legacyTrackGoogle("achievement", "achievement", [t]);
  }, "_rdfec877e8c88b5");
  onCatalogPageOpened(e) {
    this.legacyTrackGoogle("catalogue", "page", [e.pageLocalization]);
  }
  _rc4fe730e43ccb7(e) {
    switch (e.type) {
      case HabboCatalogTrackingEvent.HABBO_CATALOG_TRACKING_EVENT_OPEN:
        this.setErrorContextFlag(1, 9);
        break;
      case HabboCatalogTrackingEvent.HABBO_CATALOG_TRACKING_EVENT_CLOSE:
        this.setErrorContextFlag(0, 9);
        break;
    }
  }
  _r067f945d15f8e3(e) {
    switch (e.type) {
      case HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_CLOSED:
        this.setErrorContextFlag(0, 6);
        break;
      case HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_FRIENDS:
        this.setErrorContextFlag(1, 6);
        break;
      case HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_SEARCH:
        this.setErrorContextFlag(2, 6);
        break;
      case HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_REQUEST:
        this.setErrorContextFlag(3, 6);
        break;
      case HabboFriendListTrackingEvent.const_649:
        this.setErrorContextFlag(4, 6);
        break;
    }
  }
  _r8ed1e469a0d0a1(e) {
    switch (e.type) {
      case HabboHelpTrackingEvent.HABBO_HELP_TRACKING_EVENT_CLOSED:
        this.setErrorContextFlag(0, 10);
        break;
      case HabboHelpTrackingEvent.HABBO_HELP_TRACKING_EVENT_DEFAULT:
        this.setErrorContextFlag(1, 10);
        break;
    }
  }
  _r8c8f3666e31760 = n((e) => {
    this.legacyTrackGoogle("authentication", "authok");
  }, "_r8c8f3666e31760");
  _r2ca2fcceb517eb = n((e) => {
    this._rf91dc567c16b9b?.onPingResponse(e);
  }, "_r2ca2fcceb517eb");
  _r234f8e9aec4f43 = n((e) => {
    this._ra45f9a03850862 || (this.trackLoginStep(HabboLoginTrackingStep.ROOM_ENTER), (this._ra45f9a03850862 = !0));
    let r = ClassUtils.getParser(e, class_2161);
    r != null &&
      (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_LAST_VISITED_ROOM, String(r.guestRoomId)),
      ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_IS_IN_ROOM, String(!0)),
      this.legacyTrackGoogle("navigator", "private", [r.guestRoomId]));
  }, "_r234f8e9aec4f43");
  IIDHabboLocalizationManager(e) {
    this._rf91dc567c16b9b?.init();
  }
  onRoomAdLoad(e) {
    this.legacyTrackGoogle("room_ad", "show", [this.getAliasFromAdTechUrl(e.clickUrl)]);
  }
  onRoomAdClick(e) {
    this.legacyTrackGoogle("room_ad", "click", [this.getAliasFromAdTechUrl(e.clickUrl)]);
  }
  _rb71609878357ff(e) {
    e.type === RoomEngineEvent.ROOM_INITIALIZED
      ? this._r9c87b3f97d02b4 == null &&
        ((this._rb3a9af521fa495 = e.roomId),
        (this._r9c87b3f97d02b4 = new _i05394ecc0c0c4d(60 * 1e3, 1)),
        this._r9c87b3f97d02b4.addEventListener?.(DeBouncer.addEventListener, this._r1feebedab62510),
        this._r9c87b3f97d02b4.start())
      : e.type === RoomEngineEvent.ROOM_DISPOSED &&
        this._r9c87b3f97d02b4 != null &&
        (this._r9c87b3f97d02b4.removeEventListener?.(DeBouncer.addEventListener, this._r1feebedab62510),
        this._r9c87b3f97d02b4.stop(),
        (this._r9c87b3f97d02b4 = null),
        (this._rb3a9af521fa495 = -1));
  }
  _r1feebedab62510 = n((e) => {
    if (
      !this.disposed &&
      !this._r3ea03ca4601b46 &&
      this._communication != null &&
      this._rc792cad1f03f6b != null
    ) {
      let r = null;
      if (this._roomEngine != null) {
        let t = this._roomEngine.getRoomObjectCount(
            this._roomEngine.activeRoomId,
            RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
          ),
          i =
            this._roomEngine.getRoomObjectCount(
              this._roomEngine.activeRoomId,
              RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
            ) +
            this._roomEngine.getRoomObjectCount(
              this._roomEngine.activeRoomId,
              RoomObjectCategoryEnum.const_909,
            );
        r = `Avatars: ${t}, Objects: ${i}`;
      }
      (this.trackEventLog(
        "ClientPerformance",
        String(this._rc792cad1f03f6b.frameRate),
        "fps",
        r ?? "",
        this._rb3a9af521fa495,
      ),
        this._rf3a61b4143f976++);
    }
  }, "_r1feebedab62510");
  _r8cbcd8b1559390(e) {
    this._r07e48bb14fd4ce?.track(e.iconName);
  }
  _re9323db372a794(e) {
    this._r07e48bb14fd4ce?.track(e.type);
  }
}
