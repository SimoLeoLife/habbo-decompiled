// Estratto da HabboAirLauncher.deobf.js, riga 181837.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/FramerateTracker.as
// Nome offuscato: _i08cb8c42ad2df0

class {
  static {
    n(this, "FramerateTracker");
  }
  _lastReport = 0;
  var_3996 = 0;
  var_841 = 0;
  _r4355bccfdeec0e = 0;
  _r49621084c4a423;
  get frameRate() {
    return Math.round(1e3 / this.var_841);
  }
  constructor(e) {
    this._r49621084c4a423 = e;
  }
  trackUpdate(e, r) {
    if ((this.var_3996++, this.var_3996 === 1))
      ((this.var_841 = e), (this._lastReport = r));
    else {
      let t = Number(this.var_3996);
      this.var_841 = (this.var_841 * (t - 1)) / t + Number(e) / t;
    }
    r - this._lastReport >=
      this._r49621084c4a423.getInteger("tracking.framerate.reportInterval.seconds", 300) * 1e3 &&
      ((this.var_3996 = 0),
      this._r4355bccfdeec0e < this._r49621084c4a423.getInteger("tracking.framerate.maximumEvents", 5) &&
        (this._r49621084c4a423.trackGoogle("performance", "averageFramerate", this.frameRate),
        this._r4355bccfdeec0e++,
        (this._lastReport = r)));
  }
}
