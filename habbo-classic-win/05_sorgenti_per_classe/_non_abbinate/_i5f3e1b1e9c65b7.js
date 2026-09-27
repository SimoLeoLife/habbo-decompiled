// Estratto da HabboAirLauncher.deobf.js, riga 66233.

class extends Motion {
  static {
    n(this, "_i5f3e1b1e9c65b7");
  }
  _rc866cc83eac57a = [];
  _r039868ef183d41 = [];
  constructor(...e) {
    super(e.length > 0 ? (e[0]?.target ?? null) : null);
    for (let r of e) this._rc866cc83eac57a.push(r);
  }
  start() {
    super.start();
    for (let e of this._rc866cc83eac57a) e.start();
  }
  tick(e) {
    super.tick(e);
    let r = this._r039868ef183d41.pop();
    for (; r;) {
      let t = this._rc866cc83eac57a.indexOf(r);
      (t >= 0 && this._rc866cc83eac57a.splice(t, 1),
        r.running && r.stop(),
        (r = this._r039868ef183d41.pop()));
    }
    for (let t of this._rc866cc83eac57a)
      (t.running && t.tick(e), t.complete && this._r039868ef183d41.push(t));
    if (this._rc866cc83eac57a.length > 0) {
      for (let t of this._rc866cc83eac57a)
        if (((this.var_203 = t.target), this.var_203 && !this.var_203.disposed))
          break;
      this._complete = !1;
      return;
    }
    this._complete = !0;
  }
}
