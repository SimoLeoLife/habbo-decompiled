// Estratto da HabboAirLauncher.deobf.js, riga 59675.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/Profiler.as
// Nome offuscato: _i3bed5e6aff3f32

class a extends ue {
  static {
    n(this, "Profiler");
  }
  static PROFILER_START = "PROFILER_START";
  static PROFILER_STOP = "PROFILER_STOP";
  var_783 = new Map();
  get _rc8e0bf285e50ba() {
    return Na._rc8e0bf285e50ba;
  }
  get _ref2b4418c2a5ff() {
    return Qt.instances;
  }
  get _r1626925f02d157() {
    return Qt.allocatedByteCount;
  }
  get _rc94852c2c1a094() {
    return Bd._ra8aea5ac71b402;
  }
  get _rc1d68f27defce3() {
    return Bd.allocatedByteCount;
  }
  constructor(e) {
    super(e, 0, null);
  }
  dispose() {
    if (!this.disposed) {
      for (let e of this.var_783.values()) e.dispose();
      (this.var_783.clear(), super.dispose());
    }
  }
  gc() {
    Bi.pauseForGCIfCollectionImminent(0.25);
  }
  start() {
    this.events.dispatchEvent?.(new M(a.PROFILER_START, !1, !1));
  }
  stop() {
    this.events.dispatchEvent?.(new M(a.PROFILER_STOP, !1, !1));
  }
  update(e, r) {
    this._rcd4a6a6864ae38(e).update(r);
  }
  getProfilerAgentsInArray() {
    let e = [];
    for (let [r, t] of this.var_783.entries())
      r.disposed ? (t.dispose(), this.var_783.delete(r)) : e.push(t);
    return e;
  }
  _rcd4a6a6864ae38(e) {
    let r = this.var_783.get(e);
    return r ?? this.addProfilerAgentForReceiver(e);
  }
  addProfilerAgentForReceiver(e) {
    if (this.var_783.has(e)) throw new Error("Profiler for receiver already exists!");
    let r = new ProfilerAgent(e);
    return (this.var_783.set(e, r), r);
  }
  _r2afef0a87d1c14(e) {
    this.events.addEventListener?.(a.PROFILER_START, e);
  }
  _rf330ad10263e15(e) {
    this.events.addEventListener?.(a.PROFILER_STOP, e);
  }
  _rd174c63a6821b4(e) {
    this.events.removeEventListener?.(a.PROFILER_START, e);
  }
  _rbd0344f80c4576(e) {
    this.events.removeEventListener?.(a.PROFILER_STOP, e);
  }
}
