// Extracted from HabboAirLauncher.deobf.js, line 119773.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i25b16c52c60064

class {
    static {
      n(this, "UnkMessageComposer_1args_25b16c");
    }
    static {
      i8t(this, "UnkMessageComposer_1args_25b16c");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
