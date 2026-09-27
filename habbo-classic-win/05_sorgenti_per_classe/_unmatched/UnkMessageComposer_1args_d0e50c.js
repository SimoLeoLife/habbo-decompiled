// Extracted from HabboAirLauncher.deobf.js, line 122709.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id0e50c04990840

class {
    static {
      n(this, "UnkMessageComposer_1args_d0e50c");
    }
    static {
      j7t(this, "UnkMessageComposer_1args_d0e50c");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
