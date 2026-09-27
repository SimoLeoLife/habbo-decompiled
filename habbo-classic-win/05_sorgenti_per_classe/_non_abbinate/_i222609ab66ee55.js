// Estratto da HabboAirLauncher.deobf.js, riga 119112.

class {
    static {
      n(this, "_i222609ab66ee55");
    }
    static {
      $1t(this, "_i222609ab66ee55");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
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
