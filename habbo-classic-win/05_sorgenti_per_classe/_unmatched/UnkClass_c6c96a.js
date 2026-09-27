// Extracted from HabboAirLauncher.deobf.js, line 294869.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic6c96a9f498fea

class a extends ue {
  static {
    n(this, "UnkClass_c6c96a");
  }
  static _r117b6d979cdffa = 1;
  static const_91 = 2;
  static _r1ec682b042990b = 4;
  static const_48 = 5;
  static _rf688915b895c59 = -1;
  static _r32e714993250a7 = "room";
  static _r1fd1afd652435b = -2;
  static _r078075ac6d4ba1 = "tile_cursor";
  static _r9fd3f13446d057 = -3;
  static _re017a8e9ef2a18 = "selection_arrow";
  static _rdf322f777613fc = "temporary_room";
  static _r3daed96807e201 = "overlay";
  static _refd2eda7f7b6e4 = "object_icon_sprite";
  static _r2a449f946dacb0 = 15;
  static _rbca69e11162a5e = 5;
  _r268360972557a2 = null;
  _rd8bd2f44dd85a7 = null;
  _rf5c92413fafe44 = null;
  _r01c631e40b03ff = !1;
  _r0f169c5df1bdba = !1;
  _r853a42f2450c73 = 0;
  _r37d077cd2c83d5 = -1;
  _r2460fee05d566b = 0;
  _r7ecfd022399745 = 0;
  _rf69b23ba38e742 = !1;
  _raca72881b19828 = !1;
  _r72940ed09444bb = 0;
  _r9622e2919a8ac2 = 0;
  _r7d7e4f7c60854c = !1;
  _r322672563846a4 = !1;
  _r358dfdd810a572 = !1;
  _r45fbe6ae4360ea = !1;
  _rac474fe86ae72e = !1;
  _re9eb8cb11fdbbb = !1;
  _r9ab4f7c14fd924 = !1;
  _r883488bb71ee36 = -1;
  _r8ffdd6854e5554 = 0;
  _rd75b11076efd1c = 0;
  _rb2f15fb6918298 = null;
  _r35b4088dec8751 = !0;
  _rb00ca04db0a2df = null;
  _r4ee0476f711256 = null;
  _re602ab1e16a46b = n((e) => this._ra3e21873b819bc(), "_re602ab1e16a46b");
  _ra29bf0097d30ed = n((e) => this._r159692ae58dbda(e), "_ra29bf0097d30ed");
  constructor(e, r = 0) {
    super(e, r);
  }
  get dependencies() {
    let e = n((o) => this._r4812a3eab17d60(o), "_i4812a3eab17d60"),
      r = n((o) => this._r86250e7682c685(o), "_i86250e7682c685"),
      t = n((o) => this._r2e8ee6747a8a2b(o), "_i2e8ee6747a8a2b"),
      i = n((o) => this._r275b0421c293ad(o), "_i275b0421c293ad"),
      s = n((o) => this.IIDHabboConfigurationManager(), "_i370053c0c4360d");
    return super.dependencies.concat([
      new ComponentDependency(new UnkInterface_2446cc(), (o) => {
        this._r9ca66d1f9e157b = o;
      }),
      new ComponentDependency(new IIDRoomObjectVisualizationFactory(), (o) => {
        this._rd6ec743ba974e5 = o;
      }),
      new ComponentDependency(new UnkInterface_a33f03(), (o) => {
        this._ra52c012d627d72 = o;
      }),
      new ComponentDependency(new UnkInterface_6ece2f(), (o) => {
        this._r4441479631947b = o;
      }),
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (o) => {
          this._communication = o;
        },
        (this.flags & a.const_48) === 0,
      ),
      new ComponentDependency(new IIDHabboConfigurationManager(), null, !0, [{ type: M.ComponentDependency, callback: s }]),
      new ComponentDependency(
        new IIDHabboAdManager(),
        (o) => {
          this._rf2345cb7a34190 = o;
        },
        !1,
        [
          { type: AdEvent.ROOM_AD_SHOW, callback: e },
          { type: AdEvent.ROOM_AD_IMAGE_LOADED, callback: r },
          { type: AdEvent.ROOM_AD_IMAGE_LOADING_FAILED, callback: r },
        ],
      ),
      new ComponentDependency(new IIDSessionDataManager(), (o) => {
        this._sessionDataManager = o;
      }),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (o) => {
          this._roomSessionManager = o;
        },
        !1,
        [
          { type: RoomSessionEvent.const_1398, callback: t },
          { type: RoomSessionEvent.const_215, callback: t },
        ],
      ),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (o) => {
          this._toolbar = o;
        },
        !1,
        [{ type: HabboToolbarEvent.TOOLBAR_CLICK, callback: i }],
      ),
      new ComponentDependency(
        new IIDHabboTracking(),
        (o) => {
          this._r49621084c4a423 = o;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (o) => {
          this._catalog = o;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboUserDefinedRoomEvents(),
        (o) => {
          this._roomEvents = o;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboGameManager(),
        (o) => {
          this._gameManager = o;
        },
        (this.flags & a._r1ec682b042990b) === 0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (o) => {
        this._windowManager = o;
      }),
    ]);
  }
  get configuration() {
    return this;
  }
  get isInitialized() {
    return this._r0f169c5df1bdba;
  }
  get connection() {
    return this._communication?.connection ?? null;
  }
  get activeRoomId() {
    return this._r853a42f2450c73;
  }
  get _rbe53bad1dd182e() {
    return this._gameManager;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get toolbar() {
    return this._toolbar;
  }
  get catalog() {
    return this._catalog;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _rd0c2eb43bcc755() {
    return this._r268360972557a2;
  }
  get _rd9cadeb02cc47a() {
    return this._r8ffdd6854e5554;
  }
  set _rd9cadeb02cc47a(e) {
    this._r8ffdd6854e5554 = e;
  }
  get _r15b8ebc2e10c95() {
    return this._rd75b11076efd1c;
  }
  set _r15b8ebc2e10c95(e) {
    this._rd75b11076efd1c = e;
  }
  get _r67c88eecaceaf0() {
    return this._roomSessionManager?.getSession(this._r853a42f2450c73)?.isUserDecorating ?? !1;
  }
  get _r880a2521997aa0() {
    return this._r322672563846a4;
  }
  set _r880a2521997aa0(e) {
    this._r322672563846a4 = e;
  }
  get _rf3433368466f6a() {
    return this._r45fbe6ae4360ea;
  }
  set _rf3433368466f6a(e) {
    ((this._r45fbe6ae4360ea = e), e ? this.removeUpdateReceiver(this) : this.registerUpdateReceiver(this, 1));
  }
  get _r1deca76ce4b5a7() {
    return this._r883488bb71ee36;
  }
  get _r17bed959b0ae8d() {
    return this._recff94dd5db5e9(this._r853a42f2450c73, RoomVariableEnum.const_924);
  }
  get _rb908be66c6903d() {
    return this._recff94dd5db5e9(this._r853a42f2450c73, RoomVariableEnum.CHOOSER_DISABLED);
  }
  get _r60c579076a73f1() {
    return this._recff94dd5db5e9(this._r853a42f2450c73, RoomVariableEnum.FREE_FURNI_MOVEMENTS_MODE);
  }
  get _r607a58da345e94() {
    return this._r59cc4b28e895a2;
  }
  get _rc6e01b548b9b58() {
    return (this._rb00ca04db0a2df?.size ?? 0) > 0;
  }
  get _rb2f618a015cb5a() {
    return (this._r4ee0476f711256?.size ?? 0) > 0;
  }
  get _r99c1fdf1bfe389() {
    return !0;
  }
  transformPoint(e, r) {
    return new E(e.a * r.x + e.c * r.y + e.tx, e.b * r.x + e.d * r.y + e.ty);
  }
  _r6b96009ec3dccf(e) {
    let r = e.a * e.d - e.b * e.c;
    if (r === 0) return new Pe();
    let t = 1 / r;
    return new Pe(
      e.d * t,
      -e.b * t,
      -e.c * t,
      e.a * t,
      (e.c * e.ty - e.d * e.tx) * t,
      (e.b * e.tx - e.a * e.ty) * t,
    );
  }
  initComponent() {
    let e = n((r) => this._ra29bf0097d30ed(r), "_i56f181c10e5dc0");
    ((this._r2e90e8dbbe2223 = new B()),
      (this._r8883f008ebaf95 = new UnkClass_9445d6(1e3)),
      (this._rbd9b503177cec1 = new UnkClass_9445d6(1e3)),
      (this._red61ebf881657e = new B()),
      (this._rb21f4a33cacd78 = new B()),
      (this._r550a3d5d491427 = new B()),
      (this._rb2f15fb6918298 = new B()),
      (this._rb00ca04db0a2df = new Set()),
      (this._r4ee0476f711256 = new Set()),
      (this._r54f0345aa3aa53 = this._radfec45f55ca41()),
      (this._r3aaf7f7d21fd5e = new kwe(this)),
      this.registerUpdateReceiver(this, 1),
      this._r9ca66d1f9e157b?._ra10466e5dd93db(e),
      (this._r59cc4b28e895a2 = new QI(this)));
  }
  _radfec45f55ca41() {
    return new Twe(this);
  }
  dispose() {
    if (!this.disposed) {
      if (
        (this.removeUpdateReceiver(this),
        this._r59cc4b28e895a2?.dispose?.(),
        this._r8883f008ebaf95?.dispose(),
        this._rbd9b503177cec1?.dispose(),
        this._red61ebf881657e?.dispose(),
        this._rb21f4a33cacd78?.dispose(),
        this._r54f0345aa3aa53?.dispose(),
        this._r3aaf7f7d21fd5e?.dispose(),
        this._r268360972557a2?.dispose(),
        this._r550a3d5d491427?.dispose(),
        this._rb2f15fb6918298?.dispose(),
        (this._rb2f15fb6918298 = null),
        (this._rb00ca04db0a2df = null),
        (this._r4ee0476f711256 = null),
        this._r2e90e8dbbe2223 != null)
      ) {
        for (let e of this._r2e90e8dbbe2223.getValues()) e.dispose();
        (this._r2e90e8dbbe2223.dispose(), (this._r2e90e8dbbe2223 = null));
      }
      super.dispose();
    }
  }
  _r2dbf9f58349954() {
    this.update(1);
  }
  update(e) {
    Jn.turnVisualizationOn();
    let r = this._r557abb4396cd44();
    if (
      (r != null && (r._r7749620ccc5c81 = this._r49621084c4a423?.latencyPingMs ?? -1),
      this._rac474fe86ae72e ? (this._rac474fe86ae72e = !1) : this._r54659247946ba8(),
      this._ra52c012d627d72 != null && !this._r45fbe6ae4360ea)
    ) {
      this._ra52c012d627d72.update(e);
      for (let t = 0; t < this._ra52c012d627d72._r0084d983efeb17(); t++)
        this._ra52c012d627d72._r12eb215885cb1e(t)?._rabc00691f33c37()?.update(e);
    }
    (this._r31f19a046afeda(e), this._r9ab4f7c14fd924 && this._r458ccaabd9fa3c(), Jn._r3c1dc9f6e87d15());
  }
  _r9bad3da3da4431(e, r, t) {
    if (this._r268360972557a2 == null || e === -1) return;
    this._rbd9b503177cec1?._r4240042bb53ae3(e - 1);
    let i = this._rb21f4a33cacd78?.getValue(r) ?? null;
    if (i == null || i.id !== e) return;
    this._rb21f4a33cacd78?.remove(r);
    let s = this.assets.getAssetByName(r);
    if (s == null || s.disposed) return;
    let o = s.content;
    for (let d of i.listeners)
      if (d != null)
        try {
          o instanceof A && o.width > 0 && o.height > 0 && d.imageReady(e, o.clone());
        } catch {}
  }
  IIDHabboConfigurationManager() {
    (this._r268360972557a2?.dispose(),
      this.events.removeEventListener?.(cX.CONTENT_LOADER_READY, this._re602ab1e16a46b),
      (this._r01c631e40b03ff = !1));
    let e = typeof window < "u" ? window.location.href : "";
    ((this._r268360972557a2 = new cX(e)),
      this._r268360972557a2.initialize(this.events, this),
      (this._r268360972557a2._rf474b5204622c5 = this.assets),
      (this._r268360972557a2._r59f2d0ab0635a3 = this),
      (this._r268360972557a2._r2563f8c8fbf9af = this._rd6ec743ba974e5),
      (this._r268360972557a2.sessionDataManager = this._sessionDataManager),
      (this._r7d7e4f7c60854c = this.getBoolean("room.dragging.always_center")),
      this._ra52c012d627d72?._re8f661dca32b6b(RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      this._ra52c012d627d72?._re8f661dca32b6b(RoomObjectCategoryEnum.const_909),
      this._ra52c012d627d72?._re8f661dca32b6b(RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
      this._ra52c012d627d72?._re8f661dca32b6b(RoomObjectCategoryEnum.const_1105),
      this._ra52c012d627d72?._re8f661dca32b6b(RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM),
      this._ra52c012d627d72?._r9e6797971ecfd2(this._r268360972557a2),
      this._r3aaf7f7d21fd5e != null &&
        this._communication != null &&
        (this._r3aaf7f7d21fd5e.connection = this._communication.connection),
      this.events.addEventListener?.(cX.CONTENT_LOADER_READY, this._re602ab1e16a46b),
      this._r268360972557a2.isReady && this._ra3e21873b819bc());
  }
  _ra3e21873b819bc() {
    this._r01c631e40b03ff ||
      ((this._r01c631e40b03ff = !0), this._ra52c012d627d72?.initialize(rr("<nothing/>"), this));
  }
  _r2e8ee6747a8a2b(e) {
    switch (e.type) {
      case RoomSessionEvent.const_1398:
        (this._r3aaf7f7d21fd5e?._r4fe7d7edbb7c87(e.session.roomId),
          this._r54f0345aa3aa53?.enterNewRoom());
        break;
      case RoomSessionEvent.const_215:
        (this._r3aaf7f7d21fd5e?._r6ff0d604a9caed(), this._r54608a3676a44e(e.session.roomId));
        break;
    }
  }
  _r275b0421c293ad(e) {
    if (e._re9c693c8b69b04 === Me.MEMENU) {
      let r = this._r8af7d8d067d0ca();
      r != null && (r._r0d91b674577f8d(this._r762e672529752b), r.reset());
    }
  }
  _rbba4bdc1093cc1(e) {
    if (
      e &&
      ((this._r0f169c5df1bdba = !0),
      this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_ENGINE_INITIALIZED, 0)),
      this._r550a3d5d491427 != null)
    )
      for (let r of this._r550a3d5d491427.getValues())
        this._rd4c6f2a06f0225(r.roomId, r.data, r._r23f8f0dd582aed);
  }
  _r97ed166a6c3d16(e) {
    this._r853a42f2450c73 = e;
  }
  _r212b6a0df5e741(e) {
    return String(e);
  }
  _r9bf502fda037f6(e) {
    let r = e.split("_");
    if (r.length === 0) return 0;
    let t = Number(r[0] ?? 0);
    return Number.isFinite(t) ? Math.trunc(t) : 0;
  }
  _r9bf46327882f02(e, r) {
    let t = this._r8bcc15c726f45e(e);
    return t != null && t._r3bff114596a1a8(r) ? t._ra3dc9a405b5c73(r) : Number.NaN;
  }
  _r7f639510511a35(e, r) {
    return this._r8bcc15c726f45e(e)?.getString(r) ?? "";
  }
  _rb9a6cd0287557e(e, r) {
    let t = this._r8bcc15c726f45e(e);
    if (t == null) return;
    let i = r ? 1 : 0;
    (t.setNumber(RoomVariableEnum.IS_PLAYING_GAME, i),
      this.events.dispatchEvent?.(new RoomEngineEvent(i === 0 ? RoomEngineEvent.ROOM_ENGINE_NORMAL_MODE : RoomEngineEvent.ROOM_ENGINE_GAME_MODE, e)));
  }
  _r17b510721b3eb1() {
    this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_ENTRANCE_AFTER_SPECTATE, this._r853a42f2450c73));
  }
  _r27fc589b4b8d9c(e, r) {
    this._r8bcc15c726f45e(e)?.setNumber(RoomVariableEnum.const_924, r ? 1 : 0);
  }
  _rfbc241b9674bc4(e, r) {
    this._r8bcc15c726f45e(e)?.setNumber(RoomVariableEnum.CHOOSER_DISABLED, r ? 1 : 0);
  }
  _r3f892414fc6e48(e, r) {
    this._r8bcc15c726f45e(e)?.setNumber(RoomVariableEnum.FREE_FURNI_MOVEMENTS_MODE, r ? 1 : 0);
  }
  _ra96a309112eec7(e, r) {
    let t = this._r8bcc15c726f45e(e);
    t != null && (t.setNumber(RoomVariableEnum.INVISIBLE_FURNI, r ? 1 : 0), this._rb9ccfbb90b8b6b(e, r));
  }
  _r4dbc533993efe1(e) {
    return this._recff94dd5db5e9(e, RoomVariableEnum.IS_PLAYING_GAME);
  }
  _rd49f15461de8be() {
    return this._r4dbc533993efe1(this._r853a42f2450c73);
  }
  _recff94dd5db5e9(e, r) {
    return this._r9bf46327882f02(e, r) > 0;
  }
  _r8bcc15c726f45e(e) {
    return this._r0f169c5df1bdba
      ? (this._ra52c012d627d72?._r8bcc15c726f45e(this._r212b6a0df5e741(e)) ?? null)
      : null;
  }
  _rd4c6f2a06f0225(e, r, t = null, i = null) {
    let s = this._r212b6a0df5e741(e),
      o = this._r550a3d5d491427?.remove(s) ?? null,
      d = o?._r79139f0497a3db ?? "111",
      c = o?._raec7c74c043bf6 ?? "201",
      f = o?._r0360237584f43e ?? "1";
    if ((o?._r23f8f0dd582aed != null && t == null && (t = o._r23f8f0dd582aed), !this._r0f169c5df1bdba)) {
      ((o = new class_1862_(e, r ?? rr("<room/>"))),
        (o._r79139f0497a3db = d),
        (o._raec7c74c043bf6 = c),
        (o._r0360237584f43e = f),
        (o._r23f8f0dd582aed = t),
        this._r550a3d5d491427?.add(s, o));
      return;
    }
    if (!(
      r == null ||
      (o != null &&
        ((d = o._r79139f0497a3db?.length ? o._r79139f0497a3db : d),
        (c = o._raec7c74c043bf6?.length ? o._raec7c74c043bf6 : c),
        (f = o._r0360237584f43e?.length ? o._r0360237584f43e : f),
        (t = o._r23f8f0dd582aed ?? t)),
      this._r45a41d9ebca32b(s, r, d, c, f, t) == null)
    )) {
      if (i != null)
        for (let b of i)
          this._r57c63f39280147(
            e,
            b.furniId,
            b.on,
            b._r1218139d05a185,
            b._r959c41620a2b1c,
            b.width,
            b.length,
            b.invert,
          );
      this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_INITIALIZED, e));
    }
  }
  _r45a41d9ebca32b(e, r, t, i, s, o) {
    if (!this._r0f169c5df1bdba) return null;
    let d = this._ra52c012d627d72?._r45a41d9ebca32b(e, r) ?? null;
    if (d == null) return null;
    let c = d.createRoomObject(a._rf688915b895c59, a._r32e714993250a7, RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM);
    (d.setNumber(RoomVariableEnum.ROOM_IS_PUBLIC, 0, !0), d.setNumber(RoomVariableEnum.ROOM_Z_SCALE, 1, !0));
    let f = r.child("dimensions").toArray();
    if (f.length === 1) {
      let l = f[0],
        b = Number.parseFloat(String(l.attribute("minX"))),
        _ = Number.parseFloat(String(l.attribute("maxX"))),
        h = Number.parseFloat(String(l.attribute("minY"))),
        p = Number.parseFloat(String(l.attribute("maxY")));
      (d.setNumber(RoomVariableEnum.ROOM_MIN_X, b),
        d.setNumber(RoomVariableEnum.ROOM_MAX_X, _),
        d.setNumber(RoomVariableEnum.ROOM_MIN_Y, h),
        d.setNumber(RoomVariableEnum.ROOM_MAX_Y, p),
        c?.getModelController()?.setNumber(RoomObjectVariableEnum.ROOM_RANDOM_SEED, b * 423 + _ * 671 + h * 913 + p * 7509, !0));
    }
    if (
      (o != null &&
        (d.setNumber(RoomVariableEnum.CAMERA_INIT_X, o.x),
        d.setNumber(RoomVariableEnum.CAMERA_INIT_Y, o.y),
        d.setNumber(RoomVariableEnum.CAMERA_INIT_Z, o.z)),
      c?._rc3df04144b8b80()?.initialize(r),
      t.length > 0 &&
        (c?._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_FLOOR_UPDATE, t)),
        d.setString(RoomObjectVariableEnum.ROOM_FLOOR_TYPE, t)),
      i.length > 0 &&
        (c?._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_WALL_UPDATE, i)),
        d.setString(RoomObjectVariableEnum.ROOM_WALL_TYPE, i)),
      s.length > 0 &&
        (c?._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_LANDSCAPE_UPDATE, s)),
        d.setString(RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE, s)),
      r != null)
    ) {
      let l = r.child("doors").toArray();
      if (l.length > 0) {
        let b = l[0];
        if (b != null && typeof b != "string") {
          let _ = b.child("door").toArray(),
            h = ["x", "y", "z", "dir"];
          for (let p = 0; p < _.length; p++) {
            let m = _[p];
            if (m == null || typeof m == "string" || !da.checkRequiredAttributes(m, h)) continue;
            let v = Number(String(m.attribute("x"))),
              w = Number(String(m.attribute("y"))),
              I = Number(String(m.attribute("z"))),
              C = Number(String(m.attribute("dir"))),
              W = gd.MASK_TYPE_DOOR,
              R = `door_${p}`,
              T = new k(v, w, I);
            (c
              ?._rc3df04144b8b80()
              ?.processUpdateMessage(new gd(gd.ADD_MASK, R, W, T, gd.MASK_CATEGORY_HOLE)),
              (C === 90 || C === 180) &&
                (C === 90 &&
                  (d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_X, v - 0.5, !0), d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_Y, w, !0)),
                C === 180 &&
                  (d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_X, v, !0), d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_Y, w - 0.5, !0)),
                d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_Z, I, !0),
                d.setNumber(RoomObjectVariableEnum.ROOM_DOOR_DIR, C, !0)));
          }
        }
      }
    }
    return (
      d.createRoomObject(a._r1fd1afd652435b, a._r078075ac6d4ba1, RoomObjectCategoryEnum.const_1105),
      this.getBoolean("avatar.widget.enabled") ||
        d.createRoomObject(a._r9fd3f13446d057, a._re017a8e9ef2a18, RoomObjectCategoryEnum.const_1105),
      d
    );
  }
  _r8d583f1f5d010b(e) {
    return this.getObject(this._r212b6a0df5e741(e), a._rf688915b895c59, RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM);
  }
  _r20d16d1bfd889e(e, r = null, t = null, i = null, s = !1) {
    let o = this._r8d583f1f5d010b(e),
      d = this._r8bcc15c726f45e(e);
    if (o == null) {
      let f = this._r550a3d5d491427?.getValue(this._r212b6a0df5e741(e)) ?? null;
      return (
        f == null &&
          ((f = new class_1862_(e, rr("<room/>"))), this._r550a3d5d491427?.add(this._r212b6a0df5e741(e), f)),
        r != null && (f._r79139f0497a3db = r),
        t != null && (f._raec7c74c043bf6 = t),
        i != null && (f._r0360237584f43e = i),
        !0
      );
    }
    let c = o._rc3df04144b8b80();
    return c == null
      ? !1
      : (r != null &&
          (d != null && !s && d.setString(RoomObjectVariableEnum.ROOM_FLOOR_TYPE, r),
          c.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_FLOOR_UPDATE, r))),
        t != null &&
          (d != null && !s && d.setString(RoomObjectVariableEnum.ROOM_WALL_TYPE, t),
          c.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_WALL_UPDATE, t))),
        i != null &&
          (d != null && !s && d.setString(RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE, i),
          c.processUpdateMessage(new RoomObjectRoomUpdateMessage(RoomObjectRoomUpdateMessage.ROOM_LANDSCAPE_UPDATE, i))),
        !0);
  }
  _rc46b85071fd02a(e, r, t, i) {
    let s = this._r8d583f1f5d010b(e);
    return s?._rc3df04144b8b80() == null
      ? !1
      : (s._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomColorUpdateMessage(RoomObjectRoomColorUpdateMessage.BACKGROUND_COLOR, r, t, i)),
        this.events.dispatchEvent?.(new Xv(e, r, t, i)),
        !0);
  }
  _r96878a46fa7f1c(e, r, t, i, s) {
    return this._r8d583f1f5d010b(e)?._rc3df04144b8b80() == null
      ? !1
      : (this.events.dispatchEvent?.(new RoomEngineHSLColorEnableEvent(RoomEngineHSLColorEnableEvent.ROOM_BACKGROUND_COLOR, e, r, t, i, s)), !0);
  }
  _rb767e17f9cef31(e, r, t = !0) {
    let i = this._r8d583f1f5d010b(e);
    return i?._rc3df04144b8b80() == null
      ? !1
      : (i._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomPlaneVisibilityUpdateMessage(RoomObjectRoomPlaneVisibilityUpdateMessage.const_253, r)),
        i._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomPlaneVisibilityUpdateMessage(RoomObjectRoomPlaneVisibilityUpdateMessage.const_1294, t)),
        !0);
  }
  _r429a951061317e(e, r, t) {
    let i = this._r8d583f1f5d010b(e);
    return i?._rc3df04144b8b80() == null
      ? !1
      : (i._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomPlanePropertyUpdateMessage(RoomObjectRoomPlanePropertyUpdateMessage.WALL_THICKNESS, r)),
        i._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomPlanePropertyUpdateMessage(RoomObjectRoomPlanePropertyUpdateMessage.FLOOR_THICKNESS, t)),
        !0);
  }
  _r57c63f39280147(e, r, t, i, s, o, d, c) {
    this.events.dispatchEvent?.(new D6(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, t));
    let f = this._r8d583f1f5d010b(e);
    if (f?._rc3df04144b8b80() == null) return !1;
    let l = t ? new RoomObjectRoomFloorHoleUpdateMessage(RoomObjectRoomFloorHoleUpdateMessage.ADD_HOLE, r, i, s, o, d, c) : new RoomObjectRoomFloorHoleUpdateMessage(RoomObjectRoomFloorHoleUpdateMessage.REMOVE_HOLE, r);
    return (f._rc3df04144b8b80()?.processUpdateMessage(l), !0);
  }
  _r54608a3676a44e(e) {
    (this._ra52c012d627d72?._r54608a3676a44e(this._r212b6a0df5e741(e)),
      dg._r77fd2f56361565(e),
      (this._r2e90e8dbbe2223?.remove(this._r212b6a0df5e741(e)) ?? null)?.dispose(),
      this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_DISPOSED, e)));
  }
  _r4ba78c9c42db59(e, r) {
    let t = this._roomSessionManager?.getSession(e) ?? null;
    t != null && (t.ownUserRoomId = r);
    let i = this._r49e77eb069da5e(e);
    i != null &&
      ((i.targetId = r),
      (i._r8a7ceb813931b2 = RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
      i._r0d91b674577f8d(this._r762e672529752b));
  }
  _re115c7593c2d32(e, r, t, i, s) {
    let o = this._ra52c012d627d72?._r8bcc15c726f45e(this._r212b6a0df5e741(e)) ?? null;
    if (o == null) return null;
    let d = o._rabc00691f33c37();
    if ((d == null && (d = this._r4441479631947b?._r6ed69cf775d578() ?? null), d == null)) return null;
    ((d.roomObjectVariableAccurateZ = RoomObjectVariableEnum.const_1302), o._rff1194ec9a029f(d));
    let c = d.createCanvas(r, t, i, s);
    if (c == null) return null;
    if (
      ((c._rbdb0f0785d4bd4 = this._r54f0345aa3aa53),
      (this._r37d077cd2c83d5 = r),
      c.geometry instanceof Rd && (c.geometry.z_scale = o._ra3dc9a405b5c73(RoomVariableEnum.ROOM_Z_SCALE)),
      c.geometry != null)
    ) {
      let b = o._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_DOOR_X),
        _ = o._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_DOOR_Y),
        h = o._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_DOOR_Z),
        p = o._ra3dc9a405b5c73(RoomObjectVariableEnum.ROOM_DOOR_DIR),
        m = new k(b, _, h),
        v = null;
      (p === 90 && (v = new k(-2e3, 0, 0)),
        p === 180 && (v = new k(0, -2e3, 0)),
        c.geometry?._r2601fe63eb1ce7(m, v));
    }
    let f = c.displayObject,
      l = new Sprite();
    return ((l.name = a._r3daed96807e201), (l.mouseEnabled = !1), f.addChild(l), f);
  }
  _rd969872ccb7fc1(e, r, t, i = null, s = null, o = !1, d = !1, c = !1) {
    if (!this.getBoolean("zoom.enabled")) return;
    !d && !o && (t = t < 1 ? 0.5 : Math.floor(t));
    let f = this._re632c269e317f0(e, r);
    f != null &&
      (o ? f._r1d7cf3e9077199(!f._r478576db3cd676, i, s) : f.setScale(t, i, s, c),
      this._r869136d2e14252(e, f),
      this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_ZOOMED, e)));
  }
  _r3e7c4a46b1689b(e = -1e3, r = -1) {
    return (
      e === -1e3 && (e = this._r853a42f2450c73),
      r === -1 && (r = this._r37d077cd2c83d5),
      this._re632c269e317f0(e, r)?.scale ?? 1
    );
  }
  getRoomCanvasScale(e = -1e3, r = -1) {
    return (
      e === -1e3 && (e = this._r853a42f2450c73),
      r === -1 && (r = this._r37d077cd2c83d5),
      this._re632c269e317f0(e, r)?._r478576db3cd676 ?? !1
    );
  }
  _re632c269e317f0(e, r) {
    return (
      (this._ra52c012d627d72?._r8bcc15c726f45e(this._r212b6a0df5e741(e)) ?? null)
        ?._rabc00691f33c37()
        ?.getCanvas(r) ?? null
    );
  }
  modifyRoomCanvas(e, r, t, i) {
    let s = this._re632c269e317f0(e, r);
    return s == null ? !1 : (s.initialize(t, i), !0);
  }
  _rac4781fa4fafb3(e, r, t) {
    let i = this._re632c269e317f0(e, r);
    i != null && (i._r4d05a071e04789 = t);
  }
  _rcc830c76c83ba6(e, r = -1) {
    return (r === -1 && (r = this._r37d077cd2c83d5), this._re632c269e317f0(e, r)?.geometry ?? null);
  }
  _r31f19a046afeda(e) {
    for (let t of this._r2e90e8dbbe2223?.getValues() ?? []) {
      let i = t._rfbe73ee0d1bc7f;
      if (i == null) continue;
      let s = this._ra1f5cb56d0c2d8(t.roomId, i.targetId, i._r8a7ceb813931b2);
      s != null &&
        (t.roomId !== this._r853a42f2450c73 || !this._rf69b23ba38e742) &&
        this._r68e465f48268fd(t.roomId, 1, s.getLocation() ?? new k(), e);
    }
  }
  _r68e465f48268fd(e, r, t, i) {
    let s = this._re632c269e317f0(e, r),
      o = this._r35084da6cb0f5c(e);
    if (s == null || o == null || s.scale !== 1 || s._r478576db3cd676) return;
    let d = s.geometry,
      c = o._rfbe73ee0d1bc7f,
      f = this._r8bcc15c726f45e(e);
    if (d == null || c == null || f == null) return;
    let l = Math.floor(t.z) + 1,
      b = this._r046a825b67d1c7(e, r);
    if (b == null) return;
    let _ = Math.round(b.width),
      h = Math.round(b.height),
      p = this._r0cd75373493374(r);
    if (
      (p != null && (p.right < 0 || p.bottom < 0 || p.left >= _ || p.top >= h) && c.reset(),
      c._r76b39cf1435dcf === _ &&
        c._rf91d334d7942e0 === h &&
        c.scale === d.scale &&
        c._r94e842a5d2b12f === d.updateId &&
        k.isEqual(t, c._r51efde0c9a80ae) &&
        !c._r4c3d51c4316d99)
    ) {
      ((c._r84384cd604654a = !1),
        (c._rbcb9002ff6a792 = !1),
        (c._r3266627f95bdbe = !1),
        (c._rfba0834cbe0886 = !1));
      return;
    }
    c._r51efde0c9a80ae = t;
    let m = new k();
    (m.assign(t), (m.x = Math.round(m.x)), (m.y = Math.round(m.y)));
    let v = f._ra3dc9a405b5c73(RoomVariableEnum.ROOM_MIN_X) - 0.5,
      w = f._ra3dc9a405b5c73(RoomVariableEnum.ROOM_MIN_Y) - 0.5,
      I = f._ra3dc9a405b5c73(RoomVariableEnum.ROOM_MAX_X) + 0.5,
      C = f._ra3dc9a405b5c73(RoomVariableEnum.ROOM_MAX_Y) + 0.5,
      W = Math.round((v + I) / 2),
      R = Math.round((w + C) / 2),
      T = new E(m.x - W, m.y - R),
      S = d.scale / Math.sqrt(2),
      z = S / 2,
      K = new Pe();
    (K.rotate((-(d.direction.x + 90) / 180) * Math.PI), (T = this.transformPoint(K, T)), (T.y *= z / S));
    let $ = b.width / 2 / S - 1,
      Y = b.height / 2 / z - 1,
      oe = 0,
      be = 0,
      ye = 0,
      ir = 0,
      pe = d._r2c974b4bf77b84(new k(W, R, 2));
    if (pe == null) return;
    if (((pe.x += Math.round(b.width / 2)), (pe.y += Math.round(b.height / 2)), p == null)) {
      d._r558119346e8e8f(new k(0, 0), 25);
      return;
    }
    if ((p.offset(-s.screenOffsetX, -s.screenOffsetY), p.width <= 1 || p.height <= 1)) {
      d._r558119346e8e8f(new k(-30, -30), 25);
      return;
    }
    ((oe = (p.left - pe.x - d.scale * 0.25) / S),
      (ye = (p.right - pe.x + d.scale * 0.25) / S),
      (be = (p.top - pe.y - d.scale * 0.5) / z),
      (ir = (p.bottom - pe.y + d.scale * 0.5) / z));
    let lr = !1,
      wr = !1,
      q = !1,
      de = !1;
    (Math.round((ye - oe) * S) < b.width
      ? ((l = 2), (T.x = (ye + oe) / 2), (q = !0))
      : (T.x > ye - $ && ((T.x = ye - $), (lr = !0)), T.x < oe + $ && ((T.x = oe + $), (lr = !0))),
      Math.round((ir - be) * z) < b.height
        ? ((l = 2), (T.y = (ir + be) / 2), (de = !0))
        : (T.y > ir - Y && ((T.y = ir - Y), (wr = !0)),
          T.y < be + Y && ((T.y = be + Y), (wr = !0)),
          wr && (T.y /= z / S)),
      (T = this.transformPoint(this._r6b96009ec3dccf(K), T)),
      (T.x += W),
      (T.y += R));
    let ge = 0.35,
      rt = 0.2,
      Kr = 0.2;
    (Kr * _ > 100 && (Kr = 100 / _),
      ge * h > 150 && (ge = 150 / h),
      rt * h > 150 && (rt = 150 / h),
      c._r84384cd604654a && c._r76b39cf1435dcf === _ && c._rf91d334d7942e0 === h && (Kr = 0),
      c._rbcb9002ff6a792 && c._r76b39cf1435dcf === _ && c._rf91d334d7942e0 === h && ((ge = 0), (rt = 0)),
      (b.right *= 1 - Kr * 2),
      (b.bottom *= 1 - (ge + rt)),
      b.right < 10 && (b.right = 10),
      b.bottom < 10 && (b.bottom = 10),
      ge + rt > 0
        ? b.offset(-b.width / 2, -b.height * (rt / (ge + rt)))
        : b.offset(-b.width / 2, -b.height / 2));
    let Ba = d._r2c974b4bf77b84(m);
    if (Ba == null) return;
    ((Ba.x += s.screenOffsetX),
      (Ba.y += s.screenOffsetY),
      (m.z = l),
      (m.x = Math.round(T.x * 2) / 2),
      (m.y = Math.round(T.y * 2) / 2),
      c.location == null &&
        ((d.location = m), this._r99c1fdf1bfe389 ? c._r01ffa1ee62d014(new k()) : c._r01ffa1ee62d014(m)));
    let Bn = d._r2c974b4bf77b84(m),
      Zs = new k();
    (Bn != null && ((Zs.x = Bn.x), (Zs.y = Bn.y)),
      ((Ba.x < b.left || Ba.x > b.right) && !c._r3266627f95bdbe) ||
      ((Ba.y < b.top || Ba.y > b.bottom) && !c._rfba0834cbe0886) ||
      (q && !c._r3266627f95bdbe && c._r76b39cf1435dcf !== _) ||
      (de && !c._rfba0834cbe0886 && c._rf91d334d7942e0 !== h) ||
      c._r22e984ba459928 !== p.width ||
      c._r7efc4b85af1f56 !== p.height ||
      c._r76b39cf1435dcf !== _ ||
      c._rf91d334d7942e0 !== h
        ? ((c._r84384cd604654a = lr), (c._rbcb9002ff6a792 = wr), (c.target = this._r99c1fdf1bfe389 ? Zs : m))
        : (lr || (c._r84384cd604654a = !1), wr || (c._rbcb9002ff6a792 = !1)),
      (c._r3266627f95bdbe = q),
      (c._rfba0834cbe0886 = de),
      (c._r76b39cf1435dcf = _),
      (c._rf91d334d7942e0 = h),
      (c.scale = d.scale),
      (c._r94e842a5d2b12f = d.updateId),
      (c._r22e984ba459928 = p.width),
      (c._r7efc4b85af1f56 = p.height),
      this._sessionDataManager?.isRoomCameraFollowDisabled || c.update(i, this._r99c1fdf1bfe389 ? 8 : 0.5),
      this._r99c1fdf1bfe389
        ? ((s.screenOffsetX = -c.location.x), (s.screenOffsetY = -c.location.y))
        : d._r558119346e8e8f(c.location, 25));
  }
  _r046a825b67d1c7(e, r) {
    let t = this._re632c269e317f0(e, r);
    return t != null ? new D(0, 0, t.width, t.height) : null;
  }
  _r0349bd197496ad(e, r = -1) {
    let t = this._re632c269e317f0(e, r === -1 ? this._r37d077cd2c83d5 : r);
    return t != null ? new E(t.screenOffsetX, t.screenOffsetY) : null;
  }
  _r555de154e48981(e, r, t) {
    let i = this._re632c269e317f0(e, r);
    return i == null ? !1 : ((i.screenOffsetX = t.x), (i.screenOffsetY = t.y), !0);
  }
  _ra0ce135312118c(e, r, t, i, s, o, d) {
    if (this._r322672563846a4) return !1;
    if (this._r59cc4b28e895a2?.areaSelectionState === QI.SELECTING)
      return ((this._rf69b23ba38e742 = !1), (this._raca72881b19828 = !1), !1);
    let c = r - this._r2460fee05d566b,
      f = t - this._r7ecfd022399745;
    if (i === UnkClass_fd7c12._r9001c395573374)
      !s &&
        !o &&
        !d &&
        !this._r67c88eecaceaf0 &&
        ((this._rf69b23ba38e742 = !0),
        (this._raca72881b19828 = !1),
        (this._r72940ed09444bb = this._r2460fee05d566b),
        (this._r9622e2919a8ac2 = this._r7ecfd022399745));
    else if (i === UnkClass_fd7c12._ra93f33360c3a28) {
      if (this._rf69b23ba38e742 && ((this._rf69b23ba38e742 = !1), this._raca72881b19828)) {
        let l = this._r35084da6cb0f5c(this._r853a42f2450c73)?._rfbe73ee0d1bc7f;
        if (l != null) {
          if (this._r99c1fdf1bfe389) {
            l._r4c3d51c4316d99 || ((l._r3266627f95bdbe = !1), (l._rfba0834cbe0886 = !1));
            let b = this._r5a23328bdcf1c2(e),
              _ = e._r478576db3cd676 ? -e.width : e.width,
              h = e._r478576db3cd676 ? -e.height : e.height;
            l._r34ac7c847f5d61(
              new k(
                -this._r7d8e493ff36ba4(e.screenOffsetX, _, b),
                -this._r7d8e493ff36ba4(e.screenOffsetY, h, b),
                0,
              ),
            );
          }
          this._r7d7e4f7c60854c && l.reset();
        }
        this.events.dispatchEvent?.(new RoomEngineDragWithMouseEvent(RoomEngineDragWithMouseEvent.const_188, this._r853a42f2450c73));
      }
    } else if (i === UnkClass_fd7c12.var_370)
      this._rf69b23ba38e742 &&
        (this._raca72881b19828 ||
          ((c = r - this._r72940ed09444bb),
          (f = t - this._r9622e2919a8ac2),
          (c <= -a._r2a449f946dacb0 ||
            c >= a._r2a449f946dacb0 ||
            f <= -a._r2a449f946dacb0 ||
            f >= a._r2a449f946dacb0) &&
            ((this._raca72881b19828 = !0),
            this.events.dispatchEvent?.(new RoomEngineDragWithMouseEvent(RoomEngineDragWithMouseEvent.const_177, this._r853a42f2450c73))),
          (c = 0),
          (f = 0)),
        (c !== 0 || f !== 0) &&
          ((e.screenOffsetX += c),
          (e.screenOffsetY += f),
          this._raca72881b19828 ||
            this.events.dispatchEvent?.(new RoomEngineDragWithMouseEvent(RoomEngineDragWithMouseEvent.const_177, this._r853a42f2450c73)),
          (this._raca72881b19828 = !0)));
    else if (
      (i === UnkClass_fd7c12.CLICK || i === UnkClass_fd7c12.DOUBLE_CLICK) &&
      ((this._rf69b23ba38e742 = !1), this._raca72881b19828)
    )
      return ((this._raca72881b19828 = !1), !0);
    return !1;
  }
  _r7d8e493ff36ba4(e, r, t) {
    if (t === 0 || t === 1) return e;
    let s = r / t / 2;
    return s - (s - e) / t;
  }
  _r869136d2e14252(e, r) {
    if (!this._r99c1fdf1bfe389 || r == null || r._r478576db3cd676) return;
    let i = this._r35084da6cb0f5c(e)?._rfbe73ee0d1bc7f;
    i?._r34ac7c847f5d61(
      new k(
        -this._r7d8e493ff36ba4(r.screenOffsetX, r.width, r.scale),
        -this._r7d8e493ff36ba4(r.screenOffsetY, r.height, r.scale),
        0,
      ),
    );
  }
  _r5a23328bdcf1c2(e) {
    return e._r478576db3cd676 ? -e.scale : e.scale;
  }
  _r66cbd667bbe5aa(e, r) {
    this._ra52c012d627d72._r66cbd667bbe5aa(this._r212b6a0df5e741(e), r);
  }
  _raa0e3211cd81ea(e, r) {
    this._ra52c012d627d72._raa0e3211cd81ea(this._r212b6a0df5e741(e), r);
  }
  _rc64b65d84e94ac(e, r) {
    for (let t of r) this._r685e421e4872b3(e, t);
  }
  _r05a19f4e586f2c(e, r) {
    for (let t of r) this._rc2b933ac3ee505(e, t);
  }
  _r685e421e4872b3(e, r) {
    let t = r.isUserEntity
      ? this._rc8f487828e4ef2(e, r.entityId)
      : this._r2298f28ff272b0(e, r.entityId);
    t == null ||
      t._rc3df04144b8b80() == null ||
      t
        ._rc3df04144b8b80()
        .processUpdateMessage(
          new RoomObjectVariableFxStatusUpdateMessage(
            r.configId,
            r.variableId,
            r.value,
            r._rd039082a66c6c1,
            r._rde47e35540b4cb,
            r.extra,
            r.isInitialize,
          ),
        );
  }
  _rc2b933ac3ee505(e, r) {
    let t = r.isUserEntity
      ? this._rc8f487828e4ef2(e, r.entityId)
      : this._r2298f28ff272b0(e, r.entityId);
    t == null ||
      t._rc3df04144b8b80() == null ||
      t._rc3df04144b8b80().processUpdateMessage(new RoomObjectVariableFxStatusRemoveMessage(r.configId, r.variableId));
  }
  _r0610bde5741b58(e, r, t, i, s, o, d, c) {
    if (
      !this._rf69b23ba38e742 &&
      ((this._r8ffdd6854e5554 > 0 && t < this._r8ffdd6854e5554) ||
        (this._rd75b11076efd1c > 0 && r < this._rd75b11076efd1c) ||
        this._rc371cd78c68f83(r, t))
    )
      return;
    let f = this._re632c269e317f0(this._r853a42f2450c73, e);
    if (f == null) return;
    if (i === UnkClass_fd7c12.CLICK && o && s) {
      let _ = d ? f.scale >> 1 : f.scale < 1 ? 1 : f.scale << 1;
      this._rd969872ccb7fc1(this.activeRoomId, this._r37d077cd2c83d5, _, new E(r, t));
      return;
    }
    let l = this._r265ad53360b5fe(f),
      b = this._r1c717f7dea94ba(l, a._refd2eda7f7b6e4);
    if (b != null) {
      let _ = b.getChildAt(0),
        h = _?.bitmapData?.width ?? 0,
        p = _?.bitmapData?.height ?? 0;
      ((b.x = r - h / 2), (b.y = t - p / 2));
    }
    if (i === UnkClass_fd7c12.CLICK && this._r59cc4b28e895a2?._reb1297ccdede96() === !0)
      this._r59cc4b28e895a2._reb1297ccdede96();
    else if (!this._ra0ce135312118c(f, r, t, i, s, o, d) && !f._r36a99433414f69(r, t, i, s, o, d, c)) {
      let _ = "";
      if (
        (i === UnkClass_fd7c12.CLICK
          ? (this.events.dispatchEvent?.(
              new RoomEngineObjectEvent(RoomEngineObjectEvent.DESELECTED, this._r853a42f2450c73, -1, RoomObjectCategoryEnum.const_434),
            ),
            (_ = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK))
          : i === UnkClass_fd7c12.var_370
            ? (_ = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE)
            : i === UnkClass_fd7c12._r9001c395573374 && (_ = RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN),
        _.length > 0 && this._r54f0345aa3aa53 != null)
      ) {
        let h = this._ra1f5cb56d0c2d8(this._r853a42f2450c73, a._rf688915b895c59, RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM);
        h != null && this._r54f0345aa3aa53.handleRoomObjectEvent(new RoomObjectMouseEvent(_, h, "", s), this._r853a42f2450c73);
      }
    }
    ((this._r37d077cd2c83d5 = e), (this._r2460fee05d566b = r), (this._r7ecfd022399745 = t));
  }
  _rc371cd78c68f83(e, r) {
    if (this._rb2f15fb6918298 == null) return !1;
    for (let t of this._rb2f15fb6918298.getValues()) if (t != null && t.contains(e, r)) return !0;
    return !1;
  }
  _r674ea2583b28b6(e) {
    return this._r72017f94b908da(this._r853a42f2450c73, e);
  }
  _rfcef1d52bd8cc0(e) {
    return this._rcc830c76c83ba6(e, this._r37d077cd2c83d5);
  }
  getRoomObjectCount(e, r) {
    return this._r8bcc15c726f45e(e)?.getObjectCount(r) ?? 0;
  }
  _ra1f5cb56d0c2d8(e, r, t) {
    if (!this._r0f169c5df1bdba) return null;
    let i = this._r212b6a0df5e741(e);
    return (e === 0 && (i = a._rdf322f777613fc), this.getObject(i, r, t));
  }
  getRoomObjectWithIndex(e, r, t) {
    return this._r8bcc15c726f45e(e)?._rce25aa21e0bb14(r, t) ?? null;
  }
  _r1f8216bd70800f(e) {
    return this._r268360972557a2?._r12110ad7d84ce2(e) ?? RoomObjectCategoryEnum.const_434;
  }
  _r1e3a7bbbe662d2(e, r, t = !0) {
    let i = `${RoomObjectCategoryEnum.const_909}_${r}`,
      s = null,
      o = this._rc3c18bfbee3f24(e, r);
    if (o != null) {
      let f = o.getStringToStringMap();
      if (f != null && f._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_USES_PLANE_MASK) > 0) {
        let l = f.getString(RoomObjectVariableEnum.FURNITURE_PLANE_MASK_TYPE),
          b = o.getLocation();
        s = t ? new gd(gd.ADD_MASK, i, l, b) : new gd(gd.REMOVE_MASK, i);
      }
    } else s = new gd(gd.REMOVE_MASK, i);
    let c = this._r8d583f1f5d010b(e)?._rc3df04144b8b80() ?? null;
    c != null && s != null && c.processUpdateMessage(s);
  }
  _r265ad53360b5fe(e) {
    return e == null ? null : e.displayObject?.getChildByName(a._r3daed96807e201);
  }
  _ree1d94e147d995(e, r, t) {
    if (e == null || t == null || this._r1c717f7dea94ba(e, r) != null) return null;
    let i = new Sprite();
    ((i.name = r), (i.mouseEnabled = !1));
    let s = new UnkClass_3a5c6f();
    return ((s.bitmapData = t), i.addChild(s), e.addChild(i), i);
  }
  _rd8c01e69ec4bc6(e, r) {
    if (e == null) return !1;
    for (let t = e.numChildren - 1; t >= 0; t--) {
      let i = e.getChildAt(t);
      if (i?.name === r) {
        e.removeChildAt(t);
        let s = i.getChildAt(0);
        return (s?.bitmapData != null && (s.bitmapData.dispose(), (s.bitmapData = null)), !0);
      }
    }
    return !1;
  }
  _r1c717f7dea94ba(e, r) {
    if (e == null) return null;
    for (let t = e.numChildren - 1; t >= 0; t--) {
      let i = e.getChildAt(t);
      if (i?.name === r) return i;
    }
    return null;
  }
  _rfe32b54466ddc0(e, r, t, i = null, s = null, o = -1, d = -1, c = null) {
    let f = null;
    if (t) f = this._r935bceb9c0dcea(this._r853a42f2450c73, e, r, new k(), 1, null);
    else if (this._r268360972557a2 != null) {
      let b = null,
        _ = 0;
      if (
        (r === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
          ? ((b = this._r268360972557a2._r61e24412f181b3(e)), (_ = this._r268360972557a2._r932da5452cd716(e)))
          : r === RoomObjectCategoryEnum.const_909 &&
            ((b = this._r268360972557a2._ra7e35114872e5d(e, i)),
            (_ = this._r268360972557a2._rb5dea53f7941cc(e))),
        r === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
      )
        if (((b = Ea.getName(e)), b === Ea.PET)) {
          b = this._rec1a64fc8d4622(i);
          let h = new class_3800(i ?? "");
          f = this.getPetImage(
            h.typeId,
            h.paletteId,
            h.color,
            new k(180),
            64,
            null,
            !0,
            0,
            h.customParts,
            c,
          );
        } else f = this._ra5bef405f056da(b, i ?? "", new k(180), 1, null, 0, null, s, o, d, c);
      else f = this._ra5bef405f056da(b, String(_), new k(), 1, null, 0, i, s, o, d, c);
    }
    if (f?.data == null) return;
    let l = this._r557abb4396cd44();
    if (l != null) {
      let b = this._r265ad53360b5fe(l);
      this._rd8c01e69ec4bc6(b, a._refd2eda7f7b6e4);
      let _ = this._ree1d94e147d995(b, a._refd2eda7f7b6e4, f.data);
      _ != null &&
        ((_.x = this._r2460fee05d566b - f.data.width / 2), (_.y = this._r7ecfd022399745 - f.data.height / 2));
    }
  }
  _rb4208639153c2f(e) {
    let r = this._r557abb4396cd44();
    if (r != null) {
      let t = this._r1c717f7dea94ba(this._r265ad53360b5fe(r), a._refd2eda7f7b6e4);
      t != null && (t.visible = e);
    }
    this._re9eb8cb11fdbbb = e;
  }
  _r15c71442afd233() {
    let e = this._r557abb4396cd44();
    if (e != null) {
      let r = this._r1c717f7dea94ba(this._r265ad53360b5fe(e), a._refd2eda7f7b6e4);
      if (r != null) return r.visible;
    }
    return !1;
  }
  _r6c6a39d086d41a() {
    let e = this._r557abb4396cd44();
    (e != null && this._rd8c01e69ec4bc6(this._r265ad53360b5fe(e), a._refd2eda7f7b6e4),
      (this._re9eb8cb11fdbbb = !1));
  }
  _r5dfc2a6a8b7c46(e) {
    return this._r35084da6cb0f5c(e)?._r11ba5ec084117f ?? null;
  }
  _r57b0cb6c1d52d5(e, r) {
    let t = this._r35084da6cb0f5c(e);
    t != null && ((t._r11ba5ec084117f = r), r != null && (t._r137d937a096fce = null));
  }
  _rfa625917ff0d0b(e, r) {
    let t = this._r35084da6cb0f5c(e);
    t != null && (t._r137d937a096fce = r);
  }
  _r38ad2264d57c5b(e) {
    return this._r35084da6cb0f5c(e)?._r137d937a096fce ?? null;
  }
  _r9cc46b2b079405(e, r, t) {
    return this._r54f0345aa3aa53?._r9cc46b2b079405(this._r853a42f2450c73, e, r, t) ?? !1;
  }
  _r35fa7b1ad56383(e) {
    return this._r54f0345aa3aa53?._r35fa7b1ad56383(this._r853a42f2450c73, e) ?? !1;
  }
  _r069b15b06fe896(e, r, t, i) {
    return this._r54f0345aa3aa53?._r4096b94e274999(this._r853a42f2450c73, e, r, t, i) ?? !1;
  }
  _r4096b94e274999(e, r, t, i) {
    switch (r) {
      case RoomObjectCategoryEnum.const_909:
        return this._r54f0345aa3aa53?._rb6d10c1410468c(this._r853a42f2450c73, e, t, i) ?? !1;
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE: {
        let s = new B();
        return (
          s.add("color", t),
          s.add("data", i),
          this._r069b15b06fe896(e, r, RoomObjectOperationEnum.OBJECT_SAVE_STUFF_DATA, s)
        );
      }
    }
    return !1;
  }
  _r8731f36a48353d(e, r) {
    return r === RoomObjectCategoryEnum.const_909
      ? (this._r54f0345aa3aa53?._rb6ce69a696e91d(this._r853a42f2450c73, e) ?? !1)
      : this._r9cc46b2b079405(e, r, RoomObjectOperationEnum.OBJECT_PICKUP);
  }
  _re608f4ba68bdcb(e, r, t, i, s = null, o = null, d = -1, c = -1, f = null, l = !1) {
    return this._r54f0345aa3aa53?._re608f4ba68bdcb(e, this._r853a42f2450c73, r, t, i, s, o, d, c, f, l) ?? !1;
  }
  _r3840271e334f01() {
    this._r54f0345aa3aa53?._r3840271e334f01(this._r853a42f2450c73);
  }
  selectAvatar(e, r) {
    this._r54f0345aa3aa53?._r9dc70af321fe8f(e, r, !0);
  }
  _rccdb9636457f8d() {
    return this._r54f0345aa3aa53?._rccdb9636457f8d() ?? -1;
  }
  _r5def02e220e83a(e, r, t) {
    this._r54f0345aa3aa53?._r3b1140ac40c4cc(e, r, t);
  }
  _r5f200af79cf909(
    e,
    r,
    t,
    i,
    s,
    o,
    d,
    c = Number.NaN,
    f = -1,
    l = 0,
    b = 0,
    _ = "",
    h = !0,
    p = !0,
    m = Number.NaN,
  ) {
    let v = this._r35084da6cb0f5c(e);
    return v == null ? !1 : (v._r9d7eab207b92c1(new UnkClass_232051_(r, t, null, i, s, o, d, c, f, l, b, _, h, p, m)), !0);
  }
  _r6fc13b80c13247(e, r, t, i, s, o, d, c = Number.NaN) {
    let f = this._r35084da6cb0f5c(e);
    return f == null ? !1 : (f._r9d7eab207b92c1(new UnkClass_232051_(r, 0, t, i, s, o, d, c, 0)), !0);
  }
  _r418f6f699205eb(e, r, t, i, s, o, d = Number.NaN) {
    let c = this._r2298f28ff272b0(e, r);
    if (c == null) return !1;
    let f = new RoomObjectUpdateMessage(t ?? c.getLocation() ?? new k(), i ?? c.getDirection() ?? new k()),
      l = new UnkRoomObjectUpdateMessageSubclass_39f7ec(s, o ?? new mi(), d),
      b = c._rc3df04144b8b80();
    return (
      b != null &&
        (b.processUpdateMessage(f),
        b.processUpdateMessage(l),
        this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.const_72, e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE))),
      !0
    );
  }
  _r1ebdfcb2d6b127(e, r, t) {
    let i = this._r2298f28ff272b0(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39cc91(null, null, t)), !0);
  }
  _r10b49f9524ce3f(e, r, t, i, s, o = Number.NaN, d = Number.NaN, c = Number.NaN) {
    let f = this._r2298f28ff272b0(e, r),
      l = f?._rc3df04144b8b80() ?? null;
    return f == null || l == null ? !1 : (l.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_123426(t, s, i, o, s != null, !1, d, c)), !0);
  }
  _re1539b9fe3ba0c(e, r, t) {
    let i = this._r2298f28ff272b0(e, r);
    return i == null
      ? !1
      : (i.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIME, t),
        i.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIMESTAMP, _ia411d8d8194a3a()),
        !0);
  }
  _r14e4651178594c(e, r, t) {
    let i = this.getObject(this._r212b6a0df5e741(e), r, t),
      s = i?.getModelController() ?? null;
    if (i == null || s == null) return;
    let o = s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_718);
    ((o = Number.isNaN(o) ? 1 : o + 1), s.setNumber(RoomObjectVariableEnum.const_718, o));
    let d = i.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT) ?? 0,
      c = UnkClass_5205b2._r41d3e1274ff5f9(d);
    if (c == null) return;
    let f = i.getStringToStringMap();
    f != null && (c._r8476f6049cdad6(f), i._rc3df04144b8b80()?.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(o, c)));
  }
  _r54e6f8624b1462(e, r, t, i, s) {
    let o = this.getObject(this._r212b6a0df5e741(e), r, t),
      d = o?._rc3df04144b8b80() ?? null;
    return o == null || d == null ? !1 : (d.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_6ccdf0(i, s)), !0);
  }
  disposeObjectFurniture(e, r, t = -1, i = !1) {
    if (
      (this._r35084da6cb0f5c(e)?._rd71e58e6570006(r),
      this._sessionDataManager != null &&
        t === this._sessionDataManager.userId &&
        !nd.isBuilderClubId(r) &&
        !nd.isTempId(r))
    ) {
      let o = this._ra1f5cb56d0c2d8(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
      if (o != null) {
        let d = this.getRoomObjectScreenLocation(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, this._r37d077cd2c83d5);
        if (d != null) {
          let c = o.getStringToStringMap();
          if (c != null && !(c._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1064) === 1)) {
            let l = c._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
              b = c.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS),
              _ = c._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT),
              h = UnkClass_5205b2._r41d3e1274ff5f9(_),
              p = this._r65a31a885a1252(l, null, b, h)?.data ?? null;
            p != null &&
              this._toolbar != null &&
              this._toolbar.createTransitionToIcon(Me.INVENTORY, p, d.x, d.y);
          }
        }
      }
    }
    (this.disposeObject(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      this._rb802b6b011fa18(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, r),
      i && this._rf83367626c34b1(e, "RoomEngine.disposeObjectFurniture()"));
  }
  _r7feb9ada4ab53f(e, r, t, i, s, o, d, c = 0, f = 0, l = "", b = -1, _ = !0) {
    let h = this._r35084da6cb0f5c(e),
      p = new mi();
    return (
      p.setString(d),
      h == null ? !1 : (h._rc19271fc7980aa(new UnkClass_232051_(r, t, null, i, s, o, p, Number.NaN, b, c, f, l, !0, _)), !0)
    );
  }
  _r2312c3c4386345(e, r, t, i, s, o) {
    let d = this._rc3c18bfbee3f24(e, r);
    if (d == null) return !1;
    let c = new RoomObjectUpdateMessage(t ?? d.getLocation() ?? new k(), i ?? d.getDirection() ?? new k()),
      f = new mi();
    f.setString(o);
    let l = new UnkRoomObjectUpdateMessageSubclass_39f7ec(s, f),
      b = d._rc3df04144b8b80();
    return (b != null && (b.processUpdateMessage(c), b.processUpdateMessage(l)), this._r1e3a7bbbe662d2(e, r), !0);
  }
  _rea13e821f284f6(e, r, t, i) {
    let s = this._rc3c18bfbee3f24(e, r),
      o = s?._rc3df04144b8b80() ?? null;
    if (s == null || o == null) return !1;
    let d = new mi();
    return (d.setString(i), o.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(t, d)), !0);
  }
  _re4ece77a2dbbdf(e, r, t) {
    let i = this._rc3c18bfbee3f24(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new RoomObjectItemDataUpdateMessage(t)), !0);
  }
  _r261fb2f3c13d8d(e, r, t, i = null, s = Number.NaN) {
    let o = this._rc3c18bfbee3f24(e, r),
      d = o?._rc3df04144b8b80() ?? null;
    return o == null || d == null
      ? !1
      : (d.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_123426(t, i, null, s, i != null)), this._r1e3a7bbbe662d2(e, r), !0);
  }
  _rbd68fd6d6ee52d(e, r, t) {
    let i = this._rc3c18bfbee3f24(e, r);
    return i == null
      ? !1
      : (i.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIME, t),
        i.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIMESTAMP, _ia411d8d8194a3a()),
        !0);
  }
  _rd7e85a509c569e(e, r, t = -1) {
    if (
      (this._r35084da6cb0f5c(e)?.var_993(r),
      this._sessionDataManager != null &&
        t === this._sessionDataManager.userId &&
        !nd.isBuilderClubId(r) &&
        !nd.isTempId(r))
    ) {
      let s = this._ra1f5cb56d0c2d8(e, r, RoomObjectCategoryEnum.const_909);
      if (s != null) {
        let o = s.getType();
        if (o.indexOf("post_it") === -1 && o.indexOf("external_image_wallitem") === -1) {
          let d = this.getRoomObjectScreenLocation(e, r, RoomObjectCategoryEnum.const_909, this._r37d077cd2c83d5),
            c = s.getStringToStringMap();
          if (c != null) {
            let f = c._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
              l = c.getString(RoomObjectVariableEnum.FURNITURE_DATA),
              b = this.getWallItemDataByName(f, null, l)?.data ?? null;
            this._toolbar != null &&
              d != null &&
              this._toolbar.createTransitionToIcon(Me.INVENTORY, b, d.x, d.y);
          }
        }
      }
    }
    (this.disposeObject(e, r, RoomObjectCategoryEnum.const_909),
      this._r1e3a7bbbe662d2(e, r, !1),
      this._rb802b6b011fa18(e, RoomObjectCategoryEnum.const_909, r));
  }
  _r03c1f621ae28e1(e, r, t, i, s, o, d = null) {
    if (this._rc8f487828e4ef2(e, r) != null) return !1;
    let c = Ea.getName(o);
    c === Ea.PET && (c = this._rec1a64fc8d4622(d) ?? Ea.PET);
    let f = this._r2f1c4828e5527f(e, r, c ?? Ea.USER);
    if (f == null) return !1;
    let l = f._rc3df04144b8b80();
    if (l != null) {
      let b = this._rba0bbbb5768a54(e, t) ?? new k();
      (l.processUpdateMessage(new UnkClass_88a387(b, null, i, s, !1, 0)),
        d != null && l.processUpdateMessage(new RoomObjectAvatarFigureUpdateMessage(d)),
        c === Ea.USER && this._raf6c1ba8b0c0d7(e, r) && l.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_d2a859(!0)));
    }
    return (this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.ADDED, e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)), !0);
  }
  _r848449ccba85c2(e, r, t, i) {
    let s = "";
    i === RoomObjectCategoryEnum.SNOWBALL
      ? (s = RoomObjectVisualizationEnum.SNOWBALL)
      : i === RoomObjectCategoryEnum.SNOW_SPLASH && (s = RoomObjectVisualizationEnum.SNOW_SPLASH);
    let o = this._rd559dab2ac570a(e, r, s, i);
    return o == null
      ? !1
      : (o._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectUpdateMessage(t, o.getDirection() ?? new k())), !0);
  }
  _rc74c4cf6e79eda(
    e,
    r,
    t,
    i,
    s = !1,
    o = Number.NaN,
    d = null,
    c = Number.NaN,
    f = Number.NaN,
    l = !1,
    b = Number.NaN,
  ) {
    let _ = this._rc8f487828e4ef2(e, r),
      h = _?._rc3df04144b8b80() ?? null,
      p = _?.getStringToStringMap() ?? null;
    if (_ == null || h == null || p == null) return !1;
    let m = t ?? _.getLocation() ?? new k(),
      v = d ?? _.getDirection() ?? new k();
    return (
      Number.isNaN(c) && (c = p._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1078)),
      h.processUpdateMessage(
        new UnkClass_88a387(this._rba0bbbb5768a54(e, m) ?? m, this._rba0bbbb5768a54(e, i) ?? null, v, c, s, o, f, l, b),
      ),
      this._roomSessionManager?.getSession(e)?.ownUserRoomId === r &&
        this._r9ca66d1f9e157b?.events?.dispatchEvent?.(new RoomToObjectOwnAvatarMoveEvent(RoomToObjectOwnAvatarMoveEvent.MOVE_TO, i)),
      !0
    );
  }
  _rd73654214f5914(e, r, t, i) {
    let s = this._rc8f487828e4ef2(e, r),
      o = s?._rc3df04144b8b80() ?? null;
    return s == null || o == null || s.getStringToStringMap() == null
      ? !1
      : (o.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_0420b1(null, t, i)), !0);
  }
  _ra63854c43b955e(e, r) {
    let t = this._rc8f487828e4ef2(e, r),
      i = t?._rc3df04144b8b80() ?? null;
    return t == null || i == null ? !1 : (i.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_30799b()), !0);
  }
  _r39decb54edd284(e, r, t, i = null, s = null, o = !1) {
    let d = this._rc8f487828e4ef2(e, r),
      c = d?._rc3df04144b8b80() ?? null;
    return d == null || c == null ? !1 : (c.processUpdateMessage(new RoomObjectAvatarFigureUpdateMessage(t, i, s, o)), !0);
  }
  _r253f1a276fe8ee(e, r, t) {
    let i = this._rc8f487828e4ef2(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_d2a859(t)), !0);
  }
  _rd818b342758de2(e, r, t) {
    let i = this._rc8f487828e4ef2(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new RoomObjectAvatarFlatControlUpdateMessage(t ?? "")), !0);
  }
  _r51ee69fcf18546(e, r, t, i = "") {
    let s = this._rc8f487828e4ef2(e, r),
      o = s?._rc3df04144b8b80() ?? null;
    return s == null || o == null ? !1 : (o.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_6cf23a(t, i)), !0);
  }
  _r13a7bbc799ce01(e, r, t) {
    let i = this._rc8f487828e4ef2(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_ae7c59(t)), !0);
  }
  _r29a05765ba2b1f(e, r, t) {
    let i = this._rc8f487828e4ef2(e, r),
      s = i?._rc3df04144b8b80() ?? null;
    return i == null || s == null ? !1 : (s.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_6627f4(t)), !0);
  }
  _r75c3b4e7c11b82(e, r, t, i = 0) {
    let s = this._rc8f487828e4ef2(e, r),
      o = s?._rc3df04144b8b80() ?? null;
    return s == null || o == null ? !1 : (o.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_da0d62(t, i)), !0);
  }
  _rb2b27399e7f222(e, r, t, i) {
    let s = this.getObject(this._r212b6a0df5e741(e), r, i),
      o = s?._rc3df04144b8b80() ?? null;
    return s == null || o == null ? !1 : (o.processUpdateMessage(new RoomObjectUpdateMessage(t, s.getDirection() ?? new k())), !0);
  }
  _r4453370c37a1ac(e, r, t) {
    this.disposeObject(e, r, t);
  }
  _r93fc9f432e7394(e, r, t, i, s = null) {
    let o = this._rc8f487828e4ef2(e, r),
      d = o?._rc3df04144b8b80() ?? null;
    if (o == null || d == null || this._raf6c1ba8b0c0d7(e, r)) return !1;
    let c = null;
    switch (t) {
      case RoomObjectVariableEnum.AVATAR_TALK:
        c = new UnkRoomObjectUpdateStateMessageSubclass_01dad1(i);
        break;
      case RoomObjectVariableEnum.const_307:
        c = new UnkRoomObjectUpdateStateMessageSubclass_656441(i !== 0);
        break;
      case RoomObjectVariableEnum.AVATAR_IS_TYPING:
        c = new RoomObjectAvatarTypingUpdateMessage(i !== 0);
        break;
      case RoomObjectVariableEnum.const_611:
        c = new UnkRoomObjectUpdateStateMessageSubclass_665e47(i !== 0);
        break;
      case RoomObjectVariableEnum.const_1257:
        c = new UnkRoomObjectUpdateStateMessageSubclass_968603(i, s ?? "");
        break;
      case RoomObjectVariableEnum.const_182:
        c = new UnkRoomObjectUpdateStateMessageSubclass_a7e9a0(i);
        break;
      case RoomObjectVariableEnum.const_1195:
        c = new RoomObjectAvatarDanceUpdateMessage(i);
        break;
      case RoomObjectVariableEnum.const_1157:
        c = new UnkRoomObjectUpdateStateMessageSubclass_b11dce(i);
        break;
      case RoomObjectVariableEnum.const_1043:
        c = new UnkRoomObjectUpdateStateMessageSubclass_9c8705(i);
        break;
      case RoomObjectVariableEnum.AVATAR_SIGN:
        c = new UnkRoomObjectUpdateStateMessageSubclass_0afa2a(i);
        break;
      case RoomObjectVariableEnum.const_456:
        c = new RoomObjectAvatarExpressionUpdateMessage(i);
        break;
      case RoomObjectVariableEnum.AVATAR_IS_PLAYING_GAME:
        c = new UnkRoomObjectUpdateStateMessageSubclass_39614b(i !== 0);
        break;
      case RoomObjectVariableEnum.AVATAR_GUIDE_STATUS:
        c = new UnkRoomObjectUpdateStateMessageSubclass_749bf3(i);
        break;
      case RoomObjectVariableEnum.const_1201:
        c = new UnkRoomObjectUpdateStateMessageSubclass_5c73c5(i);
        break;
    }
    return c == null ? !1 : (d.processUpdateMessage(c), !0);
  }
  _rc8445f4451c0a0(e, r) {
    this.disposeObject(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
  }
  _redc62c3bf823c2(e) {
    return this._r268360972557a2?._r61e24412f181b3(e) ?? "";
  }
  _r05b4d7c9f899e6(e) {
    return this._r268360972557a2?._r9bba8a33ee3887(e) ?? -1;
  }
  _ra7e35114872e5d(e, r = null) {
    return this._r268360972557a2?._ra7e35114872e5d(e, r) ?? "";
  }
  _r26e5bf11a3a5d4(e, r) {
    let i = this._ra1f5cb56d0c2d8(this._r853a42f2450c73, e, r)?._rf289f21439d5ea();
    return i == null ? !1 : (i._rce2b5eb85a79e0(), !0);
  }
  _r092a17a15f19ca(e) {
    return "";
  }
  _r65a31a885a1252(e, r, t = null, i = null, s = !1) {
    return this._r5db1beeb89d785(e, new k(), 1, r, 0, t, -1, -1, i, s);
  }
  _r2ca63e89d418c8(e, r = null) {
    return "";
  }
  getWallItemDataByName(e, r, t = null) {
    return this._r3ac60c12dafe70(e, new k(), 1, r, 0, t);
  }
  _r5db1beeb89d785(e, r, t, i, s = 0, o = null, d = -1, c = -1, f = null, l = !1) {
    let b = null,
      _ = "";
    return (
      this._r268360972557a2 != null &&
        ((b = this._r268360972557a2._r61e24412f181b3(e)),
        (_ = String(this._r268360972557a2._r932da5452cd716(e)))),
      t === 1 && i != null && !l
        ? this._rc0e605cb15bc80(b, _, i, o, f)
        : this._ra5bef405f056da(b, _, r, t, i, s, o, f, d, c)
    );
  }
  _rc0e605cb15bc80(e, r, t, i = null, s = null) {
    let o = new UnkClass_694584();
    if (((o.id = -1), !this._r0f169c5df1bdba || e == null)) return o;
    let d = this._ra52c012d627d72?._r8bcc15c726f45e(a._rdf322f777613fc) ?? null;
    if (
      d == null &&
      ((d = this._ra52c012d627d72?._r45a41d9ebca32b(a._rdf322f777613fc, null) ?? null), d == null)
    )
      return o;
    let c = this._rbd9b503177cec1?._rbae70369dd4f75() ?? -1;
    if (c < 0) return o;
    ((c += 1), (o.id = c));
    let f = [e, r].join("_");
    if (!this.assets.hasAsset(f) && t != null) {
      let l = this._rb21f4a33cacd78?.getValue(f) ?? null;
      (l == null
        ? ((l = new AssetCallbackInfo(c)),
          this._rb21f4a33cacd78?.add(f, l),
          this._r268360972557a2?.loadThumbnailContent(c, e, r, null))
        : (this._rbd9b503177cec1?._r4240042bb53ae3(c - 1), (o.id = l.id)),
        l.listeners.push(t));
    } else {
      let l = this.assets.getAssetByName(f);
      if (l != null && !l.disposed) {
        let b = l.content;
        try {
          b instanceof A && b.width > 0 && b.height > 0 && (o.data = b.clone());
        } catch {}
      }
      (this._rbd9b503177cec1?._r4240042bb53ae3(c - 1), (o.id = 0));
    }
    return o;
  }
  _ra5bef405f056da(e, r, t, i, s, o = 0, d = null, c = null, f = -1, l = -1, b = null, _ = -1) {
    let h = new UnkClass_694584();
    if (((h.id = -1), !this._r0f169c5df1bdba || e == null)) return h;
    let p = this._ra52c012d627d72?._r8bcc15c726f45e(a._rdf322f777613fc) ?? null;
    if (
      p == null &&
      ((p = this._ra52c012d627d72?._r45a41d9ebca32b(a._rdf322f777613fc, null) ?? null), p == null)
    )
      return h;
    let m = this._r8883f008ebaf95?._rbae70369dd4f75() ?? -1,
      v = this._r1f8216bd70800f(e);
    if (m < 0) return h;
    m += 1;
    let w = p.createRoomObject(m, e, v),
      I = w?.getModelController() ?? null,
      C = w?._rc3df04144b8b80() ?? null;
    if (w == null || I == null || C == null) return h;
    switch (v) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
      case RoomObjectCategoryEnum.const_909:
        (I.setNumber(RoomObjectVariableEnum.const_167, Number.parseInt(r, 10)), I.setString(RoomObjectVariableEnum.FURNITURE_EXTRAS, d ?? ""));
        break;
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
        if (e === Ea.USER || e === Ea.BOT || e === Ea.RENTABLE_BOT || e === Ea.PET)
          I.setString(RoomObjectVariableEnum.AVATAR_FIGURE, r);
        else {
          let T = new class_3800(r);
          (I.setNumber(RoomObjectVariableEnum.PET_PALETTE_INDEX, T.paletteId),
            I.setNumber(RoomObjectVariableEnum.PET_COLOR, T.color),
            T._r174f75c83127f3 && I.setNumber(RoomObjectVariableEnum.PET_HEAD_ONLY, 1),
            T._r09f63cbb67efe2 &&
              (I._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_LAYER_IDS, T._ra07c7d9b3783e1),
              I._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_PART_IDS, T._r277c39797bd982),
              I._rdb7eb41dc3ec2c(RoomObjectVariableEnum.PET_CUSTOM_PALETTE_IDS, T._r23313da862e394)),
            b != null && I.setString(RoomObjectVariableEnum.AVATAR_POSTURE, b));
        }
        break;
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM:
        this._r2c0428b27a3cc9(w, r);
        break;
    }
    (w.setDirection(t), w.setState(f, 0));
    let W = w.getVisualization();
    if (W == null) return (p.disposeObject(m, v), h);
    if (f > -1 || c != null) {
      let T =
        c != null && c.getLegacyString() !== ""
          ? new UnkRoomObjectUpdateMessageSubclass_39f7ec(Number.parseInt(c.getLegacyString(), 10), c)
          : new UnkRoomObjectUpdateMessageSubclass_39f7ec(f, c ?? new mi());
      C.processUpdateMessage(T);
    }
    let R = new Rd(i, new k(-135, 30, 0), new k(11, 11, 5));
    if ((W.update(R, 0, !0, !1), l > 0)) for (let T = 0; T < l; T++) W.update(R, 0, !0, !1);
    return (
      (h.data = W._rb09602dca8db26(o, _)),
      (h.id = m),
      !this._r9a0bd35277e538(e) && s != null
        ? (this._red61ebf881657e?.add(String(m), s), I.setNumber(RoomObjectVariableEnum.IMAGE_QUERY_SCALE, i, !0))
        : (p.disposeObject(m, v), this._r8883f008ebaf95?._r4240042bb53ae3(m - 1), (h.id = 0)),
      R.dispose(),
      h
    );
  }
  _r3ac60c12dafe70(e, r, t, i, s = 0, o = null, d = -1, c = -1) {
    let f = null,
      l = "";
    return (
      this._r268360972557a2 != null &&
        ((f = this._r268360972557a2._ra7e35114872e5d(e, o)),
        (l = String(this._r268360972557a2._rb5dea53f7941cc(e)))),
      t === 1 && i != null
        ? this._rc0e605cb15bc80(f, l, i, o, null)
        : this._ra5bef405f056da(f, l, r, t, i, s, o, null, d, c)
    );
  }
  getPetImage(e, r, t, i, s, o, d = !0, c = 0, f = null, l = null) {
    let b = `${e} ${r} ${t.toString(16)}`;
    if ((d || (b += " head"), f != null)) {
      let h = f;
      b += ` ${h.length}`;
      for (let p of h) b += ` ${p.layerId} ${p.partId} ${p.paletteId}`;
    }
    let _ = this._r268360972557a2?._rec1a64fc8d4622(e) ?? "";
    return this._ra5bef405f056da(_, b, i, s, o, c, null, null, -1, -1, l);
  }
  _r2e33d89cc9b407(e, r, t, i, s, o = null) {
    let d = `${e ?? ""}
${r ?? ""}
${t ?? ""}
${o ?? ""}`;
    return this._ra5bef405f056da(a._r32e714993250a7, d, new k(), i, s);
  }
  _r935bceb9c0dcea(e, r, t, i, s, o, d = 0) {
    let c = null,
      f = "",
      l = null,
      b = null,
      _ = -1,
      p =
        (this._ra52c012d627d72?._r8bcc15c726f45e(this._r212b6a0df5e741(e)) ?? null)?.getObject(r, t) ??
        null,
      m = p?.getStringToStringMap() ?? null;
    if (p != null && m != null)
      switch (((c = p.getType()), (_ = p.getId()), t)) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
        case RoomObjectCategoryEnum.const_909: {
          ((f = String(m._ra3dc9a405b5c73(RoomObjectVariableEnum.const_167))),
            (l = m.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS)));
          let v = m._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT);
          v !== mi.FORMAT_KEY && ((b = UnkClass_5205b2._r41d3e1274ff5f9(v)), b?._r8476f6049cdad6(m));
          break;
        }
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
          f = m.getString(RoomObjectVariableEnum.AVATAR_FIGURE);
          break;
      }
    return this._ra5bef405f056da(c, f, i, s, o, d, l, b, -1, -1, null, _);
  }
  _r2c0428b27a3cc9(e, r) {
    if (r == null) return;
    let t = r.split(`
`);
    if (t.length < 3) return;
    let i = t[0] ?? "",
      s = t[1] ?? "",
      o = t[2] ?? "",
      d = t[3] ?? null,
      c = 6,
      f = new rs();
    f._r9e8cc905e77402(c + 2, c + 2);
    for (let l = 1; l < 1 + c; l++) for (let b = 1; b < 1 + c; b++) f.setTileHeight(b, l, 0);
    ((f.wallHeight = c),
      f.initializeFromTileData(),
      e._rc3df04144b8b80()?.initialize(f.getXML()),
      e.getModelController()?.setString(RoomObjectVariableEnum.ROOM_FLOOR_TYPE, i),
      e.getModelController()?.setString(RoomObjectVariableEnum.ROOM_WALL_TYPE, s),
      e.getModelController()?.setString(RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE, o),
      d != null &&
        d.length > 0 &&
        e
          ._rc3df04144b8b80()
          ?.processUpdateMessage(new gd(gd.ADD_MASK, `${RoomObjectCategoryEnum.const_909}_1`, d, new k(2.5, 0.5, 2))),
      f.dispose());
  }
  _r37626001a0be81(e, r, t, i) {
    let s = this._rcc830c76c83ba6(e, i);
    if (s == null) return null;
    let o = this._ra1f5cb56d0c2d8(e, r, t);
    if (o == null) return null;
    let d = o?.getVisualization() ?? null;
    if (d == null) return null;
    let c = d?.boundingRectangle?.clone() ?? null;
    if (c == null) return null;
    let f = this._re632c269e317f0(e, i);
    if (f == null) return null;
    let l = o.getLocation();
    if (l == null) return null;
    let b = s._r2c974b4bf77b84(l);
    if (b == null) return null;
    let _ = this._r5a23328bdcf1c2(f);
    (_ < 0
      ? ((c.left = (c.left + c.width) * _),
        (c.top = (c.top + c.height) * _),
        (c.width *= -_),
        (c.height *= -_))
      : ((c.left *= _), (c.top *= _), (c.width *= _), (c.height *= _)),
      (b.x *= _),
      (b.y *= _),
      c.offset(b.x, b.y));
    let h = f._r478576db3cd676 ? -f.width : f.width,
      p = f._r478576db3cd676 ? -f.height : f.height;
    return (c.offset(h / 2 + f.screenOffsetX, p / 2 + f.screenOffsetY), c);
  }
  getRoomObjectScreenLocation(e, r, t, i = -1) {
    i === -1 && (i = this._r37d077cd2c83d5);
    let s = this._rcc830c76c83ba6(e, i);
    if (s == null) return null;
    let o = this._ra1f5cb56d0c2d8(e, r, t);
    if (o == null) return null;
    let d = o.getLocation();
    if (d == null) return null;
    let c = s._r2c974b4bf77b84(d),
      f = this._re632c269e317f0(e, i);
    if (c == null || f == null) return null;
    let l = this._r5a23328bdcf1c2(f);
    ((c.x *= l), (c.y *= l));
    let b = f._r478576db3cd676 ? -f.width : f.width,
      _ = f._r478576db3cd676 ? -f.height : f.height;
    return (c.offset(b / 2 + f.screenOffsetX, _ / 2 + f.screenOffsetY), c);
  }
  _r0cd75373493374(e) {
    return this._r37626001a0be81(this._r853a42f2450c73, a._rf688915b895c59, RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM, e);
  }
  _r9c502eedb73502(e, r) {
    return this._r268360972557a2?._r9c502eedb73502(e, r) ?? null;
  }
  _r7c3a409976ffaf(e, r) {
    return this._r268360972557a2?._r7c3a409976ffaf(e, r) ?? [];
  }
  getPetLayerIdForTag(e, r) {
    return this._r268360972557a2?.getPetLayerIdForTag(e, r) ?? -1;
  }
  _r58b39b996d47ea(e, r) {
    return this._r268360972557a2?._r58b39b996d47ea(e, r) ?? null;
  }
  _r0d46ac32fd030a(e, r, t = -1) {
    this.events.dispatchEvent?.(
      new RoomEngineUseProductEvent(RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY, this._r853a42f2450c73, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE, e, r),
    );
  }
  _rd271112e5404ac(e) {
    let r = this._roomSessionManager?.getSession(this._r853a42f2450c73) ?? null;
    this._sessionDataManager == null ||
      r == null ||
      this._r75c3b4e7c11b82(this.activeRoomId, r.ownUserRoomId, e);
  }
  _r72f73aa3e1d0a7(e) {
    let r = this._r557abb4396cd44();
    r != null && (r._re5ff5b34be6f00 = e);
  }
  _container(e, r) {
    this._rcb4fbbcd5da471(e)?.setState(r, 0);
  }
  _r98e4fd7849d947(e, r) {
    this._rcb4fbbcd5da471(e)
      ?.getModelController()
      ?.setNumber(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER, r ? 1 : 0);
  }
  _re8f661dca32b6b(e) {
    this._ra52c012d627d72?._re8f661dca32b6b(e);
  }
  _r8f3e1ecfa1148e(e) {
    this._ra52c012d627d72?._r8f3e1ecfa1148e(e);
  }
  roomSession(e, r, t, i, s) {
    let o = this._re632c269e317f0(e, r)?.displayObject ?? null;
    return o == null ? !1 : (t.draw(o, i, null, null, null, s), !0);
  }
  getRenderRoomMessage(e, r, t = !1, i = !0, s = !1, o = -1) {
    let d = o > -1 ? this._re632c269e317f0(this._r853a42f2450c73, o) : this._r557abb4396cd44();
    if (d == null) return null;
    s && d._rd2a175026529bc();
    let c = -1;
    i || (c = this._roomSessionManager?.getSession(this._r853a42f2450c73)?.ownUserRoomId ?? -1);
    let f = new Nwe(),
      l = f.getFurniData(e, d, this, c),
      b = f.getRoomRenderingModifiers(this),
      _ = f.getRoomPlanes(e, d, this, r);
    return (
      s && d._rc6be55c3fb1cf8(),
      t
        ? new UnkClass_7de45b(_, l, b, this._r853a42f2450c73, this._sessionDataManager?.topSecurityLevel ?? 0)
        : new P7(_, l, b, this._r853a42f2450c73, this._sessionDataManager?.topSecurityLevel ?? 0)
    );
  }
  _re63fd389d9700f(e, r, t) {
    this._re632c269e317f0(e, r)?._r3df8e11aa22916();
  }
  _rb285fae5fe0ee1() {
    this._r268360972557a2?.purge();
  }
  _r70a9e7931fe28c(e) {
    this._r358dfdd810a572 = e;
  }
  _rf2e9958b3af8fb() {
    return (this._r59cc4b28e895a2?.areaSelectionState ?? QI.NOT_ACTIVE) !== QI.NOT_ACTIVE;
  }
  _ra143ca99cc4080() {
    return this._r358dfdd810a572;
  }
  _r6bf1500d09d324() {
    return this._r35b4088dec8751 && !this._rf2e9958b3af8fb();
  }
  _r86d723ac23ad22(e, r) {
    if (this._rb2f15fb6918298 == null || e == null || e.length === 0) return;
    if (r == null || r.isEmpty()) {
      this._rb2f15fb6918298.remove(e);
      return;
    }
    let t = r.clone();
    this._rb2f15fb6918298.hasKey(e) ? this._rb2f15fb6918298.replace(e, t) : this._rb2f15fb6918298.add(e, t);
  }
  _r153e74d301004e(e) {
    this._rb2f15fb6918298 == null || e == null || e.length === 0 || this._rb2f15fb6918298.remove(e);
  }
  name_1(e, r, t) {
    let i = this._rc6e01b548b9b58,
      s = this._rb2f618a015cb5a;
    (r && !this._rb00ca04db0a2df?.has(e)
      ? this._rb00ca04db0a2df?.add(e)
      : !r && this._rb00ca04db0a2df?.has(e) && this._rb00ca04db0a2df?.delete(e),
      t && !this._r4ee0476f711256?.has(e)
        ? this._r4ee0476f711256?.add(e)
        : !t && this._r4ee0476f711256?.has(e) && this._r4ee0476f711256?.delete(e),
      !i && r && this._r7c8221d66c02f1(this._r853a42f2450c73, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
      !s &&
        t &&
        (this._r7c8221d66c02f1(this._r853a42f2450c73, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
        this._r7c8221d66c02f1(this._r853a42f2450c73, RoomObjectCategoryEnum.const_909)));
  }
  _r042e2306d897f3(e, r, t, i, s) {
    this._rf2345cb7a34190?.loadRoomAdImage(e, r, t, i, s);
  }
  _r917b3aa7a34175(e, r, t) {
    return this._r268360972557a2?.insertObjectContent(e, r, t) ?? !1;
  }
  _r1e20ad2f97f0de(e, r) {
    this._r268360972557a2?._r1e20ad2f97f0de(e, r);
  }
  _r458ccaabd9fa3c() {
    ((this._r9ab4f7c14fd924 = !1),
      (UnkClass_db4c11.cursor = this._r35084da6cb0f5c(this._r853a42f2450c73)?._r4499ae3da6092e()
        ? Ws.BUTTON
        : Ws._ra2fbbf5cdb86ed));
  }
  _rec756885301724(e, r, t) {
    let i = this._r1f8216bd70800f(t);
    switch (e) {
      case RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON:
        (this._r880a2521997aa0 && i === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && (this._r883488bb71ee36 = r),
          this._r7a445614fef986(this._r853a42f2450c73, i, r));
        break;
      default:
        (this._r880a2521997aa0 && i === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && (this._r883488bb71ee36 = -1),
          this._rb802b6b011fa18(this._r853a42f2450c73, i, r));
        break;
    }
  }
  _r2013da28a384d9(e, r) {
    if (r < 0) return;
    let t = this._r8d583f1f5d010b(e),
      i = this._r2298f28ff272b0(e, r),
      s = i?.getStringToStringMap() ?? null,
      o = t?._rc3df04144b8b80() ?? null,
      d = i?.getLocation() ?? null;
    if (i == null || s == null || o == null || d == null) return;
    let c = Math.trunc(d.x),
      f = Math.trunc(d.y),
      l = Math.trunc(s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693)),
      b = Math.trunc(s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230));
    o.processUpdateMessage(new RoomObjectRoomFloorHoleUpdateMessage(RoomObjectRoomFloorHoleUpdateMessage.ADD_HOLE, r, c, f, l, b));
  }
  _r8ff1158f880ba5(e, r) {
    this._r8d583f1f5d010b(e)?._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectRoomFloorHoleUpdateMessage(RoomObjectRoomFloorHoleUpdateMessage.REMOVE_HOLE, r));
  }
  _r557abb4396cd44() {
    return this._re632c269e317f0(this._r853a42f2450c73, this._r37d077cd2c83d5);
  }
  _re0d82c8476bf83(e, r, t, i, s = !1) {
    let o = null;
    if (
      (e === 0
        ? (o = this._ra52c012d627d72?._r8bcc15c726f45e(a._rdf322f777613fc)?.getObject(r, t) ?? null)
        : (o = this._r2298f28ff272b0(e, r)),
      o?._rc3df04144b8b80() == null)
    )
      return;
    let c =
      (s
        ? this._sessionDataManager?.getGroupBadgeAssetName
        : this._sessionDataManager?.getBadgeImageAssetName
      )?.call(this._sessionDataManager, i) ?? null;
    if (c == null || c.length === 0) {
      ((c = "loading_icon"),
        this._rd8bd2f44dd85a7 == null && (this._rd8bd2f44dd85a7 = new B()),
        this._rd8bd2f44dd85a7.length === 0 &&
          this._sessionDataManager?.events.addEventListener?.(Ho.BADGE_READY, this._r63280458face10));
      let f = this._rd8bd2f44dd85a7.getValue(i) ?? [];
      (f.push(new class_2057(o, s)), this._rd8bd2f44dd85a7.setProperty(i, f));
    } else this._r6c21cc5b023353(o, i, s);
    o._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectGroupBadgeUpdateMessage(i, c));
  }
  _ra5c07ed34f62b1(e, r, t, i, s, o) {
    let d = null;
    if (
      (e === 0
        ? (d = this._ra52c012d627d72?._r8bcc15c726f45e(a._rdf322f777613fc)?.getObject(r, t) ?? null)
        : (d = this._r2298f28ff272b0(e, r)),
      d?._rc3df04144b8b80() == null)
    )
      return;
    let c = this._sessionDataManager?.getFurniIconImageAssetName(i, s, o) ?? null,
      f = a._r8c2b79cd45fea6(i, s, o);
    if (c == null || c.length === 0) {
      ((c = "loading_icon"),
        this._rf5c92413fafe44 == null && (this._rf5c92413fafe44 = new B()),
        this._rf5c92413fafe44.length === 0 &&
          this._sessionDataManager?.events.addEventListener?.(Oy.const_882, this._r8ab3d6c3870ce6));
      let l = this._rf5c92413fafe44.getValue(f) ?? [];
      (l.push(new class_1761(d)), this._rf5c92413fafe44.setProperty(f, l));
    } else this._rc4e6320c4c9ad3(d, i, s, o);
    d._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectFurniIconUpdateMessage(c, i, s, o));
  }
  _r8af7d8d067d0ca() {
    return this._r49e77eb069da5e(this._r853a42f2450c73);
  }
  _r49e77eb069da5e(e) {
    return this._r35084da6cb0f5c(e)?._rfbe73ee0d1bc7f ?? null;
  }
  _r35084da6cb0f5c(e) {
    if (this._r2e90e8dbbe2223 == null) return null;
    let r = this._r212b6a0df5e741(e),
      t = this._r2e90e8dbbe2223.getValue(r) ?? null;
    return (t == null && ((t = new class_2198(e)), this._r2e90e8dbbe2223.add(r, t)), t);
  }
  _rd9486318715162(e, r) {
    let t = this._r35084da6cb0f5c(e);
    t != null && (t._ra6985b17d5757b = r);
  }
  _r27845e49c42e49(e) {
    return this._r35084da6cb0f5c(e)?._ra6985b17d5757b ?? null;
  }
  _r50bf77a73f4299(e, r) {
    let t = this._r35084da6cb0f5c(e);
    t != null && (t._rad593ad6a0877a = r);
  }
  _re9251419dbc8fa(e) {
    return this._r35084da6cb0f5c(e)?._rad593ad6a0877a ?? "";
  }
  _r847b0dcadd8c9f(e) {
    return this._r35084da6cb0f5c(e)?._rbe0cfe1c1ef99b ?? null;
  }
  _re52d2f0d9bde35(e) {
    return this._r35084da6cb0f5c(e)?._ra2b9f4114d1cd1 ?? null;
  }
  _r506d9dd5a0bed5(e) {
    return this.getObject(this._r212b6a0df5e741(e), a._r9fd3f13446d057, RoomObjectCategoryEnum.const_1105);
  }
  _rcb4fbbcd5da471(e) {
    return this.getObject(this._r212b6a0df5e741(e), a._r1fd1afd652435b, RoomObjectCategoryEnum.const_1105);
  }
  _rf83367626c34b1(e, r) {
    let t = this._r35084da6cb0f5c(e)?._ra2b9f4114d1cd1;
    (t?.populate(this._r72017f94b908da(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE)), this._r54f0345aa3aa53?._r6c25018d40bf62?.(e));
  }
  _r4879f72dd9cbfd(e, r) {
    this._r268360972557a2?._r4879f72dd9cbfd(e, r);
  }
  _rcd60769c73f9cb(e) {
    return Number.parseInt(e.split(" ")[0] ?? "-1", 10);
  }
  _r7a445614fef986(e, r, t) {
    let i = this._roomSessionManager?.getSession(e) ?? null;
    if (
      (r !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && r !== RoomObjectCategoryEnum.const_909) ||
      (i != null && i._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER)
    ) {
      let s = `${r}_${t}`;
      this._r35084da6cb0f5c(e)?._r7a445614fef986(s) && (this._r9ab4f7c14fd924 = !0);
    }
  }
  _rb802b6b011fa18(e, r, t) {
    this._r35084da6cb0f5c(e)?._rb802b6b011fa18(`${r}_${t}`) && (this._r9ab4f7c14fd924 = !0);
  }
  _r7c8221d66c02f1(e, r) {
    let t = this._r35084da6cb0f5c(e);
    if (t == null) return;
    let i = [];
    for (let s of t._r60738f1f049132 ?? []) s.indexOf(`${r}_`) === 0 && i.push(s);
    for (let s of i) t._rb802b6b011fa18(s) && (this._r9ab4f7c14fd924 = !0);
  }
  _r6c21cc5b023353(e, r, t = !1) {
    let i = t ? this._sessionDataManager?.getGroupBadgeAssetName : this._sessionDataManager?.getBadgeImageAssetName,
      s = t
        ? this._sessionDataManager?.getGroupBadgeSmallAssetName
        : this._sessionDataManager?.getBadgeImageSmallAssetName,
      o = t ? this._sessionDataManager?.getGroupBadgeImage : this._sessionDataManager?.getBadgeImage,
      d = t ? this._sessionDataManager?.getGroupBadgeSmallImage : this._sessionDataManager?.getBadgeSmallImage,
      c = i?.call(this._sessionDataManager, r) ?? "",
      f = o?.call(this._sessionDataManager, r) ?? null;
    c.length > 0 && f != null && this._r268360972557a2?.addGraphicAsset(e.getType(), c, f, !1);
    let l = s?.call(this._sessionDataManager, r) ?? "",
      b = d?.call(this._sessionDataManager, r) ?? null;
    l.length > 0 && b != null && this._r268360972557a2?.addGraphicAsset(e.getType(), l, b, !1);
  }
  _rc4e6320c4c9ad3(e, r, t, i) {
    let s = this._sessionDataManager?.getFurniIconImageAssetName(r, t, i) ?? "",
      o = this._sessionDataManager?.getFurniIconImage(r, t, i) ?? null;
    s.length > 0 && o != null && this._r268360972557a2?.addGraphicAsset(e.getType(), s, o, !1);
  }
  _r63280458face10 = n((e) => {
    let r = e,
      t = this._rd8bd2f44dd85a7?.getValue(r.badgeId) ?? null;
    if (t != null) {
      for (let i of t) {
        this._r6c21cc5b023353(i.object, r.badgeId, i.groupBadge);
        let o =
          (i.groupBadge
            ? this._sessionDataManager?.getGroupBadgeAssetName
            : this._sessionDataManager?.getBadgeImageAssetName
          )?.call(this._sessionDataManager, r.badgeId) ?? "";
        i.object._rc3df04144b8b80()?.processUpdateMessage(new RoomObjectGroupBadgeUpdateMessage(r.badgeId, o));
      }
      (this._rd8bd2f44dd85a7?.remove(r.badgeId),
        (this._rd8bd2f44dd85a7?.length ?? 0) === 0 &&
          this._sessionDataManager?.events.removeEventListener?.(Ho.BADGE_READY, this._r63280458face10));
    }
  }, "_r63280458face10");
  _r8ab3d6c3870ce6 = n((e) => {
    let r = e,
      t = a._r8c2b79cd45fea6(r.wallItem, r.typeId, r.extra),
      i = this._rf5c92413fafe44?.getValue(t) ?? null;
    if (i != null) {
      for (let s of i)
        (this._rc4e6320c4c9ad3(s.object, r.wallItem, r.typeId, r.extra),
          s.object
            ._rc3df04144b8b80()
            ?.processUpdateMessage(new RoomObjectFurniIconUpdateMessage(r.assetName, r.wallItem, r.typeId, r.extra)));
      (this._rf5c92413fafe44?.remove(t),
        (this._rf5c92413fafe44?.length ?? 0) === 0 &&
          this._sessionDataManager?.events.removeEventListener?.(Oy.const_882, this._r8ab3d6c3870ce6));
    }
  }, "_r8ab3d6c3870ce6");
  static _r8c2b79cd45fea6(e, r, t) {
    return `${e ? "1" : "0"}-${r}-${t}`;
  }
  _r4812a3eab17d60 = n((e) => {
    if (this._r268360972557a2 == null) return;
    let r = this._r8d583f1f5d010b(e.roomId);
    if (r?._rc3df04144b8b80() == null) return;
    let t = r._rc3df04144b8b80();
    t?.processUpdateMessage(new RoomObjectRoomAdUpdateMessage(RoomObjectRoomAdUpdateMessage.ROOM_AD_ACTIVATE, String(RoomObjectVariableEnum.ROOM_AD_IMAGE_ASSET), e.clickUrl));
  }, "_r4812a3eab17d60");
  _r86250e7682c685 = n((e) => {
    if (this._r8d583f1f5d010b(e.roomId) == null) return;
    let t = this._r2298f28ff272b0(e.roomId, e.objectId);
    if (t?._rc3df04144b8b80() == null) return;
    e.image != null && this._r268360972557a2?.addGraphicAsset(t.getType(), e.imageUrl, e.image, !0);
    let i = null;
    switch (e.type) {
      case AdEvent.ROOM_AD_IMAGE_LOADED:
        i = new RoomObjectRoomAdUpdateMessage(RoomObjectRoomAdUpdateMessage.ROOM_BILLBOARD_IMAGE_LOADED, e.imageUrl, e.clickUrl, e.objectId, e.image);
        break;
      case AdEvent.ROOM_AD_IMAGE_LOADING_FAILED:
        i = new RoomObjectRoomAdUpdateMessage(RoomObjectRoomAdUpdateMessage.ROOM_BILLBOARD_LOADING_FAILED, e.imageUrl, e.clickUrl, e.objectId, e.image);
        break;
    }
    let s = t._rc3df04144b8b80();
    i != null && s != null && s.processUpdateMessage(i);
  }, "_r86250e7682c685");
  _r9a0bd35277e538(e) {
    return this._ra52c012d627d72?._r2f92a0e0687601(e) ?? !1;
  }
  _r65913200fde7c4(e, r) {
    if (e == null) return;
    let t = this._ra52c012d627d72?._r8bcc15c726f45e(a._rdf322f777613fc) ?? null;
    if (t == null || this._r268360972557a2 == null) return;
    let i = null,
      s = 0,
      o = this._r268360972557a2._r12110ad7d84ce2(e),
      d = t.getObjectCount(o);
    for (let c = d - 1; c >= 0; c--) {
      let f = t._rce25aa21e0bb14(c, o);
      if (f == null || f.getStringToStringMap() == null || f.getType() !== e) continue;
      let l = f.getId(),
        b = null,
        _ = f.getVisualization();
      if (_ != null) {
        let p = f.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.IMAGE_QUERY_SCALE) ?? 0;
        (i != null && s !== p && (i.dispose(), (i = null)),
          i == null && ((s = p), (i = new Rd(p, new k(-135, 30, 0), new k(11, 11, 5)))),
          _.update(i, 0, !0, !1),
          (b = _.image));
      }
      (t.disposeObject(l, o), this._r8883f008ebaf95?._r4240042bb53ae3(l - 1));
      let h = this._red61ebf881657e?.remove(String(l)) ?? null;
      h != null ? (b != null ? h.imageReady(l, b) : h.imageFailed(l)) : b?.dispose();
    }
    i?.dispose();
  }
  _r6662ced4ea6be5(e, r, t) {
    let i = this._r9bf502fda037f6(e);
    t === RoomObjectCategoryEnum.const_909 && this._r1e3a7bbbe662d2(i, r);
    let s = this._ra1f5cb56d0c2d8(i, r, t),
      o = s?.getStringToStringMap() ?? null,
      d = s?._rc3df04144b8b80() ?? null;
    if (o != null && d != null) {
      let c = o._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT);
      if (!Number.isNaN(c)) {
        let f = UnkClass_5205b2._r41d3e1274ff5f9(c);
        (f?._r8476f6049cdad6(o), d.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(s?.getState(0) ?? 0, f ?? new mi())));
      }
      this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.CONTENT_UPDATED, i, r, t));
    }
    e !== a._rdf322f777613fc && s != null && this._r44084cc50d597d(i, s);
  }
  _r8f5f2d8fcbb09d(e) {
    this.events.dispatchEvent?.(new RoomEngineEvent(RoomEngineEvent.ROOM_OBJECTS_INITIALIZED, this._r9bf502fda037f6(e)));
  }
  getObject(e, r, t) {
    let i = this._ra52c012d627d72?._r8bcc15c726f45e(e) ?? null;
    if (i == null) return null;
    let s = i.getObject(r, t);
    return (
      s == null &&
        (t === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
          ? (this._r72cc585d0497f3(this._r9bf502fda037f6(e), r, null), (s = i.getObject(r, t)))
          : t === RoomObjectCategoryEnum.const_909 &&
            (this._r8f0f221ec5a5e7(this._r9bf502fda037f6(e), r, null), (s = i.getObject(r, t)))),
      s
    );
  }
  _r72017f94b908da(e, r) {
    return (
      this._r8bcc15c726f45e(e)
        ?._r2ae68860e40562(r)
        .filter((t) => t != null) ?? []
    );
  }
  _r54659247946ba8() {
    let e = _ia411d8d8194a3a();
    for (let r of this._r2e90e8dbbe2223?.getValues() ?? []) {
      let t,
        i = !1;
      for (; (t = r.products()) != null;)
        if (
          (this._r72cc585d0497f3(r.roomId, t.id, t), !this._r322672563846a4 && _ia411d8d8194a3a() - e >= a._rbca69e11162a5e)
        ) {
          i = !0;
          break;
        }
      for (; !i && (t = r.getWallItemData()) != null;)
        if (
          (this._r8f0f221ec5a5e7(r.roomId, t.id, t), !this._r322672563846a4 && _ia411d8d8194a3a() - e >= a._rbca69e11162a5e)
        ) {
          i = !0;
          break;
        }
      if (i) return;
    }
  }
  _rb9ccfbb90b8b6b(e, r) {
    (this._r64603de284e16e(this._r72017f94b908da(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE), r),
      this._r64603de284e16e(this._r72017f94b908da(e, RoomObjectCategoryEnum.const_909), r));
  }
  _r64603de284e16e(e, r) {
    let t = r ? 1 : 0;
    for (let i of e) {
      let o = i?.getModelController() ?? null;
      o?.setNumber(RoomObjectVariableEnum.FURNITURE_INVISIBLE_LAYER, t);
    }
  }
  _r72cc585d0497f3(e, r, t) {
    if ((t == null && (t = this._r35084da6cb0f5c(e)?._rd71e58e6570006(r) ?? null), t == null)) return !1;
    let i = !1,
      s = t.type;
    s == null && ((s = this._redc62c3bf823c2(t.typeId)), (i = !0));
    let o = this._rd5be7e634eac9e(t.typeId),
      d = this.getRoomObjectAdURL(s),
      c = this._r7fc78df6891ba5(e, r, s ?? "");
    if (c == null) return !1;
    let f = c.getModelController();
    if (
      (f != null &&
        i &&
        (f.setNumber(RoomObjectVariableEnum.const_167, o, !0),
        f.setNumber(RoomObjectVariableEnum.const_191, t.typeId, !0),
        f.setString(RoomObjectVariableEnum.const_601, d, !0),
        f.setNumber(RoomObjectVariableEnum.const_420, t._rdcd0d82e425da5 ? 1 : 0),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIME, t.expiryTime),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIMESTAMP, _ia411d8d8194a3a()),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_USAGE_POLICY, t.usagePolicy),
        f.setNumber(RoomObjectVariableEnum.const_641, t.ownerId),
        f.setString(RoomObjectVariableEnum.FURNITURE_OWNER_NAME, t.ownerName),
        f.setNumber(RoomObjectVariableEnum.const_1194, t.extra)),
      !this._r418f6f699205eb(e, r, t.loc, t.dir, t.state, t.data, t.extra) ||
        (t._rea41d73d88249a >= 0 && !this._r1ebdfcb2d6b127(e, r, t._rea41d73d88249a)))
    )
      return !1;
    this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.ADDED, e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE));
    let l = this._r38ad2264d57c5b(e);
    return (
      l != null &&
        Math.abs(l.id) === r &&
        l.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE &&
        this._r5def02e220e83a(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      c.isInitialized() && t.synchronized && this._r44084cc50d597d(e, c),
      !0
    );
  }
  _r7fc78df6891ba5(e, r, t) {
    let i = this._r8ac7f802e686f1(this._r212b6a0df5e741(e), r, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    return (this._ra4ff69b57b8662(e, i), i);
  }
  _r2298f28ff272b0(e, r) {
    return this.getObject(this._r212b6a0df5e741(e), r, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
  }
  _r8f0f221ec5a5e7(e, r, t) {
    if ((t == null && (t = this._r35084da6cb0f5c(e)?.var_993(r) ?? null), t == null)) return !1;
    let i = t.data?.getLegacyString() ?? "",
      s = this._ra7e35114872e5d(t.typeId, i) ?? "",
      o = this._rb5dea53f7941cc(t.typeId),
      d = this.getRoomObjectAdURL(s),
      c = this._ra677412c506371(e, r, s);
    if (c == null) return !1;
    let f = c.getModelController();
    if (
      (f != null &&
        (f.setNumber(RoomObjectVariableEnum.const_167, o, !1),
        f.setNumber(RoomObjectVariableEnum.const_191, t.typeId, !0),
        f.setString(RoomObjectVariableEnum.const_601, d, !0),
        f.setNumber(RoomObjectVariableEnum.const_420, t._rdcd0d82e425da5 ? 1 : 0),
        f.setNumber(RoomObjectVariableEnum.const_1302, 1, !0),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_USAGE_POLICY, t.usagePolicy),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIME, t.expiryTime),
        f.setNumber(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIMESTAMP, _ia411d8d8194a3a()),
        f.setNumber(RoomObjectVariableEnum.const_641, t.ownerId),
        f.setString(RoomObjectVariableEnum.FURNITURE_OWNER_NAME, t.ownerName),
        f.setNumber(RoomObjectVariableEnum.const_1194, t.extra)),
      (i = t.data?.getLegacyString() ?? ""),
      !this._r2312c3c4386345(e, r, t.loc, t.dir, t.state, i))
    )
      return !1;
    this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.ADDED, e, r, RoomObjectCategoryEnum.const_909));
    let l = this._r38ad2264d57c5b(e);
    return (
      l != null &&
        l.id === r &&
        l.category === RoomObjectCategoryEnum.const_909 &&
        this._r5def02e220e83a(e, r, RoomObjectCategoryEnum.const_909),
      !0
    );
  }
  _ra677412c506371(e, r, t) {
    let i = this._r8ac7f802e686f1(this._r212b6a0df5e741(e), r, t, RoomObjectCategoryEnum.const_909);
    return (this._ra4ff69b57b8662(e, i), i);
  }
  _ra4ff69b57b8662(e, r) {
    let t = r?.getModelController() ?? null;
    t?.setNumber(RoomObjectVariableEnum.FURNITURE_INVISIBLE_LAYER, this._recff94dd5db5e9(e, RoomVariableEnum.INVISIBLE_FURNI) ? 1 : 0);
  }
  _rc3c18bfbee3f24(e, r) {
    return this.getObject(this._r212b6a0df5e741(e), r, RoomObjectCategoryEnum.const_909);
  }
  _r2f1c4828e5527f(e, r, t) {
    return this._r8ac7f802e686f1(this._r212b6a0df5e741(e), r, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
  }
  _rd559dab2ac570a(e, r, t, i) {
    return this._r8ac7f802e686f1(this._r212b6a0df5e741(e), r, t, i);
  }
  _rc8f487828e4ef2(e, r) {
    return this.getObject(this._r212b6a0df5e741(e), r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
  }
  _r8ac7f802e686f1(e, r, t, i) {
    return this._ra52c012d627d72?._r8bcc15c726f45e(e)?.createRoomObject(r, t, i);
  }
  getRoomObjectAdURL(e) {
    return e != null ? (this._r268360972557a2?.getRoomObjectAdURL(e) ?? "") : "";
  }
  _rd5be7e634eac9e(e) {
    return this._r268360972557a2?._r932da5452cd716(e) ?? 0;
  }
  _rb5dea53f7941cc(e) {
    return this._r268360972557a2?._rb5dea53f7941cc(e) ?? 0;
  }
  _r44084cc50d597d(e, r) {
    this._r35084da6cb0f5c(e)?._ra2b9f4114d1cd1?._r869fa8ebf63951(r);
  }
  _raf6c1ba8b0c0d7(e, r) {
    let i = (this._roomSessionManager?.getSession(e) ?? null)?.getUserDataByIndex?.userDataManager(r) ?? null;
    return i != null && this._sessionDataManager?.isBlocked(i.webID) === !0;
  }
  _rba0bbbb5768a54(e, r) {
    if (r == null) return null;
    let t = this._r27845e49c42e49(e),
      i = this._r847b0dcadd8c9f(e);
    if (t == null || i == null) return r;
    let s = r.z,
      o = t.getTileHeight(r.x, r.y),
      d = i.getTileHeight(r.x, r.y);
    return (
      Math.abs(s - o) < 0.02 && Math.abs(o - d) < 0.02 && (s = i._r455bf5cf7b4828(r.x, r.y)),
      new k(r.x, r.y, s)
    );
  }
  _rec1a64fc8d4622(e) {
    if (e != null) {
      let r = e.split(" ");
      if (r.length > 1) {
        let t = Number.parseInt(r[0], 10);
        return this._r268360972557a2?._rec1a64fc8d4622(t) ?? "pet";
      }
    }
    return null;
  }
  disposeObject(e, r, t) {
    let i = this._r8bcc15c726f45e(e);
    i != null &&
      i.disposeObject(r, t) &&
      this.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.REMOVED, e, r, t));
  }
  _r159692ae58dbda(e) {
    if (!(e instanceof RoomObjectEvent) || this._r54f0345aa3aa53 == null) return;
    let r = this._r2dd8401181d6d9(e.object);
    r != null && this._r54f0345aa3aa53.handleRoomObjectEvent(e, this._r9bf502fda037f6(r));
  }
  _r2dd8401181d6d9(e) {
    return e?.getStringToStringMap()?.getString(RoomObjectVariableEnum.const_236) ?? null;
  }
  get _r762e672529752b() {
    return 2e3;
  }
}
