// Extracted from HabboAirLauncher.deobf.js, line 333453.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic95acf034a17b5

class {
  static {
    n(this, "UnkClass_c95acf");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.const_328;
  }
  set container(e) {
    this._container = e;
  }
  get containerRef() {
    return this._container;
  }
  get _r2eac8239a09fe7() {
    return this._container?._r2eac8239a09fe7 ?? null;
  }
  get roomEngine() {
    return this._container?.roomEngine ?? null;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [UnkRoomWidgetUpdateEventSubclass_dd3213._r18420565440e28, UnkRoomWidgetUpdateEventSubclass_dd3213.FINISHED, UnkRoomWidgetUpdateEventSubclass_dd3213._rc081ce8a57e812];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [UnkRoomSessionEventSubclass_f7db27._r18420565440e28, UnkRoomSessionEventSubclass_f7db27.FINISHED, UnkRoomSessionEventSubclass_f7db27._rc081ce8a57e812];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events == null || this._container._r2eac8239a09fe7 == null) return;
    let r = e;
    if (r == null) return;
    let t = null;
    switch (e.type) {
      case UnkRoomSessionEventSubclass_f7db27._r18420565440e28: {
        ((t = new UnkRoomWidgetUpdateEventSubclass_dd3213(r.id, UnkRoomWidgetUpdateEventSubclass_dd3213._r18420565440e28)),
          (t.value = r.value),
          (t.userId = r.userId),
          (t.answerCounts = r.answerCounts));
        let i = this._container._r2eac8239a09fe7.getUserDataByIndex._r1cacdcfc23a2de(r.userId);
        if (i == null) return;
        let s =
          t.value === "0"
            ? ve._r45e4bbbe68f11d(ve.GESTURE_SAD)
            : ve._r45e4bbbe68f11d(ve.GESTURE_SMILE);
        this._container.roomEngine?._r13a7bbc799ce01(
          this._container._r2eac8239a09fe7.roomId,
          i._r2fdf1f24b1e612,
          s,
        );
        break;
      }
      case UnkRoomSessionEventSubclass_f7db27.FINISHED:
        ((t = new UnkRoomWidgetUpdateEventSubclass_dd3213(r.id, UnkRoomWidgetUpdateEventSubclass_dd3213.FINISHED)),
          (t._r78eb984551f0ac = r._r78eb984551f0ac),
          (t._re812cd9299d86c = r._re812cd9299d86c),
          (t.answerCounts = r.answerCounts));
        break;
      case UnkRoomSessionEventSubclass_f7db27._rc081ce8a57e812:
        ((t = new UnkRoomWidgetUpdateEventSubclass_dd3213(r.id, UnkRoomWidgetUpdateEventSubclass_dd3213._rc081ce8a57e812)),
          (t.question = r.question),
          (t.duration = r.duration),
          (t._r145756ee730438 = r._r145756ee730438),
          (t._re812cd9299d86c = r._re812cd9299d86c),
          (t._r78eb984551f0ac = r._r78eb984551f0ac));
        break;
    }
    t != null && this._container.events.dispatchEvent?.(t);
  }
  update() {}
}
