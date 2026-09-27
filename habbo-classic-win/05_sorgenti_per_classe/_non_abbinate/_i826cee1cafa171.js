// Estratto da HabboAirLauncher.deobf.js, riga 116994.

class {
    static {
      n(this, "_i826cee1cafa171");
    }
    static {
      tut(this, "_i826cee1cafa171");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i.length / 2),
        (this._data = this._data.concat(i)),
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
