// Extracted from HabboAirLauncher.deobf.js, line 114695.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i79593064f96e0f

class {
    static {
      n(this, "UnkMessageComposer_2args_795930");
    }
    static {
      jft(this, "UnkMessageComposer_2args_795930");
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
