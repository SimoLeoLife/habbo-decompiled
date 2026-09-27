// Estratto da HabboAirLauncher.deobf.js, riga 302586.

class extends BaseHandler {
  static {
    n(this, "_i5a9c2d9986688e");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_2999((t) => this._r74b1a4fea6be84(t))),
      e.addMessageEvent(new _i394d4cfba97538((t) => this._r9a7619a2e47ae8(t))),
      e.addMessageEvent(new _i93d26d58cde8a4((t) => this._r012a216d88af74(t))));
  }
  _r74b1a4fea6be84(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(r.flatId);
    t != null && (t._rea9739215487be = r._rea9739215487be);
  }
  _r9a7619a2e47ae8(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(r.flatId);
    t != null && (t._rea9739215487be = RoomControllerLevelEnum.NOT_CONTROLLER);
  }
  _r012a216d88af74(e) {
    let r = this.listener?.getSession(this._r48494125bd335d);
    r != null && (r.isRoomOwner = !0);
  }
}
