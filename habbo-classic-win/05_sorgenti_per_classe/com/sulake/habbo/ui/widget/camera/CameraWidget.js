// Extracted from HabboAirLauncher.deobf.js, line 305122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraWidget.as
// Obfuscated name: _i39943ef30a7b9b

class extends RoomWidgetBase {
  constructor(r, t, i, s, o, d) {
    super(r, t, i, o);
    this.var_82 = d;
    ((this.handler.widget = this),
      (this._r06d3cedbe752c6 = new xIe(this)),
      this.roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._re8288fe6f9668a),
      this.roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_ZOOMED, this._rb37f6045afd264),
      this.handler._r486c2530d8d4a8(),
      this.handler._r15b2ea2c393fea?.questEngine?._r00a869c7638e8e());
  }
  static {
    n(this, "CameraWidget");
  }
  _r06d3cedbe752c6;
  _re12bb48c492e3b = null;
  get catalog() {
    return this.var_82?.catalog ?? null;
  }
  get component() {
    return this.var_82;
  }
  get container() {
    return this.handler.containerRef;
  }
  get handler() {
    return this._r16afd202c77c85;
  }
  get roomEngine() {
    return this.container?.roomEngine ?? null;
  }
  dispose() {
    this.disposed ||
      (this.roomEngine?.events.removeEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._re8288fe6f9668a),
      this.roomEngine?.events.removeEventListener?.(RoomEngineEvent.ROOM_ZOOMED, this._rb37f6045afd264),
      this._r06d3cedbe752c6?.dispose(),
      (this._r06d3cedbe752c6 = null),
      this._re12bb48c492e3b?.dispose(),
      (this._re12bb48c492e3b = null),
      (this.var_82 = null),
      super.dispose());
  }
  startTakingPhoto(r) {
    if (
      this.roomEngine != null &&
      (this.roomEngine._r3e7c4a46b1689b() < 1 || this.roomEngine.getRoomCanvasScale())
    ) {
      this.windowManager?.alert(
        this.localizations?.getLocalization("camera.zoom.missing.header", "camera.zoom.missing.header") ??
          "",
        this.localizations?.getLocalization("camera.zoom.missing.body", "camera.zoom.missing.body") ?? "",
        0,
        null,
      );
      return;
    }
    (this.var_82?.getProperty("camera.effects.enabled") === "true" &&
      wee.preloadEffects(
        this.var_82.context.configuration?.getProperty("image.library.url") ?? "",
        this.var_82.getProperty("camera.available.effects"),
        this.localizations,
      ),
      this._re12bb48c492e3b?.dispose(),
      (this._re12bb48c492e3b = null),
      this._r06d3cedbe752c6?.toggleVisible(r));
  }
  getXmlWindow(r, t = 1) {
    let i = null;
    try {
      i = this.assets?.getAssetByName(`${r}_xml`) ?? this.assets?.getAssetByName(r) ?? null;
      let s = i;
      return this.windowManager?.buildFromXML(s?.content) ?? null;
    } catch (s) {
      throw (ErrorReportStorage.addDebugData("HabboRoomUI", `Failed to build window ${r}_xml, ${String(i)}`), s);
    }
  }
  snapShotRoomCanvas(r, t, i) {
    let s = this.container?._r2eac8239a09fe7;
    return s == null
      ? !1
      : (this.roomEngine?.roomSession(s.roomId, this.container?.getFirstCanvasId() ?? 0, r, t, i) ?? !1);
  }
  _re3684d2a787efa() {
    this.container?.musicController?.playSound(HabboSoundTypesEnum.CAMERA_SHUTTER);
  }
  _r3d79e28dda1e54(r) {
    ((this._re12bb48c492e3b = new wee(this)), this._re12bb48c492e3b.openPhotoLab(r));
  }
  _r6f4e6334d234fe(r, t = !1) {
    (this._re12bb48c492e3b?.setCaptionText(r),
      t && (this._re12bb48c492e3b?.show(), this._re12bb48c492e3b?._r14eef60056b71e()));
  }
  _r287d1e9611757b() {
    return this._r06d3cedbe752c6?._r287d1e9611757b() ?? new D(0, 0, 0, 0);
  }
  _re8a3d66c63c204() {
    this._re12bb48c492e3b?._rb81b76fb8d08e4();
  }
  _r48a3a22a089836(r) {
    this._re12bb48c492e3b?._r48a3a22a089836(r);
  }
  publishingStatus(r) {
    this._re12bb48c492e3b?.publishingStatus(r);
  }
  competitionStatus(r) {
    this._re12bb48c492e3b?.competitionStatus(r);
  }
  _r118dee08011e08() {
    let r = this._r06d3cedbe752c6?.getRenderRoomMessage() ?? null;
    return r == null
      ? !1
      : (this._re12bb48c492e3b && r._rca12cc817d6209(this._re12bb48c492e3b._r74bfd6dd44b3ff()),
        this._re12bb48c492e3b && r._rff22f2c57b9d83(this._re12bb48c492e3b._r6ce5404507323d()),
        r.compressData(),
        r.isSendable() ? (this.handler._r118dee08011e08(r), !0) : !1);
  }
  release() {
    (super.release(), (this.handler._r15b2ea2c393fea = null));
  }
  reuse(r) {
    (super.reuse(r), (this.handler._r15b2ea2c393fea = r));
  }
  _re8288fe6f9668a = n((r) => {
    this.hide();
  }, "_re8288fe6f9668a");
  _rb37f6045afd264 = n((r) => {
    this.roomEngine != null &&
      (this.roomEngine._r3e7c4a46b1689b() < 1 || this.roomEngine.getRoomCanvasScale()) &&
      this.hide();
  }, "_rb37f6045afd264");
  hide() {
    (this._r06d3cedbe752c6?.hide(), this._re12bb48c492e3b?.dispose(), (this._re12bb48c492e3b = null));
  }
}
