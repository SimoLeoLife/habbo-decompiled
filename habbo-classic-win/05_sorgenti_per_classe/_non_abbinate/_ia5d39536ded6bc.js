// Estratto da HabboAirLauncher.deobf.js, riga 114583.

class {
    static {
      n(this, "_ia5d39536ded6bc");
    }
    static {
      Rft(this, "_ia5d39536ded6bc");
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
