// Extracted from HabboAirLauncher.deobf.js, line 169516.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibffd1c88b59848

class {
  static {
    n(this, "UnkClass_bffd1c");
  }
  _rff91869ec4c93d = new Map();
  constructor() {}
  _re86089c94947df(e, r) {
    let t = _ifdbe20062cc5b0(r, "name");
    return (this._rff91869ec4c93d.set(t, new C6e(e, r)), !0);
  }
  var_1666(e) {
    return this._rff91869ec4c93d.get(e) ?? null;
  }
  getLayerData(e, r, t) {
    return this._rff91869ec4c93d.get(e)?.getLayerData(r, t) ?? null;
  }
  get animations() {
    return this._rff91869ec4c93d;
  }
}
