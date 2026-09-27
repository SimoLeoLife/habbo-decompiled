// Estratto da HabboAirLauncher.deobf.js, riga 64665.

class extends re {
  static {
    n(this, "_i0fa2d1e22a0340");
  }
  var_236;
  _r737cc312839167;
  constructor(e = 4, r = 0) {
    (super(), (this.var_236 = e), (this._r737cc312839167 = r));
  }
  getLength() {
    return this._r737cc312839167;
  }
  getType() {
    return this.var_236;
  }
  toDER() {
    return Gs._rf45cf4425c9470(this.var_236, this);
  }
  toString() {
    return `${Gs.indent}ByteString[${this.var_236}][${this._r737cc312839167}][${Mc.fromArray(this)}]`;
  }
}
