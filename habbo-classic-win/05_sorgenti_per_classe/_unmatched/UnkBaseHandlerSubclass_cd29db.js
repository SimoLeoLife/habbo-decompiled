// Extracted from HabboAirLauncher.deobf.js, line 302312.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _icd29db278fb83b

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_cd29db");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_3680((t) => this._rd1ea4e8109c90b(t))),
      e.addMessageEvent(new class_3553((t) => this._r181bb5e136ccbc(t))),
      e.addMessageEvent(new UnkMessageEvent_2593ef((t) => this._r66e61efea23b08(t))));
  }
  _r181bb5e136ccbc(e) {
    let r = this.listener?.getSession(this._r48494125bd335d),
      t = e.getParser();
    if (r == null || t == null) return;
    let i = new RoomSessionPollEvent(RoomSessionPollEvent.OFFER, r, t.id);
    ((i.headline = t.headline), (i.summary = t.summary), this.dispatch(i));
  }
  _r66e61efea23b08(e) {
    let r = this.listener?.getSession(this._r48494125bd335d);
    if (r == null || e.getParser() == null) return;
    let t = new RoomSessionPollEvent(RoomSessionPollEvent.ERROR, r, -1);
    ((t.headline = "???"), (t.summary = "???"), this.dispatch(t));
  }
  _rd1ea4e8109c90b(e) {
    let r = this.listener?.getSession(this._r48494125bd335d),
      t = e.getParser();
    if (r == null || t == null) return;
    let i = new RoomSessionPollEvent(RoomSessionPollEvent.CONTENT, r, t.id);
    ((i._ra570877b369758 = t._ra570877b369758),
      (i._rcc2456a2f18866 = t._rcc2456a2f18866),
      (i._r7a88d9adae2ebc = t._r7a88d9adae2ebc),
      (i._r062fd979878425 = t._r062fd979878425),
      (i._rd4e9d9358ab72e = t._rd4e9d9358ab72e),
      this.dispatch(i));
  }
}
