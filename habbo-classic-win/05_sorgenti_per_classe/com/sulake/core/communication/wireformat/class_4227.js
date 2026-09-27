// Estratto da HabboAirLauncher.deobf.js, riga 157862.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/communication/wireformat/class_4227.as
// Nome offuscato: _ic018fc731c2fff

class {
  constructor(e, r) {
    this._id = e;
    this._data = r;
  }
  static {
    n(this, "class_4227");
  }
  _re6923317176040() {
    return this._id;
  }
  readString() {
    return this._data.readUTF();
  }
  readInteger() {
    return this._data.readInt();
  }
  readLong() {
    let e = this._data.readUnsignedInt(),
      r = this._data.readUnsignedInt(),
      t = (e & 2147483648) !== 0;
    t && ((e = ~e & 2147483647), (r = ~r + 1), r === 0 && (e += 1));
    let i = Number(e) * 4294967296 + r;
    return t ? -i : i;
  }
  readBoolean() {
    return this._data.readBoolean();
  }
  readShort() {
    return this._data.readShort();
  }
  readByte() {
    return this._data.readByte();
  }
  readFloat() {
    return this._data.readFloat();
  }
  readDouble() {
    return this._data.readDouble();
  }
  get bytesAvailable() {
    return this._data.bytesAvailable;
  }
  toString() {
    return `id=${this._id}, pos=${this._data.position}, data=${_i2980048abacee9(this._data)}`;
  }
}
