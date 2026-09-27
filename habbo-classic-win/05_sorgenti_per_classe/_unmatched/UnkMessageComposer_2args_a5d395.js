// Extracted from HabboAirLauncher.deobf.js, line 114583.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia5d39536ded6bc

class {
    static {
      n(this, "UnkMessageComposer_2args_a5d395");
    }
    static {
      Rft(this, "UnkMessageComposer_2args_a5d395");
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
