// Extracted from HabboAirLauncher.deobf.js, line 302266.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i795d1126dfec06

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_795d11");
  }
  constructor(e, r) {
    (super(e, r), e.addMessageEvent(new UnkMessageEvent_7f480a((t) => this._ref180d008883da(t))));
  }
  _ref180d008883da(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(this._r48494125bd335d);
    if (r == null || t == null) return;
    let i = null;
    switch (r.errorCode) {
      case GenericErrorEnum.KICKED_BY_OWNER:
        i = RoomSessionErrorMessageEvent.KICKED_BY_OWNER;
        break;
      default:
        return;
    }
    this.dispatch(new RoomSessionErrorMessageEvent(i, t));
  }
}
