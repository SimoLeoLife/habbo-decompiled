// Extracted from HabboAirLauncher.deobf.js, line 303163.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5e6ec866fbd0ed

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_5e6ec8");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_2684((t) => this._rf6a734707e1724(t))),
      e.addMessageEvent(new class_2970((t) => this._r7ee3927289c172(t))),
      e.addMessageEvent(new class_2671((t) => this._r5dfbeb8d23bebd(t))));
  }
  _rf6a734707e1724(e) {
    let r = this.listener?.getSession(this._r48494125bd335d),
      t = e.getParser();
    if (r == null || t == null) return;
    let i = new UnkRoomSessionEventSubclass_f7db27(UnkRoomSessionEventSubclass_f7db27._rc081ce8a57e812, r, t._r78eb984551f0ac);
    ((i.question = t.question),
      (i.duration = t.duration),
      (i._r145756ee730438 = t._r145756ee730438),
      (i._re812cd9299d86c = t._re812cd9299d86c),
      (i._r78eb984551f0ac = t._r78eb984551f0ac),
      this.dispatch(i));
  }
  _r7ee3927289c172(e) {
    let r = this.listener?.getSession(this._r48494125bd335d),
      t = e.getParser();
    if (r == null || t == null) return;
    let i = new UnkRoomSessionEventSubclass_f7db27(UnkRoomSessionEventSubclass_f7db27._r18420565440e28, r, t.userId);
    ((i.value = t.value),
      (i.userId = t.userId),
      t.answerCounts != null && (i.answerCounts = t.answerCounts),
      this.dispatch(i));
  }
  _r5dfbeb8d23bebd(e) {
    let r = this.listener?.getSession(this._r48494125bd335d),
      t = e.getParser();
    if (r == null || t == null) return;
    let i = new UnkRoomSessionEventSubclass_f7db27(UnkRoomSessionEventSubclass_f7db27.FINISHED, r);
    ((i._re812cd9299d86c = t._re812cd9299d86c),
      t.answerCounts != null && (i.answerCounts = t.answerCounts),
      this.dispatch(i));
  }
}
