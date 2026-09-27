// Estratto da HabboAirLauncher.deobf.js, riga 302541.

class extends BaseHandler {
  static {
    n(this, "_i57dfbe01b00d5b");
  }
  constructor(e, r) {
    (super(e, r), e.addMessageEvent(new class_2027((t) => this._r1ed001467c9ad2(t))));
  }
  _r1ed001467c9ad2(e) {
    let r = e.getParser();
    if (r == null || r._r7e3bf08910bca1) return;
    let t = this.listener?.getSession(this._r48494125bd335d);
    if (t == null) return;
    let i = r.data;
    i != null &&
      ((t.tradeMode = i.tradeMode),
      (t.isGuildRoom = i.habboGroupId !== 0),
      (t._rf742cf771d167a = i._rf742cf771d167a),
      (t._r278a8fdc24e036 = i._rf5545c5fca5ee0),
      (t._r3d55e7f65e7db4 = r._r3d55e7f65e7db4),
      this.dispatch(new RoomSessionPropertyUpdateEvent(RoomSessionPropertyUpdateEvent.ALLOW_PETS, t)),
      this.dispatch(new RoomSessionEvent(RoomSessionEvent.SESSION_ROOM_DATA, t)));
  }
}
