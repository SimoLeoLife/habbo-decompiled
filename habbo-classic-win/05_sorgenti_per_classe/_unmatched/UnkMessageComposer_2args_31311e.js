// Extracted from HabboAirLauncher.deobf.js, line 114922.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i31311e8950de32

class {
    static {
      n(this, "UnkMessageComposer_2args_31311e");
    }
    static {
      plt(this, "UnkMessageComposer_2args_31311e");
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
