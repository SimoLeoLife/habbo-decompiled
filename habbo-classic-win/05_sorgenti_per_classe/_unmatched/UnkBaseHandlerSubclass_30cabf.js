// Extracted from HabboAirLauncher.deobf.js, line 302564.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i30cabf432b21c9

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_30cabf");
  }
  constructor(e, r) {
    (super(e, r), e.addMessageEvent(new class_3837((t) => this._r1b874c103ce7d5(t))));
  }
  _r1b874c103ce7d5(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(this._r48494125bd335d);
    if (r == null || t == null) return;
    let i = new RoomSessionDimmerPresetsEvent(RoomSessionDimmerPresetsEvent.ROOM_DIMMER_PRESETS, t);
    ((i._ree0dc0daf170e4 = r._ree0dc0daf170e4),
      (i.itemId = r.itemId),
      (i.isOn = r.isOn));
    for (let s = 0; s < r.presetCount; s++) {
      let o = r.getPreset(s);
      o != null && i.storePreset(o.id, o.type, o.color, o.light);
    }
    this.dispatch(i);
  }
}
