// Extracted from HabboAirLauncher.deobf.js, line 50971.

class a {
    static {
      n(this, "IOBuffer");
    }
    buffer;
    byteLength;
    byteOffset;
    length;
    offset;
    lastWrittenByte;
    littleEndian;
    _data;
    _mark;
    _marks;
    constructor(e = j0r, r = {}) {
      let t = !1;
      typeof e == "number" ? (e = new ArrayBuffer(e)) : ((t = !0), (this.lastWrittenByte = e.byteLength));
      let i = r.offset ? r.offset >>> 0 : 0,
        s = e.byteLength - i,
        o = i;
      ((ArrayBuffer.isView(e) || e instanceof a) &&
        (e.byteLength !== e.buffer.byteLength && (o = e.byteOffset + i), (e = e.buffer)),
        t ? (this.lastWrittenByte = s) : (this.lastWrittenByte = 0),
        (this.buffer = e),
        (this.length = s),
        (this.byteLength = s),
        (this.byteOffset = o),
        (this.offset = 0),
        (this.littleEndian = !0),
        (this._data = new DataView(this.buffer, o, s)),
        (this._mark = 0),
        (this._marks = []));
    }
    available(e = 1) {
      return this.offset + e <= this.length;
    }
    isLittleEndian() {
      return this.littleEndian;
    }
    setLittleEndian() {
      return ((this.littleEndian = !0), this);
    }
    isBigEndian() {
      return !this.littleEndian;
    }
    setBigEndian() {
      return ((this.littleEndian = !1), this);
    }
    skip(e = 1) {
      return ((this.offset += e), this);
    }
    back(e = 1) {
      return ((this.offset -= e), this);
    }
    seek(e) {
      return ((this.offset = e), this);
    }
    mark() {
      return ((this._mark = this.offset), this);
    }
    reset() {
      return ((this.offset = this._mark), this);
    }
    pushMark() {
      return (this._marks.push(this.offset), this);
    }
    popMark() {
      let e = this._marks.pop();
      if (e === void 0) throw new Error("Mark stack empty");
      return (this.seek(e), this);
    }
    rewind() {
      return ((this.offset = 0), this);
    }
    ensureAvailable(e = 1) {
      if (!this.available(e)) {
        let t = (this.offset + e) * 2,
          i = new Uint8Array(t);
        (i.set(new Uint8Array(this.buffer)),
          (this.buffer = i.buffer),
          (this.length = t),
          (this.byteLength = t),
          (this._data = new DataView(this.buffer)));
      }
      return this;
    }
    readBoolean() {
      return this.readUint8() !== 0;
    }
    readInt8() {
      return this._data.getInt8(this.offset++);
    }
    readUint8() {
      return this._data.getUint8(this.offset++);
    }
    readByte() {
      return this.readUint8();
    }
    readBytes(e = 1) {
      return this.readArray(e, "uint8");
    }
    readArray(e, r) {
      let t = MNe[r].BYTES_PER_ELEMENT * e,
        i = this.byteOffset + this.offset,
        s = this.buffer.slice(i, i + t);
      if (this.littleEndian === z0r && r !== "uint8" && r !== "int8") {
        let d = new Uint8Array(this.buffer.slice(i, i + t));
        d.reverse();
        let c = new MNe[r](d.buffer);
        return ((this.offset += t), c.reverse(), c);
      }
      let o = new MNe[r](s);
      return ((this.offset += t), o);
    }
    readInt16() {
      let e = this._data.getInt16(this.offset, this.littleEndian);
      return ((this.offset += 2), e);
    }
    readUint16() {
      let e = this._data.getUint16(this.offset, this.littleEndian);
      return ((this.offset += 2), e);
    }
    readInt32() {
      let e = this._data.getInt32(this.offset, this.littleEndian);
      return ((this.offset += 4), e);
    }
    readUint32() {
      let e = this._data.getUint32(this.offset, this.littleEndian);
      return ((this.offset += 4), e);
    }
    readFloat32() {
      let e = this._data.getFloat32(this.offset, this.littleEndian);
      return ((this.offset += 4), e);
    }
    readFloat64() {
      let e = this._data.getFloat64(this.offset, this.littleEndian);
      return ((this.offset += 8), e);
    }
    readBigInt64() {
      let e = this._data.getBigInt64(this.offset, this.littleEndian);
      return ((this.offset += 8), e);
    }
    readBigUint64() {
      let e = this._data.getBigUint64(this.offset, this.littleEndian);
      return ((this.offset += 8), e);
    }
    readChar() {
      return String.fromCharCode(this.readInt8());
    }
    readChars(e = 1) {
      let r = "";
      for (let t = 0; t < e; t++) r += this.readChar();
      return r;
    }
    readUtf8(e = 1) {
      return decode_(this.readBytes(e));
    }
    decodeText(e = 1, r = "utf8") {
      return decode_(this.readBytes(e), r);
    }
    writeBoolean(e) {
      return (this.writeUint8(e ? 255 : 0), this);
    }
    writeInt8(e) {
      return (
        this.ensureAvailable(1),
        this._data.setInt8(this.offset++, e),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeUint8(e) {
      return (
        this.ensureAvailable(1),
        this._data.setUint8(this.offset++, e),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeByte(e) {
      return this.writeUint8(e);
    }
    writeBytes(e) {
      this.ensureAvailable(e.length);
      for (let r = 0; r < e.length; r++) this._data.setUint8(this.offset++, e[r]);
      return (this._updateLastWrittenByte(), this);
    }
    writeInt16(e) {
      return (
        this.ensureAvailable(2),
        this._data.setInt16(this.offset, e, this.littleEndian),
        (this.offset += 2),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeUint16(e) {
      return (
        this.ensureAvailable(2),
        this._data.setUint16(this.offset, e, this.littleEndian),
        (this.offset += 2),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeInt32(e) {
      return (
        this.ensureAvailable(4),
        this._data.setInt32(this.offset, e, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeUint32(e) {
      return (
        this.ensureAvailable(4),
        this._data.setUint32(this.offset, e, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeFloat32(e) {
      return (
        this.ensureAvailable(4),
        this._data.setFloat32(this.offset, e, this.littleEndian),
        (this.offset += 4),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeFloat64(e) {
      return (
        this.ensureAvailable(8),
        this._data.setFloat64(this.offset, e, this.littleEndian),
        (this.offset += 8),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeBigInt64(e) {
      return (
        this.ensureAvailable(8),
        this._data.setBigInt64(this.offset, e, this.littleEndian),
        (this.offset += 8),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeBigUint64(e) {
      return (
        this.ensureAvailable(8),
        this._data.setBigUint64(this.offset, e, this.littleEndian),
        (this.offset += 8),
        this._updateLastWrittenByte(),
        this
      );
    }
    writeChar(e) {
      return this.writeUint8(e.charCodeAt(0));
    }
    writeChars(e) {
      for (let r = 0; r < e.length; r++) this.writeUint8(e.charCodeAt(r));
      return this;
    }
    writeUtf8(e) {
      return this.writeBytes(encode_(e));
    }
    toArray() {
      return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
    }
    getWrittenByteLength() {
      return this.lastWrittenByte - this.byteOffset;
    }
    _updateLastWrittenByte() {
      this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
    }
  }
