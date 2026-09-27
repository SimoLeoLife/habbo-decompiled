// Estratto da HabboAirLauncher.deobf.js, riga 63902.

class {
  static {
    n(this, "_i4cf72658265a3b");
  }
  _r9d0ccc645813b1;
  _r556a01e8876e33;
  _rf676010b00be4d;
  constructor(e) {
    ((this._r9d0ccc645813b1 = e.toUint8Array().slice()),
      (this._r556a01e8876e33 = new l__(this._r9d0ccc645813b1, l__.MODE.ECB, l__.PADDING.NULL)),
      (this._rf676010b00be4d = new l__(this._r9d0ccc645813b1, l__.MODE.ECB, l__.PADDING.NULL)));
  }
  decrypt(e, r = 0) {
    this.transform(e, r, "decrypt");
  }
  dispose() {
    (this._r9d0ccc645813b1 != null && this._r9d0ccc645813b1.fill(0),
      (this._r9d0ccc645813b1 = null),
      (this._r556a01e8876e33 = null),
      (this._rf676010b00be4d = null),
      class_4036.gc());
  }
  encrypt(e, r = 0) {
    this.transform(e, r, "encrypt");
  }
  _r6a35379c3690c0() {
    return 8;
  }
  toString() {
    return "blowfish";
  }
  transform(e, r, t) {
    let i = t === "encrypt" ? this._r556a01e8876e33 : this._rf676010b00be4d;
    if (i == null) throw new Error("BlowFishKey has been disposed.");
    let s = _i7ecbd892c1ed79(e),
      o = Uint8Array.from(s.slice(r, r + this._r6a35379c3690c0())),
      d = t === "encrypt" ? i.encode(o) : i.decode(o, l__.TYPE.UINT8_ARRAY);
    (s.splice(r, d.length, ...Array.from(d)), _i6d98cc79e4bd76(e, s));
  }
}
