// Estratto da HabboAirLauncher.deobf.js, riga 62548.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/prng/Random.as
// Nome offuscato: _ie4f2620020e446

class {
  static {
    n(this, "Random");
  }
  _state;
  _ready = !1;
  _pool = new re();
  name_7 = 0;
  pptr = 0;
  _re21f776be47199 = !1;
  constructor(e = null) {
    let r = e ?? ARC4,
      t = new r();
    for (
      this._state = t, this.name_7 = t._r79579c084e9a0f();
      this.pptr < this.name_7;
    ) {
      let i = Math.floor(65536 * Math.random());
      (this._pool.writeByte(i >>> 8), this._pool.writeByte(i & 255), (this.pptr += 2));
    }
    ((this.pptr = 0), this.seed());
  }
  seed(e = 0) {
    e === 0 && (e = Date.now());
    let r = Array.from(this._pool.toUint8Array());
    ((r[this.pptr++] = ((r[this.pptr - 1] ?? 0) ^ (e & 255)) & 255),
      (r[this.pptr++] = ((r[this.pptr - 1] ?? 0) ^ ((e >> 8) & 255)) & 255),
      (r[this.pptr++] = ((r[this.pptr - 1] ?? 0) ^ ((e >> 16) & 255)) & 255),
      (r[this.pptr++] = ((r[this.pptr - 1] ?? 0) ^ ((e >> 24) & 255)) & 255),
      (this.pptr %= this.name_7),
      (this._pool = re.compress(Uint8Array.from(r))),
      (this._re21f776be47199 = !0));
  }
  _rf826d22f3d80ab() {
    let e = new re(),
      r =
        typeof navigator < "u"
          ? `${navigator.userAgent}|${navigator.platform}|${navigator.language}`
          : typeof process < "u"
            ? `${process.platform}|${process.version}`
            : "unknown";
    (e.writeUnsignedInt(Bi.totalMemory >>> 0),
      e.writeUTF(r),
      e.writeUnsignedInt(_ia411d8d8194a3a() >>> 0),
      e.writeUnsignedInt(Date.now() >>> 0));
    for (let t of Wd._r615ad07097b75f(!0))
      (e.writeUTF(t.fontName), e.writeUTF(t.fontStyle), e.writeUTF(t._rc51bdfc62a7f70));
    for (e.position = 0; e.bytesAvailable >= 4;) this.seed(e.readUnsignedInt());
  }
  nextBytes(e, r) {
    for (; r-- > 0;) e.writeByte(this.nextByte());
  }
  nextByte() {
    return (
      this._ready ||
        (this._re21f776be47199 || this._rf826d22f3d80ab(),
        this._state?.init(this._pool),
        (this._pool.length = 0),
        (this._pool.position = 0),
        (this.pptr = 0),
        (this._ready = !0)),
      this._state?.next() ?? 0
    );
  }
  dispose() {
    let e = Array.from(this._pool.toUint8Array(), () => Math.floor(Math.random() * 256));
    ((this._pool = re.compress(Uint8Array.from(e))),
      (this._pool.length = 0),
      this._state?.dispose(),
      (this._state = null),
      (this.name_7 = 0),
      (this.pptr = 0),
      class_4036.gc());
  }
  toString() {
    return `random-${this._state?.toString() ?? ""}`;
  }
}
