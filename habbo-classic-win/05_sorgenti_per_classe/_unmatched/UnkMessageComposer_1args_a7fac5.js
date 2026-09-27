// Extracted from HabboAirLauncher.deobf.js, line 115082.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia7fac5e913f81f

class {
    static {
      n(this, "UnkMessageComposer_1args_a7fac5");
    }
    static {
      Rlt(this, "UnkMessageComposer_1args_a7fac5");
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
