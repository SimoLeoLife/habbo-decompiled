// Extracted from HabboAirLauncher.deobf.js, line 120731.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i198dc87a94b54e

class {
    static {
      n(this, "UnkMessageComposer_1args_198dc8");
    }
    static {
      j5t(this, "UnkMessageComposer_1args_198dc8");
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
