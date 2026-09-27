// Estratto da HabboAirLauncher.deobf.js, riga 116135.

class {
    static {
      n(this, "_ife5f8c1b91fcd5");
    }
    static {
      B_t(this, "_ife5f8c1b91fcd5");
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
