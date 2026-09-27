// Extracted from HabboAirLauncher.deobf.js, line 170154.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib6e3512f89dd7e

class {
  static {
    n(this, "UnkClass_b6e351__");
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
