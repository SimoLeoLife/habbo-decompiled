// Extracted from HabboAirLauncher.deobf.js, line 121058.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5ad8ab28093e10

class {
    static {
      n(this, "UnkMessageComposer_2args_5ad8ab");
    }
    static {
      M2t(this, "UnkMessageComposer_2args_5ad8ab");
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
