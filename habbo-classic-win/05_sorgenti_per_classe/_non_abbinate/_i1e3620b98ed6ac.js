// Estratto da HabboAirLauncher.deobf.js, riga 125041.

class {
    static {
      n(this, "_i1e3620b98ed6ac");
    }
    static {
      Lvt(this, "_i1e3620b98ed6ac");
    }
    _data = [];
    constructor(e) {
      (this._data.push(e), this._data.push(1));
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
