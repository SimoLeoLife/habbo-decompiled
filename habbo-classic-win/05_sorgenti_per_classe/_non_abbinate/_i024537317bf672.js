// Estratto da HabboAirLauncher.deobf.js, riga 124038.

class {
    static {
      n(this, "_i024537317bf672");
    }
    static {
      Ymt(this, "_i024537317bf672");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
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
