// Estratto da HabboAirLauncher.deobf.js, riga 116115.

class {
    static {
      n(this, "_ib5af5c68bb04e7");
    }
    static {
      M_t(this, "_ib5af5c68bb04e7");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
