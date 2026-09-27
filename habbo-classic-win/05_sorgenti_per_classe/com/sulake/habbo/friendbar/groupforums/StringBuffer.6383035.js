// Extracted from HabboAirLauncher.deobf.js, line 204431.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/StringBuffer.as
// Obfuscated name: _i4710f86d832e91

class a {
  static {
    n(this, "StringBuffer");
  }
  static _r815daee2c6b68e = 62;
  static _r3febdfff5fa3c2 = 60;
  _buffer = [];
  addEscaped(e) {
    for (let r = 0; r < e.length; r++) {
      let t = e.charCodeAt(r);
      switch (t) {
        case a._r3febdfff5fa3c2:
          this.add("&lt;");
          continue;
        case a._r815daee2c6b68e:
          this.add("&gt;");
          continue;
        default:
          this._buffer.push(t);
          continue;
      }
    }
    return this;
  }
  add(e) {
    for (let r = 0; r < e.length; r++) this._buffer.push(e.charCodeAt(r));
    return this;
  }
  toString() {
    return String.fromCharCode(...this._buffer);
  }
  get length() {
    return this._buffer.length;
  }
  reset() {
    this._buffer = [];
  }
}
