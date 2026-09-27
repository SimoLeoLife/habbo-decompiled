// Extracted from HabboAirLauncher.deobf.js, line 302611.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/handler/RoomSessionHandler.as
// Obfuscated name: _ie71d04bf9880a8

class a extends BaseHandler {
  static {
    n(this, "RoomSessionHandler");
  }
  static const_1125 = "RS_CONNECTED";
  static const_505 = "RS_READY";
  static const_1273 = "RS_DISCONNECTED";
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_3106((t) => this._r88cd1a9fbe059e(t))),
      e.addMessageEvent(new class_3481((t) => this._rb50685f3abfa0e(t))),
      e.addMessageEvent(new UnkMessageEvent_333a8d((t) => this._rc68c5eb1f835e9(t))),
      e.addMessageEvent(new class_1929((t) => this.onRoomDisconnected(t))),
      e.addMessageEvent(new class_2420((t) => this._re8f0b93b86b23e(t))),
      e.addMessageEvent(new class_3292((t) => this._r2eb2080a374ad7(t))),
      e.addMessageEvent(new class_2727((t) => this._rd943706220634e(t))));
  }
  _r88cd1a9fbe059e(e) {
    let r = e.getParser();
    r != null && this.listener?._rc86aacb7178a7d(r.flatId, a.const_1125);
  }
  _rb50685f3abfa0e(e) {
    let r = e.getParser(),
      t = r?.userName;
    if (r == null || t == null || t.length === 0) return;
    let i = this.listener?.getSession(r.flatId);
    i != null && this.dispatch(new RoomSessionDoorbellEvent(RoomSessionDoorbellEvent.ACCEPTED, i, t));
  }
  _rc68c5eb1f835e9(e) {
    let r = e.getParser();
    if (r == null) return;
    let t = r.roomId;
    (ErrorReportStorage.addDebugData("RoomID", `Room id: ${t}`),
      this.listener?._r83acee276eb7e4(t, t),
      this.listener?._rc86aacb7178a7d(t, a.const_505));
  }
  _re8f0b93b86b23e(e) {
    let r = e.getParser();
    if (r == null) return;
    let t = r.userName;
    if (t == null || t.length === 0) {
      this.listener?._rc86aacb7178a7d(r.flatId, a.const_1273);
      return;
    }
    let i = this.listener?.getSession(r.flatId);
    i != null && this.dispatch(new RoomSessionDoorbellEvent(RoomSessionDoorbellEvent.REJECTED, i, t));
  }
  onRoomDisconnected(e) {
    (ErrorReportStorage.addDebugData("RoomID", ""),
      this.listener?._rc86aacb7178a7d(this._r48494125bd335d, a.const_1273));
  }
  _r2eb2080a374ad7(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(r.flatId);
    if (r == null || t == null) return;
    let i = r._r20948525010a05;
    for (let s of r.getQueueSetTargets()) {
      let o = r.getQueueSet(s);
      if (o == null) continue;
      let d = new lf(t, o.name, o.target, o.target === i);
      for (let c of o.queueTypes) d.addQueue(c, o.getQueueSize(c));
      this.dispatch(d);
    }
  }
  _rd943706220634e(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(r.flatId);
    t != null && (t._r53892118edc559 = !0);
  }
}
