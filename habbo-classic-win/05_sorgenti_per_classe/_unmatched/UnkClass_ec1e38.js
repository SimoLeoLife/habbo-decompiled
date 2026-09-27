// Extracted from HabboAirLauncher.deobf.js, line 332173.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iec1e38f428606b

class {
  static {
    n(this, "UnkClass_ec1e38");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.LOADINGBAR;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomWidgetLoadingBarUpdateEvent.SHOW, RoomWidgetLoadingBarUpdateEvent.HIDE];
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case RoomWidgetLoadingBarUpdateEvent.SHOW:
      case RoomWidgetLoadingBarUpdateEvent.HIDE:
        this._container?.events?.dispatchEvent?.(e);
        break;
    }
  }
  update() {}
}
