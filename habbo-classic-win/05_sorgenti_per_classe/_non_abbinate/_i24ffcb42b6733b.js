// Estratto da HabboAirLauncher.deobf.js, riga 124130.

class {
    static {
      n(this, "_i24ffcb42b6733b");
    }
    static {
      tgt(this, "_i24ffcb42b6733b");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o),
        this._data.push(d));
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
