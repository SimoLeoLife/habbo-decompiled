// Extracted from HabboAirLauncher.deobf.js, line 114902.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i355926e34de17b

class {
    static {
      n(this, "UnkMessageComposer_2args_355926");
    }
    static {
      ult(this, "UnkMessageComposer_2args_355926");
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
