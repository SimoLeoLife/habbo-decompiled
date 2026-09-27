// Estratto da HabboAirLauncher.deobf.js, riga 302266.

class extends BaseHandler {
  static {
    n(this, "_i795d1126dfec06");
  }
  constructor(e, r) {
    (super(e, r), e.addMessageEvent(new _i7f480a4bc1b794((t) => this._ref180d008883da(t))));
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
