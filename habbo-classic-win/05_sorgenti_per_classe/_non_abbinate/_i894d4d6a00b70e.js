// Estratto da HabboAirLauncher.deobf.js, riga 117069.

class {
    static {
      n(this, "_i894d4d6a00b70e");
    }
    static {
      dut(this, "_i894d4d6a00b70e");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s.length / 2),
        (this._data = this._data.concat(s)),
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
