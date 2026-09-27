// Estratto da HabboAirLauncher.deobf.js, riga 120243.

class {
    static {
      n(this, "_ib7a2f8c19e1626");
    }
    static {
      Y8t(this, "_ib7a2f8c19e1626");
    }
    _data;
    constructor(e, r, t) {
      ((this._data = [e, r]), this._data.push(t.length));
      for (let i = 0; i < t.length; i++) this._data.push(String(t[i]));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = null;
    }
  }
