// Estratto da HabboAirLauncher.deobf.js, riga 28145.

class a {
  static {
    n(this, "_i86caf6939b5888");
  }
  _bytes;
  _length;
  _view = null;
  position = 0;
  endian = "bigEndian";
  objectEncoding = 0;
  constructor(e) {
    if (((this._bytes = new Uint8Array(0)), (this._length = 0), e == null)) return;
    if (e instanceof Uint8Array) {
      ((this._bytes = e.slice()), (this._length = e.length));
      return;
    }
    if (_ib52c991d7cdc2c(e)) {
      let t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      ((this._bytes = t.slice()), (this._length = t.length));
      return;
    }
    if (_if646adafd0bb2e(e)) {
      let t = _iaf6dde01beb467(Number(e.length ?? 0)),
        i = new Uint8Array(t);
      for (let s = 0; s < t; s++) i[s] = clampByte_(Number(e[s] ?? 0));
      ((this._bytes = i), (this._length = i.length));
      return;
    }
    let r = Array.from(e, (t) => clampByte_(Number(t)));
    ((this._bytes = Uint8Array.from(r)), (this._length = this._bytes.length));
  }
  static compress(e) {
    return a._r128d0ca86b9cd7(e, !0);
  }
  static _rd6d760d92a9f3f(e) {
    return a._r128d0ca86b9cd7(e, !1);
  }
  static _r2e42fd51a500c0(e) {
    return a._r128d0ca86b9cd7(SRe.encode(e), !1);
  }
  get length() {
    return this._length;
  }
  set length(e) {
    let r = _iaf6dde01beb467(e);
    (r > this._length && (this.ensureCapacity(r), this._bytes.fill(0, this._length, r)),
      (this._length = r),
      this.position > r && (this.position = r));
  }
  get bytesAvailable() {
    return Math.max(0, this.length - this.position);
  }
  [Symbol.iterator]() {
    return this.getBytesView()[Symbol.iterator]();
  }
  push(...e) {
    let r = this._length,
      t = e.length;
    if (t === 0) return this._length;
    this.ensureCapacity(r + t);
    for (let i = 0; i < t; i++) this._bytes[r + i] = clampByte_(e[i] ?? 0);
    return ((this._length = r + t), this._length);
  }
  clear() {
    ((this._bytes = new Uint8Array(0)), (this._length = 0), (this._view = null), (this.position = 0));
  }
  toUint8Array() {
    return this._bytes.slice(0, this._length);
  }
  clone() {
    return a._r128d0ca86b9cd7(this.getBytesView(), !0);
  }
  readByte() {
    return (this.readUnsignedByte() << 24) >> 24;
  }
  readUnsignedByte() {
    let e = this._bytes[this.position] ?? 0;
    return ((this.position += 1), e);
  }
  readBoolean() {
    return this.readUnsignedByte() !== 0;
  }
  readShort() {
    return this.getDataView().getInt16(this.resolveReadOffset(2), _icb7cf4192148af(this.endian));
  }
  readUnsignedShort() {
    return this.getDataView().getUint16(this.resolveReadOffset(2), _icb7cf4192148af(this.endian));
  }
  readUnsignedInt() {
    return this.getDataView().getUint32(this.resolveReadOffset(4), _icb7cf4192148af(this.endian));
  }
  readInt() {
    return this.getDataView().getInt32(this.resolveReadOffset(4), _icb7cf4192148af(this.endian));
  }
  readFloat() {
    return this.getDataView().getFloat32(this.resolveReadOffset(4), _icb7cf4192148af(this.endian));
  }
  readDouble() {
    return this.getDataView().getFloat64(this.resolveReadOffset(8), _icb7cf4192148af(this.endian));
  }
  readUTF() {
    return this.readUTFBytes(this.readShort() & 65535);
  }
  readUTFBytes(e = this.bytesAvailable) {
    return DRe.decode(this.readBytesView(_ia88ef3510b5574(e, this.bytesAvailable)));
  }
  readMultiByte(e, r) {
    return DRe.decode(this.readBytesView(_ia88ef3510b5574(e, this.bytesAvailable)));
  }
  readObject() {
    let e = this.readUTF();
    return e.length === 0 ? null : JSON.parse(e);
  }
  readBytes(e, r = 0, t = 0) {
    if (e instanceof a) {
      let s = e,
        o = _ib26b6a17b00681(t, this.bytesAvailable),
        d = this.readBytesView(o);
      s.assignBytes(r, d);
      return;
    }
    let i = _ib26b6a17b00681(typeof e == "number" ? e : t, this.bytesAvailable);
    return a._r128d0ca86b9cd7(this.readBytesView(i), !0);
  }
  writeByte(e) {
    let r = this.ensureWritableLength(1);
    ((this._bytes[r] = clampByte_(e)), (this.position = r + 1));
  }
  writeBoolean(e) {
    this.writeByte(e ? 1 : 0);
  }
  writeShort(e) {
    let r = this.ensureWritableLength(2);
    (this.getDataView().setInt16(r, e, _icb7cf4192148af(this.endian)), (this.position = r + 2));
  }
  writeUnsignedShort(e) {
    let r = this.ensureWritableLength(2);
    (this.getDataView().setUint16(r, e & 65535, _icb7cf4192148af(this.endian)), (this.position = r + 2));
  }
  writeUnsignedInt(e) {
    let r = this.ensureWritableLength(4);
    (this.getDataView().setUint32(r, e >>> 0, _icb7cf4192148af(this.endian)), (this.position = r + 4));
  }
  writeInt(e) {
    let r = this.ensureWritableLength(4);
    (this.getDataView().setInt32(r, e | 0, _icb7cf4192148af(this.endian)), (this.position = r + 4));
  }
  writeFloat(e) {
    let r = this.ensureWritableLength(4);
    (this.getDataView().setFloat32(r, e, _icb7cf4192148af(this.endian)), (this.position = r + 4));
  }
  writeDouble(e) {
    let r = this.ensureWritableLength(8);
    (this.getDataView().setFloat64(r, e, _icb7cf4192148af(this.endian)), (this.position = r + 8));
  }
  writeUTF(e) {
    let r = SRe.encode(e);
    (this.writeShort(r.length), this.writeRawBytes(r));
  }
  writeUTFBytes(e) {
    this.writeRawBytes(SRe.encode(e));
  }
  writeMultiByte(e, r) {
    this.writeUTFBytes(e);
  }
  writeObject(e) {
    this.writeUTF(JSON.stringify(e ?? null));
  }
  writeBytes(e, r = 0, t = 0) {
    let i = Math.max(0, r | 0),
      s = t > 0 ? Math.min(e.length, i + t) : e.length,
      o = Math.max(0, s - i);
    if (o === 0) return;
    let d = this.ensureWritableLength(o);
    (this._bytes.set(e.getBytesView(i, s), d), (this.position = d + o));
  }
  toString() {
    return DRe.decode(this.getBytesView());
  }
  static _r128d0ca86b9cd7(e, r) {
    let t = Object.create(a.prototype);
    return (
      (t._bytes = r ? e.slice() : e),
      (t._length = e.length),
      (t._view = null),
      (t.position = 0),
      (t.endian = "bigEndian"),
      (t.objectEncoding = 0),
      t
    );
  }
  getBytesView(e = 0, r = this._length) {
    let t = Math.max(0, Math.min(this._length, e | 0)),
      i = Math.max(t, Math.min(this._length, r | 0));
    return this._bytes.subarray(t, i);
  }
  readBytesView(e) {
    let r = Math.min(this.position, this.length),
      t = Math.min(this.length, r + Math.max(0, e)),
      i = this.getBytesView(r, t);
    return ((this.position = t), i);
  }
  ensureWritableLength(e) {
    let r = Math.max(0, this.position | 0),
      t = r + Math.max(0, e);
    return (t > this.length && (this.length = t), r);
  }
  ensureCapacity(e) {
    if (e <= this._bytes.length) return;
    let r = Math.max(8, this._bytes.length);
    for (; r < e;) r *= 2;
    let t = new Uint8Array(r);
    (t.set(this.getBytesView()), (this._bytes = t), (this._view = null));
  }
  assignBytes(e, r) {
    let t = this.position,
      i = Math.max(0, e | 0),
      s = i + r.length;
    (i > this._length && (this.length = i),
      this.ensureCapacity(s),
      this._bytes.set(r, i),
      s > this._length && (this._length = s),
      (this.position = t));
  }
  writeRawBytes(e) {
    let r = e.length,
      t = this.ensureWritableLength(r);
    if (e instanceof Uint8Array) this._bytes.set(e, t);
    else if (_ib52c991d7cdc2c(e)) this._bytes.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t);
    else for (let i = 0; i < r; i++) this._bytes[t + i] = clampByte_(Number(e[i] ?? 0));
    this.position = t + r;
  }
  getDataView() {
    return (
      (this._view == null ||
        this._view.buffer !== this._bytes.buffer ||
        this._view.byteOffset !== this._bytes.byteOffset ||
        this._view.byteLength !== this._bytes.byteLength) &&
        (this._view = new DataView(this._bytes.buffer, this._bytes.byteOffset, this._bytes.byteLength)),
      this._view
    );
  }
  resolveReadOffset(e) {
    let r = Math.min(this.position, this.length),
      t = Math.min(this.length, r + Math.max(0, e));
    if (((this.position = t), t - r < e)) throw new RangeError("End of file was encountered.");
    return r;
  }
}
