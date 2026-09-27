// Estratto da HabboAirLauncher.deobf.js, riga 334737.

class a extends ue {
  static {
    n(this, "_i6729bb645ea05d");
  }
  static _r421b622cb8c4ee = [
    RoomWidgetEnum.INFOSTAND_WIDGET,
    RoomWidgetEnum.CHAT_INPUT_WIDGET,
    RoomWidgetEnum.ME_MENU_WIDGET,
    RoomWidgetEnum.EXTERNAL_IMAGE,
    RoomWidgetEnum.CAMERA,
    RoomWidgetEnum.ROOM_TOOLS,
    RoomWidgetEnum.FURNITURE_CONTEXT_MENU,
  ];
  _rcea8ec59decf7f;
  var_21 = null;
  _r3a4af8d4783bac = {};
  _r26d42cff737768 = RX._rc70bc36c55d70c;
  _rec090a88c0fc02 = !1;
  _r232a2d0aed34bc = 0;
  _rd99e9b89e26606 = !1;
  _ra34ffd8c2126ff = !1;
  constructor(e, r = 0, t = null) {
    (super(e, r, t), (this._rcea8ec59decf7f = new _ib7455301508c29(this)), this.registerUpdateReceiver(this, 0));
  }
  get _rc62bcb6ca9a388() {
    return this.var_21?._rc0786a5aea0115?._rd462b5fb8d2881() ?? null;
  }
  get desktop() {
    return this.var_21;
  }
  get dependencies() {
    let e = n((d) => this._r47ff4fbd954e3b(d), "_i47ff4fbd954e3b"),
      r = n((d) => this._r33a6aa9dfdc0be(d), "_i33a6aa9dfdc0be"),
      t = n((d) => this._r159692ae58dbda(d), "_i159692ae58dbda"),
      i = n((d) => this._r06ea2e988bb380(d), "_i06ea2e988bb380"),
      s = n((d) => this._r136af7172e26af(d), "_i136af7172e26af"),
      o = n((d) => this._r592a416e46c8ec(d), "_i592a416e46c8ec");
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (d) => {
        this._windowManager = d;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (d) => {
          this._roomEngine = d;
        },
        !0,
        [
          { type: RoomEngineEvent.ROOM_ENGINE_INITIALIZED, callback: e },
          { type: RoomEngineEvent.ROOM_INITIALIZED, callback: r },
          { type: RoomEngineEvent.ROOM_OBJECTS_INITIALIZED, callback: e },
          { type: RoomEngineEvent.ROOM_DISPOSED, callback: r },
          { type: RoomEngineEvent.ROOM_ENGINE_NORMAL_MODE, callback: e },
          { type: RoomEngineEvent.ROOM_ENGINE_GAME_MODE, callback: e },
          { type: RoomEngineEvent.ROOM_ENTRANCE_AFTER_SPECTATE, callback: r },
          { type: Xv.ROOM_COLOR, callback: r },
          { type: N6.ROOM_ZOOM, callback: r },
          { type: RoomEngineHSLColorEnableEvent.ROOM_BACKGROUND_COLOR, callback: r },
          { type: Zh.const_67, callback: r },
          { type: RoomEngineObjectEvent.SELECTED, callback: t },
          { type: RoomEngineObjectEvent.DESELECTED, callback: t },
          { type: RoomEngineObjectEvent.ADDED, callback: t },
          { type: RoomEngineObjectEvent.REMOVED, callback: t },
          { type: RoomEngineObjectEvent.PLACED, callback: t },
          { type: RoomEngineObjectEvent.REQUEST_MOVE, callback: t },
          { type: RoomEngineObjectEvent.REQUEST_ROTATE, callback: t },
          { type: RoomEngineObjectEvent.REQUEST_PICKUP, callback: t },
          { type: RoomEngineObjectEvent.MOUSE_ENTER, callback: t },
          { type: RoomEngineObjectEvent.MOUSE_LEAVE, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_OPEN_FURNI_CONTEXT_MENU, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_CLOSE_FURNI_CONTEXT_MENU, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_CREDITFURNI, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_STICKIE, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_PRESENT, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_TROPHY, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_TEASER, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_ECOTRONBOX, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_PLACEHOLDER, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_DIMMER, callback: t },
          { type: RoomEngineToWidgetEvent.REMOVE_DIMMER, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_CLOTHING_CHANGE, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_PLAYLIST_EDITOR, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_MANNEQUIN, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_BACKGROUND_COLOR, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_AREA_HIDE, callback: t },
          { type: D6.UPDATE_STATE_AREA_HIDE, callback: t },
          { type: RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY, callback: t },
          { type: RoomEngineUseProductEvent.USE_PRODUCT_FROM_ROOM, callback: t },
          { type: RoomEngineSoundMachineEvent.const_73, callback: t },
          { type: RoomEngineRoomAdEvent.FURNI_CLICK, callback: t },
          { type: RoomEngineRoomAdEvent.FURNI_DOUBLE_CLICK, callback: t },
          { type: RoomEngineRoomAdEvent.TOOLTIP_SHOW, callback: t },
          { type: RoomEngineRoomAdEvent.TOOLTIP_HIDE, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_BADGE_DISPLAY_ENGRAVING, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_FAILED, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_FRIEND_FURNITURE_ENGRAVING, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_HIGH_SCORE_DISPLAY, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_HIDE_HIGH_SCORE_DISPLAY, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_INTERNAL_LINK, callback: t },
          { type: RoomEngineToWidgetEvent.REQUEST_ROOM_LINK, callback: t },
        ],
      ),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (d) => {
          this._roomSessionManager = d;
        },
        !0,
        [
          { type: RoomSessionEvent.const_481, callback: i },
          { type: RoomSessionEvent.const_1398, callback: i },
          { type: RoomSessionEvent.const_215, callback: i },
          { type: RoomSessionEvent.SESSION_ROOM_DATA, callback: i },
          { type: xr.ROOM_SESSION_CHAT_EVENT, callback: s },
          { type: xr.ROOM_SESSION_FLOODCONTROL_EVENT, callback: s },
          { type: F8.USER_BADGES, callback: s },
          { type: RoomSessionDoorbellEvent.DOORBELL, callback: s },
          { type: RoomSessionDoorbellEvent.REJECTED, callback: s },
          { type: RoomSessionDoorbellEvent.ACCEPTED, callback: s },
          { type: RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED, callback: s },
          { type: RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_REQUESTED, callback: s },
          { type: RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_RESULT, callback: s },
          { type: lf.QUEUE_STATUS, callback: s },
          { type: RoomSessionPollEvent.CONTENT, callback: s },
          { type: RoomSessionPollEvent.ERROR, callback: s },
          { type: RoomSessionPollEvent.OFFER, callback: s },
          { type: _if7db27a877cf3a._r18420565440e28, callback: s },
          { type: _if7db27a877cf3a.FINISHED, callback: s },
          { type: _if7db27a877cf3a._rc081ce8a57e812, callback: s },
          { type: RoomSessionDimmerPresetsEvent.ROOM_DIMMER_PRESETS, callback: s },
          { type: O8.FRIEND_REQUEST, callback: s },
          { type: H8.USER_DATA_UPDATED, callback: s },
          { type: N8.DANCE, callback: s },
          { type: RoomSessionErrorMessageEvent.MAX_NUMBER_OF_PETS, callback: o },
          { type: RoomSessionErrorMessageEvent.MAX_NUMBER_OF_OWN_PETS, callback: o },
          { type: RoomSessionErrorMessageEvent.KICKED_BY_OWNER, callback: o },
          { type: RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_HOTEL, callback: o },
          { type: RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_FLAT, callback: o },
          { type: RoomSessionErrorMessageEvent.NO_FREE_TILES_FOR_PET, callback: o },
          { type: RoomSessionErrorMessageEvent.SELECTED_TILE_NOT_FREE_FOR_PET, callback: o },
          { type: RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_HOTEL, callback: o },
          { type: RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_FLAT, callback: o },
          { type: RoomSessionErrorMessageEvent.BOT_LIMIT_REACHED, callback: o },
          { type: RoomSessionErrorMessageEvent.const_666, callback: o },
          { type: RoomSessionErrorMessageEvent.BOT_NAME_NOT_ACCEPTED, callback: o },
        ],
      ),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (d) => {
          this._sessionDataManager = d;
        },
        !1,
        [
          { type: d0.PERKS_UPDATED, callback: this._rd27a64f985e9d1 },
          { type: Kb.const_72, callback: this._rd27a64f985e9d1 },
          { type: SessionDataToWidgetEvent.const_646, callback: this._rd27a64f985e9d1 },
          { type: A8.NAME_UPDATE, callback: this._rd27a64f985e9d1 },
        ],
      ),
      new ComponentDependency(new IIDHabboFriendList(), (d) => {
        this._friendList = d;
      }),
      new ComponentDependency(new IIDAvatarRenderManager(), (d) => {
        this._avatarRenderManager = d;
      }),
      new ComponentDependency(new IIDHabboInventory(), (d) => {
        this._inventory = d;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (d) => {
        this._toolbar = d;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (d) => {
        this._navigator = d;
      }),
      new ComponentDependency(new IIDHabboNewNavigator(), (d) => {
        this._newNavigator = d;
      }),
      new ComponentDependency(new IIDHabboGroupsManager(), (d) => {
        this._r785de5bfe76326 = d;
      }),
      new ComponentDependency(new IIDHabboAvatarEditor(), (d) => {
        this._avatarEditor = d;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (d) => {
        this._catalog = d;
      }),
      new ComponentDependency(new IIDHabbiconController(), (d) => {
        ((this._r79f0941d0b57ec ??= (c) => this._rc35fe79180d63c(c)),
          this._r77150d80157f71?.removeEventListener(Mt.ROOM_USE_HABBICON, this._r79f0941d0b57ec),
          (this._r77150d80157f71 = d),
          this._r77150d80157f71 != null &&
            this.getBoolean("habbicons.enabled") &&
            this._r77150d80157f71.addEventListener(Mt.ROOM_USE_HABBICON, this._r79f0941d0b57ec));
      }),
      new ComponentDependency(
        new IIDHabboAdManager(),
        (d) => {
          this._rf2345cb7a34190 = d;
        },
        !1,
        [
          { type: InterstitialEvent.INTERSTITIAL_NOT_SHOWN, callback: this._re35b1282ce0f74 },
          { type: InterstitialEvent.INTERSTITIAL_COMPLETE, callback: this._ra4ea86519f6a58 },
          { type: InterstitialEvent.INTERSTITIAL_SHOW, callback: this._r07a45b38f20124 },
          { type: AdEvent.ROOM_AD_SHOW, callback: this._r5a4145824d898c },
        ],
      ),
      new ComponentDependency(new IIDHabboLocalizationManager(), (d) => {
        this._localization = d;
      }),
      new ComponentDependency(new IIDHabboHelp(), (d) => {
        this._habboHelp = d;
      }),
      new ComponentDependency(new IIDHabboModeration(), (d) => {
        this._r34a81f64eba4e2 = d;
      }),
      new ComponentDependency(new IIDHabboSoundManager(), (d) => {
        this._soundManager = d;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (d) => {
        this._communication = d;
      }),
      new ComponentDependency(new IIDHabboUserDefinedRoomEvents(), (d) => {
        this._rb9b74a4575d69b = d;
      }),
      new ComponentDependency(new IIDHabboTracking(), (d) => {
        this._r49621084c4a423 = d;
      }),
      new ComponentDependency(
        new IIDHabboGameManager(),
        (d) => {
          this._gameManager = d;
        },
        !1,
        [{ type: GameChatEvent.GAME_CHAT, callback: this._r08e404c927d97c }],
      ),
      new ComponentDependency(new IIDHabboFriendBar(), (d) => {
        this._rfe65c5b79008df = d;
      }),
      new ComponentDependency(
        new IIDHabboFriendBarView(),
        (d) => {
          this._r718a23d0b439c5 = d;
        },
        !1,
        [{ type: l1.FRIENDBAR_RESIZE_EVENT, callback: this._r9c20da67ea9613 }],
      ),
      new ComponentDependency(new IIDHabboLandingView(), (d) => {
        this._landingView = d;
      }),
      new ComponentDependency(new IIDHabboQuestEngine(), (d) => {
        this._questEngine = d;
      }),
      new ComponentDependency(new IIDHabboMessenger(), (d) => {
        this._messenger = d;
      }),
      new ComponentDependency(new IIDHabboFreeFlowChat(), (d) => {
        this._rb7fab1e25a8762 = d;
      }),
    ]);
  }
  initComponent() {
    super.initComponent();
    let e = n((t) => this._r773ce30a57f0a5(t), "_i773ce30a57f0a5"),
      r = null;
    (r != null &&
      this._windowManager != null &&
      ((this._rccd6d5a843ed74 = new _i553898c59253ac(this._windowManager)),
      (this._rccd6d5a843ed74._rf0eb5f07c94cfb = this._avatarRenderManager),
      (this._rccd6d5a843ed74.roomEngine = this._roomEngine),
      r.insert(this._rccd6d5a843ed74)),
      this._communication != null &&
        (this.communication = this._communication._r2e106e2349a0b6(new _i2c7b489ce44a85(e))));
  }
  _r41eed92f07d67f() {
    this._r9c20da67ea9613(new l1());
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._localization;
  }
  get catalog() {
    return this._catalog;
  }
  get _r95cd89d9fe7aac() {
    return this._r77150d80157f71;
  }
  get inventory() {
    return this._inventory;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get musicController() {
    return this._soundManager;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get _rf0f2c79ea6337c() {
    return this._r718a23d0b439c5;
  }
  get toolbar() {
    return this._toolbar;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get _r65e0ab1dc9fb51() {
    return this._r785de5bfe76326;
  }
  get _rddef5461e8915c() {
    return this._rb9b74a4575d69b;
  }
  get _r697386a8fb5bf8() {
    return this._r49621084c4a423;
  }
  _r58a7b5caa186b2(e) {
    return this.var_21?._r233058cd73c8de(e, 0) ?? !1;
  }
  _r0c4251dd528cd5(e) {
    if (this.disposed || e == null || this._roomEngine == null) return null;
    if (this.var_21 != null) return this.var_21;
    ((this.var_21 = new RX(e, this.assets, this._communication?.connection ?? null)),
      (this.var_21.roomEngine = this._roomEngine),
      (this.var_21.windowManager = this._windowManager),
      (this.var_21._r50438e33ddab1f = this._rcea8ec59decf7f),
      (this.var_21.sessionDataManager = this._sessionDataManager),
      (this.var_21.roomSessionManager = this._roomSessionManager),
      (this.var_21._rf3db13932bfb60 = this._communication),
      (this.var_21.friendList = this._friendList),
      (this.var_21._rf0eb5f07c94cfb = this._avatarRenderManager),
      (this.var_21.inventory = this._inventory),
      (this.var_21.messenger = this._messenger),
      (this.var_21.toolbar = this._toolbar),
      (this.var_21.navigator = this._newNavigator?._r8d305e819155a0 ?? this._navigator),
      (this.var_21._r65e0ab1dc9fb51 = this._r785de5bfe76326),
      (this.var_21.avatarEditor = this._avatarEditor),
      (this.var_21.catalog = this._catalog),
      (this.var_21._r50525f0f8c3f06 = this._rf2345cb7a34190),
      (this.var_21.localization = this._localization),
      (this.var_21.habboHelp = this._habboHelp),
      (this.var_21.moderation = this._r34a81f64eba4e2),
      (this.var_21.config = this),
      (this.var_21.musicController = this._soundManager),
      (this.var_21._r697386a8fb5bf8 = this._r49621084c4a423),
      (this.var_21._rddef5461e8915c = this._rb9b74a4575d69b),
      (this.var_21._r1218f60f737b72 = this._gameManager),
      (this.var_21.questEngine = this._questEngine),
      (this.var_21._rafd5b9130c4bfd = this._rb7fab1e25a8762));
    let r = this.assets.getAssetByName("room_desktop_layout_xml");
    return (
      r != null && (this.var_21.layout = r.content),
      this._r6d9a9a9a801595(RoomWidgetEnum.LOADINGBAR),
      this._r6d9a9a9a801595(RoomWidgetEnum.ROOM_QUEUE),
      this.var_21.init(),
      this.var_21._ra93f3611d373b4(),
      (this._rec090a88c0fc02 = !1),
      (this._r232a2d0aed34bc = e.roomId),
      this.var_21
    );
  }
  _r300285073e7b8d() {
    if (this.var_21 != null) {
      let e = this.var_21._r8ee1ef9b950cc8(RoomWidgetEnum.USER_CHOOSER);
      e !== RX._rc70bc36c55d70c && (this._r26d42cff737768 = e);
    }
    (this.var_21?.dispose(), (this.var_21 = null), (this._rec090a88c0fc02 = !1));
  }
  _r6bb33ed688eb20(e) {
    return 1;
  }
  update(e) {
    this.var_21?.update(e);
  }
  set visible(e) {
    this.var_21 != null && (this.var_21.visible = e);
  }
  _rc35fe79180d63c(e) {
    !this.getBoolean("habbicons.enabled") ||
      e == null ||
      e.roomIndex < 0 ||
      e.habbiconId <= 0 ||
      this.var_21?._r2eac8239a09fe7 == null ||
      this._roomEngine == null ||
      this._roomEngine._r93fc9f432e7394(
        this.var_21._r2eac8239a09fe7.roomId,
        e.roomIndex,
        RoomObjectVariableEnum.const_1201,
        e.habbiconId,
      );
  }
  _rfbbd775b61c04a(e) {
    this.var_21?._r9b1b0209eb1b5a(new sI(e));
  }
  _roomUI(e, r, t, i) {
    this.var_21?._roomUI(e, r, t, i);
  }
  dispose() {
    if (!this.disposed) {
      (this._rccd6d5a843ed74?.dispose(),
        (this._rccd6d5a843ed74 = null),
        this._communication != null &&
          this.communication != null &&
          (this._communication._r7668362bf55fdd(this.communication), (this.communication = null)),
        this._r77150d80157f71 != null &&
          (this._r77150d80157f71.removeEventListener(Mt.ROOM_USE_HABBICON, this._r79f0941d0b57ec),
          (this._r77150d80157f71 = null)),
        this._rcea8ec59decf7f.dispose(),
        this._r300285073e7b8d());
      for (let e of Object.values(this._r3a4af8d4783bac)) e?.dispose();
      ((this._r3a4af8d4783bac = {}), this.removeUpdateReceiver(this), super.dispose());
    }
  }
  _r06ea2e988bb380 = n((e) => {
    switch (e.type) {
      case RoomSessionEvent.const_481:
        (this._r0c4251dd528cd5(e.session),
          e.session._r4f0e849e5080b6 &&
            (this._toolbar?.setToolbarState(HabboToolbarEnum.TOOLBAR_STATE_HIDDEN),
            this._rfe65c5b79008df != null && (this._rfe65c5b79008df.visible = !1)),
          this._landingView?.disable());
        break;
      case RoomSessionEvent.const_1398:
      case RoomSessionEvent.SESSION_ROOM_DATA:
        (this._r14f0554bf49ce4(e.session), this._landingView?.disable());
        break;
      case RoomSessionEvent.const_215:
        (e.session._r4f0e849e5080b6 && this._rfe65c5b79008df != null && (this._rfe65c5b79008df.visible = !0),
          this._r300285073e7b8d(),
          !e.session._r4f0e849e5080b6 && e.openLandingPage && this._landingView?.activate());
        break;
    }
  }, "_r06ea2e988bb380");
  _r136af7172e26af = n((e) => {
    this.var_21?._r9b1b0209eb1b5a(e);
  }, "_r136af7172e26af");
  _rd27a64f985e9d1 = n((e) => {
    this.var_21?._r9b1b0209eb1b5a(e);
  }, "_rd27a64f985e9d1");
  _r592a416e46c8ec = n((e) => {
    let r = null,
      t = "${error.title}";
    switch (e.type) {
      case RoomSessionErrorMessageEvent.MAX_NUMBER_OF_PETS:
        r = "${room.error.max_pets}";
        break;
      case RoomSessionErrorMessageEvent.MAX_NUMBER_OF_OWN_PETS:
        r = "${room.error.max_own_pets}";
        break;
      case RoomSessionErrorMessageEvent.KICKED_BY_OWNER:
        ((r = "${room.error.kicked}"), (t = "${generic.alert.title}"));
        break;
      case RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_HOTEL:
        r = "${room.error.pets.forbidden_in_hotel}";
        break;
      case RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_FLAT:
        r = "${room.error.pets.forbidden_in_flat}";
        break;
      case RoomSessionErrorMessageEvent.NO_FREE_TILES_FOR_PET:
        r = "${room.error.pets.no_free_tiles}";
        break;
      case RoomSessionErrorMessageEvent.SELECTED_TILE_NOT_FREE_FOR_PET:
        r = "${room.error.pets.selected_tile_not_free}";
        break;
      case RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_HOTEL:
        r = "${room.error.bots.forbidden_in_hotel}";
        break;
      case RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_FLAT:
        r = "${room.error.bots.forbidden_in_flat}";
        break;
      case RoomSessionErrorMessageEvent.BOT_LIMIT_REACHED:
        r = "${room.error.max_bots}";
        break;
      case RoomSessionErrorMessageEvent.const_666:
        r = "${room.error.bots.selected_tile_not_free}";
        break;
      case RoomSessionErrorMessageEvent.BOT_NAME_NOT_ACCEPTED:
        r = "${room.error.bots.name.not.accepted}";
        break;
    }
    r != null &&
      this._windowManager?.alert(t, r, 0, (...i) => {
        let [s] = i;
        s?.dispose?.();
      });
  }, "_r592a416e46c8ec");
  _r07a45b38f20124 = n((e) => {
    (this.var_21?._r9b1b0209eb1b5a(e), (this._rec090a88c0fc02 = !0));
  }, "_r07a45b38f20124");
  _re35b1282ce0f74 = n((e) => {
    this._rec090a88c0fc02 = !1;
  }, "_re35b1282ce0f74");
  _ra4ea86519f6a58 = n((e) => {
    ((this._rec090a88c0fc02 = !1),
      e.status === "complete" && this._communication?.connection?.send(new _i9b3dfa785e362b()),
      this.var_21?._r9b1b0209eb1b5a(e),
      this._roomSessionManager
        ?.getSession(this._roomEngine?.activeRoomId ?? 0)
        ?._rfb5e330b42c7cc(n_.POSTURE_STAND));
  }, "_ra4ea86519f6a58");
  _r5a4145824d898c = n((e) => {
    this.var_21?._r9b1b0209eb1b5a(e);
  }, "_r5a4145824d898c");
  _r9c20da67ea9613 = n((e) => {
    this.var_21?._r9b1b0209eb1b5a(e);
  }, "_r9c20da67ea9613");
  _r47ff4fbd954e3b = n((e) => {
    this.var_21?._r47ff4fbd954e3b(e);
    let r = e;
    (r.roomId === this._r232a2d0aed34bc &&
      r.type === RoomEngineEvent.ROOM_OBJECTS_INITIALIZED &&
      (this._rec090a88c0fc02 &&
        (this._roomSessionManager?.getSession(this._r232a2d0aed34bc) ?? null)?._r6e27274f7e1fce(
          jo.const_19.ordinal,
        ),
      (this._rec090a88c0fc02 = !1)),
      r.roomId === this._r232a2d0aed34bc && r.type === RoomEngineEvent.ROOM_DISPOSED && (this._rec090a88c0fc02 = !1));
  }, "_r47ff4fbd954e3b");
  _r159692ae58dbda = n((e) => {
    this.var_21?._r159692ae58dbda(e);
  }, "_r159692ae58dbda");
  _r33a6aa9dfdc0be = n((e) => {
    let r = e;
    if (this.var_21 == null && this._roomSessionManager != null) {
      let t = this._roomSessionManager.getSession(r.roomId);
      t != null && this._r0c4251dd528cd5(t);
    }
    if (r.type === RoomEngineEvent.ROOM_INITIALIZED && this.var_21 != null) {
      let t = this._r6bb33ed688eb20(r.roomId);
      (this.var_21._r6a9eabead89a74(t),
        this._roomEngine != null &&
          !u9._rd190b5156b4615(r.roomId) &&
          (this._roomEngine._r97ed166a6c3d16(r.roomId), this.var_21._r5ee7e8ff14f58f(t)),
        this._rb7fab1e25a8762 != null &&
          ((this._rd99e9b89e26606 = !0),
          this._rb7fab1e25a8762.displayObject != null &&
            this.var_21._rc0786a5aea0115
              ?._rd462b5fb8d2881()
              ?.setDisplayObject(this._rb7fab1e25a8762.displayObject)));
      for (let i of [RoomWidgetEnum.INFOSTAND_WIDGET, RoomWidgetEnum.LOCATION_WIDGET, RoomWidgetEnum.ROOM_TOOLS]) this._r6d9a9a9a801595(i);
      if (!this.var_21._r2eac8239a09fe7?._r53892118edc559) {
        for (let i of [RoomWidgetEnum.ME_MENU_WIDGET, RoomWidgetEnum.CHAT_INPUT_WIDGET, RoomWidgetEnum.FRIEND_REQUEST]) this._r6d9a9a9a801595(i);
        this.getBoolean("avatar.widget.enabled") && this._r6d9a9a9a801595(RoomWidgetEnum.AVATAR_INFO);
      }
      for (let i of [
        RoomWidgetEnum.FURNI_PLACEHOLDER_WIDGET,
        RoomWidgetEnum.FURNI_CREDIT_WIDGET,
        RoomWidgetEnum.FURNI_STICKIE_WIDGET,
        RoomWidgetEnum.FURNI_PRESENT_WIDGET,
        RoomWidgetEnum.FURNI_TROPHY_WIDGET,
        RoomWidgetEnum.FURNI_ECOTRONBOX_WIDGET,
        RoomWidgetEnum.FURNI_PET_PACKAGE_WIDGET,
        RoomWidgetEnum.DOORBELL,
        RoomWidgetEnum.POLL,
        RoomWidgetEnum.DIMMER,
        RoomWidgetEnum.CLOTHING_CHANGE,
        RoomWidgetEnum.CONVERSION_TRACKING,
        RoomWidgetEnum.MANNEQUIN,
        RoomWidgetEnum.ROOM_BACKGROUND_COLOR,
        RoomWidgetEnum.AREA_HIDE,
        RoomWidgetEnum.CUSTOM_USER_NOTIFICATION,
        RoomWidgetEnum.FURNI_CHOOSER,
        RoomWidgetEnum.PLAYLIST_EDITOR_WIDGET,
        RoomWidgetEnum.SPAMWALL_POSTIT_WIDGET,
        RoomWidgetEnum.FURNITURE_CONTEXT_MENU,
        RoomWidgetEnum.CAMERA,
        RoomWidgetEnum.FURNI_ACHIEVEMENT_RESOLUTION_ENGRAVING,
        RoomWidgetEnum.FRIEND_FURNI_CONFIRM,
        RoomWidgetEnum.FRIEND_FURNI_ENGRAVING,
        RoomWidgetEnum.const_121,
        RoomWidgetEnum.INTERNAL_LINK,
        RoomWidgetEnum.CUSTOM_STACK_HEIGHT,
        RoomWidgetEnum.YOUTUBE,
        RoomWidgetEnum.RENTABLESPACE,
        RoomWidgetEnum.VIMEO,
        RoomWidgetEnum.EXTERNAL_IMAGE,
        RoomWidgetEnum.const_1077,
        RoomWidgetEnum.const_328,
        RoomWidgetEnum.ROOM_THUMBNAIL_CAMERA,
        RoomWidgetEnum.ROOM_LINK,
        RoomWidgetEnum.CRAFTING,
      ])
        this._r6d9a9a9a801595(i);
      (this.getBoolean("memenu.effects.widget.disabled") || this._r6d9a9a9a801595(RoomWidgetEnum.const_65),
        this._r6d9a9a9a801595(RoomWidgetEnum.USER_CHOOSER, this._r26d42cff737768),
        (this._ra34ffd8c2126ff = !0));
      return;
    }
    if (r.type === RoomEngineEvent.ROOM_ENTRANCE_AFTER_SPECTATE && this.var_21 != null) {
      (this.var_21._r217cd3481ce5d1(),
        this.var_21._r5ff682dcaa2d3e(RoomWidgetEnum.ROOM_QUEUE),
        this.var_21.createWidget(RoomWidgetEnum.ME_MENU_WIDGET),
        this.var_21.createWidget(RoomWidgetEnum.CHAT_INPUT_WIDGET),
        this.var_21.createWidget(RoomWidgetEnum.FRIEND_REQUEST),
        this.getBoolean("avatar.widget.enabled") &&
          this.var_21.createWidget(RoomWidgetEnum.AVATAR_INFO));
      return;
    }
    if (r.type === Xv.ROOM_COLOR && this.var_21 != null) {
      let t = r;
      t.bgOnly
        ? this.var_21._re33892f7466296(16777215, 255)
        : this.var_21._re33892f7466296(t.color, t.brightness);
      return;
    }
    if (r.type === N6.ROOM_ZOOM) {
      let t = r,
        i = this._roomEngine?.activeRoomId ?? 0,
        s = this._r6bb33ed688eb20(i),
        o = t.level < 1 ? 0.5 : 1 << (Math.min(5, Math.floor(t.level)) - 1);
      this.var_21 != null && !t.isFlipForced
        ? this.var_21._rf14e510680d98b(o)
        : this._roomEngine?._rd969872ccb7fc1(i, s, o, null, null, t.isFlipForced);
      return;
    }
    if (r.type === Zh.const_67) {
      this.var_21?._r9b1b0209eb1b5a(e);
      return;
    }
    if (r.type === RoomEngineHSLColorEnableEvent.ROOM_BACKGROUND_COLOR && this.var_21 != null) {
      let t = r;
      t.enable
        ? this.var_21._r24506d316d457e(t.hue, t.saturation, t.lightness)
        : this.var_21._r24506d316d457e(0, 0, 0);
      return;
    }
    r.type === RoomEngineEvent.ROOM_DISPOSED && (this._r300285073e7b8d(), (this._ra34ffd8c2126ff = !1));
  }, "_r33a6aa9dfdc0be");
  _r08e404c927d97c = n((e) => {
    this.var_21?._r9b1b0209eb1b5a(e);
  }, "_r08e404c927d97c");
  _r6d9a9a9a801595(e, r = 0) {
    if (this.var_21 == null) return;
    let t = a._r421b622cb8c4ee.indexOf(e) !== -1,
      i = t ? (this._r3a4af8d4783bac[e] ?? null) : null,
      s = this.var_21.createWidget(e, t, i);
    (t && i == null && s != null && (this._r3a4af8d4783bac[e] = s), s?.initialize(r));
  }
  _r14f0554bf49ce4(e) {
    if (this._toolbar != null) {
      if (this.getBoolean("nux.lobbies.enabled") && (this._sessionDataManager?.isRealNoob ?? !1)) {
        e?._r7bd8b4ae779c01
          ? this._toolbar.setToolbarState(HabboToolbarEnum.TOOLBAR_STATE_NOOB_NOT_HOME)
          : this._toolbar.setToolbarState(HabboToolbarEnum.TOOLBAR_STATE_NOOB_HOME);
        return;
      }
      this._toolbar.setToolbarState(HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW);
    }
  }
  _r773ce30a57f0a5 = n((e) => {
    (this._rb7fab1e25a8762 != null &&
      this._ra34ffd8c2126ff &&
      !this._rd99e9b89e26606 &&
      setTimeout(() => this._r2ff847d62b9a31(), 250),
      this._ra34ffd8c2126ff &&
        this.var_21 != null &&
        this.var_21._r9b1b0209eb1b5a(new Tj(e.getParser().isPerkAllowed(class_2156.MOUSE_ZOOM))));
  }, "_r773ce30a57f0a5");
  _r2ff847d62b9a31() {
    this.var_21 != null &&
      this._rb7fab1e25a8762?.displayObject != null &&
      (this.var_21._rc0786a5aea0115
        ?._rd462b5fb8d2881()
        ?.setDisplayObject(this._rb7fab1e25a8762.displayObject),
      (this._rd99e9b89e26606 = !0));
  }
}
