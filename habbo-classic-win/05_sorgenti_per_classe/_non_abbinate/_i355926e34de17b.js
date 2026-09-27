// Estratto da HabboAirLauncher.deobf.js, riga 114902.

class {
    static {
      n(this, "_i355926e34de17b");
    }
    static {
      ult(this, "_i355926e34de17b");
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
