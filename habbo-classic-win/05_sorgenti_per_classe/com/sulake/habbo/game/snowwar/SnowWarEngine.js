// Estratto da HabboAirLauncher.deobf.js, riga 223640.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/SnowWarEngine.as
// Nome offuscato: _id7b2dcd9eb76ec

class a extends ue {
  constructor(r, t, i = 0, s = null) {
    super(t, i, s);
    this._gameManager = r;
    (this.queueInterface(new IIDHabboWindowManager(), this._r78075dac337cf4),
      this.queueInterface(new IIDHabboCommunicationManager(), this._r6448fe5924274c),
      this.queueInterface(new IIDHabboConfigurationManager(), this._r7ff816f6be0771),
      this.queueInterface(new IIDHabboLocalizationManager(), this._rf5d613f0487bb3),
      this.queueInterface(new IIDHabboRoomSessionManager(), this._r6c2c29e047b753),
      this.queueInterface(new IIDSessionDataManager(), this._r52cf40eebfe25b),
      this.queueInterface(new IIDAvatarRenderManager(), this._r7ce0f935cd6d5c),
      this.queueInterface(new IIDRoomEngine(), this._rce6f9602e879f9),
      this.queueInterface(new IIDHabboSoundManager(), this._r18d4c8ce9efc89),
      this.queueInterface(new IIDHabboRoomUI(), this._r52164b45cded5e),
      this.queueInterface(new IIDHabboCatalog(), this._r00111d913e7d7d),
      this.queueInterface(new IIDHabboHelp(), this._rbd49624529e50d),
      this.queueInterface(new IIDHabboFriendList(), this._r636e807590684d),
      this.queueInterface(new IIDHabboGroupsManager(), this._r9ebafc0ea3735c),
      (this._r2c67c75af014cc = new Y4e(this)));
  }
  static {
    n(this, "SnowWarEngine");
  }
  static _r8d0cc6fe529194 = 3;
  static GET_SNOWWAR_TOKENS = "GET_SNOWWAR_TOKENS";
  static GET_SNOWWAR_TOKENS2 = "GET_SNOWWAR_TOKENS2";
  static GET_SNOWWAR_TOKENS3 = "GET_SNOWWAR_TOKENS3";
  static _r4bf40420318f29 = 0;
  static STATE_GAME_STARTING = 1;
  static STATE_STAGE_LOADING = 2;
  static _rb427aee72a4552 = 3;
  static STATE_STAGE_RUNNING = 4;
  static STATE_STAGE_ENDING = 5;
  static STATE_GAME_OVER = 6;
  static STATE_REJOIN_GAME = 7;
  static _r7963f5188b8808 = null;
  _communication = null;
  _windowManager = null;
  _configuration = null;
  _localization = null;
  _sessionDataManager = null;
  _roomSessionManager = null;
  _r943cf45602d873 = null;
  var_1809 = null;
  _roomEngine = null;
  _rf205fceb9b7fe8 = null;
  _catalog = null;
  _soundManager = null;
  _habboHelp = null;
  _friendList = null;
  _incomingMessages = null;
  _r5d7d673467ca15 = null;
  _r816ca6027ab712 = null;
  _players = new Map();
  _rc4108659c05718 = new B();
  var_67 = a._r4bf40420318f29;
  _r1bb39b3e661fe0 = !1;
  _r2cc8f8a665c2ff = !1;
  var_4138 = 0;
  _r0eb8ce629f354a = -1;
  var_4423 = -1;
  _r066aba48d064be = 0;
  _timeSinceLastUpdate = 0;
  var_472 = 0;
  var_1231 = 0;
  _rc4e807f00239c5 = 0;
  var_3800 = !1;
  _r25f496525cb2dc = 0;
  var_5482 = !1;
  _r98bccf4b8abc79 = !1;
  _r5a04ae5c177479 = !1;
  _rde5ad42d1ae6dc = !1;
  _r6042e632d6ac0c = null;
  _r2c67c75af014cc;
  _r5ba5aba213418e = null;
  _r89f41e93fcd235 = null;
  _rf4a0d95303ebdc = null;
  _rf8e319c83f5e85 = !1;
  dispose() {
    this.disposed ||
      (this._communication != null && (this._communication.release(new IIDHabboCommunicationManager()), (this._communication = null)),
      this._windowManager != null && (this._windowManager.release(new IIDHabboWindowManager()), (this._windowManager = null)),
      this._configuration != null &&
        (this._configuration.release(new IIDHabboConfigurationManager()), (this._configuration = null)),
      this._localization != null && (this._localization.release(new IIDHabboLocalizationManager()), (this._localization = null)),
      this._roomSessionManager != null &&
        (this._roomSessionManager.release(new IIDHabboRoomSessionManager()), (this._roomSessionManager = null)),
      this._sessionDataManager != null &&
        (this._sessionDataManager.release(new IIDSessionDataManager()), (this._sessionDataManager = null)),
      this._roomEngine != null &&
        (this._roomEngine.events.removeEventListener?.(
          RoomEngineEvent.ROOM_OBJECTS_INITIALIZED,
          this.onRoomObjectsInitialized,
        ),
        this._roomEngine.release(new IIDRoomEngine()),
        (this._roomEngine = null)),
      this._soundManager != null &&
        (this._soundManager.release(new IIDHabboSoundManager()), (this._soundManager = null)),
      (a._r7963f5188b8808 = null),
      this._habboHelp != null &&
        (this._habboHelp.release(new IIDHabboHelp()), (this._habboHelp = null)),
      this._r943cf45602d873 != null &&
        (this._r943cf45602d873.events?.removeEventListener?.(AvatarRenderEvent.AVATAR_RENDER_READY, this._r8251e07745957b),
        this._r943cf45602d873.release(new IIDAvatarRenderManager()),
        (this._r943cf45602d873 = null)),
      this.var_1809 != null &&
        (this.var_1809.release(new IIDHabboGroupsManager()), (this.var_1809 = null)),
      this._rf205fceb9b7fe8 != null &&
        (this._rf205fceb9b7fe8.release(new IIDHabboRoomUI()), (this._rf205fceb9b7fe8 = null)),
      this._catalog != null &&
        (this._catalog.release(new IIDHabboCatalog()), (this._catalog = null)),
      this._friendList != null &&
        (this._friendList.release(new IIDHabboFriendList()), (this._friendList = null)),
      this._incomingMessages?.dispose(),
      (this._incomingMessages = null),
      this._r5d7d673467ca15?.dispose(),
      (this._r5d7d673467ca15 = null),
      this._r816ca6027ab712?.dispose(),
      (this._r816ca6027ab712 = null),
      this._r8627026f199837(),
      this._r89f41e93fcd235?.dispose(),
      (this._r89f41e93fcd235 = null),
      this._players.clear(),
      this._rc4108659c05718.dispose(),
      (this._rc4108659c05718 = new B()),
      this._r2c67c75af014cc?.dispose(),
      (this._r2c67c75af014cc = null),
      this._rf4a0d95303ebdc?.dispose(),
      (this._rf4a0d95303ebdc = null),
      this._r87a91a9bc531e9(),
      (this._gameManager = null),
      super.dispose());
  }
  get _r00d4928d04a061() {
    return this._gameManager?._r00d4928d04a061 ?? !1;
  }
  get roomEngine() {
    return this._roomEngine;
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
  get config() {
    return this._configuration;
  }
  get avatarManager() {
    return this._r943cf45602d873;
  }
  get _r231346362c74e1() {
    return this.var_1809;
  }
  get _r5e3ef8a2b11d2a() {
    return this._rf205fceb9b7fe8;
  }
  get catalog() {
    return this._catalog;
  }
  get friendList() {
    return this._friendList;
  }
  get _r0c148637e03364() {
    return this._r5d7d673467ca15;
  }
  get _r3da1b12a009155() {
    return this.var_4138;
  }
  get _r2773a0a439d827() {
    return this._r0eb8ce629f354a;
  }
  get _rc88f6790a0782a() {
    return this.var_472;
  }
  get _rd247e134d13984() {
    return this._r25f496525cb2dc;
  }
  get _rc4cd77a3a014cd() {
    return this._r98bccf4b8abc79;
  }
  get _re2e489d0d02499() {
    return this._r5a04ae5c177479;
  }
  set ownId(r) {
    this._r066aba48d064be = r;
  }
  get ownId() {
    return this._r066aba48d064be;
  }
  _re20c98e536caa8() {
    return this._r5d7d673467ca15?._re20c98e536caa8() ?? null;
  }
  _r0774e628edf810() {
    return this._rdd383bc45b096b(this._r066aba48d064be);
  }
  _rdd383bc45b096b(r) {
    let t = this._re20c98e536caa8();
    if (t == null) return null;
    let i = t._rec3357f35c151d(r);
    return i instanceof _l ? i : null;
  }
  _r2765c9b59a37df() {
    let r = this._r0774e628edf810();
    return r != null ? this._rdd383bc45b096b(r._r206e239acb0d5c) : null;
  }
  get _rd31af608f83beb() {
    return this._r2cc8f8a665c2ff;
  }
  get mainView() {
    return this._r2c67c75af014cc;
  }
  get leaderboard() {
    return (
      this._rf4a0d95303ebdc == null && !this._r00d4928d04a061 && (this._rf4a0d95303ebdc = new N4e(this)),
      this._rf4a0d95303ebdc
    );
  }
  get _r44d07b4d5d75a3() {
    return this._r2c67c75af014cc?._r44d07b4d5d75a3 ?? null;
  }
  get _rc635c4cff0c668() {
    return this.var_67 === a.STATE_GAME_STARTING || this.var_67 === a.STATE_REJOIN_GAME;
  }
  set _r8676c9bc2bbd5b(r) {
    this.var_4423 = r;
  }
  _r7cfbe41b0ceb68(r, t, i, s) {
    this._r5d7d673467ca15 == null &&
      ((this._r5d7d673467ca15 = new SynchronizedGameArena()),
      this._r5d7d673467ca15._re41653a4ececf1(new _i4d368dfb05f536()),
      this._r5d7d673467ca15.initialize(this, i),
      (this._r816ca6027ab712 = new j4e(this)),
      this._roomSessionManager?._re05ee4884dc3e6(-1, !1),
      this._roomSessionManager?._rf288d43df6dfd9(),
      this.registerUpdateReceiver(this, 1),
      (this._timeSinceLastUpdate = 0),
      (this.var_472 = 0),
      (this.var_1231 = 0));
  }
  initView() {
    this._r816ca6027ab712?.init();
  }
  _r788d6c89a67c7f(r) {
    this._r816ca6027ab712 != null &&
      (this._rf205fceb9b7fe8 != null && (this._rf205fceb9b7fe8.visible = !0),
      this._r8627026f199837(),
      a.playSound(HabboSoundTypesEnum.GAMES_IG_COUNTDOWN),
      this._r816ca6027ab712._rd0e38177616a5f(r),
      (this.var_67 = a._rb427aee72a4552));
  }
  _r20df0136c4be07(r) {
    (r > 0
      ? ((this._r25f496525cb2dc = r), (this.var_67 = a.STATE_STAGE_RUNNING))
      : (this.var_67 = a.STATE_STAGE_ENDING),
      (this.var_472 = 0),
      (this.var_1231 = 0));
  }
  _r05e3accf0c4011() {
    (this._rd75f76fa5c0d05(),
      this._r9dc8d3eeed7972(),
      this._r8627026f199837(),
      this._r89f41e93fcd235?.dispose(),
      (this._r89f41e93fcd235 = null),
      this._players.clear(),
      this._r2c67c75af014cc?._r9ac1f240d58a14(!1));
  }
  _reaee9ef642a187() {
    this._r1bb39b3e661fe0 = !0;
  }
  _r6265d793aaa11f() {
    this._r2c67c75af014cc?.toggleVisibility();
  }
  _ra85d55742451f2(r) {
    r && this._r6265d793aaa11f();
  }
  _r04274d9317ec06() {
    this._gameManager?._r81db7b5336f1d1();
  }
  _r0ae1535bbfa29c(r) {
    (this._catalog?._rd2832168ded994(a.GET_SNOWWAR_TOKENS), this.logGameEvent(r));
  }
  openClubCenter(r) {
    (this._catalog?.openClubCenter(), this.logGameEvent(r));
  }
  logGameEvent(r) {
    this._communication?.connection?.send(new class_2154("GameFramework", "SnowStorm", r, "", this.var_4138));
  }
  _r67250fc5be0a50() {
    this.leaderboard != null &&
      ((this.leaderboard._r6f8f1cb125be6c = class_3666.SNOWWAR), this.leaderboard._r0fa8339f9ef029());
  }
  static playSound(r, t = 0) {
    a._r7963f5188b8808?.playSound(r, t);
  }
  send(r) {
    this._communication?.connection?.send(r);
  }
  _r78075dac337cf4 = n((r = null, t = null) => {
    ((this._windowManager = t), this._windowManager != null && je.init(this.assets, this._windowManager));
  }, "_r78075dac337cf4");
  _r6448fe5924274c = n((r = null, t = null) => {
    ((this._communication = t), (this._incomingMessages = new _ifffc223d172097__(this)));
  }, "_r6448fe5924274c");
  _r7ff816f6be0771 = n((r = null, t = null) => {
    ((this._configuration = t),
      (this._r98bccf4b8abc79 = this._configuration?.getBoolean("snowwar.ghost.enabled") ?? !1),
      this._r98bccf4b8abc79 &&
        ((this._r5a04ae5c177479 =
          this._configuration?.getBoolean("snowwar.ghost.visualization.enabled") ?? !1),
        (this._rde5ad42d1ae6dc =
          this._configuration?.getBoolean("snowwar.ghost.immediate.enabled") ?? !1)));
  }, "_r7ff816f6be0771");
  _rf5d613f0487bb3 = n((r = null, t = null) => {
    this._localization = t;
  }, "_rf5d613f0487bb3");
  _r52cf40eebfe25b = n((r = null, t = null) => {
    this._sessionDataManager = t;
  }, "_r52cf40eebfe25b");
  _r6c2c29e047b753 = n((r = null, t = null) => {
    this._roomSessionManager = t;
  }, "_r6c2c29e047b753");
  _r7ce0f935cd6d5c = n((r = null, t = null) => {
    ((this._r943cf45602d873 = t),
      this._r943cf45602d873?.events?.addEventListener?.(AvatarRenderEvent.AVATAR_RENDER_READY, this._r8251e07745957b));
  }, "_r7ce0f935cd6d5c");
  _r9ebafc0ea3735c = n((r = null, t = null) => {
    this.disposed || (this.var_1809 = t);
  }, "_r9ebafc0ea3735c");
  _rce6f9602e879f9 = n((r = null, t = null) => {
    this.disposed ||
      ((this._roomEngine = t),
      this._roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_OBJECTS_INITIALIZED, this.onRoomObjectsInitialized));
  }, "_rce6f9602e879f9");
  _r18d4c8ce9efc89 = n((r = null, t = null) => {
    ((this._soundManager = t), (a._r7963f5188b8808 = this._soundManager));
  }, "_r18d4c8ce9efc89");
  _r52164b45cded5e = n((r = null, t = null) => {
    this._rf205fceb9b7fe8 = t;
  }, "_r52164b45cded5e");
  _r00111d913e7d7d = n((r = null, t = null) => {
    this._catalog = t;
  }, "_r00111d913e7d7d");
  _rbd49624529e50d = n((r = null, t = null) => {
    this.disposed || (this._habboHelp = t);
  }, "_rbd49624529e50d");
  _r636e807590684d = n((r = null, t = null) => {
    this.disposed || (this._friendList = t);
  }, "_r636e807590684d");
  getArenaName(r) {
    let t = `snowwar.field.name.${r.fieldType}`;
    return this._localization?.getLocalization(t, t) ?? t;
  }
  _rdafd7bed9d5e14(r) {
    if (
      (this.var_67 === a.STATE_GAME_OVER && (this._rf8e319c83f5e85 = !0),
      this._r89f41e93fcd235 != null &&
        this.var_67 !== a.STATE_REJOIN_GAME &&
        (this._r89f41e93fcd235.changeToWaitState(this._rf8e319c83f5e85),
        (this.var_67 = a.STATE_REJOIN_GAME),
        (this._rf8e319c83f5e85 = !1)),
      this.var_67 === a.STATE_REJOIN_GAME && this._r89f41e93fcd235 != null)
    ) {
      this._r89f41e93fcd235.changeToLobbyState(r);
      for (let t of r.players) this._r89f41e93fcd235._rbb1a50c088346f(t);
      return;
    }
    ((this.var_67 = a._r4bf40420318f29),
      this._r2c67c75af014cc?.openGameLobbyWindow(
        this.getArenaName(r),
        r.levelName,
        r._r02af70d1d066ea,
      ));
    for (let t of r.players) this._r44d07b4d5d75a3?._rbb1a50c088346f(t);
  }
  _r8e184fb1cb7db8(r) {
    if (this.var_67 === a.STATE_REJOIN_GAME && this._r89f41e93fcd235 != null) {
      this._r89f41e93fcd235._rbb1a50c088346f(r);
      return;
    }
    ((this.var_67 = a._r4bf40420318f29), this._r44d07b4d5d75a3?._rbb1a50c088346f(r));
  }
  _reb425c7ba00239(r) {
    if (this.var_67 === a.STATE_REJOIN_GAME && this._r89f41e93fcd235 != null) {
      this._r89f41e93fcd235._r6d432df66b5ba3(r);
      return;
    }
    ((this.var_67 = a._r4bf40420318f29), this._r44d07b4d5d75a3?._r6d432df66b5ba3(r));
  }
  _r48b05233cfc8a8(r) {
    if (this.var_67 === a.STATE_REJOIN_GAME && this._r89f41e93fcd235 != null) {
      this._r89f41e93fcd235._rbb8be570b6cb63(r);
      return;
    }
    this._r44d07b4d5d75a3?._r43125cb4300be9(r);
  }
  _rd6025312513aa1() {
    if (this.var_67 === a.STATE_REJOIN_GAME && this._r89f41e93fcd235 != null) {
      ((this._rf8e319c83f5e85 = !0), this._r89f41e93fcd235.changeToWaitState(this._rf8e319c83f5e85));
      return;
    }
    this._r44d07b4d5d75a3?._r4c63bd667c1a94();
  }
  _r0cacbcc797d106(r, t, i) {
    r === class_3666.SNOWWAR &&
      ((this._r2cc8f8a665c2ff = t),
      (this.var_4138 = i),
      this._r89f41e93fcd235?.updateGamesLeft(),
      this._r2c67c75af014cc?.updateGameStartingStatus());
  }
  _r8b5341ded73b30(r, t) {
    this._r5ba5aba213418e != null &&
      ((this.var_67 = a.STATE_STAGE_LOADING), this._r5ba5aba213418e.showReadyPlayers(t));
  }
  _r946ab8c42c61a0(r) {
    ((this.var_67 = a.STATE_GAME_STARTING),
      (this._rf8e319c83f5e85 = !1),
      this._players.clear(),
      this._rc4108659c05718.dispose(),
      (this._rc4108659c05718 = new B()));
    for (let t of r.players) this._players.set(t.userId, t);
    (this._r89f41e93fcd235?.dispose(),
      (this._r89f41e93fcd235 = null),
      this._r5ba5aba213418e == null && (this._r5ba5aba213418e = new GameLoadingViewController(this)),
      this._r5ba5aba213418e.show(r));
  }
  _r79edc3fe766723(r) {
    (this._r05e3accf0c4011(), r && this._gameManager?._raa9bb1c48e7fa8());
  }
  _r8627026f199837() {
    (this._r5ba5aba213418e?.dispose(), (this._r5ba5aba213418e = null));
  }
  _r116d1b57fed766(r, t, i, s) {
    ((this.var_67 = a.STATE_GAME_OVER),
      this._r2c67c75af014cc?.close(!1),
      this._r89f41e93fcd235?.dispose(),
      (this._r89f41e93fcd235 = null),
      this._r8627026f199837(),
      this._r816ca6027ab712?._rfe4513bc4076e0(),
      (this._r89f41e93fcd235 = new z4e(this, t, i, s, r)));
  }
  _rf5fcb7e067b08c(r) {
    ((this.var_67 = this._rf8e319c83f5e85 ? a.STATE_REJOIN_GAME : a.STATE_GAME_OVER),
      (this._r0eb8ce629f354a = r),
      this._r89f41e93fcd235 != null &&
        (this._r89f41e93fcd235.changeToWaitState(this._rf8e319c83f5e85), (this._rf8e319c83f5e85 = !1)));
  }
  playerRematches(r) {
    this._r89f41e93fcd235?.playerRematches(r);
  }
  _rb6dbaea9bc19ab() {
    ((this._rf8e319c83f5e85 = !0), this.send(new _i42ab1490f71b7a()));
  }
  _rbda5cb55b7cbf2(r, t, i = !1) {
    let s = this._players.get(r) ?? null;
    if (s == null) return;
    let o = s.teamId === 1 ? -300 : 300,
      d = s.teamId === 1 ? 255 : 16711680,
      c = this._gameManager?.events;
    c?.dispatchEvent != null &&
      c.dispatchEvent(
        new GameChatEvent(GameChatEvent.GAME_CHAT, r, t, o, d, s.figure, s.gender, s.name, s.teamId, i),
      );
  }
  _rd75f76fa5c0d05() {
    (this._roomEngine != null && (this._roomEngine._r880a2521997aa0 = !1),
      (this.var_67 = a.STATE_STAGE_ENDING),
      this.removeUpdateReceiver(this),
      this._r5d7d673467ca15?.dispose(),
      (this._r5d7d673467ca15 = null),
      a.stopSound(HabboSoundTypesEnum.GAMES_SW_WALK),
      this.send(new _i5dd11c8c1c20f0(class_3666.SNOWWAR)));
  }
  _r9dc8d3eeed7972() {
    (this._roomSessionManager?._r261a804b1fa605(),
      this._r816ca6027ab712?.dispose(),
      (this._r816ca6027ab712 = null));
  }
  _r9789283ff9852d(r) {
    this._r816ca6027ab712 != null && r === this._r066aba48d064be && this._r816ca6027ab712._r9789283ff9852d();
  }
  _r0f3c9e6a669f7d(r, t) {
    this._r816ca6027ab712 != null &&
      (this._r066aba48d064be === r._r8f79a04a0ab07b
        ? this._r816ca6027ab712.flashOwnScore(!1)
        : this._r066aba48d064be === t._r8f79a04a0ab07b && this._r816ca6027ab712.flashOwnScore(!0));
  }
  _r070fb26cdd9b46(r) {
    if (this.var_67 !== a.STATE_STAGE_RUNNING) return;
    let t = b5._r37264b81e220b4(r.altKey, r.shiftKey);
    if (t === b5._r9d58436d8581de) {
      this._r50f300693e212e(r.tileXAsInt, r.tileYAsInt);
      return;
    }
    this._r5d4b77aad362f4(r.tileXAsInt, r.tileYAsInt, this._r65a91b672ef8fe(t));
  }
  _rff8c994ce55a2d(r, t, i) {
    if (this.var_67 !== a.STATE_STAGE_RUNNING) return;
    let s = this._r2765c9b59a37df();
    if (r === this._r066aba48d064be || (this._r98bccf4b8abc79 && s != null && r === s._r8f79a04a0ab07b)) {
      this._r6b5de812d35298() && this._r816ca6027ab712?.startWaitingForSnowball();
      return;
    }
    let o = this._r0774e628edf810(),
      d = this._rdd383bc45b096b(r);
    if (o != null && d != null && o.team !== d.team) {
      let c = b5._r9cbca7703c347e(t, i);
      this._r513b0e4aafc4be(r, this._r65a91b672ef8fe(c));
    }
  }
  handleMouseOverOnHuman(r, t, i) {
    let s = this._rdd383bc45b096b(r);
    if (s != null) {
      if (this._configuration?.getBoolean("snowstorm.settings.show_user_names") === !0) {
        let o = s.team === 1 ? 4281310921 : 4290988872;
        this._rf205fceb9b7fe8?._roomUI?.(s._r8f79a04a0ab07b, s.name, o, 500);
      }
      this.var_67 === a.STATE_STAGE_RUNNING && this._r816ca6027ab712?._r944f150204708b(s.team);
    }
  }
  _r50f300693e212e(r, t) {
    if (this.var_67 !== a.STATE_STAGE_RUNNING) return;
    let i = this._r0774e628edf810();
    if (i == null || this._r5d7d673467ca15 == null) return;
    let s = r * ti.TILE_WIDTH,
      o = t * ti.TILE_WIDTH;
    this._re20c98e536caa8() != null &&
      (this.send(
        new _i79a63e6c277902(s, o, this._r5d7d673467ca15._r83122f67bd84e4(), this._r5d7d673467ca15.subturn),
      ),
      this._rfd86c5862d7961(i, s, o));
  }
  _r6b5de812d35298() {
    if (this.var_67 !== a.STATE_STAGE_RUNNING) return !1;
    let r = this._r0774e628edf810();
    return r != null && r._r6d4287435f29f1() && this._r5d7d673467ca15 != null
      ? (this.send(new _i7e7c592b72dcca(this._r5d7d673467ca15._r83122f67bd84e4(), this._r5d7d673467ca15.subturn)),
        this._rbea00cba04a2d8(),
        !0)
      : !1;
  }
  _r2a2909c25bbb2d(r, t, i = !1) {
    ((this._rc4e807f00239c5 = r),
      this._rc4108659c05718.setProperty(this._rc4e807f00239c5, t),
      (this.var_1231 = (r + 1) * this._r5d7d673467ca15._r1611ac70458d9b()),
      i &&
        ((this.var_472 = this.var_1231 - this._r5d7d673467ca15._r1611ac70458d9b()),
        (this._timeSinceLastUpdate = this._r5d7d673467ca15.getExtension()._r6e2d6215ef377b()),
        (this.var_3800 = !1),
        this._r98bccf4b8abc79 && this._r2765c9b59a37df()?._ra453f655136d7a(this._rc4e807f00239c5)));
  }
  _r7cd6ef7ff7fe75(r) {
    this.send(new _if967ff62fdb963(r));
  }
  alert(r) {
    (this._r87a91a9bc531e9(),
      this._windowManager != null &&
        (this._r6042e632d6ac0c = this._windowManager.alert("SnowWar Alert", r, 0, this._r9d8a83a2f57c04)));
  }
  _r87a91a9bc531e9() {
    (this._r6042e632d6ac0c?.dispose(), (this._r6042e632d6ac0c = null));
  }
  promoteGame() {
    if (this.var_5482 || this.var_4423 !== 0) return;
    this.var_5482 = !0;
    let r = (this._configuration?.getInteger("new.identity", 0) ?? 0) > 0,
      t = this._configuration?.getProperty("new.user.wing") ?? "";
    (r && t !== class_2104.GAME) ||
      this._habboHelp?.showWelcomeScreen(Me.GAMES, "snowwar.promotion", class_2083.const_27, "GAMES");
  }
  update(r) {
    if (
      this._r5d7d673467ca15 == null ||
      (this.var_67 !== a.STATE_STAGE_RUNNING && this.var_67 !== a._rb427aee72a4552)
    )
      return;
    (this._r816ca6027ab712 != null &&
      this.var_67 === a._rb427aee72a4552 &&
      this._r816ca6027ab712.update(r, this._r5d7d673467ca15.subturn === 0),
      (this._timeSinceLastUpdate += r));
    let t = this._r5d7d673467ca15.getExtension()._r6e2d6215ef377b();
    if (
      !this.var_3800 &&
      this._timeSinceLastUpdate > t &&
      this.var_472 < this.var_1231
    ) {
      (this._r5d7d673467ca15._re74de903a3a527(),
        (this._timeSinceLastUpdate -= t),
        this.var_472++,
        this._timeSinceLastUpdate > t && (this._timeSinceLastUpdate = 0));
      let i = this.var_1231 - this.var_472;
      for (; i-- > 3;) (this._r5d7d673467ca15._re74de903a3a527(), this.var_472++);
      if (
        (this._r816ca6027ab712 != null &&
          this.var_67 === a.STATE_STAGE_RUNNING &&
          this._r816ca6027ab712.update(r, this._r5d7d673467ca15.subturn === 0),
        this.var_472 % this._r5d7d673467ca15._r1611ac70458d9b() === 0)
      ) {
        let s = this._r5d7d673467ca15._r83122f67bd84e4() - 1,
          o = this._r5d7d673467ca15._rb1d882c4d63cfe(s),
          d = this._rc4108659c05718.getValue(s);
        this._r56fc958aae80df(s);
        let c = s < this._rc4e807f00239c5 - 3,
          f = d != null && o != null && d !== o,
          l = 0,
          b = 0;
        (c || f || this._r1bb39b3e661fe0) &&
          (c ? ((l = 0), (b = 16711935)) : f ? ((l = 1), (b = 16711680)) : ((l = -1), (b = 255)),
          this._r816ca6027ab712?._r2d3cd8c80b7d7a(b),
          this._r7cd6ef7ff7fe75(l),
          (this._r1bb39b3e661fe0 = !1),
          (this.var_3800 = !0));
      }
    }
  }
  static stopSound(r) {
    a._r7963f5188b8808?.stopSound(r);
  }
  _r8251e07745957b = n((r) => {
    let t = this._r943cf45602d873,
      i = this.context.assets;
    if (!(i instanceof AssetLibraryCollection) || t == null || i._r96cdb07d81be7c(this.assets.name)) return;
    i._rb655cfac05e864(this.assets);
    let s = this.assets.getAssetByName("figure");
    (t._rcd39fca6b6f83a(s?.content ?? null), t._r569e2311495896());
  }, "_r8251e07745957b");
  onRoomObjectsInitialized = n((r) => {
    this._r5d7d673467ca15 != null && this.send(new _i9c6de6db05d388(100));
  }, "onRoomObjectsInitialized");
  _r9d8a83a2f57c04 = n((r) => {
    (r.dispose(), (this._r6042e632d6ac0c = null));
  }, "_r9d8a83a2f57c04");
  _r513b0e4aafc4be(r, t) {
    let i = this._r0774e628edf810();
    i != null &&
      i._r15e0fb701bf1ae() &&
      this._r5d7d673467ca15 != null &&
      (this.send(
        new _i263d9886677b96(r, t, this._r5d7d673467ca15._r83122f67bd84e4(), this._r5d7d673467ca15.subturn),
      ),
      this._rbea00cba04a2d8());
  }
  _r5d4b77aad362f4(r, t, i) {
    let s = this._r0774e628edf810();
    if (s != null && s._r15e0fb701bf1ae() && this._r5d7d673467ca15 != null) {
      let o = r * ti.TILE_WIDTH,
        d = t * ti.TILE_WIDTH;
      (this.send(
        new _iaeffcadf896430(o, d, i, this._r5d7d673467ca15._r83122f67bd84e4(), this._r5d7d673467ca15.subturn),
      ),
        this._rbea00cba04a2d8());
    }
  }
  _r65a91b672ef8fe(r) {
    switch (r) {
      case b5._r9caff4bce4ffa3:
        return wf.TRAJECTORY_LONG_LOB;
      case b5._r103d3e2dfa863c:
        return wf.TRAJECTORY_SHORT_LOB;
      case b5._rfce9a1ba358b85:
        return wf.TRAJECTORY_QUICK_THROW;
      default:
        return wf._re228ef8af7af52;
    }
  }
  _rfd86c5862d7961(r, t, i) {
    if (!this._r98bccf4b8abc79 || this._r5d7d673467ca15 == null) return;
    let s = r.posture !== ve.POSTURE_SNOWWAR_DIE_BACK && r.posture !== ve.POSTURE_SNOWWAR_DIE_FRONT,
      o = this._r2765c9b59a37df();
    if (o == null || !s) return;
    let d = new _i1fdc4e34ee6db8(o, t, i);
    this._rde5ad42d1ae6dc
      ? d.apply(this._r5d7d673467ca15._re20c98e536caa8())
      : this._r5d7d673467ca15.addGameEvent(
          this._r5d7d673467ca15._r83122f67bd84e4(),
          this._r5d7d673467ca15.subturn,
          d,
        );
  }
  _rbea00cba04a2d8() {
    this._r98bccf4b8abc79 && this._r2765c9b59a37df()?._rf5e5889de14c6f();
  }
  _r56fc958aae80df(r) {
    if (!this._r98bccf4b8abc79) return;
    let t = this._r0774e628edf810(),
      i = t?._re4f88bac64d340 ?? null,
      s = this._r2765c9b59a37df();
    if (i == null || s == null) return;
    let o = !1;
    for (
      let d = -a._r8d0cc6fe529194;
      d < a._r8d0cc6fe529194 && ((o = s._rb1a806cfde3dd4(r + d, i)), !o);
      d++
    );
    (s._r747adb286ed874(r - a._r8d0cc6fe529194),
      !o &&
        r > a._r8d0cc6fe529194 &&
        t != null &&
        (s._r520ee7e4b093c5(t), s._ra453f655136d7a(r), this._r816ca6027ab712?._r2d3cd8c80b7d7a(65280)));
  }
}
