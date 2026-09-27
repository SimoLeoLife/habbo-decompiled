// Estratto da HabboAirLauncher.deobf.js, riga 338517.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/music/TraxSampleManager.as
// Nome offuscato: _ie6d1b530e39888

class a {
  constructor(e, r) {
    this._soundManager = e;
    this._r75f14d7e149226 = r;
    this._soundManager?.getBoolean("trax.player.sample.memory.purge.enabled") &&
      (this._r325cdf9021b69b = !0);
  }
  static {
    n(this, "TraxSampleManager");
  }
  static SAMPLE_PROCESS_LIMIT_MS = 60;
  static SAMPLE_LENGTH_MEMORY_LIMIT = 25165823;
  static SAMPLE_LENGTH_PURGE_TO = 16777215;
  _rc73c07f612d74e = new B();
  _loadedSamples = [];
  _traxSamples = new B();
  _redc3c274fddfce = new re();
  _r325cdf9021b69b = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._traxSamples.dispose(),
      this._rc73c07f612d74e.dispose(),
      (this._loadedSamples = []),
      (this._soundManager = null),
      (this._disposed = !0));
  }
  get traxSamples() {
    return this._traxSamples;
  }
  loadSample(e) {
    if (this._soundManager == null) return;
    let r = this._soundManager.getProperty("flash.dynamic.download.url");
    ((r += this._soundManager.getProperty("flash.dynamic.download.samples.template")),
      (r = r.replace(/%typeid%/, e.toString())));
    let t = new _i636490202c0f9a(r),
      i = new Mf();
    (i.addEventListener(M.ComponentDependency, this._r657a0b2a633997),
      i.addEventListener(_i207e0270849f6a._rb9739f8a5177c3, this.ioErrorHandler),
      i.load(t),
      this._rc73c07f612d74e.add(i, e));
  }
  update(e) {
    this.processLoadedSamples();
  }
  _r657a0b2a633997 = n((e) => {
    let r = e.target;
    r != null && this._loadedSamples.push(r);
  }, "_r657a0b2a633997");
  ioErrorHandler = n((e) => {
    this._soundManager != null &&
      (this._soundManager.events.dispatchEvent?.(
        new TraxSongLoadEvent(TraxSongLoadEvent.TRAX_LOAD_FAILED, this._soundManager._rffe14738bb53f1),
      ),
      this._r75f14d7e149226());
  }, "ioErrorHandler");
  _rfc1147f4b79021(e) {
    let r = this._rc73c07f612d74e.getValue(e);
    if (r == null || this._traxSamples.getValue(r) != null) return;
    (this._rc73c07f612d74e.remove(e), this._redc3c274fddfce.clear());
    let t = e.length;
    e.extract(this._redc3c274fddfce, Math.floor(t * 44.1));
    let i = new Ag(this._redc3c274fddfce, r, Ag.SAMPLE_FREQUENCY_44KHZ, Ag.SAMPLE_SCALE_16BIT);
    this._traxSamples.add(r, i);
  }
  processLoadedSamples() {
    if (this._loadedSamples.length === 0) return;
    let e = _ia411d8d8194a3a(),
      r = e;
    for (; r - e < a.SAMPLE_PROCESS_LIMIT_MS && this._loadedSamples.length > 0;) {
      let t = this._loadedSamples.splice(0, 1)[0];
      (t != null && this._rfc1147f4b79021(t), (r = _ia411d8d8194a3a()));
    }
    this._rc73c07f612d74e.length === 0 &&
      (this._soundManager?._rffe14738bb53f1 ?? -1) !== -1 &&
      (this._soundManager?.events.dispatchEvent?.(
        new TraxSongLoadEvent(TraxSongLoadEvent.TRAX_LOAD_COMPLETE, this._soundManager._rffe14738bb53f1),
      ),
      this._r325cdf9021b69b && this._rb18302f765fa81());
  }
  _rb18302f765fa81() {
    let e = 0,
      r = [],
      t = this._soundManager?.soundManager?._r46b43736d4ff01 ?? [];
    for (let i = 0; i < this._traxSamples.length; i++) {
      let s = this._traxSamples.getKey(i) ?? -1,
        o = this._traxSamples.getWithIndex(i);
      o != null && (o.usageCount !== 0 && !t.includes(s) && r.push(o), (e += o.length));
    }
    if (e > a.SAMPLE_LENGTH_MEMORY_LIMIT) {
      let i = [];
      r.sort(this._r2cd5b242b4137e);
      let s = 0,
        o = 0;
      for (; s < e - a.SAMPLE_LENGTH_PURGE_TO && o < r.length;) {
        let d = r[o++];
        ((s += d.length), i.push(d.id));
      }
      for (let d of i) (this._traxSamples.getValue(d)?.dispose(), this._traxSamples.remove(d));
      this._soundManager?.soundManager?._r87f5773640208f(i);
    }
  }
  _r2cd5b242b4137e = n(
    (e, r) =>
      e.usageCount < r.usageCount
        ? -1
        : e.usageCount > r.usageCount
          ? 1
          : e.usageTimeStamp < r.usageTimeStamp
            ? -1
            : e.usageTimeStamp > r.usageTimeStamp
              ? 1
              : 0,
    "_r2cd5b242b4137e",
  );
}
