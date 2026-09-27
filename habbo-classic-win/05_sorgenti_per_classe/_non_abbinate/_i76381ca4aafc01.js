// Estratto da HabboAirLauncher.deobf.js, riga 65113.

class {
  static {
    n(this, "_i76381ca4aafc01");
  }
  _r4fa1d87066b50d;
  constructor(e = 0) {
    this._r4fa1d87066b50d = e >>> 0;
  }
  pad(e) {
    let r = this._r4fa1d87066b50d - ((e.length + 1) % this._r4fa1d87066b50d);
    for (let t = 0; t <= r; t++) e.writeByte(r);
  }
  unpad(e) {
    let r = e.length % this._r4fa1d87066b50d;
    if (r !== 0)
      throw new TLSError("TLSPad::unpad: ByteArray.length isn't a multiple of the blockSize", TLSError.bad_record_mac);
    let t = _i7ecbd892c1ed79(e);
    r = t[t.length - 1] ?? 0;
    for (let i = r; i > 0; i--) {
      let s = t.pop() ?? 0;
      if (r !== s)
        throw new TLSError(
          `TLSPad:unpad: Invalid padding value. expected [${r}], found [${s}]`,
          TLSError.bad_record_mac,
        );
    }
    (t.pop(), _i6d98cc79e4bd76(e, t));
  }
  _rd54f3fcd74c2ca(e) {
    this._r4fa1d87066b50d = e >>> 0;
  }
}
