// Estratto da HabboAirLauncher.deobf.js, riga 123923.

class {
    static {
      n(this, "_id9833b3ff80004");
    }
    static {
      Omt(this, "_id9833b3ff80004");
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
