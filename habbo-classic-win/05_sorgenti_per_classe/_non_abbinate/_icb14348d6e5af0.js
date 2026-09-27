// Estratto da HabboAirLauncher.deobf.js, riga 124015.

class {
    static {
      n(this, "_icb14348d6e5af0");
    }
    static {
      Qmt(this, "_icb14348d6e5af0");
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
