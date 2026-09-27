// Estratto da HabboAirLauncher.deobf.js, riga 64339.

class a extends jv {
  static {
    n(this, "_i678ef0e78812e1");
  }
  constructor(e) {
    (super(re.compress(a._redff06eb5d0fa8(e))),
      (this.keyBytes = a._redff06eb5d0fa8(e)),
      (this._r9851b47bde6819 = DOe.default.EDE.create({ type: "encrypt", key: this.keyBytes, padding: !1 })),
      (this._r15d87a9344ec67 = DOe.default.EDE.create({ type: "decrypt", key: this.keyBytes, padding: !1 })));
  }
  dispose() {
    (super.dispose(), class_4036.gc());
  }
  toString() {
    return "3des";
  }
  static _redff06eb5d0fa8(e) {
    let r = e.toUint8Array();
    if (r.length >= 24) return r.slice(0, 24);
    if (r.length >= 16) {
      let t = new Uint8Array(24);
      return (t.set(r.slice(0, 16), 0), t.set(r.slice(0, 8), 16), t);
    }
    return jv._r0916694291d7fc(e, 24);
  }
}
