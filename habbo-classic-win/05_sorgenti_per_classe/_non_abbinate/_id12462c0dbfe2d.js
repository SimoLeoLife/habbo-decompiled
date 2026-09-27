// Estratto da HabboAirLauncher.deobf.js, riga 123845.

class {
    static {
      n(this, "_id12462c0dbfe2d");
    }
    static {
      Rmt(this, "_id12462c0dbfe2d");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
