// Estratto da HabboAirLauncher.deobf.js, riga 124464.

class {
    static {
      n(this, "_ic9dcc5b7c1f3de");
    }
    static {
      kgt(this, "_ic9dcc5b7c1f3de");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
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
