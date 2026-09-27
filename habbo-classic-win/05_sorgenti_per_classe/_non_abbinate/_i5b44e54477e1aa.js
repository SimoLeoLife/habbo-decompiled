// Estratto da HabboAirLauncher.deobf.js, riga 63969.

class {
  static {
    n(this, "_i5b44e54477e1aa");
  }
  key;
  padding;
  prng;
  iv;
  _rcc9f924dbdc09f;
  blockSize;
  constructor(e, r = null) {
    ((this.key = e),
      (this.blockSize = e._r6a35379c3690c0()),
      r == null ? (r = new _i6e169014c9a468(this.blockSize)) : r._rd54f3fcd74c2ca(this.blockSize),
      (this.padding = r),
      (this.prng = new Random()),
      (this.iv = null),
      (this._rcc9f924dbdc09f = new re()));
  }
  get IV() {
    return _i872af129ab9ccc(this._rcc9f924dbdc09f);
  }
  set IV(e) {
    ((this.iv = _i872af129ab9ccc(e)),
      this._rcc9f924dbdc09f.clear(),
      this._rcc9f924dbdc09f.writeBytes(this.iv),
      (this._rcc9f924dbdc09f.position = 0));
  }
  _r6a35379c3690c0() {
    return this.key?._r6a35379c3690c0() ?? this.blockSize;
  }
  dispose() {
    (this.iv != null &&
      (_i6d98cc79e4bd76(
        this.iv,
        Array.from({ length: this.iv.length }, () => this.prng?.nextByte() ?? 0),
      ),
      this.iv.clear(),
      (this.iv = null)),
      _i6d98cc79e4bd76(
        this._rcc9f924dbdc09f,
        Array.from({ length: this._rcc9f924dbdc09f.length }, () => this.prng?.nextByte() ?? 0),
      ),
      this._rcc9f924dbdc09f.clear(),
      this.key?.dispose(),
      (this.key = null),
      (this.padding = null),
      this.prng?.dispose(),
      (this.prng = null),
      class_4036.gc());
  }
  _rbd27a8e2171513() {
    let e = new re();
    return (
      this.iv != null ? e.writeBytes(this.iv) : this.prng?.nextBytes(e, this.blockSize),
      (e.position = 0),
      this._rcc9f924dbdc09f.clear(),
      this._rcc9f924dbdc09f.writeBytes(e),
      (this._rcc9f924dbdc09f.position = 0),
      e
    );
  }
  _r21aaa1e3857024() {
    if (this.iv != null) return _i872af129ab9ccc(this.iv);
    throw new Error("an IV must be set before calling decrypt()");
  }
}
