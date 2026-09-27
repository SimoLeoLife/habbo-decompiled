// Estratto da HabboAirLauncher.deobf.js, riga 181900.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/LatencyTracker.as
// Nome offuscato: _i31caa08e5a4bc6

class {
  static {
    n(this, "LatencyTracker");
  }
  _state = !1;
  _lastTestTime = 0;
  _r642a0e952c4bed = 0;
  _rda5248263c0616 = 0;
  var_5521 = 0;
  _r2137b4a2aaac29 = 0;
  var_4082 = 0;
  _r061abf70010816 = -1;
  _latencyValues = null;
  _r3023b068d82b58 = null;
  _r49621084c4a423;
  constructor(e) {
    this._r49621084c4a423 = e;
  }
  get disposed() {
    return this._r49621084c4a423 == null;
  }
  get latestLatency() {
    return this._r061abf70010816;
  }
  dispose() {
    this.disposed ||
      ((this._state = !1),
      this._r3023b068d82b58?.dispose(),
      (this._r3023b068d82b58 = null),
      (this._latencyValues = null),
      (this._r49621084c4a423 = null));
  }
  init() {
    this._r49621084c4a423 != null &&
      ((this._r642a0e952c4bed = this._r49621084c4a423.getInteger("latencytest.interval", 2e4)),
      (this._rda5248263c0616 = this._r49621084c4a423.getInteger("latencytest.report.index", 100)),
      (this.var_5521 = this._r49621084c4a423.getInteger("latencytest.report.delta", 3)),
      !(this._r642a0e952c4bed < 1) &&
        ((this._r3023b068d82b58 = new B()), (this._latencyValues = []), (this._state = !0)));
  }
  update(e, r) {
    this._state && r - this._r2137b4a2aaac29 > this._r642a0e952c4bed && this.testLatency();
  }
  onPingResponse(e) {
    if (this._r3023b068d82b58 == null || this._latencyValues == null || this._r49621084c4a423 == null)
      return;
    let r = ClassUtils.getParser(e, _ic88079c8b8ede5);
    if (r == null) return;
    let t = this._r3023b068d82b58.getValue(r.requestId);
    if (t == null) return;
    this._r3023b068d82b58.remove(r.requestId);
    let i = _ia411d8d8194a3a() - t;
    if (
      ((this._r061abf70010816 = i),
      this._latencyValues.push(i),
      this._latencyValues.length === this._rda5248263c0616 && this._rda5248263c0616 > 0)
    ) {
      let s = 0,
        o = 0,
        d = 0;
      for (let l of this._latencyValues) s += l;
      let c = Math.trunc(s / this._latencyValues.length);
      for (let l of this._latencyValues) l < c * 2 && ((o += l), d++);
      if (d === 0) {
        this._latencyValues = [];
        return;
      }
      let f = Math.trunc(o / d);
      if (Math.abs(c - this.var_4082) > this.var_5521 || this.var_4082 === 0) {
        this.var_4082 = c;
        let l = new _if3d6cb2d92f53a(c, f, this._latencyValues.length);
        this._r49621084c4a423.send(l);
      }
      this._latencyValues = [];
    }
  }
  testLatency() {
    this._r3023b068d82b58 == null ||
      this._r49621084c4a423 == null ||
      ((this._r2137b4a2aaac29 = _ia411d8d8194a3a()),
      this._r3023b068d82b58.add(this._lastTestTime, this._r2137b4a2aaac29),
      this._r49621084c4a423.send(new class_2569(this._lastTestTime)),
      this._lastTestTime++);
  }
}
