// Estratto da HabboAirLauncher.deobf.js, riga 118547.

class {
    static {
      n(this, "_i2f07f95651d352");
    }
    static {
      t1t(this, "_i2f07f95651d352");
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
