// Estratto da HabboAirLauncher.deobf.js, riga 118662.

class {
    static {
      n(this, "_i38d88376f52afe");
    }
    static {
      b1t(this, "_i38d88376f52afe");
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
