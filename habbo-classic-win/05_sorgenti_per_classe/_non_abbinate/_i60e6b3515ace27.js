// Estratto da HabboAirLauncher.deobf.js, riga 123894.

class {
    static {
      n(this, "_i60e6b3515ace27");
    }
    static {
      Lmt(this, "_i60e6b3515ace27");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(0),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o));
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
