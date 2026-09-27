// Estratto da HabboAirLauncher.deobf.js, riga 118861.

class a {
    static {
      n(this, "_ide6816e93887e4");
    }
    static {
      B1t(this, "_ide6816e93887e4");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        s !== a.const_20 && this._data.push(s));
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
