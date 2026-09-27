// Extracted from HabboAirLauncher.deobf.js, line 123390.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i63fdcfd7dda743

class {
    static {
      n(this, "UnkMessageComposer_1args_63fdcf");
    }
    static {
      $pt(this, "UnkMessageComposer_1args_63fdcf");
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
