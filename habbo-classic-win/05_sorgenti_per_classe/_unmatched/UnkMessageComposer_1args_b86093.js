// Extracted from HabboAirLauncher.deobf.js, line 116290.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib86093a06ccce0

class {
    static {
      n(this, "UnkMessageComposer_1args_b86093");
    }
    static {
      U_t(this, "UnkMessageComposer_1args_b86093");
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
