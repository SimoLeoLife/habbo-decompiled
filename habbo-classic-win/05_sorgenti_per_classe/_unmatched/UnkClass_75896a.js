// Extracted from HabboAirLauncher.deobf.js, line 303205.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i75896a274ac241

class a extends ue {
  static {
    n(this, "UnkClass_75896a");
  }
  static const_48 = 2;
  static _rcbd40b7e2fdd14 = 3;
  static _r898b0150b9598a = 4;
  static _rb5649c6d5161f5 = 0.26;
  static _r95c48cd8331f7f = 2;
  static _r81257b1dfba890 = 2;
  static _re41ebce0960660 = 1024;
  static _ra3235f4b22abf0 = 768;
  static _rbbce7d5db42509 = 1;
  static _r384bf8a6a5cf07 = "hard_coded_room_id";
  _r534e6689e7366e = [];
  _r60ab990ff9ef7d = !1;
  _rd898a3c71ff450 = new B();
  _r94ec3752407ecc = null;
  _re193793c3f83ad = !1;
  _r780afec253a9b3 = !1;
  _r212d1a44e2af32;
  _r7525989fac4fc0 = null;
  _r968489a9dc5e59 = null;
  constructor(e, r = 0, t = null) {
    (super(e, r, t), (this._r212d1a44e2af32 = (r & HabboComponentFlags.ROOM_VIEWER_MODE) !== 0));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._communication = e;
        },
        (this.flags & a.const_48) === 0,
      ),
      new ComponentDependency(
        new IIDHabboTracking(),
        (e) => {
          this._r49621084c4a423 = e;
        },
        (this.flags & a._rcbd40b7e2fdd14) === 0,
      ),
      new ComponentDependency(
        new IIDHabboFreeFlowChat(),
        (e) => {
          this._rb7fab1e25a8762 = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboConfigurationManager(), null, !1),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          ((this._roomEngine = e),
            this._roomEngine?.isInitialized === !0 &&
              ((this._r60ab990ff9ef7d = !0), this._rb745102996b115()));
        },
        (this.flags & a._r898b0150b9598a) === 0,
        [{ type: RoomEngineEvent.ROOM_ENGINE_INITIALIZED, callback: n((e) => this.onRoomEngineInitialized(e), "callback") }],
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderer = e;
        },
        !1,
      ),
    ]);
  }
  get initialized() {
    return this.allRequiredDependenciesInjected && this._r60ab990ff9ef7d;
  }
  get _r4c7535fdf0ccd4() {
    return this._re193793c3f83ad;
  }
  initComponent() {
    (this._roomEngine?.isInitialized === !0 && (this._r60ab990ff9ef7d = !0),
      this._r327d82274afa0b(),
      this._r212d1a44e2af32 &&
        this._communication != null &&
        this._communication._r2e106e2349a0b6(new UnkMessageEvent_4ac32c((e) => this._r7c9f7c3649fea5(e))),
      this._rb745102996b115());
  }
  dispose() {
    if (!this.disposed) {
      for (; this._rd898a3c71ff450.length > 0;) {
        let e = this._rd898a3c71ff450.getKey(0);
        (e == null ? null : this._rd898a3c71ff450.remove(e))?.dispose();
      }
      this._rd898a3c71ff450.dispose();
      for (let e of this._r534e6689e7366e) e.dispose();
      ((this._r534e6689e7366e = []),
        (this._r94ec3752407ecc = null),
        (this._r7525989fac4fc0 = null),
        (this._r968489a9dc5e59 = null),
        (this._communication = null),
        (this._r49621084c4a423 = null),
        (this._roomEngine = null),
        (this._rb7fab1e25a8762 = null),
        (this._avatarRenderer = null),
        super.dispose());
    }
  }
  gotoRoom(e, r = "", t = "", i = !1) {
    let s = new YI();
    return (
      (s.roomId = e),
      (s._r75cd8efc1f254b = r),
      (s._rcc4ba2911da272 = t),
      (s._r7e20243466a613 = i),
      (s._r697386a8fb5bf8 = this._r49621084c4a423),
      this.createSession(s)
    );
  }
  _rdac8cbe17d02d8(e, r) {
    let t = new YI();
    return (
      (t.roomId = 1),
      (t._r75cd8efc1f254b = ""),
      (t._r697386a8fb5bf8 = this._r49621084c4a423),
      (t._r2c6cd1cf66bdb7 = new UnkMessageComposer_2args_3e403d(e, r)),
      this.createSession(t)
    );
  }
  _rec2a221d0176d5(e) {
    return e.state === RoomSessionEvent.const_1398
      ? !1
      : e._r4f0e849e5080b6
        ? !0
        : e.start()
          ? ((this._re193793c3f83ad = !1),
            this.events.dispatchEvent?.(new RoomSessionEvent(RoomSessionEvent.const_1398, e)),
            this._r614d37d1de1e9b(e),
            !0)
          : (this._re05ee4884dc3e6(e.roomId), (this._re193793c3f83ad = !1), !1);
  }
  _rf288d43df6dfd9() {
    let e = new YI();
    ((e.roomId = 1),
      (e._r697386a8fb5bf8 = this._r49621084c4a423),
      (e._r4f0e849e5080b6 = !0),
      (e.connection = this._communication?.connection ?? null),
      this._rd898a3c71ff450.add(this._r212b6a0df5e741(e.roomId), e),
      this.events.dispatchEvent?.(new RoomSessionEvent(RoomSessionEvent.const_481, e)));
  }
  _r261a804b1fa605() {
    let e = this._rd898a3c71ff450.getValue(this._r212b6a0df5e741(1));
    e != null && e._r4f0e849e5080b6 && this._re05ee4884dc3e6(1, !1);
  }
  _rc86aacb7178a7d(e, r) {
    if (this.getSession(e) != null)
      switch (r) {
        case KI.const_1125:
        case KI.const_505:
          break;
        case KI.const_1273:
          this._re05ee4884dc3e6(e);
          break;
        default:
          break;
      }
  }
  _r83acee276eb7e4(e, r) {
    let t = this._rd898a3c71ff450.remove(this._r212b6a0df5e741(e)) ?? null;
    (t == null &&
      ((t = new YI()),
      (t.roomId = e),
      (t._r7e20243466a613 = !0),
      (t._r697386a8fb5bf8 = this._r49621084c4a423),
      this.createSession(t)),
      t.reset(r),
      this._rd898a3c71ff450.remove(this._r212b6a0df5e741(r)),
      this._rd898a3c71ff450.add(this._r212b6a0df5e741(r), t),
      this._r614d37d1de1e9b(t));
  }
  getSession(e) {
    return this._rd898a3c71ff450.getValue(this._r212b6a0df5e741(e)) ?? null;
  }
  _re05ee4884dc3e6(e, r = !0) {
    let t = this._rd898a3c71ff450.remove(this._r212b6a0df5e741(e));
    t != null &&
      (this.events.dispatchEvent?.(new RoomSessionEvent(RoomSessionEvent.const_215, t, r)),
      t.dispose(),
      this._roomEngine?._rb285fae5fe0ee1(),
      Bi.pauseForGCIfCollectionImminent(a._rb5649c6d5161f5));
  }
  onRoomEngineInitialized(e) {
    ((this._r60ab990ff9ef7d = !0), this._rb745102996b115());
  }
  _r327d82274afa0b() {
    let e = this._communication?.connection;
    e != null &&
      this._r534e6689e7366e.push(
        new KI(e, this),
        new UnkBaseHandlerSubclass_ddb67b(e, this),
        new UnkBaseHandlerSubclass_7bcf97(e, this),
        new UnkBaseHandlerSubclass_5a9c2d(e, this),
        new UnkBaseHandlerSubclass_76e240(e, this),
        new UnkBaseHandlerSubclass_57dfbe(e, this),
        new UnkBaseHandlerSubclass_e86b94(e, this),
        new UnkBaseHandlerSubclass_795d11(e, this),
        new UnkBaseHandlerSubclass_cd29db(e, this),
        new UnkBaseHandlerSubclass_5e6ec8(e, this),
        new UnkBaseHandlerSubclass_30cabf(e, this),
        new UnkBaseHandlerSubclass_20e7c3(e, this),
      );
  }
  _rb745102996b115() {
    this.initialized &&
      this._r94ec3752407ecc != null &&
      (this.createSession(this._r94ec3752407ecc), (this._r94ec3752407ecc = null));
  }
  _r7c9f7c3649fea5(e) {
    if (this._r780afec253a9b3 || !this._r212d1a44e2af32) return;
    this._r780afec253a9b3 = !0;
    let r = this.getSession(0);
    if (r == null || this._roomEngine == null) return;
    let t = this._roomEngine._re115c7593c2d32(
      r.roomId,
      a._rbbce7d5db42509,
      a._re41ebce0960660,
      a._ra3235f4b22abf0,
      64,
    );
    t != null &&
      (this.context.dispatchEvent?.addChild(t),
      this.context.dispatchEvent?.addEventListener?.(M.RESIZE, this.onResize),
      this._roomEngine._rac4781fa4fafb3(r.roomId, a._rbbce7d5db42509, !0),
      this._roomEngine
        ._rcc830c76c83ba6(r.roomId, a._rbbce7d5db42509)
        ?._r558119346e8e8f?.(new k(a._r95c48cd8331f7f, a._r81257b1dfba890, 0), 30),
      this._roomEngine._r555de154e48981(r.roomId, a._rbbce7d5db42509, new E(0, -400)));
    let i = this._rb7fab1e25a8762?.displayObject;
    i != null && this.context.dispatchEvent?.addChild(i);
  }
  onResize(e) {
    if (!this._r212d1a44e2af32) return;
    let r = this.getSession(0);
    r != null &&
      this._roomEngine?.modifyRoomCanvas(
        r.roomId,
        a._rbbce7d5db42509,
        this.context.dispatchEvent?.width ?? 0,
        this.context.dispatchEvent?.height ?? 0,
      );
  }
  createSession(e) {
    if (!this.initialized) return ((this._r94ec3752407ecc = e), !1);
    let r = this._r212b6a0df5e741(e.roomId);
    return (
      (this._re193793c3f83ad = !0),
      this._rd898a3c71ff450.getValue(r) != null && this._re05ee4884dc3e6(e.roomId, !1),
      (e.connection = this._communication?.connection ?? null),
      this._rd898a3c71ff450.add(r, e),
      this.events.dispatchEvent?.(new RoomSessionEvent(RoomSessionEvent.const_481, e)),
      this._r212d1a44e2af32 &&
        (this._roomEngine?.events.addEventListener?.("RCLE_SUCCESS", this._rd70b0cf9208d2d),
        (this._r7525989fac4fc0 = []),
        (this._r968489a9dc5e59 = e),
        this._r7525989fac4fc0.length === 0 && this._rec2a221d0176d5(e)),
      !0
    );
  }
  _rd70b0cf9208d2d(e) {
    if (this._r7525989fac4fc0 == null || this._r7525989fac4fc0.length === 0) return;
    let r = e.contentType == null ? -1 : this._r7525989fac4fc0.indexOf(e.contentType);
    (r !== -1 && this._r7525989fac4fc0.splice(r, 1),
      this._r7525989fac4fc0.length === 0 &&
        this._r968489a9dc5e59 != null &&
        this._rec2a221d0176d5(this._r968489a9dc5e59));
  }
  _r614d37d1de1e9b(e) {
    for (let r of this._r534e6689e7366e) r._r48494125bd335d = e.roomId;
  }
  _r212b6a0df5e741(e) {
    return a._r384bf8a6a5cf07;
  }
}
