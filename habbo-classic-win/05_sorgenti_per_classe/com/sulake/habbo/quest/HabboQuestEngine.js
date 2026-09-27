// Estratto da HabboAirLauncher.deobf.js, riga 271351.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/HabboQuestEngine.as
// Nome offuscato: _ia017f303fec8b9

class a extends ue {
  static {
    n(this, "HabboQuestEngine");
  }
  static UPDATE_PRIORITY = 5;
  static TWINKLE_ANIMATION_START_TIME = 800;
  static TWINKLE_ANIMATION_OBJECT_COUNT = 15;
  static DELAY_BETWEEN_TWINKLE_STARTS = 300;
  static const_42 = [
    "MOVEITEM",
    "ENTEROTHERSROOM",
    "CHANGEFIGURE",
    "FINDLIFEGUARDTOWER",
    "SCRATCHAPET",
  ];
  _windowManager = null;
  _communication = null;
  _localization = null;
  _configuration = null;
  _incomingMessages = null;
  var_579;
  var_4337;
  _r4b01afa99d83ba;
  _toolbar = null;
  _catalog = null;
  _navigator = null;
  _notifications = null;
  _sessionDataManager = null;
  _habboHelp = null;
  _tracking = null;
  _twinkleImages = null;
  _currentlyInRoom = !1;
  _roomEngine = null;
  var_5824 = !1;
  _wired = null;
  _r1fa056abe0faef;
  _rd0ba5bf8e1b91d;
  _r3e6c85a52d65f7;
  _r064d851e9201c6;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._r064d851e9201c6 = new MainWindow(this)),
      (this.var_579 = new QuestController(this, this._r064d851e9201c6)),
      (this.var_4337 = new tge(this)),
      (this._r3e6c85a52d65f7 = new nge(this)),
      (this._r4b01afa99d83ba = new Dge(this)),
      this.queueInterface(new IIDHabboCommunicationManager(), this._r87051afa0fc232),
      this.queueInterface(new IIDHabboWindowManager(), this._r78075dac337cf4),
      this.queueInterface(new IIDHabboLocalizationManager(), this._rf5d613f0487bb3),
      this.queueInterface(new IIDHabboConfigurationManager(), this._r7ff816f6be0771),
      this.queueInterface(new IIDHabboToolbar(), this._ra479b60428dffa),
      this.queueInterface(new IIDHabboCatalog(), this._r00111d913e7d7d),
      this.queueInterface(new IIDHabboNotifications(), this._rb3793673140c68),
      this.queueInterface(new IIDHabboHelp(), this._rbd49624529e50d),
      this.queueInterface(new IIDHabboNewNavigator(), this._r50aba0cc376349),
      this.queueInterface(new IIDSessionDataManager(), this._r52cf40eebfe25b),
      this.queueInterface(new IIDRoomEngine(), this._rce6f9602e879f9),
      this.queueInterface(new IIDHabboTracking(), this._r8d2aa74ca2eaeb),
      this.queueInterface(new IIDHabboUserDefinedRoomEvents(), this._r79651e40b18a93),
      (this._r1fa056abe0faef = new fge(this, e, 0, t)),
      e?.attachComponent(this._r1fa056abe0faef, [new _i9fb5fe3bad0cf2()]),
      (this._rd0ba5bf8e1b91d = new th(this, e, 0, t)),
      e?.attachComponent(this._rd0ba5bf8e1b91d, [new IIDRewardTrackController()]),
      e?._r7e43d9f4706607?.(this),
      this.registerUpdateReceiver(this, a.UPDATE_PRIORITY));
  }
  dispose() {
    this.disposed ||
      (this.removeUpdateReceiver(this),
      this.context._r7485c47d8bd77c?.(this),
      this._toolbar?.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog),
      this._toolbar != null &&
        (this._toolbar.release(new IIDHabboToolbar()), (this._toolbar = null)),
      this._catalog != null &&
        (this._catalog.release(new IIDHabboCatalog()), (this._catalog = null)),
      this._notifications != null &&
        (this._notifications.release(new IIDHabboNotifications()), (this._notifications = null)),
      this._wired != null &&
        (this._wired.release(new IIDHabboUserDefinedRoomEvents()), (this._wired = null)),
      this._windowManager != null && (this._windowManager.release(new IIDHabboWindowManager()), (this._windowManager = null)),
      this._localization != null && (this._localization.release(new IIDHabboLocalizationManager()), (this._localization = null)),
      this._configuration != null &&
        (this._configuration.release(new IIDHabboConfigurationManager()), (this._configuration = null)),
      this._communication != null && (this._communication.release(new IIDHabboCommunicationManager()), (this._communication = null)),
      this._sessionDataManager != null &&
        (this._sessionDataManager.events.removeEventListener?.(Ho.BADGE_READY, this._r919c0ab2a93eac),
        this._sessionDataManager.release(new IIDSessionDataManager()),
        (this._sessionDataManager = null)),
      this._incomingMessages?.dispose(),
      (this._incomingMessages = null),
      this._habboHelp != null &&
        (this._habboHelp.release(new IIDHabboHelp()), (this._habboHelp = null)),
      this._navigator != null &&
        (this._navigator.release(new IIDHabboNewNavigator()), (this._navigator = null)),
      this._tracking != null &&
        (this._tracking.release(new IIDHabboTracking()), (this._tracking = null)),
      this._twinkleImages?.dispose(),
      (this._twinkleImages = null),
      this._roomEngine != null &&
        (this._roomEngine.release(new IIDRoomEngine()), (this._roomEngine = null)),
      this._rd0ba5bf8e1b91d !== null && (this._rd0ba5bf8e1b91d.dispose(), (this._rd0ba5bf8e1b91d = null)),
      super.dispose());
  }
  get communication() {
    return this._communication;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get windowManager() {
    return this._r356718ca29352c(this._windowManager, "windowManager");
  }
  get localization() {
    return this._r356718ca29352c(this._localization, "localization");
  }
  get _rd4042d1a6a05a1() {
    return this.var_579;
  }
  get _rbc749f571f7b62() {
    return this._r4b01afa99d83ba;
  }
  get _rc9f1a165570e64() {
    return this.var_4337;
  }
  get _ra4f9e9a6e37c17() {
    return this._r3e6c85a52d65f7;
  }
  get toolbar() {
    return this._toolbar;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get catalog() {
    return this._catalog;
  }
  get tracking() {
    return this._tracking;
  }
  get wired() {
    return this._wired;
  }
  get notifications() {
    return this._notifications;
  }
  get sessionDataManager() {
    return this._r356718ca29352c(this._sessionDataManager, "sessionDataManager");
  }
  get configuration() {
    return this._configuration;
  }
  get navigator() {
    return this._navigator;
  }
  openCatalog(e) {
    let r = e.catalogPageName;
    r !== "" ? this._catalog?.openCatalogPage(r) : this._catalog?.openCatalogPage("");
  }
  _r52fa4af48d31b1(e) {
    let t = this.getCampaignLocalizationKey(`${e._re1c380403d8877()}.searchtag`)
        ? `${e._re1c380403d8877()}.searchtag`
        : `${e.hasLocalizedValue()}.searchtag`,
      i = this._localization?.getLocalization(t) ?? "";
    this._navigator?._r8d305e819155a0?.performTagSearch(i);
  }
  _re5489d4bee8b81() {
    let e = this.getQuestRoomIds();
    return e != null && e !== "";
  }
  _r32b882492d068c() {
    if (!this._re5489d4bee8b81()) return;
    let e = (this.getQuestRoomIds() ?? "").split(",");
    if (e.length === 0) return;
    let r = Math.max(0, Math.min(e.length - 1, Math.floor(Math.random() * e.length))),
      t = Number.parseInt(e[r], 10);
    this._navigator?._r8d305e819155a0?._r32d169e0ccf735(t);
  }
  _r00a869c7638e8e() {
    this.var_4337._r00a869c7638e8e();
  }
  _r35a7c98ac17978(e, r) {
    return this.var_4337._r35a7c98ac17978(e, r);
  }
  _r771098bda9d4ec() {
    this.var_4337.show();
  }
  _r462f8731011a70() {
    this.var_579._rddd2ff4cc28b1a.isVisible() || this.var_579._rdd12af87bae3e7();
  }
  _reb7052baa12c2d() {
    this._r4b01afa99d83ba.dontShowAgain = !1;
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  get _r9d040c0cc258d9() {
    return this._rd0ba5bf8e1b91d;
  }
  _r87051afa0fc232 = n((e = null, r = null) => {
    ((this._communication = r), (this._incomingMessages = new _ifffc223d172097_____(this)));
  }, "_r87051afa0fc232");
  _r78075dac337cf4 = n((e = null, r = null) => {
    this._windowManager = r;
  }, "_r78075dac337cf4");
  _rf5d613f0487bb3 = n((e = null, r = null) => {
    this._localization = r;
  }, "_rf5d613f0487bb3");
  _r7ff816f6be0771 = n((e = null, r = null) => {
    r != null && (this._configuration = r);
  }, "_r7ff816f6be0771");
  _r00111d913e7d7d = n((e = null, r = null) => {
    this.disposed || (this._catalog = r);
  }, "_r00111d913e7d7d");
  _rb3793673140c68 = n((e = null, r = null) => {
    this.disposed || (this._notifications = r);
  }, "_rb3793673140c68");
  _r52cf40eebfe25b = n((e = null, r = null) => {
    this.disposed ||
      ((this._sessionDataManager = r),
      this._sessionDataManager?.events.addEventListener?.(Ho.BADGE_READY, this._r919c0ab2a93eac));
  }, "_r52cf40eebfe25b");
  _rbd49624529e50d = n((e = null, r = null) => {
    this.disposed || (this._habboHelp = r);
  }, "_rbd49624529e50d");
  _r50aba0cc376349 = n((e = null, r = null) => {
    this.disposed || (this._navigator = r);
  }, "_r50aba0cc376349");
  _rce6f9602e879f9 = n((e = null, r = null) => {
    this.disposed || (this._roomEngine = r);
  }, "_rce6f9602e879f9");
  _r8d2aa74ca2eaeb = n((e = null, r = null) => {
    this.disposed || (this._tracking = r);
  }, "_r8d2aa74ca2eaeb");
  _r79651e40b18a93 = n((e = null, r = null) => {
    this.disposed || (this._wired = r);
  }, "_r79651e40b18a93");
  _ra479b60428dffa = n((e = null, r = null) => {
    ((this._toolbar = r),
      this._toolbar?.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog));
  }, "_ra479b60428dffa");
  getQuestRowTitle(e) {
    let r = e.waitPeriodSeconds < 1 ? `${e._re1c380403d8877()}.name` : "quests.list.questdelayed";
    return this._localization?.getLocalization(r, r) ?? r;
  }
  getQuestName(e) {
    let r = `${e._re1c380403d8877()}.name`;
    return this._localization?.getLocalization(r, r) ?? r;
  }
  getQuestDesc(e) {
    let r = `${e._re1c380403d8877()}.desc`;
    return this._localization?.getLocalization(r, r) ?? r;
  }
  getQuestHint(e) {
    let r = `${e._re1c380403d8877()}.hint`;
    return this._localization?.getLocalization(r, r) ?? r;
  }
  _ra8dde0ba5a496a(e) {
    let r = `${e}.name`;
    return this._localization?.getLocalization(r, r) ?? r;
  }
  _r15e04de8c92f56(e) {
    return this._ra8dde0ba5a496a(e.hasLocalizedValue());
  }
  getAchievementCategoryName(e) {
    let r = `quests.${e}.name`;
    return this._localization?.getLocalization(r, r) ?? r;
  }
  setupQuestImage(e, r) {
    let t = e.findChildByName("quest_pic_bitmap"),
      i =
        r.waitPeriodSeconds > 0
          ? "quest_timer_questionmark"
          : `${r.campaignCode}_${r.localizationCode}${r._r3d49928e00246a}${this._r84899202c2a237(r) ? "_a" : ""}`.toLowerCase();
    t != null && (t.assetUri = `\${image.library.questing.url}${i}.png`);
  }
  setupPromptFrameImage(e, r, t) {
    let i = e.findChildByName(`prompt_pic_${t}`);
    i != null &&
      (i.assetUri = `\${image.library.questing.url}${`${r.campaignCode}_${r.localizationCode}${r._r3d49928e00246a}_${t}`.toLowerCase()}.png`);
  }
  setupRewardImage(e, r) {
    let t = e.findChildByName("currency_icon");
    t != null && (t.style = et.getIconStyleFor(r, this, !0));
  }
  setupCampaignImage(e, r, t) {
    let i = e.findChildByName("campaign_pic_bitmap");
    if (i == null) return;
    if (!t) {
      i.visible = !1;
      return;
    }
    i.visible = !0;
    let s = r.campaignCode;
    (this.isSeasonalQuest(r) && (s = `${this.getSeasonalCampaignCodePrefix()}_campaign_icon`),
      (i.assetUri = `\${image.library.questing.url}${s}.png`));
  }
  setupAchievementCategoryImage(e, r, t) {
    let i = e.findChildByName("category_pic_bitmap");
    i != null &&
      ((i.assetUri = ""),
      (i.assetUri = `\${image.library.questing.url}${t ? `ach_category_${r.code}` : `achicon_${r.code}`}.png`));
  }
  _r84899202c2a237(e) {
    return a.const_42.includes(e.localizationCode);
  }
  refreshReward(e, r, t, i) {
    e = !(t < 0 || i < 1) && e;
    let s = r.findChildByName("reward_caption_txt"),
      o = r.findChildByName("reward_amount_txt"),
      d = r.findChildByName("currency_icon");
    (o && (o.visible = e),
      s && (s.visible = e),
      d && (d.visible = e),
      !(!e || o == null || s == null) &&
        ((o.caption = `${i}`),
        a.moveChildrenToRow(r, ["reward_caption_txt", "reward_amount_txt", "currency_icon"], s.x, 3),
        this.setupRewardImage(r, t)));
  }
  static moveChildrenToRow(e, r, t, i) {
    for (let s of r) {
      let o = e.getChildByName(s);
      o != null && o.visible && ((o.x = t), (t += o.width + i));
    }
  }
  update(e) {
    (this.var_579.update(e),
      this.var_4337.update(e),
      this._r1fa056abe0faef.update(e),
      this._rd0ba5bf8e1b91d.update(e));
  }
  getTwinkleAnimation(e) {
    this._twinkleImages == null && (this._twinkleImages = new Uge(this));
    let r = a.TWINKLE_ANIMATION_START_TIME,
      t = new Animation(e.findChildByName("twinkle_bitmap"));
    for (let i = 0; i < a.TWINKLE_ANIMATION_OBJECT_COUNT; i++)
      (t.addObject(new Vge(this._twinkleImages, r)), (r += a.DELAY_BETWEEN_TWINKLE_STARTS));
    return t;
  }
  get currentlyInRoom() {
    return this._currentlyInRoom;
  }
  set currentlyInRoom(e) {
    this._currentlyInRoom = e;
  }
  isSeasonalCalendarEnabled() {
    return this._configuration?.getBoolean("seasonalQuestCalendar.enabled") ?? !1;
  }
  isSeasonalQuest(e) {
    let r = this.getSeasonalCampaignCodePrefix();
    return r !== "" && e.campaignCode.indexOf(r) === 0;
  }
  getSeasonalCampaignCodePrefix() {
    return this.getProperty("seasonalQuestCalendar.campaignPrefix");
  }
  _r761b9d382f04e8(e) {
    this.var_5824 = e;
  }
  get isFirstLoginOfDay() {
    return this.var_5824;
  }
  getCampaignLocalizationKey(e) {
    return (this._localization?.getLocalization(e, "") ?? "") !== "";
  }
  _r4ad208985d89a3() {
    this.send(new _i67c3b66fb73094());
  }
  _r9c430dd6e13502() {
    this.send(new _if730f53b497d89());
  }
  _rd4aaae15d2e185(e) {
    this.send(new _i38e25d5014ab83(e));
  }
  get linkPattern() {
    return "questengine/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "gotorooms":
          this._r32b882492d068c();
          break;
        case "achievements":
          r.length === 3
            ? (this.var_4337.show(), this.var_4337._rd89abd18fb0b39(r[2]))
            : this._r771098bda9d4ec();
          break;
        case "quests":
          this.var_579._rdd12af87bae3e7();
          break;
        default:
          break;
      }
  }
  getXmlWindow(e, r = 1) {
    try {
      let i = this.assets.getAssetByName(e);
      return i != null ? (this._windowManager?.buildFromXML(i.content, r) ?? null) : null;
    } catch {
      return null;
    }
  }
  getBoolean(e, r = !1) {
    return this._configuration == null
      ? r
      : this._configuration.propertyExists(e)
        ? this._configuration.getBoolean(e)
        : r;
  }
  getInteger(e, r = 0) {
    return this._configuration?.getInteger(e, r) ?? r;
  }
  getProperty(e) {
    return this._configuration?.getProperty(e) ?? "";
  }
  interpolate(e) {
    return this._localization?.interpolate(e) ?? e;
  }
  _rf1f06517cc1f28(e) {
    return this._localization?._rf1f06517cc1f28(e) ?? e;
  }
  _r22c59443a43a51() {
    return [];
  }
  _r919c0ab2a93eac = n((e) => {
    this.var_4337._r919c0ab2a93eac(e);
  }, "_r919c0ab2a93eac");
  getQuestRoomIds() {
    return this._localization?.getLocalization(`quests.${this.getSeasonalCampaignCodePrefix()}.roomids`) ?? "";
  }
  IIDHabboCatalog = n((e) => {
    e.type === HabboToolbarEvent.TOOLBAR_CLICK &&
      e._re9c693c8b69b04 === Me.ACHIEVEMENTS &&
      this.var_4337._rdd12af87bae3e7();
  }, "IIDHabboCatalog");
  _r356718ca29352c(e, r) {
    if (e == null) throw new Error(`HabboQuestEngine ${r} is not available.`);
    return e;
  }
}
