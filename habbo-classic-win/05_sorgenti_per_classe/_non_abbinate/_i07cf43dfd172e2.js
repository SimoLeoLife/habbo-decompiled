// Estratto da HabboAirLauncher.deobf.js, riga 64272.

class extends _i5b44e54477e1aa {
  static {
    n(this, "_i07cf43dfd172e2");
  }
  constructor(e, r = null) {
    super(e, null);
  }
  encrypt(e) {
    this.core(e, _i7ecbd892c1ed79(this._rbd27a8e2171513()));
  }
  decrypt(e) {
    this.core(e, _i7ecbd892c1ed79(this._r21aaa1e3857024()));
  }
  toString() {
    return `${this.key?.toString() ?? ""}-ofb`;
  }
  core(e, r) {
    let t = _i7ecbd892c1ed79(e),
      i = t.length,
      s = r.slice();
    for (let o = 0; o < t.length; o += this.blockSize) {
      let d = toByteArray__(s);
      this.key?.encrypt(d);
      let c = _i7ecbd892c1ed79(d),
        f = o + this.blockSize < i ? this.blockSize : i - o;
      for (let l = 0; l < f; l++) t[o + l] = (t[o + l] ?? 0) ^ (c[l] ?? 0);
      s.splice(0, s.length, ...c);
    }
    (_i6d98cc79e4bd76(e, t), (e.position = 0));
  }
}
