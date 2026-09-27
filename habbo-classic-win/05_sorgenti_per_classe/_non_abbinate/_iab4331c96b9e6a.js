// Estratto da HabboAirLauncher.deobf.js, riga 64687.

class extends Ca {
  static {
    n(this, "_iab4331c96b9e6a");
  }
  _type;
  _len;
  constructor(e, r, t) {
    (super(t), (this._type = e), (this._len = r));
  }
  getLength() {
    return this._len;
  }
  getType() {
    return this._type;
  }
  toString(e = 0) {
    return `Integer[${this._type}][${this._len}][${super.toString(16)}]`;
  }
  toDER() {
    return null;
  }
}
