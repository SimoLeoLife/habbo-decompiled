// Extracted from HabboAirLauncher.deobf.js, line 115002.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i366d0e96f30cf4

class {
    static {
      n(this, "UnkMessageComposer_2args_366d0e");
    }
    static {
      Clt(this, "UnkMessageComposer_2args_366d0e");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
