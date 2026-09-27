// Extracted from HabboAirLauncher.deobf.js, line 117891.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i408b01f630b2e2

class {
    static {
      n(this, "UnkMessageComposer_1args_408b01");
    }
    static {
      Hht(this, "UnkMessageComposer_1args_408b01");
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
