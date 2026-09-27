// Extracted from HabboAirLauncher.deobf.js, line 116270.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i15648295779f69

class {
    static {
      n(this, "UnkMessageComposer_2args_156482");
    }
    static {
      H_t(this, "UnkMessageComposer_2args_156482");
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
