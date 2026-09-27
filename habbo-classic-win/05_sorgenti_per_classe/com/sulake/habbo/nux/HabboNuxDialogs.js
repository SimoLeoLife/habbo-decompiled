// Extracted from HabboAirLauncher.deobf.js, line 339984.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/nux/HabboNuxDialogs.as
// Obfuscated name: _i0a806489fb4a2e

class extends ue {
  static {
    n(this, "HabboNuxDialogs");
  }
  _r6bf95bb91d4e59 = null;
  _r2a280316dcfaed = null;
  _r18216b96f8d88a = null;
  var_1770 = null;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    let e = n((r) => this._r2e8ee6747a8a2b(r), "_i2e8ee6747a8a2b");
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (r) => {
          this._r6358b2bd53ae19 = r;
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (r) => {
        this._windowManager = r;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (r) => {
        this._navigator = r;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (r) => {
        this._localizationManager = r;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (r) => {
        this._catalog = r;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (r) => {
        this._sessionDataManager = r;
      }),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (r) => {
          this._roomSessionManager = r;
        },
        !1,
        [
          { type: RoomSessionEvent.const_1398, callback: e },
          { type: RoomSessionEvent.const_215, callback: e },
        ],
      ),
    ]);
  }
  initComponent() {
    let e = n((t) => this._rc3bf9b1e3719b1(t), "_ic3bf9b1e3719b1"),
      r = n((t) => this._rb25f68cdd460dd(t), "_ib25f68cdd460dd");
    ((this.var_36 = this._r6358b2bd53ae19?.connection ?? null),
      this.var_36 != null &&
        (this.var_36.addMessageEvent(new class_3059(e)), this.var_36.addMessageEvent(new class_2590(r))),
      this.context._r7e43d9f4706607(this));
  }
  dispose() {
    (this.context._r7485c47d8bd77c(this),
      this._rb4b9e7c0ae7ae7(),
      this.destroyNoobRoomOfferView(),
      this._r523c87ecb4d389(),
      (this.var_36 = null),
      (this._r6358b2bd53ae19 = null),
      (this._navigator = null),
      (this._windowManager = null),
      (this._localizationManager = null),
      (this._catalog = null),
      (this._sessionDataManager = null),
      (this._roomSessionManager = null),
      super.dispose());
  }
  get linkPattern() {
    return "nux/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "lobbyoffer":
          r.length > 2 && r[2] === "show" ? this.createNoobRoomOfferView() : this.destroyNoobRoomOfferView();
          break;
      }
  }
  _r9b5c37381dd410() {
    this.var_36?.send(new UnkMessageComposer_1args_0dfe00(class_3585.NON_EXISTING));
  }
  onReject() {
    this._windowManager?.confirm(
      "${phone.number.never.again.confirm.title}",
      "${phone.number.never.again.confirm.text}",
      0,
      this._rfd8dc7027132cd,
    );
  }
  _r6ade54c31a1b86(e) {
    (this._rb4b9e7c0ae7ae7(), this.var_36?.send(new UnkMessageComposer_1args_40b48b(e)));
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("Window manager is not available.");
    return this._windowManager;
  }
  get localizationManager() {
    if (this._localizationManager == null) throw new Error("Localization manager is not available.");
    return this._localizationManager;
  }
  get sessionDataManager() {
    if (this._sessionDataManager == null) throw new Error("Session data manager is not available.");
    return this._sessionDataManager;
  }
  get catalog() {
    if (this._catalog == null) throw new Error("Catalog is not available.");
    return this._catalog;
  }
  get configuration() {
    return this;
  }
  _rfd8dc7027132cd = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        (this._r523c87ecb4d389(), this.var_36?.send(new UnkMessageComposer_1args_0dfe00(class_3585.NEVER_AGAIN))));
  }, "_rfd8dc7027132cd");
  _rc3bf9b1e3719b1 = n((e) => {
    this._r29e67f0bc11047();
  }, "_rc3bf9b1e3719b1");
  _rb25f68cdd460dd = n((e) => {
    this._rcffe922b73522f(e.getParser().giftOptions);
  }, "_rb25f68cdd460dd");
  _r2e8ee6747a8a2b = n((e) => {
    if (!(!this.getBoolean("nux.lobbies.enabled") || !this._sessionDataManager?.isRealNoob))
      if (
        e.type === RoomSessionEvent.const_1398 &&
        e.session != null &&
        e.session.roomId === this._navigator?._r3dfd89b26af6cd
      ) {
        let r = this.getInteger("nux.noob.lobby.popup.delay", 70) * 1e3;
        ((this.var_1770 = new UnkEventDispatcherWrapperSubclass_05394e(r, 1)),
          this.var_1770.addEventListener(DeBouncer.addEventListener, this.createNoobRoomOfferView),
          this.var_1770.start());
      } else this.destroyNoobRoomOfferView();
  }, "_r2e8ee6747a8a2b");
  _r29e67f0bc11047() {
    (this._r523c87ecb4d389(), (this._r6bf95bb91d4e59 = new NuxOfferOldUserView(this)));
  }
  _r523c87ecb4d389() {
    (this._r6bf95bb91d4e59?.dispose(), (this._r6bf95bb91d4e59 = null));
  }
  _rcffe922b73522f(e) {
    (this._rb4b9e7c0ae7ae7(), (this._r2a280316dcfaed = new NuxGiftSelectionView(this, e)));
  }
  _rb4b9e7c0ae7ae7() {
    (this._r2a280316dcfaed?.dispose(), (this._r2a280316dcfaed = null));
  }
  createNoobRoomOfferView = n((e = null) => {
    !this.getBoolean("nux.lobbies.enabled") ||
      !this._sessionDataManager?.isRealNoob ||
      (this.destroyNoobRoomOfferView(),
      (this._r18216b96f8d88a = new NuxNoobRoomOfferView(this)),
      this.var_36?.send(new class_2154("NewNavigator", "nux.offer.lobby", "nux.offer.lobby")));
  }, "createNoobRoomOfferView");
  destroyNoobRoomOfferView() {
    (this.var_1770?.reset(),
      (this.var_1770 = null),
      this._r18216b96f8d88a?.dispose(),
      (this._r18216b96f8d88a = null));
  }
}
