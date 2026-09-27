// Estratto da HabboAirLauncher.deobf.js, riga 118815.

class {
    static {
      n(this, "_i7274f8467d765d");
    }
    static {
      C1t(this, "_i7274f8467d765d");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
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
