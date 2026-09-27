// Estratto da HabboAirLauncher.deobf.js, riga 116038.

class {
    static {
      n(this, "_iaeffcadf896430");
    }
    static {
      g_t(this, "_iaeffcadf896430");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
