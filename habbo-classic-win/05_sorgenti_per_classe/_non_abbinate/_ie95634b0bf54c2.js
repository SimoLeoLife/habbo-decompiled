// Estratto da HabboAirLauncher.deobf.js, riga 125087.

class {
    static {
      n(this, "_ie95634b0bf54c2");
    }
    static {
      Hvt(this, "_ie95634b0bf54c2");
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
