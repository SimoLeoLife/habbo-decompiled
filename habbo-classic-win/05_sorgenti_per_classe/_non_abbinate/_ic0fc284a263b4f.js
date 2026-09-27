// Estratto da HabboAirLauncher.deobf.js, riga 124441.

class {
    static {
      n(this, "_ic0fc284a263b4f");
    }
    static {
      Bgt(this, "_ic0fc284a263b4f");
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
