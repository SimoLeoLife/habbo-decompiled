// Estratto da HabboAirLauncher.deobf.js, riga 328830.

class {
  static {
    n(this, "_ie48b1d7737c635");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.DOORBELL;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [X8.LET_USER_IN];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e.type === X8.LET_USER_IN) {
      let r = e instanceof X8 ? e : null;
      if (r == null) return null;
      this._container?._r2eac8239a09fe7?._rc284277108cc95(r.userName, r.canEnter);
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomSessionDoorbellEvent.DOORBELL, RoomSessionDoorbellEvent.REJECTED, RoomSessionDoorbellEvent.ACCEPTED];
  }
  _r9b1b0209eb1b5a(e) {
    let r = null;
    switch (e.type) {
      case RoomSessionDoorbellEvent.DOORBELL:
        ((r = e), this._container?.events?.dispatchEvent?.(new RoomWidgetDoorbellEvent(RoomWidgetDoorbellEvent.RINGING, r.userName)));
        break;
      case RoomSessionDoorbellEvent.REJECTED:
        ((r = e), this._container?.events?.dispatchEvent?.(new RoomWidgetDoorbellEvent(RoomWidgetDoorbellEvent.REJECTED, r.userName)));
        break;
      case RoomSessionDoorbellEvent.ACCEPTED:
        ((r = e), this._container?.events?.dispatchEvent?.(new RoomWidgetDoorbellEvent(RoomWidgetDoorbellEvent.ACCEPTED, r.userName)));
        break;
    }
  }
  update() {}
}
