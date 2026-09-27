// Estratto da HabboAirLauncher.deobf.js, riga 169668.

class a {
  static {
    n(this, "_i67496ffc88a00e");
  }
  _id;
  _r3cabb63165642c = new Map();
  _reb25b9bbfcbe42;
  _rd1ac5fef4f2acc;
  _r3080fd9d7d20dd;
  constructor(e) {
    ((this._id = _ifdbe20062cc5b0(e, "id")), (this._r3080fd9d7d20dd = _i68c84906b18730(e, "main")), (this._reb25b9bbfcbe42 = []));
    for (let t of _ib5ee1bd09422e6(e, "avatarset")) {
      let i = new a(t);
      this._r3cabb63165642c.set(_ifdbe20062cc5b0(t, "id"), i);
    }
    for (let t of _ib5ee1bd09422e6(e, "bodypart")) this._reb25b9bbfcbe42.push(_ifdbe20062cc5b0(t, "id"));
    let r = this._reb25b9bbfcbe42.slice();
    for (let t of this._r3cabb63165642c.values()) r.push(...t._r34ad31bc624ae6());
    this._rd1ac5fef4f2acc = r;
  }
  _rcbb085aaf2aed4(e) {
    if (e === this._id) return this;
    for (let r of this._r3cabb63165642c.values()) {
      let t = r._rcbb085aaf2aed4(e);
      if (t != null) return t;
    }
    return null;
  }
  _r34ad31bc624ae6() {
    return this._rd1ac5fef4f2acc.slice();
  }
  get id() {
    return this._id;
  }
  get isMain() {
    if (this._r3080fd9d7d20dd) return !0;
    for (let e of this._r3cabb63165642c.values()) if (e.isMain) return !0;
    return !1;
  }
}
