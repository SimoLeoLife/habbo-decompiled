// Extracted from HabboAirLauncher.deobf.js, line 251301.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/ModerationManager.as
// Obfuscated name: _i4753a518ce8846

class extends ue {
  static {
    n(this, "ModerationManager");
  }
  _reffc4eb7a1c4e9;
  _rd9161a8af7a1d8;
  _rc5806da9013c9e = null;
  _rf5b74a79d43b50 = 0;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._reffc4eb7a1c4e9 = new StartPanelCtrl(this)),
      (this._rd9161a8af7a1d8 = new WindowTracker()),
      e.attachComponent(new Ype(e, r, t), [new UnkInterface_d868ab()]));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(new IIDHabboSoundManager(), (e) => {
        this._soundManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        IssueCategoryNames.setLocalizationManager(e);
      }),
      new ComponentDependency(new IIDHabboFriendBar(), (e) => {
        this._rfe65c5b79008df = e;
      }),
    ]);
  }
  initComponent() {
    (this.flags & HabboComponentFlags.ROOM_VIEWER_MODE) === 0 &&
      ((this.ModerationMessageHandler = new ModerationMessageHandler(this)), (this.var_2305 = new kI(this)));
  }
  dispose() {
    this.disposed ||
      (this._reffc4eb7a1c4e9.dispose(),
      (this.var_2305 = null),
      (this.ModerationMessageHandler = null),
      super.dispose());
  }
  userSelected(e, r) {
    this._reffc4eb7a1c4e9.userSelected(e, r);
  }
  get windowManager() {
    return this._windowManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get _r74ed78993f8dd6() {
    return this.var_2305;
  }
  get connection() {
    return this._communication?.connection ?? null;
  }
  get _rd4ccac60921434() {
    return this._reffc4eb7a1c4e9;
  }
  get initMsg() {
    return this._rc5806da9013c9e;
  }
  get messageHandler() {
    return this.ModerationMessageHandler;
  }
  get _r2512b8a3ecad84() {
    return this._rd9161a8af7a1d8;
  }
  get _ra384cb7661fc37() {
    return this._rf5b74a79d43b50;
  }
  get musicController() {
    return this._soundManager;
  }
  get isModerator() {
    return this._sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1;
  }
  set initMsg(e) {
    this._rc5806da9013c9e = e;
  }
  set _ra384cb7661fc37(e) {
    this._rf5b74a79d43b50 = e;
  }
  set _r3ce06be9af0ee1(e) {
    this.var_2305?._r17119c189741bd(e);
  }
  getXmlWindow(e, r = "_xml", t = 1) {
    try {
      let s = this.assets.getAssetByName(e + r);
      return s != null ? (this._windowManager?.buildFromXML(s.content, t) ?? null) : null;
    } catch {
      return null;
    }
  }
  openHkPage(e, r) {
    Ae.navigateToURL(this.getProperty(e) + r, "housekeeping");
  }
  goToRoom(e) {
    this._navigator?._r32d169e0ccf735(e);
  }
  _r15ba9692f220c4(e, r) {
    this.context._r6b6c989018eb05(`groupforum/${e}/${r}`);
  }
  _rdc566a5933870b(e, r, t) {
    this.context._r6b6c989018eb05(`groupforum/${e}/${r}/${t}`);
  }
  logEvent(e, r) {
    this._tracking?.trackEventLog("Moderation", r, e);
  }
  trackGoogle(e, r = -1) {
    this._tracking?.trackGoogle("moderationManager", e, r);
  }
}
