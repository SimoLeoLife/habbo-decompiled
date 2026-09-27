// Extracted from HabboAirLauncher.deobf.js, line 64072.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i11952523c7fcbd

class extends UnkClass_5b44e5 {
  static {
    n(this, "UnkClass_119525");
  }
  constructor(e, r = null) {
    super(e, null);
  }
  encrypt(e) {
    let r = _i7ecbd892c1ed79(e),
      t = _i7ecbd892c1ed79(this._rbd27a8e2171513());
    for (let i = 0; i < r.length; i++) {
      let s = t.slice(),
        o = toByteArray__(t);
      (this.key?.encrypt(o), (r[i] = (r[i] ?? 0) ^ (_i7ecbd892c1ed79(o)[0] ?? 0)));
      for (let d = 0; d < this.blockSize - 1; d++) t[d] = s[d + 1] ?? 0;
      t[this.blockSize - 1] = r[i] ?? 0;
    }
    (_i6d98cc79e4bd76(e, r), (e.position = 0));
  }
  decrypt(e) {
    let r = _i7ecbd892c1ed79(e),
      t = _i7ecbd892c1ed79(this._r21aaa1e3857024());
    for (let i = 0; i < r.length; i++) {
      let s = r[i] ?? 0,
        o = t.slice(),
        d = toByteArray__(t);
      (this.key?.encrypt(d), (r[i] = s ^ (_i7ecbd892c1ed79(d)[0] ?? 0)));
      for (let c = 0; c < this.blockSize - 1; c++) t[c] = o[c + 1] ?? 0;
      t[this.blockSize - 1] = s;
    }
    (_i6d98cc79e4bd76(e, r), (e.position = 0));
  }
  toString() {
    return `${this.key?.toString() ?? ""}-cfb8`;
  }
}
