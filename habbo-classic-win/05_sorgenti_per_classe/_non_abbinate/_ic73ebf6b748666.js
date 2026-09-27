// Estratto da HabboAirLauncher.deobf.js, riga 117142.

class {
    static {
      n(this, "_ic73ebf6b748666");
    }
    static {
      uut(this, "_ic73ebf6b748666");
    }
    _data = [];
    constructor(e) {
      this._data = [e];
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
