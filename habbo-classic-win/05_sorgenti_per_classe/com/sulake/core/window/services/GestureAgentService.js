// Estratto da HabboAirLauncher.deobf.js, riga 134522.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/services/GestureAgentService.as
// Nome offuscato: _i06824d0c2c49dc

class {
  static {
    n(this, "GestureAgentService");
  }
  _disposed = !1;
  _working = !1;
  _window = null;
  var_382 = null;
  _flags = 0;
  _callback = null;
  var_2203 = 0;
  var_2327 = 0;
  operate = n((...e) => {
    ((this.var_2203 *= 0.75),
      (this.var_2327 *= 0.75),
      Math.abs(this.var_2203) <= 1 && Math.abs(this.var_2327) <= 1
        ? this._window !== null && this.end(this._window)
        : this._callback !== null && this._callback(this.var_2203, this.var_2327));
  }, "operate");
  clientWindowDestroyed = n((...e) => {
    this._window !== null && this.end(this._window);
  }, "clientWindowDestroyed");
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._window !== null && this.end(this._window), (this._disposed = !0));
  }
  begin(e, r, t, i, s) {
    this._flags = t;
    let o = this._window;
    return (
      this._window !== null && this.end(this._window),
      e.disposed ||
        ((this._window = e),
        this._window.addEventListener(y.const_953, this.clientWindowDestroyed),
        (this._callback = r),
        (this._working = !0),
        (this.var_2203 = i),
        (this.var_2327 = s),
        (this.var_382 = new _i05394ecc0c0c4d(40, 0)),
        this.var_382.addEventListener(DeBouncer.addEventListener, this.operate),
        this.var_382.start()),
      o
    );
  }
  end(e) {
    let r = this._window;
    return (
      this.var_382 !== null &&
        (this.var_382.stop(),
        this.var_382.removeEventListener(DeBouncer.addEventListener, this.operate),
        (this.var_382 = null)),
      this._working &&
        this._window === e &&
        (this._window.disposed ||
          this._window.removeEventListener(y.const_953, this.clientWindowDestroyed),
        (this._window = null),
        (this._callback = null),
        (this._working = !1)),
      r
    );
  }
}
