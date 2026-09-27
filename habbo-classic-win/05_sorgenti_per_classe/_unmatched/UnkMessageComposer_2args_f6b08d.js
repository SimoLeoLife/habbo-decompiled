// Extracted from HabboAirLauncher.deobf.js, line 115246.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if6b08dd932b8a3

class {
    static {
      n(this, "UnkMessageComposer_2args_f6b08d");
    }
    static {
      Ylt(this, "UnkMessageComposer_2args_f6b08d");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length));
      for (let t of r) this._array.push(t);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }
