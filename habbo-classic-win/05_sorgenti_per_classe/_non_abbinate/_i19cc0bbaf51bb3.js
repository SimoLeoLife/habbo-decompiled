// Estratto da HabboAirLauncher.deobf.js, riga 124236.

class {
    static {
      n(this, "_i19cc0bbaf51bb3");
    }
    static {
      fgt(this, "_i19cc0bbaf51bb3");
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
