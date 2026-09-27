// Extracted from HabboAirLauncher.deobf.js, line 119140.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9aee4cde0d1471

class {
    static {
      n(this, "UnkMessageComposer_1args_9aee4c");
    }
    static {
      q1t(this, "UnkMessageComposer_1args_9aee4c");
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
