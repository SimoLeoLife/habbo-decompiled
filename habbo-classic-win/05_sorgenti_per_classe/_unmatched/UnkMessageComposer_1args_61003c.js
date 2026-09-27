// Extracted from HabboAirLauncher.deobf.js, line 120197.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i61003cdcdaebec

class {
    static {
      n(this, "UnkMessageComposer_1args_61003c");
    }
    static {
      j8t(this, "UnkMessageComposer_1args_61003c");
    }
    _array;
    constructor(e) {
      ((this._array = []), this._array.push(e));
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
