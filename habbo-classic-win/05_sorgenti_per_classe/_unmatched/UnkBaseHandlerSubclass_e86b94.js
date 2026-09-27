// Extracted from HabboAirLauncher.deobf.js, line 302348.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie86b940d653add

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_e86b94");
  }
  constructor(e, r) {
    (super(e, r), e.addMessageEvent(new class_3627((t) => this._r6930dfb5a1d02a(t))));
  }
  _r6930dfb5a1d02a(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(this._r48494125bd335d);
    r == null ||
      t == null ||
      this.dispatch(
        new RoomSessionPresentEvent(
          RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED,
          t,
          r.classId,
          r.itemType,
          r._raeb033db5aa083,
          r._r2c53800a52f206,
          r._rc6f3ed5751b766,
          r._r176bfeda3ea21e,
          r._r48777043299a0c,
        ),
      );
  }
}
