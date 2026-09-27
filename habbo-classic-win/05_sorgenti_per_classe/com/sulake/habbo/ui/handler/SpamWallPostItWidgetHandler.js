// Extracted from HabboAirLauncher.deobf.js, line 333277.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/SpamWallPostItWidgetHandler.as
// Obfuscated name: _i8a1f54468ce118

class {
  static {
    n(this, "SpamWallPostItWidgetHandler");
  }
  _disposed = !1;
  _container = null;
  _r6c9b10c00d886d = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.SPAMWALL_POSTIT_WIDGET;
  }
  set container(e) {
    (this._rd1b624c7a6e1e8(),
      (this._container = e),
      this._container?.connection != null &&
        ((this._r6c9b10c00d886d = new class_3691(this._r991c9428a1858e)),
        this._container.connection.addMessageEvent(this._r6c9b10c00d886d)));
  }
  dispose() {
    this._disposed || ((this._disposed = !0), this._rd1b624c7a6e1e8(), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetSpamWallPostItEditEvent.const_417, RoomWidgetSpamWallPostItFinishEditingMessage.SEND_POSTIT_DATA];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetSpamWallPostItFinishEditingMessage.SEND_POSTIT_DATA: {
        if (!(e instanceof RoomWidgetSpamWallPostItFinishEditingMessage)) break;
        let r = e;
        this._container?.connection?.send(new class_3503(r.objectId, r.location, r._r90e16a8c48c219, r.text));
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  _r991c9428a1858e = n((e) => {
    let t = e.getParser(),
      i = t.itemId,
      s = t.location,
      o = "post_it",
      d = null;
    if (
      (this._container?.inventory != null && (d = this._container.inventory._reb9eeb9dd127ca(i)),
      d != null && this._container?.roomEngine != null)
    ) {
      let c = this._container.roomEngine._ra7e35114872e5d(d.type);
      c.match("post_it_") != null && (o = c);
    }
    this._container?.events?.dispatchEvent?.(new RoomWidgetSpamWallPostItEditEvent(RoomWidgetSpamWallPostItEditEvent.const_417, i, s, o));
  }, "_r991c9428a1858e");
  _rd1b624c7a6e1e8() {
    (this._container?.connection != null &&
      this._r6c9b10c00d886d != null &&
      this._container.connection.removeMessageEvent(this._r6c9b10c00d886d),
      (this._r6c9b10c00d886d = null));
  }
}
