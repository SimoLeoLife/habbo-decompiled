// Estratto da HabboAirLauncher.deobf.js, riga 115223.

class {
    static {
      n(this, "_if914b3161943a3");
    }
    static {
      Qlt(this, "_if914b3161943a3");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
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
