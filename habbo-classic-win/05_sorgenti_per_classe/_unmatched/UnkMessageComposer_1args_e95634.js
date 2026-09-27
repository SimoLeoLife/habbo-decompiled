// Extracted from HabboAirLauncher.deobf.js, line 125087.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie95634b0bf54c2

class {
    static {
      n(this, "UnkMessageComposer_1args_e95634");
    }
    static {
      Hvt(this, "UnkMessageComposer_1args_e95634");
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
