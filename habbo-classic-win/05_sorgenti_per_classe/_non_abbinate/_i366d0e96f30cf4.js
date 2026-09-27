// Estratto da HabboAirLauncher.deobf.js, riga 115002.

class {
    static {
      n(this, "_i366d0e96f30cf4");
    }
    static {
      Clt(this, "_i366d0e96f30cf4");
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
