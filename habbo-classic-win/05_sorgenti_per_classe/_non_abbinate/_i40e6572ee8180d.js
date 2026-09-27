// Estratto da HabboAirLauncher.deobf.js, riga 124282.

class {
    static {
      n(this, "_i40e6572ee8180d");
    }
    static {
      ugt(this, "_i40e6572ee8180d");
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
