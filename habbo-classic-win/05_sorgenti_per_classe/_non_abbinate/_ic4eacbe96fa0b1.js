// Estratto da HabboAirLauncher.deobf.js, riga 121011.

class {
    static {
      n(this, "_ic4eacbe96fa0b1");
    }
    static {
      I2t(this, "_ic4eacbe96fa0b1");
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
