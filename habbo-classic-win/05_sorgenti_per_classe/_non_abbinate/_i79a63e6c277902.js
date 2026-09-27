// Estratto da HabboAirLauncher.deobf.js, riga 115998.

class {
    static {
      n(this, "_i79a63e6c277902");
    }
    static {
      u_t(this, "_i79a63e6c277902");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
