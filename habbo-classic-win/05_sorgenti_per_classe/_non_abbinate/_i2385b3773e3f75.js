// Estratto da HabboAirLauncher.deobf.js, riga 332943.

class {
  static {
    n(this, "_i2385b3773e3f75");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.POLL;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetPollMessage.ANSWER, RoomWidgetPollMessage.REJECT, RoomWidgetPollMessage.START];
  }
  RoomWidgetLetUserInMessage(e) {
    let r = e instanceof RoomWidgetPollMessage ? e : null;
    if (r == null || this._container?._r2eac8239a09fe7 == null) return null;
    switch (e.type) {
      case RoomWidgetPollMessage.START:
        this._container._r2eac8239a09fe7._red9476d85d4b2a(r.id);
        break;
      case RoomWidgetPollMessage.REJECT:
        this._container._r2eac8239a09fe7._r9b5c8fb7c81f37(r.id);
        break;
      case RoomWidgetPollMessage.ANSWER:
        this._container._r2eac8239a09fe7._re4249a848ae2f4(r.id, r._re812cd9299d86c, r._r44ca599613a61a ?? []);
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomSessionPollEvent.OFFER, RoomSessionPollEvent.ERROR, RoomSessionPollEvent.CONTENT];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events == null) return;
    let r = e;
    if (r == null) return;
    let t = null;
    switch (e.type) {
      case RoomSessionPollEvent.OFFER:
        ((t = new RoomWidgetPollUpdateEvent(r.id, RoomWidgetPollUpdateEvent.OFFER)), (t.summary = r.summary), (t.headline = r.headline));
        break;
      case RoomSessionPollEvent.ERROR:
        ((t = new RoomWidgetPollUpdateEvent(r.id, RoomWidgetPollUpdateEvent.ERROR)), (t.summary = r.summary), (t.headline = r.headline));
        break;
      case RoomSessionPollEvent.CONTENT:
        ((t = new RoomWidgetPollUpdateEvent(r.id, RoomWidgetPollUpdateEvent.CONTENT)),
          (t._ra570877b369758 = r._ra570877b369758),
          (t._rcc2456a2f18866 = r._rcc2456a2f18866),
          (t._r7a88d9adae2ebc = r._r7a88d9adae2ebc),
          (t._r062fd979878425 = r._r062fd979878425 ?? []),
          (t._rd4e9d9358ab72e = r._rd4e9d9358ab72e));
        break;
    }
    t != null && this._container.events.dispatchEvent?.(t);
  }
  update() {}
}
