// Estratto da HabboAirLauncher.deobf.js, riga 127466.

class {
    static {
      n(this, "_ib8c93bf3254201");
    }
    static {
      uxt(this, "_ib8c93bf3254201");
    }
    _array = [];
    constructor(e, r, t) {
      (this._array.push(e), this._array.push(r), this._array.push(t));
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
