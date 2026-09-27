// Estratto da HabboAirLauncher.deobf.js, riga 119750.

class {
    static {
      n(this, "_i20c619f30be6cf");
    }
    static {
      t8t(this, "_i20c619f30be6cf");
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
