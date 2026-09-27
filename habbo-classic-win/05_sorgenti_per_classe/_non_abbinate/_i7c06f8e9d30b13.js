// Estratto da HabboAirLauncher.deobf.js, riga 125127.

class {
    static {
      n(this, "_i7c06f8e9d30b13");
    }
    static {
      jvt(this, "_i7c06f8e9d30b13");
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
