// Extracted from HabboAirLauncher.deobf.js, line 333341.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9d4bfb94c10006

class {
  static {
    n(this, "UnkClass_9d4bfb");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.const_1077;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetScriptProceedMessage.ANSWER];
  }
  RoomWidgetLetUserInMessage(e) {
    if ((e instanceof RoomWidgetScriptProceedMessage ? e : null) == null) return null;
    switch (e.type) {
      case RoomWidgetScriptProceedMessage.ANSWER:
        this._container?._r2eac8239a09fe7?._r369c096dd8868a();
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
