// Estratto da HabboAirLauncher.deobf.js, riga 124896.

class {
    static {
      n(this, "_i494540f04bf21d");
    }
    static {
      wvt(this, "_i494540f04bf21d");
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
