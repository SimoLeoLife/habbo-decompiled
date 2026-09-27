// Extracted from HabboAirLauncher.deobf.js, line 330912.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3085de0f1bffe8

class {
  static {
    n(this, "UnkClass_3085de");
  }
  _container = null;
  var_17 = null;
  get type() {
    return RoomWidgetEnum.YOUTUBE;
  }
  set container(e) {
    this._container = e;
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this._container == null;
  }
  set widget(e) {
    this.var_17 = e;
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET, RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET];
  }
  _r9b1b0209eb1b5a(e) {
    let r = e;
    if (r == null || this._container?.roomEngine == null) return;
    let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET:
        t != null && this.var_17?.show(t, !1);
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        this.var_17?.hide(t);
        break;
    }
  }
  update() {}
  dispose() {
    this.disposed || ((this._container = null), (this.var_17 = null));
  }
}
