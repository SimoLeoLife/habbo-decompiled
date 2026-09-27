// Extracted from HabboAirLauncher.deobf.js, line 333083.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/RoomThumbnailCameraWidgetHandler.as
// Obfuscated name: _i9c74f73f094a9f

class {
  constructor(e) {
    this.var_1263 = e;
  }
  static {
    n(this, "RoomThumbnailCameraWidgetHandler");
  }
  _container = null;
  var_17 = null;
  _re206f026e55204 = null;
  _disposed = !1;
  get type() {
    return RoomWidgetEnum.ROOM_THUMBNAIL_CAMERA;
  }
  get _r15b2ea2c393fea() {
    return this.var_1263;
  }
  set _r15b2ea2c393fea(e) {
    this.var_1263 = e;
  }
  get disposed() {
    return this._disposed;
  }
  set widget(e) {
    this.var_17 = e;
  }
  set container(e) {
    (this._container?.connection != null &&
      this._re206f026e55204 != null &&
      this._container.connection.removeMessageEvent(this._re206f026e55204),
      (this._container = e),
      (this._re206f026e55204 = new class_2913(this._rb834a410f3c9f8)),
      this._container?.connection?.addMessageEvent(this._re206f026e55204));
  }
  get containerRef() {
    return this._container;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  dispose() {
    this._disposed ||
      (this._container?.connection != null &&
        this._re206f026e55204 != null &&
        this._container.connection.removeMessageEvent(this._re206f026e55204),
      (this._disposed = !0),
      (this._container = null),
      (this.var_1263 = null),
      (this.var_17 = null),
      (this._re206f026e55204 = null));
  }
  _ra7635edf007435(e) {
    return this.var_1263?.roomEngine?.getRenderRoomMessage(
      e,
      this.var_1263._re204bd4500d72f,
      !0,
    );
  }
  _r118dee08011e08(e) {
    this._container?.connection?.send(e);
  }
  _rb834a410f3c9f8 = n((e) => {
    let t = e.getParser();
    (this.var_17?.destroy(),
      t.isOk()
        ? this._container?.windowManager?.alert(
            "${navigator.thumbnail.camera.title}",
            "${navigator.thumbnail.camera.success}",
            HabboAlertDialogFlag.const_427,
            null,
          )
        : t._rf80485a98c5ae3() &&
          this._container?.windowManager?.alert(
            "${generic.alert.title}",
            "${camera.render.count.info}",
            HabboAlertDialogFlag.NULL,
            null,
          ));
  }, "_rb834a410f3c9f8");
}
