// Extracted from HabboAirLauncher.deobf.js, line 121150.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id7b33cdbc2ea0d

class {
    static {
      n(this, "UnkMessageComposer_1args_d7b33c");
    }
    static {
      L2t(this, "UnkMessageComposer_1args_d7b33c");
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
