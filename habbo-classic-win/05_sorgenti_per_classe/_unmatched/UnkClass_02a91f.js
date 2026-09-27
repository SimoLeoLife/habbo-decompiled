// Extracted from HabboAirLauncher.deobf.js, line 64178.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i02a91f85137a48

class a {
  static {
    n(this, "UnkClass_02a91f");
  }
  keyBytes;
  _r9851b47bde6819;
  _r15d87a9344ec67;
  constructor(e) {
    ((this.keyBytes = a._r0916694291d7fc(e, 8)),
      (this._r9851b47bde6819 = SOe.default.DES.create({ type: "encrypt", key: this.keyBytes, padding: !1 })),
      (this._r15d87a9344ec67 = SOe.default.DES.create({ type: "decrypt", key: this.keyBytes, padding: !1 })));
  }
  decrypt(e, r = 0) {
    this.transform(this._r15d87a9344ec67, e, r);
  }
  dispose() {
    (this.keyBytes != null && this.keyBytes.fill(0),
      (this.keyBytes = null),
      (this._r9851b47bde6819 = null),
      (this._r15d87a9344ec67 = null),
      class_4036.gc());
  }
  encrypt(e, r = 0) {
    this.transform(this._r9851b47bde6819, e, r);
  }
  _r6a35379c3690c0() {
    return 8;
  }
  toString() {
    return "des";
  }
  static _r0916694291d7fc(e, r) {
    let t = new Uint8Array(r);
    return (t.set(e.toUint8Array().slice(0, r)), t);
  }
  transform(e, r, t) {
    if (e == null) throw new Error("DESKey has been disposed.");
    let i = _i7ecbd892c1ed79(r),
      s = i.slice(t, t + this._r6a35379c3690c0()),
      o = new Array(this._r6a35379c3690c0()).fill(0);
    (e._update(s, 0, o, 0), i.splice(t, o.length, ...o.map((d) => d & 255)), _i6d98cc79e4bd76(r, i));
  }
}
