// Estratto da HabboAirLauncher.deobf.js, riga 66590.

class extends Motion {
  static {
    n(this, "_ia15deea422b46b");
  }
  var_2562 = 0;
  _r5436f3b7c08e24;
  constructor(e) {
    (super(null), (this._r5436f3b7c08e24 = e));
  }
  get running() {
    return this.var_894;
  }
  start() {
    (super.start(), (this._complete = !1), (this.var_2562 = _ia411d8d8194a3a()));
  }
  tick(e) {
    ((this._complete = e - this.var_2562 >= this._r5436f3b7c08e24),
      this._complete && this.stop(),
      super.tick(e));
  }
}
