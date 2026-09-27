// Estratto da HabboAirLauncher.deobf.js, riga 118374.

class {
    static {
      n(this, "_id175ed44ce8bea");
    }
    static {
      U3t(this, "_id175ed44ce8bea");
    }
    _array = [];
    constructor(e, r, t, i, s = !0) {
      (this._array.push(e),
        this._array.push(r),
        this._array.push(t),
        this._array.push(i),
        this._array.push(s));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
