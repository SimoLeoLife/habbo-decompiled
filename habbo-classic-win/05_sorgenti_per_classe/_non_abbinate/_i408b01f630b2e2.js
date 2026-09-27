// Estratto da HabboAirLauncher.deobf.js, riga 117891.

class {
    static {
      n(this, "_i408b01f630b2e2");
    }
    static {
      Hht(this, "_i408b01f630b2e2");
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
