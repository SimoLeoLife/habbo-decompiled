// Extracted from HabboAirLauncher.deobf.js, line 373343.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/WiredChestController.as
// Obfuscated name: _i067fd58518c8f0

class a extends ue {
  static {
    n(this, "WiredChestController");
  }
  static STATUS_CLOSED = 0;
  static STATUS_OPENING = 1;
  static STATUS_OPEN = 2;
  _roomEvents;
  var_1271 = !1;
  _status = a.STATUS_CLOSED;
  _subControllers;
  var_1411 = 0;
  var_830 = 0;
  _messageEvents;
  constructor(e, r, t = 0, i = null) {
    (super(r, t, i),
      (this._roomEvents = e),
      (this._status = a.STATUS_CLOSED),
      (this._messageEvents = [new class_3029((s) => this._rb749879675ccd7(s))]));
    for (let s of this._messageEvents) this.addMessageEvent(s);
    this._subControllers = [new FurniChestSubController(this), new zTe(this)];
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._rbc3eeef4540361(e);
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
        [
          { type: RoomEngineEvent.ROOM_DISPOSED, callback: n((e) => this._r33a6aa9dfdc0be(e), "callback") },
          { type: RoomEngineObjectEvent.REMOVED, callback: n((e) => this._r6025b2e812919a(e), "callback") },
          { type: RoomEngineObjectEvent.const_72, callback: n((e) => this._rd3b02e92ddc56f(e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboRoomSessionManager(), null, !1, [
        { type: RoomSessionEvent.const_1398, callback: n((e) => this._r136af7172e26af(e), "callback") },
      ]),
    ]);
  }
  _rbc3eeef4540361(e) {
    ((this._windowManager = e), e != null && (this._r3e5f06e1095c89 = new $s(this, e)));
  }
  _rb749879675ccd7(e) {
    let r = ClassUtils.getParser(e, class_2417);
    r != null && this.open(r.chestId);
  }
  open(e) {
    ((this.var_1411 = e), this._r6358b2bd53ae19.connection?.send(new class_2520(e)));
  }
  close() {
    (this._r3e5f06e1095c89.hide(), this._rb37506db84c349());
  }
  _rb37506db84c349() {
    (this.var_830 !== 0 && this._r6358b2bd53ae19.connection?.send(new UnkMessageComposer_1args_d67cc3(this.var_830)),
      (this.var_830 = 0),
      (this._status = a.STATUS_CLOSED));
  }
  _r0c225ccc784744(e) {
    ((this.var_1411 = 0), (this.var_830 = e), (this._status = a.STATUS_OPENING));
  }
  _rd408b13d550952(e, r) {
    ((this.var_1411 = 0), (this.var_830 = e), (this._status = a.STATUS_OPEN));
    let t = this._roomEngine._ra1f5cb56d0c2d8(
      this._roomEngine.activeRoomId,
      this.var_830,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
    );
    if (t == null || t.getStringToStringMap() == null) {
      this._r3e5f06e1095c89.hide();
      return;
    }
    let s =
        t.getStringToStringMap()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_641) ===
        this._roomEvents.sessionDataManager.userId,
      o = this._roomEvents._r2eac8239a09fe7.isRoomOwner;
    this._r3e5f06e1095c89.show(r, t, this.var_830, s, o);
  }
  get status() {
    return this._status;
  }
  get _r8475342393ef03() {
    return this._r3e5f06e1095c89;
  }
  _r6025b2e812919a = n((e) => {
    let r = Number(e.objectId),
      t = Number(e.category);
    r === this._r3e5f06e1095c89._r154af520fc218d &&
      this._status === a.STATUS_OPEN &&
      t === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE &&
      this._r3e5f06e1095c89.hide();
  }, "_r6025b2e812919a");
  _rd3b02e92ddc56f = n((e) => {
    let r = Number(e.objectId),
      t = Number(e.category);
    r === this._r3e5f06e1095c89._r154af520fc218d &&
      this._status === a.STATUS_OPEN &&
      t === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE &&
      this._r3e5f06e1095c89._rcc84c42ecc031d();
  }, "_rd3b02e92ddc56f");
  get _r236c55808e31eb() {
    return this.var_830;
  }
  get _rd69e246bd6e5cf() {
    return this.var_1411;
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  _r33a6aa9dfdc0be = n((e) => {
    e.type === RoomEngineEvent.ROOM_DISPOSED && this._r3e5f06e1095c89?.hide();
  }, "_r33a6aa9dfdc0be");
  _r78ea73ed129903() {
    (this._r3e5f06e1095c89.isShowing() &&
      !this._r3e5f06e1095c89._r4b0f4dcd9b6c6f &&
      !this._r3e5f06e1095c89.isVisibleForEveryone &&
      this._r3e5f06e1095c89.hide(),
      this._r3e5f06e1095c89 != null &&
        this._r3e5f06e1095c89.isShowing() &&
        (this._r3e5f06e1095c89.updateLayout(), this._r3e5f06e1095c89.updateUI()));
  }
  _r136af7172e26af = n((e) => {}, "_r136af7172e26af");
  _r82e0d5c4c0b44d(e) {
    for (let r of this._subControllers) if (r.type === e) return r;
    return null;
  }
  send(e) {
    this._r6358b2bd53ae19.connection?.send(e);
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get localization() {
    return this._localizationManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get catalog() {
    return this._catalog;
  }
  getInteger(e, r) {
    let t = Number.parseInt(this.getProperty(e), 10);
    return Number.isNaN(t) ? r : t;
  }
  getProperty(e, r = null) {
    return this._roomEvents.getProperty(e, r);
  }
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    if (!this.var_1271) {
      this.var_1271 = !0;
      for (let e of this._subControllers ?? []) e.dispose();
      this._subControllers = null;
      for (let e of this._messageEvents ?? []) this.removeMessageEvent(e);
      ((this._messageEvents = null),
        (this.var_1411 = 0),
        (this.var_830 = 0),
        (this._status = a.STATUS_CLOSED),
        this._r3e5f06e1095c89?.dispose(),
        (this._r3e5f06e1095c89 = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._roomEngine = null),
        (this._roomEvents = null),
        (this._catalog = null),
        super.dispose());
    }
  }
}
