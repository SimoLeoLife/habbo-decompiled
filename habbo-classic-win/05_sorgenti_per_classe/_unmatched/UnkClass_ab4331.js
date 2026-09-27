// Extracted from HabboAirLauncher.deobf.js, line 64687.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iab4331c96b9e6a

class extends Ca {
  static {
    n(this, "UnkClass_ab4331");
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
