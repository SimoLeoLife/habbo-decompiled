// Extracted from HabboAirLauncher.deobf.js, line 305256.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/RoomThumbnailCameraWidget.as
// Obfuscated name: _i2c96c92a0cad6b

class extends RoomWidgetBase {
  constructor(r, t, i, s, o, d) {
    super(r, t, i, o);
    this.var_82 = d;
    ((this.handler.widget = this),
      this.roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._re8288fe6f9668a),
      this.roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_ZOOMED, this._rb37f6045afd264),
      t.context._r7e43d9f4706607(this));
  }
  static {
    n(this, "RoomThumbnailCameraWidget");
  }
  _window = null;
  var_257 = null;
  dispose() {
    this.disposed ||
      (this.roomEngine?.events.removeEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._re8288fe6f9668a),
      this.roomEngine?.events.removeEventListener?.(RoomEngineEvent.ROOM_ZOOMED, this._rb37f6045afd264),
      this.destroy(),
      this.windowManager && this.windowManager.context._r7485c47d8bd77c(this),
      (this.var_82 = null),
      super.dispose());
  }
  get linkPattern() {
    return "roomThumbnailCamera";
  }
  get handler() {
    return this._r16afd202c77c85;
  }
  get roomEngine() {
    return this.handler.containerRef?.roomEngine ?? null;
  }
  get viewPort() {
    let r = new E(0, 0);
    return (
      this.var_257?.getGlobalPosition(r),
      new D(r.x, r.y, this.var_257?.width ?? 0, this.var_257?.height ?? 0)
    );
  }
  update(r) {
    if (this._window == null || this.var_257 == null) return;
    (this.var_257.bitmap == null &&
      (this.var_257.bitmap = new A(
        this.var_257.width,
        this.var_257.height,
        !1,
        0,
      )),
      this.var_257.bitmap.fillRect(
        this.var_257.bitmap.rect,
        this.handler._r15b2ea2c393fea?._re204bd4500d72f ?? 0,
      ));
    let t = new E(0, 0);
    this.var_257.getGlobalPosition(t);
    let i = new Pe();
    i.translate(-t.x, -t.y);
    let s = this.handler.containerRef?._r2eac8239a09fe7;
    s != null &&
      (this.roomEngine?.roomSession(
        s.roomId,
        this.handler.containerRef?.getFirstCanvasId() ?? 0,
        this.var_257.bitmap,
        i,
        !1,
      ),
      this.var_257.invalidate());
  }
  startTakingPhoto() {
    if (
      this.roomEngine != null &&
      (this.roomEngine._r3e7c4a46b1689b() < 1 || this.roomEngine.getRoomCanvasScale())
    ) {
      this.windowManager?.alert(
        "Camera only works on normal zoom!",
        "Return to normal zoom level and try again!",
        0,
        null,
      );
      return;
    }
    this._window == null && this.createWindow();
  }
  destroy() {
    this._window != null &&
      (this._window.destroy(),
      (this._window = null),
      (this.var_257 = null),
      this.var_82?.removeUpdateReceiver(this));
  }
  _re3684d2a787efa() {
    this.handler.containerRef?.musicController?.playSound(HabboSoundTypesEnum.CAMERA_SHUTTER);
  }
  linkReceived(r) {
    let t = r.split("/");
    t.length >= 2 && t[1] === "open" && this.startTakingPhoto();
  }
  release() {
    (super.release(), (this.handler._r15b2ea2c393fea = null));
  }
  reuse(r) {
    (super.reuse(r), (this.handler._r15b2ea2c393fea = r));
  }
  createWindow() {
    this.destroy();
    let r = this.assets?.getAssetByName("iro_room_thumbnail_camera_xml");
    ((this._window = this.windowManager?.buildFromXML(r?.content)),
      (this.var_257 = this._window?.findChildByName("viewfinder")),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        this._window.center(),
        this.var_82?.registerUpdateReceiver(this, 10)));
  }
  _re8288fe6f9668a = n((r) => {
    this.destroy();
  }, "_re8288fe6f9668a");
  _rb37f6045afd264 = n((r) => {
    this.roomEngine != null &&
      (this.roomEngine._r3e7c4a46b1689b() < 1 || this.roomEngine.getRoomCanvasScale()) &&
      this.destroy();
  }, "_rb37f6045afd264");
  windowProcedure = n((r, t) => {
    if (r.type === u.CLICK)
      switch (t.name) {
        case "button_capture": {
          this._re3684d2a787efa();
          let s = this.handler._ra7635edf007435(this.viewPort);
          s != null && s.isSendable()
            ? (this.handler._r118dee08011e08(s),
              this._window?.findChildByName("button_capture")?.disable(),
              this._window?.findChildByName("button_cancel")?.disable(),
              this.var_82?.removeUpdateReceiver(this))
            : this.windowManager?.alert("${generic.alert.title}", "${camera.alert.too_much_stuff}", 0, null);
          return;
        }
        case "header_button_close":
        case "button_cancel":
          this.destroy();
          break;
      }
  }, "windowProcedure");
}
