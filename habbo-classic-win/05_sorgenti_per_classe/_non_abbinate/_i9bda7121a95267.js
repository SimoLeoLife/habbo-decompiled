// Estratto da HabboAirLauncher.deobf.js, riga 123703.

class {
    static {
      n(this, "_i9bda7121a95267");
    }
    static {
      gmt(this, "_i9bda7121a95267");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
