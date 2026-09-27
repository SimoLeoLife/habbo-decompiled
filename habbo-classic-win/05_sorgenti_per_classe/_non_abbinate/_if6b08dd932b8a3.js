// Estratto da HabboAirLauncher.deobf.js, riga 115246.

class {
    static {
      n(this, "_if6b08dd932b8a3");
    }
    static {
      Ylt(this, "_if6b08dd932b8a3");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length));
      for (let t of r) this._array.push(t);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }
