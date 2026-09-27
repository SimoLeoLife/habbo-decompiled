// Extracted from HabboAirLauncher.deobf.js, line 302586.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5a9c2d9986688e

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_5a9c2d");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_2999((t) => this._r74b1a4fea6be84(t))),
      e.addMessageEvent(new UnkMessageEvent_394d4c((t) => this._r9a7619a2e47ae8(t))),
      e.addMessageEvent(new UnkMessageEvent_93d26d((t) => this._r012a216d88af74(t))));
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
