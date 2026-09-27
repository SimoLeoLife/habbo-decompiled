// Estratto da HabboAirLauncher.deobf.js, riga 123663.

class {
    static {
      n(this, "_ib367058c952aed");
    }
    static {
      umt(this, "_ib367058c952aed");
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
