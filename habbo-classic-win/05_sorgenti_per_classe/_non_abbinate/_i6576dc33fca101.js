// Estratto da HabboAirLauncher.deobf.js, riga 118788.

class a {
    static {
      n(this, "_i6576dc33fca101");
    }
    static {
      I1t(this, "_i6576dc33fca101");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        i !== a.const_20 && this._data.push(i));
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
