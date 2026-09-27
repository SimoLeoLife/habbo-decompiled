// Estratto da HabboAirLauncher.deobf.js, riga 116290.

class {
    static {
      n(this, "_ib86093a06ccce0");
    }
    static {
      U_t(this, "_ib86093a06ccce0");
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
