// Extracted from HabboAirLauncher.deobf.js, line 124573.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f1a3ef69779ad

class {
    static {
      n(this, "UnkMessageComposer_2args_2f1a3e");
    }
    static {
      Hgt(this, "UnkMessageComposer_2args_2f1a3e");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
