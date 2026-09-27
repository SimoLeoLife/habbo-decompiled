// Estratto da HabboAirLauncher.deobf.js, riga 181993.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/PerformanceTracker.as
// Nome offuscato: _i671b3ce9a6bed0

class a {
  static {
    n(this, "PerformanceTracker");
  }
  _counter = 0;
  var_841 = 0;
  var_2865 = "";
  var_4054 = "";
  var_4757 = "";
  var_5886 = "";
  var_5041 = !1;
  _rdfedac8429036e = null;
  var_2848 = 0;
  var_2952 = 0;
  _lastReport = 0;
  var_3286 = 0;
  var_5689 = 0;
  _r49621084c4a423;
  get _r4d0bf039ebbe72() {
    return this.var_4054;
  }
  get _r6363731f388e21() {
    return this.var_841;
  }
  constructor(e) {
    ((this._r49621084c4a423 = e),
      (this.var_4054 = _ic7f867ad53849e.version),
      (this.var_4757 = _ic7f867ad53849e.os),
      (this.var_5041 = _ic7f867ad53849e.isDebugger));
    try {
      this.var_2865 = String(
        ur.available ? ur.call("window.navigator.userAgent.toString") : "unknown",
      );
    } catch {
      this.var_2865 = "unknown";
    }
    ((this.var_2865 == null ||
      this.var_2865 === "null" ||
      this.var_2865 === "undefined") &&
      (this.var_2865 = "unknown"),
      (this._rdfedac8429036e = new _iacae14d312ed5c()),
      this.updateGarbageMonitor(),
      (this._lastReport = _ia411d8d8194a3a()));
  }
  update(e, r) {
    this.isGarbageMonitored && this.updateGarbageMonitor() != null && this.var_2848++;
    let t = !1;
    if (e > this.slowUpdateLimit) (this.var_2952++, (t = !0));
    else if ((this._counter++, this._counter <= 1)) this.var_841 = e;
    else {
      let i = Number(this._counter);
      this.var_841 = (this.var_841 * (i - 1)) / i + Number(e) / i;
    }
    if (
      r - this._lastReport > this.reportInterval * 1e3 &&
      this.var_3286 < this.reportLimit
    ) {
      let i = Bi.totalMemory,
        s = !0;
      (this.useDistribution &&
        this.var_3286 > 0 &&
        a.differenceInPercents(this.var_5689, this.var_841) < this.meanDevianceLimit &&
        (s = !1),
        (this._lastReport = r),
        (s || t) &&
          ((this.var_5689 = this.var_841),
          this.sendReport(r),
          this.var_3286++));
    }
  }
  updateGarbageMonitor() {
    let e = this._rdfedac8429036e?.list;
    if (e == null || e.length === 0) {
      let r = new GarbageTester("tester");
      return (this._rdfedac8429036e?.insert(r, "tester"), r);
    }
    return null;
  }
  sendReport(e) {
    let r = Math.trunc(e / 1e3),
      t = -1,
      i = Math.trunc(Bi.totalMemory / 1024);
    (this._r49621084c4a423.send(
      new class_2702(
        r,
        this.var_2865,
        this.var_4054,
        this.var_4757,
        this.var_5886,
        this.var_5041,
        i,
        t,
        this.var_2848,
        this.var_841,
        this.var_2952,
      ),
    ),
      (this.var_2848 = 0),
      (this.var_841 = 0),
      (this._counter = 0),
      (this.var_2952 = 0));
  }
  static differenceInPercents(e, r) {
    if (e === r) return 0;
    let t = e,
      i = r;
    return (r > e && ((t = r), (i = e)), 100 * (1 - i / t));
  }
  get isGarbageMonitored() {
    return this._r49621084c4a423.getBoolean("monitor.garbage.collection");
  }
  get slowUpdateLimit() {
    return this._r49621084c4a423.getInteger("performancetest.slowupdatelimit", 1e3);
  }
  get reportInterval() {
    return this._r49621084c4a423.getInteger("performancetest.interval", 60);
  }
  get reportLimit() {
    return this._r49621084c4a423.getInteger("performancetest.reportlimit", 10);
  }
  get meanDevianceLimit() {
    return this._r49621084c4a423.propertyExists("performancetest.distribution.deviancelimit.percent")
      ? Number(this._r49621084c4a423.getProperty("performancetest.distribution.deviancelimit.percent"))
      : 10;
  }
  get useDistribution() {
    return this._r49621084c4a423.getBoolean("performancetest.distribution.enabled");
  }
}
