// Estratto da HabboAirLauncher.deobf.js, riga 121401.

class {
    static {
      n(this, "_i557e6c5809e2a4");
    }
    static {
      b9t(this, "_i557e6c5809e2a4");
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
