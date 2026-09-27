// Estratto da HabboAirLauncher.deobf.js, riga 64221.

class {
  static {
    n(this, "_ie025516bb46c53");
  }
  _key;
  _padding;
  constructor(e, r = null) {
    ((this._key = e),
      r == null ? (r = new _i6e169014c9a468(e._r6a35379c3690c0())) : r._rd54f3fcd74c2ca(e._r6a35379c3690c0()),
      (this._padding = r));
  }
  _r6a35379c3690c0() {
    return this._key?._r6a35379c3690c0() ?? 0;
  }
  encrypt(e) {
    (this._padding?.pad(e), (e.position = 0));
    let r = this._key?._r6a35379c3690c0() ?? 0,
      t = new re();
    for (let i = 0; i < e.length; i += r) {
      let s = _ida04dcad33227c(e, i, r);
      (this._key?.encrypt(s), t.writeBytes(s));
    }
    (e.clear(), e.writeBytes(t), (e.position = 0));
  }
  decrypt(e) {
    e.position = 0;
    let r = this._key?._r6a35379c3690c0() ?? 0;
    if (r <= 0 || e.length % r !== 0)
      throw new Error(`ECB mode cipher length must be a multiple of blocksize ${r}`);
    let t = new re();
    for (let i = 0; i < e.length; i += r) {
      let s = _ida04dcad33227c(e, i, r);
      (this._key?.decrypt(s), t.writeBytes(s));
    }
    (this._padding?.unpad(t), e.clear(), e.writeBytes(t), (e.position = 0));
  }
  dispose() {
    (this._key?.dispose(), (this._key = null), (this._padding = null), class_4036.gc());
  }
  toString() {
    return `${this._key?.toString() ?? ""}-ecb`;
  }
}
