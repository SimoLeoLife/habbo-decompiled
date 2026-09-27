// Estratto da HabboAirLauncher.deobf.js, riga 127535.

class {
    static {
      n(this, "_i0904d659df733d");
    }
    static {
      wxt(this, "_i0904d659df733d");
    }
    _array = [];
    constructor(e, r, t, i, s, o, d, c, f) {
      (this._array.push(e),
        this._array.push(r),
        this._array.push(t),
        this._array.push(i),
        this._array.push(s),
        this._array.push(o),
        this._array.push(d),
        this._array.push(c),
        this._array.push(f));
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array === null;
    }
  }
