// Estratto da HabboAirLauncher.deobf.js, riga 118708.

class a {
    static {
      n(this, "_ifdc0d5a2553a72");
    }
    static {
      p1t(this, "_ifdc0d5a2553a72");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        o !== a.const_20 && this._data.push(o));
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
