// Extracted from HabboAirLauncher.deobf.js, line 333008.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ideb38a57371232

class {
  static {
    n(this, "UnkClass_deb38a");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.ROOM_QUEUE;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetRoomQueueMessage.const_1327, RoomWidgetRoomQueueMessage.CHANGE_TO_SPECTATOR_QUEUE, RoomWidgetRoomQueueMessage.CHANGE_TO_VISITOR_QUEUE, RoomWidgetRoomQueueMessage.const_1352];
  }
  RoomWidgetLetUserInMessage(e) {
    if (this._container?._r2eac8239a09fe7 == null || (e instanceof RoomWidgetRoomQueueMessage ? e : null) == null) return null;
    switch (e.type) {
      case RoomWidgetRoomQueueMessage.const_1327:
        this._container._r2eac8239a09fe7.quit();
        break;
      case RoomWidgetRoomQueueMessage.CHANGE_TO_SPECTATOR_QUEUE:
        this._container._r2eac8239a09fe7._rd7a2debfe8e913(lf.const_176);
        break;
      case RoomWidgetRoomQueueMessage.CHANGE_TO_VISITOR_QUEUE:
        this._container._r2eac8239a09fe7._rd7a2debfe8e913(lf.const_189);
        break;
      case RoomWidgetRoomQueueMessage.const_1352:
        this._container.catalog?.openClubCenter();
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [lf.QUEUE_STATUS];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events != null)
      switch (e.type) {
        case lf.QUEUE_STATUS: {
          let r = e;
          if (r == null) return;
          let t = null;
          switch (r._r272e6f0f30b82f) {
            case lf.const_189:
              t = RoomWidgetRoomQueueUpdateEvent.VISITOR_QUEUE_STATUS;
              break;
            case lf.const_176:
              t = RoomWidgetRoomQueueUpdateEvent.SPECTATOR_QUEUE_STATUS;
              break;
          }
          if (t == null) return;
          let i = !0;
          this._container.inventory != null && (i = this._container.inventory.clubPeriods > 0);
          let s = r.queueTypes,
            o = 0,
            d = !1;
          (s.length > 1
            ? i && r.queueTypes.indexOf(lf.const_1111) !== -1
              ? ((o = r.getQueueSize(lf.const_1111) + 1), (d = !0))
              : (o = r.getQueueSize(lf.QUEUE_TYPE_NORMAL) + 1)
            : (o = r.getQueueSize(s[0]) + 1),
            this._container.events.dispatchEvent?.(new RoomWidgetRoomQueueUpdateEvent(t, o, i, r.isActive, d)));
          break;
        }
      }
  }
  update() {}
}
