// Estratto da HabboAirLauncher.deobf.js, riga 170154.

class {
  static {
    n(this, "_ib6e3512f89dd7e");
  }
  var_346 = new Map();
  parse(e) {
    if (e == null) return !1;
    for (let r of _ib5ee1bd09422e6(e, "action")) this.var_346.set(_ifdbe20062cc5b0(r, "id"), new xm(r));
    return !0;
  }
  _r2048f388de3bd3(e) {
    if (e == null) return !1;
    for (let r of _ib5ee1bd09422e6(e, "action")) this.var_346.set(_ifdbe20062cc5b0(r, "id"), new xm(r));
    return !0;
  }
  getAction(e) {
    return this.var_346.get(e.id) ?? null;
  }
  _r1bfe292376adf6(e) {
    return this.getAction(e)?.frameCount ?? 0;
  }
}
