// Extracted from HabboAirLauncher.deobf.js, line 120513.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i38e25d5014ab83

class {
    static {
      n(this, "UnkMessageComposer_1args_38e25d");
    }
    static {
      g5t(this, "UnkMessageComposer_1args_38e25d");
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
