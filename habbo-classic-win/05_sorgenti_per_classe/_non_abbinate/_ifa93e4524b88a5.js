// Estratto da HabboAirLauncher.deobf.js, riga 64036.

class extends _i5b44e54477e1aa {
  static {
    n(this, "_ifa93e4524b88a5");
  }
  constructor(e, r = null) {
    super(e, r);
  }
  encrypt(e) {
    this.padding?.pad(e);
    let r = _i7ecbd892c1ed79(e),
      t = _i7ecbd892c1ed79(this._rbd27a8e2171513());
    for (let i = 0; i < r.length; i += this.blockSize) {
      _i74d56cea21212b(r, i, t, this.blockSize);
      let s = toByteArray__(r.slice(i, i + this.blockSize));
      this.key?.encrypt(s);
      let o = _i7ecbd892c1ed79(s);
      (r.splice(i, o.length, ...o), t.splice(0, t.length, ...o));
    }
    (_i6d98cc79e4bd76(e, r), (e.position = 0));
  }
  decrypt(e) {
    let r = _i7ecbd892c1ed79(e),
      t = _i7ecbd892c1ed79(this._r21aaa1e3857024());
    for (let i = 0; i < r.length; i += this.blockSize) {
      let s = _ida04dcad33227c(e, i, this.blockSize),
        o = toByteArray__(r.slice(i, i + this.blockSize));
      this.key?.decrypt(o);
      let d = _i7ecbd892c1ed79(o);
      (_i74d56cea21212b(d, 0, t, this.blockSize), r.splice(i, d.length, ...d), t.splice(0, t.length, ..._i7ecbd892c1ed79(s)));
    }
    (_i6d98cc79e4bd76(e, r), this.padding?.unpad(e), (e.position = 0));
  }
  toString() {
    return `${this.key?.toString() ?? ""}-cbc`;
  }
}
