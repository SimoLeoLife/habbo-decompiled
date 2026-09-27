// Estratto da HabboAirLauncher.deobf.js, riga 63592.

class {
  static {
    n(this, "_ia630b881ad585d");
  }
  _r9d0ccc645813b1;
  _rab33499146abb7;
  _r5f41a6bcf41a7c;
  constructor(e) {
    ((this._r9d0ccc645813b1 = e.toUint8Array().slice()),
      (this._rab33499146abb7 = e.length),
      (this._r5f41a6bcf41a7c = new vrr.default.ModeOfOperation.ecb(this._r9d0ccc645813b1)));
  }
  decrypt(e, r = 0) {
    this.transform(e, r, "decrypt");
  }
  dispose() {
    (this._r9d0ccc645813b1 != null && this._r9d0ccc645813b1.fill(0),
      (this._r9d0ccc645813b1 = null),
      (this._r5f41a6bcf41a7c = null),
      class_4036.gc());
  }
  encrypt(e, r = 0) {
    this.transform(e, r, "encrypt");
  }
  _r6a35379c3690c0() {
    return 16;
  }
  toString() {
    return `aes${8 * this._rab33499146abb7}`;
  }
  transform(e, r, t) {
    if (this._r5f41a6bcf41a7c == null) throw new Error("AESKey has been disposed.");
    let i = _i7ecbd892c1ed79(e),
      s = Uint8Array.from(i.slice(r, r + this._r6a35379c3690c0())),
      o = t === "encrypt" ? this._r5f41a6bcf41a7c.encrypt(s) : this._r5f41a6bcf41a7c.decrypt(s);
    (i.splice(r, o.length, ...Array.from(o)), _i6d98cc79e4bd76(e, i));
  }
}
