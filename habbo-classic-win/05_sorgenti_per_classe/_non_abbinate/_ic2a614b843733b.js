// Estratto da HabboAirLauncher.deobf.js, riga 66279.

class extends Motion {
  static {
    n(this, "_ic2a614b843733b");
  }
  var_2562 = 0;
  _duration;
  constructor(e, r) {
    (super(e), (this._complete = !1), (this._duration = r));
  }
  get duration() {
    return this._duration;
  }
  start() {
    (super.start(), (this._complete = !1), (this.var_2562 = _ia411d8d8194a3a()));
  }
  tick(e) {
    let r = (e - this.var_2562) / this._duration;
    r < 1 ? this.update(r) : (this.update(1), (this._complete = !0));
  }
}
