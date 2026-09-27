// Estratto da HabboAirLauncher.deobf.js, riga 64148.

class extends _i5b44e54477e1aa {
  static {
    n(this, "_ifc85f8e45ad121");
  }
  constructor(e, r = null) {
    super(e, r);
  }
  encrypt(e) {
    (this.padding?.pad(e), this.core(e, _i7ecbd892c1ed79(this._rbd27a8e2171513())));
  }
  decrypt(e) {
    (this.core(e, _i7ecbd892c1ed79(this._r21aaa1e3857024())), this.padding?.unpad(e));
  }
  toString() {
    return `${this.key?.toString() ?? ""}-ctr`;
  }
  core(e, r) {
    let t = _i7ecbd892c1ed79(e),
      i = r.slice();
    for (let s = 0; s < t.length; s += this.blockSize) {
      let o = toByteArray__(i);
      this.key?.encrypt(o);
      let d = _i7ecbd892c1ed79(o);
      for (let c = 0; c < this.blockSize && s + c < t.length; c++) t[s + c] = (t[s + c] ?? 0) ^ (d[c] ?? 0);
      _i9f105415217e38(i);
    }
    (_i6d98cc79e4bd76(e, t), (e.position = 0));
  }
}
