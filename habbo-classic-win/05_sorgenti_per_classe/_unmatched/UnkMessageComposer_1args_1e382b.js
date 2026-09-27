// Extracted from HabboAirLauncher.deobf.js, line 122732.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1e382bf8b33232

class {
    static {
      n(this, "UnkMessageComposer_1args_1e382b");
    }
    static {
      Q7t(this, "UnkMessageComposer_1args_1e382b");
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
