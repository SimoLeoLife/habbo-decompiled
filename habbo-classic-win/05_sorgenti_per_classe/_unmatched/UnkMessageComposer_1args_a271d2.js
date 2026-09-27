// Extracted from HabboAirLauncher.deobf.js, line 123640.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia271d2b3b31a5e

class {
    static {
      n(this, "UnkMessageComposer_1args_a271d2");
    }
    static {
      bmt(this, "UnkMessageComposer_1args_a271d2");
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
