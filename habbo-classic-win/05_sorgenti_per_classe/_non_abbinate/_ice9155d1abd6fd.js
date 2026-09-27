// Estratto da HabboAirLauncher.deobf.js, riga 114675.

class {
    static {
      n(this, "_ice9155d1abd6fd");
    }
    static {
      Uft(this, "_ice9155d1abd6fd");
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
