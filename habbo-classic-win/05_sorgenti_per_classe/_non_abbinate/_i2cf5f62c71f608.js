// Estratto da HabboAirLauncher.deobf.js, riga 259078.

class {
  static {
    n(this, "_i2cf5f62c71f608");
  }
  _navigator;
  _r8cf90af1fe10c2 = null;
  _r3213277b21adbf = [];
  constructor(e) {
    this._navigator = e;
  }
  _rbcf9d553de266a(e) {
    return this._r8cf90af1fe10c2 == null ? !1 : this._r8cf90af1fe10c2.hasKey(e);
  }
  initialize(e) {
    this._r8cf90af1fe10c2 = new B();
    for (let r of e._rd77a18091f711c) this._r8cf90af1fe10c2.add(r.searchCode, r._r0e79800dc505fe);
  }
  _r02bbc706f6aea8() {
    return this._r8cf90af1fe10c2?.getKeys() ?? [];
  }
  get _rff6faffdb109ff() {
    return this._r3213277b21adbf;
  }
  set _rff6faffdb109ff(e) {
    this._r3213277b21adbf = e;
  }
  isReady() {
    return this._r8cf90af1fe10c2 != null;
  }
}
