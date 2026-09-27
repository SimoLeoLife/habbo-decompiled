// Estratto da HabboAirLauncher.deobf.js, riga 333532.

class a {
  constructor(e, r, t) {
    this.var_36 = t;
    ((this.var_61 = e),
      (this._assets = r),
      this._ra7af0062f12254(),
      (this._r538b9ccf4a93b8 = new ColorTransitioner()),
      (this._r8141441796871d = new ColorTransitioner(0, 0)));
  }
  static {
    n(this, "_ic8c6cf7245e3cb");
  }
  static _rc70bc36c55d70c = -1;
  static _r881aec2fd769d8 = 1e3 / 60;
  static _r73ef360e989b77 = 0.001;
  static _r6bfa71670b7669 = [0.5, 1, 2, 4, 8, 16];
  static _r0b28763f94276b = 400;
  static _r3250e982b2fd7f = 1;
  _events = new Ft();
  _windowManager = null;
  _roomEngine = null;
  _rcea8ec59decf7f = null;
  _sessionDataManager = null;
  _roomSessionManager = null;
  _r6358b2bd53ae19 = null;
  _avatarRenderManager = null;
  _friendList = null;
  _inventory = null;
  _toolbar = null;
  _navigator = null;
  _messenger = null;
  _r785de5bfe76326 = null;
  _avatarEditor = null;
  _catalog = null;
  _rf2345cb7a34190 = null;
  _localization = null;
  _habboHelp = null;
  _r34a81f64eba4e2 = null;
  _config = null;
  _soundManager = null;
  _r49621084c4a423 = null;
  _rb9b74a4575d69b = null;
  _gameManager = null;
  _questEngine = null;
  _rb7fab1e25a8762 = null;
  _assets;
  var_61;
  _r1ec91c8eb23fbe = [];
  _r89f7688b2a17aa = new B();
  _r48a712a6cc567f = new B();
  _r73bca556141932 = new B();
  _re5d102f32189a0 = [];
  _r8da8e62442e9d1 = new xCe();
  _r6f4d5bf4ca7b5f = !0;
  _r7525989fac4fc0 = null;
  _r538b9ccf4a93b8 = null;
  _r4b40f13962475a = 16777215;
  _r8141441796871d = null;
  _rfee83b070cd785 = 0;
  _r379b56259c1890 = null;
  _re8d7d419cfca92 = null;
  _r1530e52aaf0174 = !1;
  _r512bbd8dfe5d08 = 0;
  _pivot = null;
  _r363b859332578d = Number.NaN;
  _r78ff6d51f3b7e4 = 0;
  _r498fb81a7a6ecc = null;
  _r91521e58503124 = null;
  get events() {
    return this._events;
  }
  get _r2eac8239a09fe7() {
    return this.var_61;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get friendList() {
    return this._friendList;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  get inventory() {
    return this._inventory;
  }
  get toolbar() {
    return this._toolbar;
  }
  get _r50438e33ddab1f() {
    return this._rcea8ec59decf7f;
  }
  get navigator() {
    return this._navigator;
  }
  get _r65e0ab1dc9fb51() {
    return this._r785de5bfe76326;
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get avatarEditor() {
    return this._avatarEditor;
  }
  get catalog() {
    return this._catalog;
  }
  get localization() {
    return this._localization;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get config() {
    return this._config;
  }
  get musicController() {
    return this._soundManager;
  }
  get messenger() {
    return this._messenger;
  }
  get moderation() {
    return this._r34a81f64eba4e2;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _r697386a8fb5bf8() {
    return this._r49621084c4a423;
  }
  get _r1218f60f737b72() {
    return this._gameManager;
  }
  get questEngine() {
    return this._questEngine;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get _rddef5461e8915c() {
    return this._rb9b74a4575d69b;
  }
  get connection() {
    return this.var_36;
  }
  get _rc0786a5aea0115() {
    return this._r8da8e62442e9d1;
  }
  get _re204bd4500d72f() {
    return this._rfee83b070cd785;
  }
  set windowManager(e) {
    this._windowManager = e;
  }
  set roomEngine(e) {
    let r = this._roomEngine;
    (r?.events != null &&
      (r.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, this._rd70b0cf9208d2d),
      r.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, this._rd70b0cf9208d2d),
      r.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_CANCEL, this._rd70b0cf9208d2d)),
      (this._roomEngine = e));
    let t = this._roomEngine;
    t?.events != null &&
      (t.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, this._rd70b0cf9208d2d),
      t.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, this._rd70b0cf9208d2d),
      t.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_CANCEL, this._rd70b0cf9208d2d));
  }
  set _r50438e33ddab1f(e) {
    this._rcea8ec59decf7f = e;
  }
  set sessionDataManager(e) {
    this._sessionDataManager = e;
  }
  set roomSessionManager(e) {
    ((this._roomSessionManager = e), this._ra7af0062f12254());
  }
  set _rf3db13932bfb60(e) {
    this._r6358b2bd53ae19 = e;
  }
  set friendList(e) {
    this._friendList = e;
  }
  set _rf0eb5f07c94cfb(e) {
    this._avatarRenderManager = e;
  }
  set inventory(e) {
    this._inventory = e;
  }
  set toolbar(e) {
    let r = this._toolbar;
    (r?.events.removeEventListener?.(HabboToolbarEvent.const_85, this._r63e257ddc2d187),
      (this._toolbar = e));
    let t = this._toolbar;
    t?.events.addEventListener?.(HabboToolbarEvent.const_85, this._r63e257ddc2d187);
  }
  set navigator(e) {
    this._navigator = e;
  }
  set messenger(e) {
    this._messenger = e;
  }
  set _r65e0ab1dc9fb51(e) {
    this._r785de5bfe76326 = e;
  }
  set avatarEditor(e) {
    this._avatarEditor = e;
  }
  set catalog(e) {
    this._catalog = e;
  }
  set _r50525f0f8c3f06(e) {
    this._rf2345cb7a34190 = e;
  }
  set localization(e) {
    this._localization = e;
  }
  set habboHelp(e) {
    this._habboHelp = e;
  }
  set moderation(e) {
    this._r34a81f64eba4e2 = e;
  }
  set config(e) {
    this._config = e;
  }
  set musicController(e) {
    this._soundManager = e;
  }
  set _r697386a8fb5bf8(e) {
    this._r49621084c4a423 = e;
  }
  set _rddef5461e8915c(e) {
    this._rb9b74a4575d69b = e;
  }
  set _r1218f60f737b72(e) {
    this._gameManager = e;
  }
  set questEngine(e) {
    this._questEngine = e;
  }
  set _rafd5b9130c4bfd(e) {
    this._rb7fab1e25a8762 = e;
  }
  set layout(e) {
    this._r8da8e62442e9d1.setLayout(e, this._windowManager, this._config);
  }
  init() {
    (this._roomEngine != null &&
      this.var_61 != null &&
      ((this._r7525989fac4fc0 = []),
      this._r7525989fac4fc0.length > 0 &&
        ((this._r6f4d5bf4ca7b5f = !1), this._r9b1b0209eb1b5a(new RoomWidgetLoadingBarUpdateEvent(RoomWidgetLoadingBarUpdateEvent.SHOW)))),
      this._r6358b2bd53ae19 != null &&
        ((this._r498fb81a7a6ecc = this._r6358b2bd53ae19._r2e106e2349a0b6(new class_2879(this._rd2fde89b84b758))),
        (this._r91521e58503124 = this._r6358b2bd53ae19._r2e106e2349a0b6(new class_2665(this._rbdb2a7b3c0e3ff)))));
  }
  get visible() {
    return this._r8da8e62442e9d1._radab2f28e7a338()?.visible ?? !0;
  }
  set visible(e) {
    let r = this._r8da8e62442e9d1._radab2f28e7a338();
    r != null && (r.visible = e);
  }
  _ra93f3611d373b4() {
    this._rf2345cb7a34190?.showInterstitial?.();
  }
  dispose() {
    if (this._roomEngine != null && this.var_61 != null) {
      let t = this._roomEngine._rcc830c76c83ba6(this.var_61.roomId, this.getFirstCanvasId());
      t != null && this._r9c96bcfe0e3027(t._re45c1d93943a81(), !1);
    }
    (this._roomEngine?.events != null &&
      (this._roomEngine.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, this._rd70b0cf9208d2d),
      this._roomEngine.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, this._rd70b0cf9208d2d),
      this._roomEngine.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_CANCEL, this._rd70b0cf9208d2d)),
      this._r6358b2bd53ae19 != null &&
        (this._r498fb81a7a6ecc != null &&
          (this._r6358b2bd53ae19._r7668362bf55fdd(this._r498fb81a7a6ecc), (this._r498fb81a7a6ecc = null)),
        this._r91521e58503124 != null &&
          (this._r6358b2bd53ae19._r7668362bf55fdd(this._r91521e58503124), (this._r91521e58503124 = null))));
    for (let t of this._r1ec91c8eb23fbe) this._windowManager?.removeWindow?.(`Room_Engine_Window_${t}`);
    let e = this._toolbar;
    e?.events.removeEventListener?.(HabboToolbarEvent.const_85, this._r63e257ddc2d187);
    let r = [...this._r89f7688b2a17aa.getValues()];
    for (let t of r)
      t != null &&
        (t.reusable
          ? (t.widgetType != null && this._r8da8e62442e9d1._rc1d348b71b4a5f(t.widgetType, t.mainWindow),
            t.release())
          : t.dispose());
    (this._r89f7688b2a17aa.dispose(),
      this._r48a712a6cc567f.dispose(),
      this._r73bca556141932.dispose(),
      (this._re5d102f32189a0 = []),
      (this._r1ec91c8eb23fbe = []),
      this._r8da8e62442e9d1.dispose(),
      (this._r7525989fac4fc0 = null),
      (this._r379b56259c1890 = null),
      this._re8d7d419cfca92?.dispose(),
      (this._re8d7d419cfca92 = null),
      (this._r538b9ccf4a93b8 = null),
      (this._r8141441796871d = null));
  }
  createWidget(e, r = !1, t = null) {
    if (
      this._rcea8ec59decf7f == null ||
      this._r89f7688b2a17aa.getValue(e) != null ||
      (this.var_61?._r4f0e849e5080b6 && !this._r1f3788bc027e74(e))
    )
      return null;
    let i = e === RoomWidgetEnum.CHAT_INPUT_WIDGET,
      s = null;
    (t == null ? (s = this._r8c33dbe1fd230d(e)) : (s = t?._r16afd202c77c85 ?? null),
      s != null && ((s.container = this), this._rbcf9a7766b59a3(s)));
    let o = t ?? this._rcea8ec59decf7f.createWidget(e, s);
    return o == null
      ? null
      : ((o._r1515e6bde00451 = this),
        o.registerUpdateEvents(this._events),
        (o.reusable = r),
        (o.widgetType = e),
        this._r89f7688b2a17aa.add(e, o)
          ? (t?.reuse(this),
            this._r8da8e62442e9d1._rbb11c125f45682(e, o.mainWindow),
            i &&
              this._events.dispatchEvent(new RoomWidgetRoomViewUpdateEvent(RoomWidgetRoomViewUpdateEvent.ROOM_VIEW_SIZE_CHANGED, this._r8da8e62442e9d1.roomViewRect)),
            o)
          : (t == null ? o.dispose() : t.release(), null));
  }
  _r5ff682dcaa2d3e(e) {
    let r = this._r89f7688b2a17aa.remove(e);
    r != null && (this._r8da8e62442e9d1._rc1d348b71b4a5f(e, r.mainWindow), r.dispose());
  }
  _r571a3c8f0b3e23(e) {
    return this._r89f7688b2a17aa.getValue(e) ?? null;
  }
  RoomWidgetLetUserInMessage(e) {
    e.type === pm.const_85 && this._r4702111275bd5c();
    let r = this._r48a712a6cc567f.getValue(e.type) ?? null;
    if (r == null) return null;
    for (let t of r) {
      let i = t.RoomWidgetLetUserInMessage(e);
      if (i != null) return i;
    }
    return null;
  }
  _r9b1b0209eb1b5a(e) {
    e.type === Tj.ENABLED &&
      this._r379b56259c1890 != null &&
      this._r10a5ad619e0e1b(this._r379b56259c1890.getDisplayObject());
    let r = this._r73bca556141932.getValue(e.type) ?? null;
    if (r != null)
      for (let t of r) {
        let i = !0;
        ((e.type === RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET || e.type === RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET) && (i = e.widget === t.type),
          i && t._r9b1b0209eb1b5a(e));
      }
  }
  _r159692ae58dbda(e) {
    let r = e,
      t = null,
      i = null,
      s = null;
    switch (r.type) {
      case RoomEngineObjectEvent.SELECTED:
        if (
          (this._r8a89e9d424c229(r) || (t = new RoomWidgetRoomObjectUpdateEvent(RoomWidgetRoomObjectUpdateEvent.const_1209, r.objectId, r.category, r.roomId)),
          this._r34a81f64eba4e2 != null && r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
        ) {
          let o = this.var_61?.getUserDataByIndex.userDataManager(r.objectId) ?? null;
          o != null &&
            o.type === RoomObjectTypeEnum.OBJECT_TYPE_USER &&
            this._r34a81f64eba4e2.userSelected(o.webID, o.name);
        }
        break;
      case RoomEngineObjectEvent.ADDED:
        switch (r.category) {
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          case RoomObjectCategoryEnum.const_909:
            s = RoomWidgetRoomObjectUpdateEvent.const_739;
            break;
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
            s = RoomWidgetRoomObjectUpdateEvent.USER_ADDED;
            break;
        }
        s != null && (t = new RoomWidgetRoomObjectUpdateEvent(s, r.objectId, r.category, r.roomId));
        break;
      case RoomEngineObjectEvent.REMOVED:
        switch (r.category) {
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          case RoomObjectCategoryEnum.const_909:
            s = RoomWidgetRoomObjectUpdateEvent.const_912;
            break;
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
            s = RoomWidgetRoomObjectUpdateEvent.USER_REMOVED;
            break;
        }
        s != null && (t = new RoomWidgetRoomObjectUpdateEvent(s, r.objectId, r.category, r.roomId));
        break;
      case RoomEngineObjectEvent.DESELECTED:
        t = new RoomWidgetRoomObjectUpdateEvent(RoomWidgetRoomObjectUpdateEvent.const_734, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineObjectEvent.MOUSE_ENTER:
        t = new RoomWidgetRoomObjectUpdateEvent(RoomWidgetRoomObjectUpdateEvent.OBJECT_ROLL_OVER, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineObjectEvent.MOUSE_LEAVE:
        t = new RoomWidgetRoomObjectUpdateEvent(RoomWidgetRoomObjectUpdateEvent.const_298, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineObjectEvent.PLACED: {
        let o = r;
        t = new RoomWidgetRoomObjectPlaceEvent(
          RoomWidgetRoomObjectPlaceEvent.const_751,
          r.objectId,
          r.category,
          r.roomId,
          o._r8a8bd2d04c661f,
          o.x,
          o.y,
          o.z,
          o.direction,
          o._r176bfeda3ea21e,
          o._rc4f9efa2c236ab,
          o._r8b4764feb43833,
          o._r669a9820d77b11,
          o._r07cbd1ea4ec403,
        );
        break;
      }
      case RoomEngineObjectEvent.REQUEST_MOVE:
        this._rce8d835b0cf05b(r.roomId, r.objectId, r.category) &&
          this._roomEngine?._r9cc46b2b079405(r.objectId, r.category, RoomObjectOperationEnum.OBJECT_MOVE);
        break;
      case RoomEngineObjectEvent.REQUEST_ROTATE:
        this._rce8d835b0cf05b(r.roomId, r.objectId, r.category) &&
          this._roomEngine?._r9cc46b2b079405(r.objectId, r.category, RoomObjectOperationEnum.OBJECT_ROTATE_POSITIVE);
        break;
      case RoomEngineObjectEvent.REQUEST_PICKUP:
        this._roomEngine?._r9cc46b2b079405(r.objectId, r.category, RoomObjectOperationEnum.OBJECT_PICKUP);
        break;
      case RoomEngineToWidgetEvent.REQUEST_CREDITFURNI:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CREDITFURNI_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_STICKIE:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_STICKIE_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_PRESENT:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PRESENT_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_TROPHY:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_TROPHY_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_TEASER:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_TEASER_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_ECOTRONBOX:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ECOTRONBOX_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_DIMMER:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_DIMMER_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_PLACEHOLDER:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PLACEHOLDER_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineRoomAdEvent.FURNI_CLICK:
      case RoomEngineRoomAdEvent.FURNI_DOUBLE_CLICK:
        this._r38c79c8533b3f7(r);
        break;
      case RoomEngineRoomAdEvent.TOOLTIP_SHOW:
      case RoomEngineRoomAdEvent.TOOLTIP_HIDE:
        this._r35e5204072f3e9(r);
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOTHING_CHANGE:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CLOTHING_CHANGE_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_PLAYLIST_EDITOR:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PLAYLIST_EDITOR_WIDGET, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_BADGE_DISPLAY_ENGRAVING:
        i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_BADGE_DISPLAY_ENGRAVING, r.objectId, r.category, r.roomId);
        break;
      case RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_FAILED: {
        let o = this._roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
        if (o != null) {
          let d = o.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_641) ?? -1,
            c = this._sessionDataManager?.userId ?? -1;
          d === c && (i = new RoomWidgetFurniToWidgetMessage(RoomWidgetFurniToWidgetMessage.const_306, r.objectId, r.category, r.roomId));
        }
        break;
      }
      default:
        this._r9b1b0209eb1b5a(e);
        break;
    }
    (i != null && this.RoomWidgetLetUserInMessage(i), t != null && this._events.dispatchEvent(t));
  }
  _r47ff4fbd954e3b(e) {
    let r = null;
    switch (e.type) {
      case RoomEngineEvent.ROOM_ENGINE_NORMAL_MODE:
        r = new RoomWidgetRoomEngineUpdateEvent(RoomWidgetRoomEngineUpdateEvent.NORMAL_MODE, e.roomId);
        break;
      case RoomEngineEvent.ROOM_ENGINE_GAME_MODE:
        r = new RoomWidgetRoomEngineUpdateEvent(RoomWidgetRoomEngineUpdateEvent.GAME_MODE, e.roomId);
        break;
    }
    r != null && this._events.dispatchEvent(r);
  }
  _r6a9eabead89a74(e) {
    let r = this._r8da8e62442e9d1.roomViewRect;
    if (
      r == null ||
      this.var_61 == null ||
      this._windowManager == null ||
      this._roomEngine == null ||
      this._r1ec91c8eb23fbe.indexOf(e) >= 0
    )
      return;
    let t = this.var_61._r4f0e849e5080b6 ? Rd.SCALE_ZOOMED_OUT : Rd.SCALE_ZOOMED_IN,
      i = this._roomEngine._re115c7593c2d32(this.var_61.roomId, e, r.width, r.height, t);
    if (i == null) return;
    let s = this._roomEngine._rcc830c76c83ba6(this.var_61.roomId, e);
    if (s != null) {
      let b = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.ROOM_MIN_X),
        _ = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.ROOM_MAX_X),
        h = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.ROOM_MIN_Y),
        p = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.ROOM_MAX_Y);
      if (!Number.isNaN(b) && !Number.isNaN(_) && !Number.isNaN(h) && !Number.isNaN(p)) {
        let v = (b + _) / 2 + 20 - 1,
          w = (h + p) / 2 + 20 - 1,
          I = Math.sqrt(800) * Math.tan((30 / 180) * Math.PI);
        s.location = new k(v, w, I);
      }
    }
    let o = this._assets?.getAssetByName("room_view_container_xml");
    if (o == null) return;
    let d = this._windowManager.buildFromXML(o.content, 0);
    if (d == null) return;
    ((d.width = r.width), (d.height = r.height));
    let c = d.findChildByName("room_canvas_wrapper");
    if (c == null) return;
    ((this._r379b56259c1890 = c),
      c.setDisplayObject(i),
      this._r10a5ad619e0e1b(i),
      c.addEventListener(u.CLICK, this._r3b41ed54efa94a),
      c.addEventListener(u.DOUBLE_CLICK, this._r3b41ed54efa94a),
      c.addEventListener(u.MOVE, this._r3b41ed54efa94a),
      c.addEventListener(u.DOWN, this._r3b41ed54efa94a),
      c.addEventListener(u.UP, this._r3b41ed54efa94a),
      c.addEventListener(u.UP_OUTSIDE, this._r3b41ed54efa94a),
      c.addEventListener(y.const_755, this._r1ea4e000280dea));
    let f = d.findChildByName("colorizer_wrapper");
    if (f != null) {
      let b = new Sprite();
      ((b.mouseEnabled = !1),
        (b.blendMode = ie.MULTIPLY),
        f.setDisplayObject(b),
        f.addEventListener(y.const_755, this._r6a965b05b9f50a),
        this._rdb9d7e24e77390(f, this._r4b40f13962475a));
    }
    let l = d.findChildByName("background_wrapper");
    if (l != null) {
      let b = new Sprite();
      ((b.mouseEnabled = !1),
        l.setDisplayObject(b),
        l.addEventListener(y.const_755, this._r820806acdeaff0),
        this._rdb9d7e24e77390(l, this._rfee83b070cd785));
    }
    if (this.var_61._r53892118edc559) {
      let b = this._rb7b23a783f9153();
      b != null && ((b.width = d.width), (b.height = d.height), d.addChild(b));
    }
    (this._r8da8e62442e9d1._rdd069f4d54f48d(d), this._r1ec91c8eb23fbe.push(e));
  }
  _r5ee7e8ff14f58f(e) {
    if (this._roomEngine == null || this.var_61 == null) return;
    let r = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.CAMERA_INIT_X),
      t = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.CAMERA_INIT_Y),
      i = this._roomEngine._r9bf46327882f02(this.var_61.roomId, RoomVariableEnum.CAMERA_INIT_Z);
    if (!Number.isNaN(r) && !Number.isNaN(t) && !Number.isNaN(i)) {
      let s = new k(r, t, i);
      (this._roomEngine._r2dbf9f58349954(),
        this._roomEngine._r68e465f48268fd(this.var_61.roomId, e, s, 1));
    }
  }
  _r217cd3481ce5d1() {
    let e = this._r8da8e62442e9d1._radab2f28e7a338();
    if (e == null) return;
    let r = e.findChildByName("spectator_mode_container");
    r != null && (e.removeChild(r), r.dispose());
  }
  _re33892f7466296(e, r) {
    this._r538b9ccf4a93b8?.startTransition(e, r, Date.now());
  }
  _r24506d316d457e(e, r, t) {
    this._r8141441796871d?.startTransition(
      qn.hslToRGB(((e & 255) << 16) + ((r & 255) << 8) + (t & 255)),
      t,
      Date.now(),
    );
  }
  getFirstCanvasId() {
    return this._r1ec91c8eb23fbe.length > 0 ? this._r1ec91c8eb23fbe[0] : 0;
  }
  getRoomViewRect() {
    return this._r8da8e62442e9d1.roomViewRect;
  }
  _rd2fe5d3b54ef12() {
    let e = this._r3526db3748a341();
    return Number.isNaN(e) ? 1 : this._r3b2abc6cbca229(e);
  }
  _ra0983a9ebe293e(e) {
    if (!this._re2055c03d7b98f() || e === 0) return !1;
    let r = this._rd2fe5d3b54ef12();
    return Math.abs(this._r1e09d4d4709f31(r, e) - r) > a._r73ef360e989b77;
  }
  _raf3b0c3735fca6(e) {
    if (!this._re2055c03d7b98f() || e === 0) return;
    let r = this._rd2fe5d3b54ef12(),
      t = this._r1e09d4d4709f31(r, e);
    Math.abs(t - r) <= a._r73ef360e989b77 || this._rf14e510680d98b(t);
  }
  _rf14e510680d98b(e, r = null) {
    this.var_61 == null ||
      this._roomEngine == null ||
      Number.isNaN(e) ||
      !this._roomEngine.getBoolean("zoom.enabled") ||
      ((this._r363b859332578d = this._r4e1eff72b395f1(e)), (this._pivot = r));
  }
  update(e = 0) {
    if (
      !Number.isNaN(this._r363b859332578d) &&
      this._roomEngine != null &&
      this.var_61 != null
    ) {
      let r = this._roomEngine._r3e7c4a46b1689b(this.var_61.roomId, this.getFirstCanvasId()),
        t = this._r9826f2fe476210(r),
        i = this._r9826f2fe476210(this._r363b859332578d),
        s = i - t;
      if (Math.abs(s) <= 0.01)
        (this._roomEngine._rd969872ccb7fc1(
          this.var_61.roomId,
          this.getFirstCanvasId(),
          this._r363b859332578d,
          this._pivot,
          null,
          !1,
          !0,
        ),
          (this._r363b859332578d = Number.NaN));
      else {
        let o = this._r6cbd274e85fc92(t, i, e),
          d = t + (s < 0 ? -Math.min(o, -s) : Math.min(o, s)),
          c = this._r79f40b710df499(d);
        this._roomEngine._rd969872ccb7fc1(
          this.var_61.roomId,
          this.getFirstCanvasId(),
          c,
          this._pivot,
          null,
          !1,
          !0,
        );
      }
    }
    for (let r of this._re5d102f32189a0) r.update();
    this.updateColor();
  }
  _r8ee1ef9b950cc8(e) {
    return this._r89f7688b2a17aa.getValue(e)?.state ?? a._rc70bc36c55d70c;
  }
  _red6812ce45e270(e) {
    this._re5d102f32189a0.indexOf(e) === -1 && this._re5d102f32189a0.push(e);
  }
  _r6d3762cbc9bcf8(e) {
    let r = this._re5d102f32189a0.indexOf(e);
    r >= 0 && this._re5d102f32189a0.splice(r, 1);
  }
  _roomUI(e, r, t, i) {}
  _r233058cd73c8de(e, r) {
    let t = "stageX" in e ? Number(e.stageX) : "clientX" in e ? Number(e.clientX) : 0,
      i = "stageY" in e ? Number(e.stageY) : "clientY" in e ? Number(e.clientY) : 0;
    return _i362ae199666cfb(this._windowManager, t, i, r);
  }
  _rc2337883ff003a(e) {
    return this._r73fd72da7a633d(e) === (this._sessionDataManager?.userId ?? -1);
  }
  _r73fd72da7a633d(e) {
    return e?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_641) ?? -1;
  }
  _r73317cb34ed8fc(e) {
    return (e?.ownerId ?? -1) === (this._sessionDataManager?.userId ?? -1);
  }
  _r9c96bcfe0e3027(e, r) {
    if (this._r1530e52aaf0174) {
      let t = _ia411d8d8194a3a(),
        i = Math.round((t - this._r512bbd8dfe5d08) / 1e3);
      (this._r49621084c4a423 != null &&
        (e
          ? (r && this._r49621084c4a423.trackGoogle("zoomEvent", "out"),
            this._r49621084c4a423.trackGoogle("zoomEnded", "in", i))
          : (r && this._r49621084c4a423.trackGoogle("zoomEvent", "in"),
            this._r49621084c4a423.trackGoogle("zoomEnded", "out", i))),
        (this._r512bbd8dfe5d08 = t));
    }
  }
  _r63e257ddc2d187 = n((e) => {
    e.type === HabboToolbarEvent.const_85 && this._r4702111275bd5c();
  }, "_r63e257ddc2d187");
  _r3b41ed54efa94a = n((e) => {
    if (this._roomEngine == null || this.var_61 == null) return;
    let r = e;
    if (r == null) return;
    r.type === u.DOWN && this._r62becc0ea3c1d0();
    let t = "";
    switch (r.type) {
      case u.CLICK:
        t = _ifd7c1208e3417e.CLICK;
        break;
      case u.DOUBLE_CLICK:
        t = _ifd7c1208e3417e.DOUBLE_CLICK;
        break;
      case u.DOWN:
        t = _ifd7c1208e3417e._r9001c395573374;
        break;
      case u.UP:
      case u.UP_OUTSIDE:
        t = _ifd7c1208e3417e._ra93f33360c3a28;
        break;
      case u.MOVE:
        t = _ifd7c1208e3417e.var_370;
        break;
      default:
        return;
    }
    let i = r.target;
    if (i === r.target && i != null) {
      let s = new E();
      i.getGlobalPosition(s);
      let o = r.stageX - s.x,
        d = r.stageY - s.y;
      (this._roomEngine._r97ed166a6c3d16(this.var_61.roomId),
        this._roomEngine._r0610bde5741b58(
          this._r1ec91c8eb23fbe[0] ?? 0,
          o,
          d,
          t,
          r.altKey,
          r.ctrlKey,
          r.shiftKey,
          r.buttonDown,
        ));
    }
    if (t === _ifd7c1208e3417e.var_370 && this._re8d7d419cfca92 != null) {
      let s = new E(r.stageX, r.stageY);
      (s.offset(-this._re8d7d419cfca92.width / 2, 15), this._re8d7d419cfca92.setGlobalPosition(s));
    }
  }, "_r3b41ed54efa94a");
  _r62becc0ea3c1d0() {
    let e = this._r571a3c8f0b3e23(RoomWidgetEnum.CHAT_INPUT_WIDGET);
    (e instanceof IX && e._r62becc0ea3c1d0(), this._messenger?._r62becc0ea3c1d0());
  }
  _r1ea4e000280dea = n((e) => {
    if (this.var_61 == null || this._roomEngine == null) return;
    let r = e.window;
    r != null &&
      (this._roomEngine.modifyRoomCanvas(
        this.var_61.roomId,
        this._r1ec91c8eb23fbe[0] ?? 0,
        r.width,
        r.height,
      ),
      this._events.dispatchEvent(new RoomWidgetRoomViewUpdateEvent(RoomWidgetRoomViewUpdateEvent.ROOM_VIEW_SIZE_CHANGED, r.rectangle)));
  }, "_r1ea4e000280dea");
  _r6a965b05b9f50a = n((e) => {
    let r = e.target;
    r != null && this._rdb9d7e24e77390(r, this._r4b40f13962475a);
  }, "_r6a965b05b9f50a");
  _r820806acdeaff0 = n((e) => {
    let r = e.target;
    r != null && (this._rdb9d7e24e77390(r, this._rfee83b070cd785), (r.visible = this._rfee83b070cd785 !== 0));
  }, "_r820806acdeaff0");
  _r10a5ad619e0e1b(e) {
    (e.removeEventListener(_ifd7c1208e3417e._r8ea9e83cdee875, this._rdc8bc17350b469),
      this._r379b56259c1890 != null &&
        (this._r379b56259c1890.removeEventListener(u.const_974, this._rdc8bc17350b469),
        this._r379b56259c1890.addEventListener(u.const_974, this._rdc8bc17350b469)));
  }
  _rdc8bc17350b469 = n((e) => {
    if (this._r832ec3b34f849a(e)) {
      (this._roomEngine?._r35fa7b1ad56383(e.delta > 0), e.preventDefault());
      return;
    }
    if (e.ctrlKey && !e.altKey && !e.shiftKey) {
      if (e.delta === 0 || this._r379b56259c1890 == null) return;
      let r = _ia411d8d8194a3a(),
        t = e.delta < 0 ? -1 : 1;
      if (!this._r579031643965f2(e.delta, r)) {
        e.preventDefault();
        return;
      }
      let i = new E();
      this._r379b56259c1890.getGlobalPosition(i);
      let s = Math.trunc(e.stageX - i.x),
        o = Math.trunc(e.stageY - i.y),
        d = this._rd2fe5d3b54ef12(),
        c = this._r1e09d4d4709f31(d, t);
      if (Math.abs(c - d) <= a._r73ef360e989b77) {
        e.preventDefault();
        return;
      }
      ((this._pivot = new E(s, o)),
        this._rf14e510680d98b(c, this._pivot),
        this._rd0a28a8794f391(r),
        e.preventDefault());
    }
  }, "_rdc8bc17350b469");
  _r579031643965f2(e, r) {
    return Math.abs(e) >= a._r3250e982b2fd7f
      ? !0
      : this._r78ff6d51f3b7e4 <= 0 || r - this._r78ff6d51f3b7e4 > a._r0b28763f94276b;
  }
  _rd0a28a8794f391(e) {
    this._r78ff6d51f3b7e4 = e;
  }
  _r832ec3b34f849a(e) {
    if (
      this._roomEngine == null ||
      this.var_61 == null ||
      e == null ||
      e.delta === 0 ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    )
      return !1;
    let r = this._roomEngine._r5dfc2a6a8b7c46(this.var_61.roomId);
    return r == null || r.category !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
      ? !1
      : r.operation === RoomObjectOperationEnum.OBJECT_MOVE || r.operation === RoomObjectOperationEnum.OBJECT_PLACE;
  }
  _r38c79c8533b3f7(e) {
    if (this._roomEngine == null || this.var_61 == null || this._sessionDataManager == null)
      return;
    let r = this._roomEngine._ra1f5cb56d0c2d8(e.roomId, e.objectId, e.category);
    if (r == null) return;
    let i = r.getStringToStringMap()?.getString(RoomObjectVariableEnum.const_601) ?? null;
    if (!(i == null || !i.startsWith("http")))
      switch (e.type) {
        case RoomEngineRoomAdEvent.FURNI_CLICK:
          if (
            (this.var_61._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
            this._sessionDataManager.isAnyRoomController
          )
            return;
          Ae.openWebPage(i);
          break;
        case RoomEngineRoomAdEvent.FURNI_DOUBLE_CLICK:
          if (
            (this.var_61._rea9739215487be ?? 0) < RoomControllerLevelEnum.ROOM_CONTROLLER &&
            !this._sessionDataManager.isAnyRoomController
          )
            return;
          Ae.openWebPage(i);
          break;
      }
  }
  _r35e5204072f3e9(e) {
    if (!(this._roomEngine == null || this._windowManager == null))
      switch (e.type) {
        case RoomEngineRoomAdEvent.TOOLTIP_SHOW: {
          if (this._re8d7d419cfca92 != null) return;
          let r = this._roomEngine._ra1f5cb56d0c2d8(e.roomId, e.objectId, e.category);
          if (r == null) return;
          let t =
            this._localization?.getLocalization(`${r.getType()}.tooltip`, "${ads.roomad.tooltip}") ?? null;
          if (t == null) {
            let s = r.getStringToStringMap()?.getString(RoomObjectVariableEnum.const_601) ?? null;
            s != null && s.startsWith("http") && (t = s);
          }
          if (
            t == null ||
            ((this._re8d7d419cfca92 = this._windowManager.createWindow(
              "room_ad_tooltip",
              t,
              class_2090.const_629,
              class_2025.WINDOW_STYLE_DEFAULT,
              N.const_1323,
            )),
            this._re8d7d419cfca92 == null)
          )
            return;
          (this._re8d7d419cfca92.setParamFlag(N._re3bd61027cfd94, !1),
            (this._re8d7d419cfca92.visible = !0),
            this._re8d7d419cfca92.center());
          break;
        }
        case RoomEngineRoomAdEvent.TOOLTIP_HIDE:
          (this._re8d7d419cfca92?.dispose(), (this._re8d7d419cfca92 = null));
          break;
      }
  }
  _rb7b23a783f9153() {
    let e = this._assets?.getAssetByName("spectator_mode_xml");
    if (e == null || this._windowManager == null) return null;
    let r = this._windowManager.buildFromXML(e.content, 0);
    return r == null
      ? null
      : (this.setBitmap(r.findChildByName("top_left"), "spec_top_left_png"),
        this.setBitmap(r.findChildByName("top_middle"), "spec_top_middle_png"),
        this.setBitmap(r.findChildByName("top_right"), "spec_top_right_png"),
        this.setBitmap(r.findChildByName("middle_left"), "spec_middle_left_png"),
        this.setBitmap(r.findChildByName("middle_right"), "spec_middle_right_png"),
        this.setBitmap(r.findChildByName("bottom_left"), "spec_bottom_left_png"),
        this.setBitmap(r.findChildByName("bottom_middle"), "spec_bottom_middle_png"),
        this.setBitmap(r.findChildByName("bottom_right"), "spec_bottom_right_png"),
        r);
  }
  setBitmap(e, r) {
    let t = e;
    if (t == null || this._assets == null) return;
    let s = this._assets.getAssetByName(r)?.content ?? null;
    s != null && (t.bitmap = s.clone());
  }
  _rd2fde89b84b758 = n((e) => {
    let r = e.getParser();
    if (this.var_61 != null) {
      let t = this.var_61.getUserDataByIndex._rfe3645979731ec(r.botId);
      t != null && (t._r2c56e448071b40 = r._r4ade22e4997f36.concat());
    }
    this._events.dispatchEvent(new em(r.botId, r._r4ade22e4997f36));
  }, "_rd2fde89b84b758");
  _rbdb2a7b3c0e3ff = n((e) => {
    let r = e.getParser();
    this._events.dispatchEvent(new Jp(r.botId));
  }, "_rbdb2a7b3c0e3ff");
  _r8c33dbe1fd230d(e) {
    switch (e) {
      case RoomWidgetEnum.INFOSTAND_WIDGET:
        return new _if38921ddcfa024(this._soundManager?.soundManager ?? null);
      case RoomWidgetEnum.CHAT_INPUT_WIDGET:
        return new MCe();
      case RoomWidgetEnum.ME_MENU_WIDGET:
        return new _ie32516cfa93bc4();
      case RoomWidgetEnum.FURNI_PLACEHOLDER_WIDGET:
        return new _i54e410066cd13f();
      case RoomWidgetEnum.FURNI_CREDIT_WIDGET:
        return new _i9667853c680298();
      case RoomWidgetEnum.FURNI_STICKIE_WIDGET:
        return new _ia988f6899b904d();
      case RoomWidgetEnum.FURNI_PRESENT_WIDGET:
        return new QCe();
      case RoomWidgetEnum.FURNI_TROPHY_WIDGET:
        return new _ia4de0a71b31cb4();
      case RoomWidgetEnum.FURNI_ECOTRONBOX_WIDGET:
        return new _i957fa92898f3ec();
      case RoomWidgetEnum.FURNI_PET_PACKAGE_WIDGET:
        return new PetPackageFurniWidgetHandler();
      case RoomWidgetEnum.DOORBELL:
        return new _ie48b1d7737c635();
      case RoomWidgetEnum.ROOM_QUEUE:
        return new _ideb38a57371232();
      case RoomWidgetEnum.LOADINGBAR:
        return new _iec1e38f428606b();
      case RoomWidgetEnum.POLL:
        return new _i2385b3773e3f75();
      case RoomWidgetEnum.const_328:
        return new _ic95acf034a17b5();
      case RoomWidgetEnum.FURNI_CHOOSER:
        return new _i7c92299dcbbf61();
      case RoomWidgetEnum.USER_CHOOSER:
        return new _iee2ef9c53a9ddd();
      case RoomWidgetEnum.DIMMER:
        return new _i0646423a40ec22();
      case RoomWidgetEnum.FRIEND_REQUEST:
        return new _i8af23fb20a7d10();
      case RoomWidgetEnum.CLOTHING_CHANGE:
        return new FCe();
      case RoomWidgetEnum.MANNEQUIN:
        return new _ida8978e04d483c();
      case RoomWidgetEnum.CONVERSION_TRACKING:
        return new _i87f7316abcc27f();
      case RoomWidgetEnum.AVATAR_INFO:
        return new _if783f98ab3517a();
      case RoomWidgetEnum.PLAYLIST_EDITOR_WIDGET:
        return new _i33a474905b06d5();
      case RoomWidgetEnum.SPAMWALL_POSTIT_WIDGET:
        return new SpamWallPostItWidgetHandler();
      case RoomWidgetEnum.const_65:
        return new class_3320();
      case RoomWidgetEnum.FURNITURE_CONTEXT_MENU: {
        let r = new HCe();
        return ((r.connection = this.var_36), r);
      }
      case RoomWidgetEnum.LOCATION_WIDGET:
        return new _i584ed2dff7febe();
      case RoomWidgetEnum.CAMERA:
        return new CameraWidgetHandler(this);
      case RoomWidgetEnum.ROOM_BACKGROUND_COLOR:
        return new _if87133d90f4986();
      case RoomWidgetEnum.AREA_HIDE:
        return new _i931c587734d43c();
      case RoomWidgetEnum.CUSTOM_USER_NOTIFICATION:
        return new _i5821f8d59735ae();
      case RoomWidgetEnum.FURNI_ACHIEVEMENT_RESOLUTION_ENGRAVING:
        return new OCe();
      case RoomWidgetEnum.FRIEND_FURNI_CONFIRM: {
        let r = new class_2468();
        return ((r.connection = this.var_36), r);
      }
      case RoomWidgetEnum.FRIEND_FURNI_ENGRAVING:
        return new class_2877();
      case RoomWidgetEnum.const_121:
        return new _i368c5b612eb4e1();
      case RoomWidgetEnum.INTERNAL_LINK:
        return new zCe();
      case RoomWidgetEnum.ROOM_LINK:
        return new YCe();
      case RoomWidgetEnum.CUSTOM_STACK_HEIGHT:
        return new _id564e63da488c3();
      case RoomWidgetEnum.RENTABLESPACE:
        return new _i247b0ca1f6c5a5();
      case RoomWidgetEnum.YOUTUBE:
        return new _i3085de0f1bffe8();
      case RoomWidgetEnum.VIMEO:
        return new ZCe();
      case RoomWidgetEnum.ROOM_TOOLS:
        return new RoomToolsWidgetHandler();
      case RoomWidgetEnum.EXTERNAL_IMAGE:
        return new ExternalImageWidgetHandler();
      case RoomWidgetEnum.const_1077:
        return new _i9d4bfb94c10006();
      case RoomWidgetEnum.ROOM_THUMBNAIL_CAMERA:
        return new RoomThumbnailCameraWidgetHandler(this);
      case RoomWidgetEnum.CRAFTING:
        return new CraftingWidgetHandler(this);
      default:
        return null;
    }
  }
  _rbcf9a7766b59a3(e) {
    for (let t of e._rc3479181526e34()) {
      let i = this._r48a712a6cc567f.getValue(t) ?? [];
      (this._r48a712a6cc567f.hasKey(t) || this._r48a712a6cc567f.add(t, i), i.push(e));
    }
    let r = [...e._r8f2a14a26f6017()];
    r.length > 0 && r.push(RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET, RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET);
    for (let t of r) {
      let i = this._r73bca556141932.getValue(t) ?? [];
      (this._r73bca556141932.hasKey(t) || this._r73bca556141932.add(t, i), i.push(e));
    }
  }
  _r1f3788bc027e74(e) {
    switch (e) {
      case RoomWidgetEnum.CHAT_INPUT_WIDGET:
      case RoomWidgetEnum.AVATAR_INFO:
      case RoomWidgetEnum.LOCATION_WIDGET:
        return !0;
      default:
        return !1;
    }
  }
  _rd70b0cf9208d2d(e) {
    if (this._r7525989fac4fc0 == null || this._r7525989fac4fc0.length === 0) return;
    let r = this._r7525989fac4fc0.indexOf(e.contentType);
    (r !== -1 && this._r7525989fac4fc0.splice(r, 1),
      this._r7525989fac4fc0.length === 0 && ((this._r6f4d5bf4ca7b5f = !0), this._ra7af0062f12254()));
  }
  _ra7af0062f12254() {
    return this._roomSessionManager != null && this.var_61 != null && this._r6f4d5bf4ca7b5f
      ? (this._roomSessionManager._rec2a221d0176d5(this.var_61),
        this._r9b1b0209eb1b5a(new RoomWidgetLoadingBarUpdateEvent(RoomWidgetLoadingBarUpdateEvent.HIDE)),
        !0)
      : !1;
  }
  _rce8d835b0cf05b(e, r, t) {
    return (
      (this.var_61?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
      (this._sessionDataManager?.isAnyRoomController ?? !1) ||
      this._rc2337883ff003a(this._roomEngine?._ra1f5cb56d0c2d8(e, r, t) ?? null) ||
      (this._roomEngine?._r60c579076a73f1 ?? !1)
    );
  }
  _r8a89e9d424c229(e) {
    let r = !1,
      t = this.roomEngine?._ra1f5cb56d0c2d8(e.roomId, e.objectId, e.category) ?? null;
    if (t != null) {
      let i = t.getStringToStringMap();
      i != null &&
        i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1314) === 1 &&
        ((r = !0), this._sessionDataManager?.isAnyRoomController && (r = !1));
    }
    return r;
  }
  _r4702111275bd5c() {
    if (!(this.var_61 == null || this._roomEngine == null))
      if (this._roomEngine.getBoolean("zoom.enabled")) {
        let r = this._rd2fe5d3b54ef12() === 1 ? 0.5 : 1;
        this._rf14e510680d98b(r);
      } else {
        let e = this._roomEngine._rcc830c76c83ba6(this.var_61.roomId, this.getFirstCanvasId());
        e != null && (this._r9c96bcfe0e3027(e._re45c1d93943a81(), !0), e._rcd0393dea1d508());
      }
  }
  _r1e09d4d4709f31(e, r) {
    if (Number.isNaN(e) || r === 0) return e;
    if (r > 0) {
      if (e >= a._r6bfa71670b7669[a._r6bfa71670b7669.length - 1] - a._r73ef360e989b77) return e;
      for (let t = 0; t < a._r6bfa71670b7669.length; t++) {
        let i = a._r6bfa71670b7669[t];
        if (i > e + a._r73ef360e989b77) return i;
      }
      return a._r6bfa71670b7669[a._r6bfa71670b7669.length - 1];
    }
    if (e <= a._r6bfa71670b7669[0] + a._r73ef360e989b77) return e;
    for (let t = a._r6bfa71670b7669.length - 1; t >= 0; t--) {
      let i = a._r6bfa71670b7669[t];
      if (i < e - a._r73ef360e989b77) return i;
    }
    return a._r6bfa71670b7669[0];
  }
  _re2055c03d7b98f() {
    return (
      this.var_61 != null &&
      this._roomEngine != null &&
      this._roomEngine != null &&
      this._roomEngine.getBoolean("zoom.enabled")
    );
  }
  _r3526db3748a341() {
    return !this._re2055c03d7b98f() || this.var_61 == null || this._roomEngine == null
      ? Number.NaN
      : Number.isNaN(this._r363b859332578d)
        ? this._roomEngine._r3e7c4a46b1689b(this.var_61.roomId, this.getFirstCanvasId())
        : this._r363b859332578d;
  }
  _r4e1eff72b395f1(e) {
    return Math.max(a._r6bfa71670b7669[0], Math.min(a._r6bfa71670b7669[a._r6bfa71670b7669.length - 1], e));
  }
  _r3b2abc6cbca229(e) {
    let r = a._r6bfa71670b7669[0],
      t = Math.abs(e - r);
    for (let i of a._r6bfa71670b7669) {
      let s = Math.abs(e - i);
      s < t && ((r = i), (t = s));
    }
    return r;
  }
  _r6cbd274e85fc92(e, r, t) {
    let i = Math.abs(r - e),
      s = t > 0 ? Math.min(t, 50) : a._r881aec2fd769d8;
    return Math.min(i, (0.14 * s) / a._r881aec2fd769d8);
  }
  _r9826f2fe476210(e) {
    return Math.log(e) / Math.LN2;
  }
  _r79f40b710df499(e) {
    return Math.pow(2, e);
  }
  updateColor() {
    let e = Date.now();
    (this._r538b9ccf4a93b8?.updateColor(e) &&
      ((this._r4b40f13962475a = this._r538b9ccf4a93b8.color), this._r5ec6515410e036()),
      this._r8141441796871d?.updateColor(e) &&
        ((this._rfee83b070cd785 = this._r8141441796871d.color), this._r60b4c658b67bfb()));
  }
  _r5ec6515410e036() {
    let e = this._r8da8e62442e9d1._radab2f28e7a338();
    if (e == null) return;
    let r = e.getChildByName("colorizer_wrapper");
    r != null && this._rdb9d7e24e77390(r, this._r4b40f13962475a);
  }
  _r60b4c658b67bfb() {
    let e = this._r8da8e62442e9d1._radab2f28e7a338();
    if (e == null) return;
    let r = e.getChildByName("background_wrapper");
    r != null && ((r.visible = this._rfee83b070cd785 !== 0), this._rdb9d7e24e77390(r, this._rfee83b070cd785));
  }
  _r6170b70dc58fa4() {
    let e = this._r8da8e62442e9d1._radab2f28e7a338();
    if (e == null) return;
    let r = e.getChildByName("colorizer_wrapper"),
      t = e.getChildByName("background_wrapper");
    (r != null && this._rdb9d7e24e77390(r, this._r4b40f13962475a),
      t != null &&
        (this._rdb9d7e24e77390(t, this._rfee83b070cd785), (t.visible = this._rfee83b070cd785 !== 0)));
  }
  _rdb9d7e24e77390(e, r) {
    let t = e.getDisplayObject();
    t != null &&
      (t.graphics.clear(),
      t.graphics.beginFill(r),
      t.graphics.drawRect(0, 0, e.width, e.height),
      t.graphics.endFill());
  }
}
