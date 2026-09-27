// Estratto da HabboAirLauncher.deobf.js, riga 115434.

class {
    static {
      n(this, "_ida09ce64db7da5");
    }
    static {
      bbt(this, "_ida09ce64db7da5");
    }
    _array = [];
    constructor(e, r, t, i, s) {
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
      return this._array == null;
    }
  }
