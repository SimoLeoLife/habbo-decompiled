// Extracted from HabboAirLauncher.deobf.js, line 122801.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i29fde5f30c747f

class {
    static {
      n(this, "UnkMessageComposer_1args_29fde5");
    }
    static {
      q7t(this, "UnkMessageComposer_1args_29fde5");
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
