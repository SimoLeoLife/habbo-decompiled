// Extracted from HabboAirLauncher.deobf.js, line 121401.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i557e6c5809e2a4

class {
    static {
      n(this, "UnkMessageComposer_1args_557e6c");
    }
    static {
      b9t(this, "UnkMessageComposer_1args_557e6c");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
