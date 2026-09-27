// Estratto da HabboAirLauncher.deobf.js, riga 64108.

class extends _i5b44e54477e1aa {
  static {
    n(this, "_i525a594d4e1c93");
  }
  constructor(e, r = null) {
    super(e, null);
  }
  encrypt(e) {
    let r = _i7ecbd892c1ed79(e),
      t = r.length,
      i = _i7ecbd892c1ed79(this._rbd27a8e2171513());
    for (let s = 0; s < r.length; s += this.blockSize) {
      let o = toByteArray__(i);
      this.key?.encrypt(o);
      let d = _i7ecbd892c1ed79(o),
        c = s + this.blockSize < t ? this.blockSize : t - s;
      for (let f = 0; f < c; f++) r[s + f] = (r[s + f] ?? 0) ^ (d[f] ?? 0);
      i.splice(0, i.length, ...r.slice(s, s + c));
    }
    (_i6d98cc79e4bd76(e, r), (e.position = 0));
  }
  decrypt(e) {
    let r = _i7ecbd892c1ed79(e),
      t = r.length,
      i = _i7ecbd892c1ed79(this._r21aaa1e3857024());
    for (let s = 0; s < r.length; s += this.blockSize) {
      let o = toByteArray__(i);
      this.key?.encrypt(o);
      let d = _i7ecbd892c1ed79(o),
        c = s + this.blockSize < t ? this.blockSize : t - s,
        f = r.slice(s, s + c);
      for (let l = 0; l < c; l++) r[s + l] = (r[s + l] ?? 0) ^ (d[l] ?? 0);
      i.splice(0, i.length, ...f);
    }
    (_i6d98cc79e4bd76(e, r), (e.position = 0));
  }
  toString() {
    return `${this.key?.toString() ?? ""}-cfb`;
  }
}
