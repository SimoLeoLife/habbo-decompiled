// Estratto da HabboAirLauncher.deobf.js, riga 339368.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/campaign/calendar/CalendarItemWiggle.as
// Nome offuscato: _iffe110b74a1377

class a {
  constructor(e) {
    this._window = e;
    this._window != null &&
      ((this._rf31411c64a9d35 = this._window.y),
      (this._window.y -= a.const_221),
      (this.var_382 = new _i05394ecc0c0c4d(a.TIMER_INTERVAL)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._r76ce286f901681),
      this.var_382.start());
  }
  static {
    n(this, "CalendarItemWiggle");
  }
  static TIMER_INTERVAL = 80;
  static const_221 = 10;
  static const_908 = 40;
  static const_1044 = 7;
  var_382 = null;
  var_81 = 1;
  _counter = 0;
  _rf31411c64a9d35 = 0;
  _r76ce286f901681 = n((e) => {
    if (this._window == null) {
      this.dispose();
      return;
    }
    let r = a.const_221 * ((a.const_1044 - this._counter) / a.const_1044),
      t = Math.abs(this._window.y - this._rf31411c64a9d35) / r,
      i = Math.max(2, Math.sin(t) * a.const_908) * this.var_81;
    ((this._window.y += i),
      this.var_81 > 0
        ? this._window.y > this._rf31411c64a9d35 &&
          ((this.var_81 *= -1),
          (this._window.y = this._rf31411c64a9d35),
          (this._counter += 1))
        : this._window.y <= this._rf31411c64a9d35 - r &&
          ((this.var_81 *= -1),
          (this._window.y = this._rf31411c64a9d35 - r),
          (this._counter += 1)),
      this._counter >= a.const_1044 && this.dispose());
  }, "_r76ce286f901681");
  dispose() {
    (this._window != null &&
      ((this._window.y = this._rf31411c64a9d35), (this._window = null)),
      this.var_382 != null &&
        (this.var_382.removeEventListener?.(DeBouncer.addEventListener, this._r76ce286f901681),
        this.var_382.reset(),
        (this.var_382 = null)));
  }
}
