// Extracted from HabboAirLauncher.deobf.js, line 120711.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id39a1c669a8146

class {
    static {
      n(this, "UnkMessageComposer_1args_d39a1c");
    }
    static {
      U5t(this, "UnkMessageComposer_1args_d39a1c");
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
