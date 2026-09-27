// Estratto da HabboAirLauncher.deobf.js, riga 121058.

class {
    static {
      n(this, "_i5ad8ab28093e10");
    }
    static {
      M2t(this, "_i5ad8ab28093e10");
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
