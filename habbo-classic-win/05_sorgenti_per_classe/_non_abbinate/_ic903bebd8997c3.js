// Estratto da HabboAirLauncher.deobf.js, riga 66216.

class extends Motion {
  static {
    n(this, "_ic903bebd8997c3");
  }
  _callback;
  constructor(e) {
    (super(null), (this._callback = e));
  }
  get running() {
    return this.var_894 && this._callback != null;
  }
  tick(e) {
    if ((super.tick(e), !this._callback)) return;
    let r = this._callback;
    ((this._callback = null), r(this));
  }
}
