// Estratto da HabboAirLauncher.deobf.js, riga 116018.

class {
    static {
      n(this, "_i263d9886677b96");
    }
    static {
      p_t(this, "_i263d9886677b96");
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
