// Extracted from HabboAirLauncher.deobf.js, line 121011.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic4eacbe96fa0b1

class {
    static {
      n(this, "UnkMessageComposer_1args_c4eacb");
    }
    static {
      I2t(this, "UnkMessageComposer_1args_c4eacb");
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
