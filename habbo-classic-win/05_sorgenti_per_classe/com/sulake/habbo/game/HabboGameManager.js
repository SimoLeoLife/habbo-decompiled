// Extracted from HabboAirLauncher.deobf.js, line 224347.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/HabboGameManager.as
// Obfuscated name: _i4969fc84c17441

class extends ue {
  static {
    n(this, "HabboGameManager");
  }
  _communication = null;
  _windowManager = null;
  _localization = null;
  _sessionDataManager = null;
  _roomSessionManager = null;
  _toolbar = null;
  _r943cf45602d873 = null;
  _catalog = null;
  _roomEngine = null;
  _habboHelp = null;
  _inventory = null;
  _navigator = null;
  _landingView = null;
  var_22;
  _incomingMessages = null;
  _r483c5cb2e7f22a = !1;
  _r412bd04742c6ba = !1;
  var_5628 = !1;
  _r4f724b7c20ab76 = -1;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      this.queueInterface(new IIDHabboWindowManager(), this._r78075dac337cf4),
      this.queueInterface(new IIDHabboCommunicationManager(), this._r6448fe5924274c),
      this.queueInterface(new IIDHabboConfigurationManager(), this._r7ff816f6be0771),
      this.queueInterface(new IIDHabboLocalizationManager(), this._rf5d613f0487bb3),
      this.queueInterface(new IIDSessionDataManager(), this._r52cf40eebfe25b),
      this.queueInterface(new IIDHabboRoomSessionManager(), this._r6c2c29e047b753),
      this.queueInterface(new IIDAvatarRenderManager(), this._r7ce0f935cd6d5c),
      this.queueInterface(new IIDHabboToolbar(), this._ra479b60428dffa),
      this.queueInterface(new IIDHabboCatalog(), this._r00111d913e7d7d),
      this.queueInterface(new IIDHabboLandingView(), this._r0a747dacd8277f),
      this.queueInterface(new IIDRoomEngine(), this._rce6f9602e879f9),
      this.queueInterface(new IIDHabboHelp(), this._rbd49624529e50d),
      this.queueInterface(new IIDHabboInventory(), this._rab44badcc79162),
      this.queueInterface(new IIDHabboNavigator(), this._rad545d22486471),
      (this.var_22 = new xs(this, e, 0, t)));
  }
  dispose() {
    this.disposed ||
      (this._communication != null && (this._communication.release(new IIDHabboCommunicationManager()), (this._communication = null)),
      this._windowManager != null && (this._windowManager.release(new IIDHabboWindowManager()), (this._windowManager = null)),
      this._localization != null && (this._localization.release(new IIDHabboLocalizationManager()), (this._localization = null)),
      this._sessionDataManager != null &&
        (this._sessionDataManager.release(new IIDSessionDataManager()), (this._sessionDataManager = null)),
      this._habboHelp != null &&
        (this._habboHelp.release(new IIDHabboHelp()), (this._habboHelp = null)),
      this._toolbar != null &&
        (this._toolbar.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._rdd12af87bae3e7),
        this._toolbar.release(new IIDHabboToolbar()),
        (this._toolbar = null)),
      this._r943cf45602d873 != null &&
        (this._r943cf45602d873.release(new IIDAvatarRenderManager()), (this._r943cf45602d873 = null)),
      this._catalog != null &&
        (this._catalog.release(new IIDHabboCatalog()), (this._catalog = null)),
      this._incomingMessages?.dispose(),
      (this._incomingMessages = null),
      this._landingView != null &&
        (this._landingView.release(new IIDHabboLandingView()), (this._landingView = null)),
      this._roomEngine != null &&
        (this._roomEngine.release(new IIDRoomEngine()), (this._roomEngine = null)),
      this._inventory != null &&
        (this._inventory.release(new IIDHabboInventory()), (this._inventory = null)),
      this._navigator != null &&
        (this._navigator.release(new IIDHabboNavigator()), (this._navigator = null)),
      this.var_22?.dispose(),
      (this.var_22 = null),
      (this._r4f724b7c20ab76 = -1),
      super.dispose());
  }
  get windowManager() {
    return this._windowManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get communication() {
    return this._communication;
  }
  get localization() {
    return this._localization;
  }
  get avatarManager() {
    return this._r943cf45602d873;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get inventory() {
    return this._inventory;
  }
  get navigator() {
    return this._navigator;
  }
  get _r00d4928d04a061() {
    return (
      this._r483c5cb2e7f22a ||
      (this._r412bd04742c6ba && this._sessionDataManager?.hasSecurity(class_1794.EMPLOYEE) === !0)
    );
  }
  get _rbdd8cf4dc5a532() {
    return this.var_5628;
  }
  set hotelClosed(e) {
    this.var_5628 = e;
  }
  _r8349e006b2ad62() {
    this.send(new UnkMessageComposer_0args_bb461b());
  }
  _r0844e7bd205a41(e) {
    (this._r8349e006b2ad62(), this.send(new class_2078(e)));
  }
  _r81db7b5336f1d1() {
    this.send(new UnkMessageComposer_0args_16c8d7());
  }
  _raa9bb1c48e7fa8() {
    this.var_22?._rc635c4cff0c668 !== !0 &&
      (this.var_22?._r05e3accf0c4011(), this._landingView?.activate());
  }
  _reaee9ef642a187() {
    this.var_22?._reaee9ef642a187();
  }
  _r070fb26cdd9b46(e) {
    this.var_22?._r070fb26cdd9b46(e);
  }
  _rff8c994ce55a2d(e, r, t) {
    this.var_22?._rff8c994ce55a2d(e, r, t);
  }
  handleMouseOverOnHuman(e, r, t) {
    this.var_22?.handleMouseOverOnHuman(e, r, t);
  }
  send(e) {
    this._communication?.connection?.send(e);
  }
  _r78075dac337cf4 = n((e = null, r = null) => {
    ((this._windowManager = r), this._windowManager != null && je.init(this.assets, this._windowManager));
  }, "_r78075dac337cf4");
  _r6448fe5924274c = n((e = null, r = null) => {
    ((this._communication = r), this._communication != null && (this._incomingMessages = new UnkClass_fffc22________(this)));
  }, "_r6448fe5924274c");
  _r7ff816f6be0771 = n((e = null, r = null) => {
    ((this._r483c5cb2e7f22a = this.getBoolean("game.center.enabled")),
      (this._r412bd04742c6ba = this.getBoolean("game.center.enabled.forStaff")));
  }, "_r7ff816f6be0771");
  _rf5d613f0487bb3 = n((e = null, r = null) => {
    this._localization = r;
  }, "_rf5d613f0487bb3");
  _r52cf40eebfe25b = n((e = null, r = null) => {
    this._sessionDataManager = r;
  }, "_r52cf40eebfe25b");
  _r6c2c29e047b753 = n((e = null, r = null) => {
    this._roomSessionManager = r;
  }, "_r6c2c29e047b753");
  _r7ce0f935cd6d5c = n((e = null, r = null) => {
    this._r943cf45602d873 = r;
  }, "_r7ce0f935cd6d5c");
  _ra479b60428dffa = n((e = null, r = null) => {
    ((this._toolbar = r),
      this._toolbar?.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this._rdd12af87bae3e7));
  }, "_ra479b60428dffa");
  _r00111d913e7d7d = n((e = null, r = null) => {
    this._catalog = r;
  }, "_r00111d913e7d7d");
  _r0a747dacd8277f = n((e = null, r = null) => {
    this.disposed || (this._landingView = r);
  }, "_r0a747dacd8277f");
  _rce6f9602e879f9 = n((e = null, r = null) => {
    this._roomEngine = r;
  }, "_rce6f9602e879f9");
  _rbd49624529e50d = n((e = null, r = null) => {
    this.disposed || (this._habboHelp = r);
  }, "_rbd49624529e50d");
  _rab44badcc79162 = n((e = null, r = null) => {
    this.disposed || (this._inventory = r);
  }, "_rab44badcc79162");
  _rad545d22486471 = n((e = null, r = null) => {
    this.disposed || (this._navigator = r);
  }, "_rad545d22486471");
  _rdd12af87bae3e7 = n((e) => {
    switch (e._re9c693c8b69b04) {
      case Me.GAMES:
        (this._r8349e006b2ad62(), this.send(new UnkMessageComposer_0args_c38a5f()));
        break;
      case Me.RECEPTION:
        break;
    }
  }, "_rdd12af87bae3e7");
}
