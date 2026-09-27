// Extracted from HabboAirLauncher.deobf.js, line 118274.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i359cdfd5b9508a

class {
    static {
      n(this, "UnkMessageComposer_1args_359cdf");
    }
    static {
      R3t(this, "UnkMessageComposer_1args_359cdf");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
