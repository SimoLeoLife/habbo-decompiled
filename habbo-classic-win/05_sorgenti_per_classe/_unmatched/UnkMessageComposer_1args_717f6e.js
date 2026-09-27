// Extracted from HabboAirLauncher.deobf.js, line 116310.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i717f6ebaa10ac2

class {
    static {
      n(this, "UnkMessageComposer_1args_717f6e");
    }
    static {
      j_t(this, "UnkMessageComposer_1args_717f6e");
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
