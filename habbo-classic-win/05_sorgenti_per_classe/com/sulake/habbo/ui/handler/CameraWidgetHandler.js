// Extracted from HabboAirLauncher.deobf.js, line 327945.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/CameraWidgetHandler.as
// Obfuscated name: _i8aa60cf7752841

class {
  constructor(e) {
    this.var_1263 = e;
    ((this._rf5d078cb986ce1 = new class_3567(this._r9cf2df3cf37478)),
      (this._r2bfb73649cbfeb = new class_3237(this._re8becf0fe3264f)),
      (this._r8ba4fc1a0eead4 = new class_3103(this._rbd8aa99cb930b1)),
      (this._r2a5fc47adc92fb = new class_3465(this._rfdb41e4b5fc669)),
      (this._r403fe56bd36acf = new class_3468(this._r85dcb9654f4ea0)));
  }
  static {
    n(this, "CameraWidgetHandler");
  }
  _disposed = !1;
  _container = null;
  _rbd902633fb2235 = null;
  var_17 = null;
  _rf5d078cb986ce1;
  _r2bfb73649cbfeb;
  _r8ba4fc1a0eead4;
  _r2a5fc47adc92fb;
  _r403fe56bd36acf;
  var_3820 = 999;
  var_3531 = 999;
  var_3201 = 999;
  get type() {
    return RoomWidgetEnum.CAMERA;
  }
  get disposed() {
    return this._disposed;
  }
  get _r15b2ea2c393fea() {
    return this.var_1263;
  }
  set _r15b2ea2c393fea(e) {
    this.var_1263 = e;
  }
  get _re27c006a73d42e() {
    return this.var_3820;
  }
  get _rfc8c5432c23056() {
    return this.var_3531;
  }
  get _r845c4a32d260e6() {
    return this.var_3201;
  }
  set widget(e) {
    this.var_17 = e;
  }
  get containerRef() {
    return this._container;
  }
  set container(e) {
    (this._container?.toolbar != null &&
      this._container.toolbar.events?.removeEventListener?.(HabboToolbarEvent.CAMERA_TOGGLE, this.onCameraRequested),
      this.unregisterLinkEventTracker(),
      this._container?.connection != null &&
        (this._container.connection.removeMessageEvent(this._rf5d078cb986ce1),
        this._container.connection.removeMessageEvent(this._r2bfb73649cbfeb),
        this._container.connection.removeMessageEvent(this._r8ba4fc1a0eead4),
        this._container.connection.removeMessageEvent(this._r2a5fc47adc92fb),
        this._container.connection.removeMessageEvent(this._r403fe56bd36acf)),
      (this._container = e),
      this._container?.toolbar != null &&
        this._container.toolbar.events?.addEventListener?.(HabboToolbarEvent.CAMERA_TOGGLE, this.onCameraRequested),
      this._r65fce139e8d424(),
      this._container?.connection != null &&
        (this._container.connection.addMessageEvent(this._rf5d078cb986ce1),
        this._container.connection.addMessageEvent(this._r2bfb73649cbfeb),
        this._container.connection.addMessageEvent(this._r8ba4fc1a0eead4),
        this._container.connection.addMessageEvent(this._r2a5fc47adc92fb),
        this._container.connection.addMessageEvent(this._r403fe56bd36acf)));
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  dispose() {
    this._disposed ||
      (this._container?.connection != null &&
        (this._container.connection.removeMessageEvent(this._rf5d078cb986ce1),
        this._container.connection.removeMessageEvent(this._r2bfb73649cbfeb),
        this._container.connection.removeMessageEvent(this._r8ba4fc1a0eead4),
        this._container.connection.removeMessageEvent(this._r2a5fc47adc92fb),
        this._container.connection.removeMessageEvent(this._r403fe56bd36acf)),
      this._container?.toolbar != null &&
        this._container.toolbar.events?.removeEventListener?.(HabboToolbarEvent.CAMERA_TOGGLE, this.onCameraRequested),
      this.unregisterLinkEventTracker(),
      (this._disposed = !0),
      (this._container = null),
      (this.var_1263 = null),
      (this.var_17 = null));
  }
  _r486c2530d8d4a8() {
    this._container?.sessionDataManager?.isPerkAllowed(class_2156.CAMERA) &&
      this._container.connection?.send(new UnkMessageComposer_0args_5cbd2b());
  }
  get linkPattern() {
    return "camera/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 2 || (r[1] === "open" && this._r3f4f81cadb3876(HabboToolbarEvent.CAMERA_LAUNCH_ORIGIN_CHAT));
  }
  _r65fce139e8d424() {
    this._container?.windowManager != null &&
      ((this._rbd902633fb2235 =
        this._container.windowManager instanceof ue ? this._container.windowManager : null),
      this._rbd902633fb2235?.context._r7e43d9f4706607(this));
  }
  unregisterLinkEventTracker() {
    this._rbd902633fb2235 != null &&
      (this._rbd902633fb2235.context._r7485c47d8bd77c(this), (this._rbd902633fb2235 = null));
  }
  _r3f4f81cadb3876(e) {
    if (this._container?.toolbar == null || !this._container.sessionDataManager?.isPerkAllowed(class_2156.CAMERA))
      return;
    let r = new HabboToolbarEvent(HabboToolbarEvent.CAMERA_TOGGLE);
    ((r.iconName = e), this._container.toolbar.events.dispatchEvent?.(r));
  }
  _r85dcb9654f4ea0 = n((e) => {
    let t = e.getParser();
    ((this.var_3820 = t._rdf07c3fa2c1f5f()),
      (this.var_3531 = t._r02613627b3094a()),
      (this.var_3201 = t._rf11106f21cc348()));
  }, "_r85dcb9654f4ea0");
  _re8becf0fe3264f = n((e) => {
    this.var_17?._re8a3d66c63c204();
  }, "_re8becf0fe3264f");
  _rbd8aa99cb930b1 = n((e) => {
    this.var_17?.publishingStatus(e);
  }, "_rbd8aa99cb930b1");
  _rfdb41e4b5fc669 = n((e) => {
    this.var_17?.competitionStatus(e);
  }, "_rfdb41e4b5fc669");
  _r9cf2df3cf37478 = n((e) => {
    let t = e.getParser().url;
    this.var_17?._r48a3a22a089836(t);
  }, "_r9cf2df3cf37478");
  onCameraRequested = n((e) => {
    let r = e;
    r?.type === HabboToolbarEvent.CAMERA_TOGGLE &&
      r.iconName != null &&
      this.var_17?.startTakingPhoto(r.iconName);
  }, "onCameraRequested");
  _r5b93e1b5d387c3() {
    this._container?.connection?.send(new UnkMessageComposer_0args_e4a895());
  }
  _r1d5051665d83b8() {
    this._container?.connection?.send(new UnkMessageComposer_0args_bd28e4());
  }
  _rfaf96754f00688() {
    this._container?.connection?.send(new UnkMessageComposer_0args_caa89f());
  }
  _ra7635edf007435() {
    return this.var_1263 == null
      ? null
      : this.var_1263.roomEngine?.getRenderRoomMessage(
          this.var_17?._r287d1e9611757b() ?? new D(),
          this.var_1263._re204bd4500d72f,
        );
  }
  _r118dee08011e08(e) {
    this._container?.connection?.send(e);
  }
}
