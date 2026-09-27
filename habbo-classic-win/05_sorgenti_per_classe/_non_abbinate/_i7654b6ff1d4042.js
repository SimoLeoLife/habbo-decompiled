// Estratto da HabboAirLauncher.deobf.js, riga 115600.

class {
    static {
      n(this, "_i7654b6ff1d4042");
    }
    static {
      Bbt(this, "_i7654b6ff1d4042");
    }
    _array;
    constructor(e, r) {
      this._array = [e, r];
    }
    get disposed() {
      return !1;
    }
    dispose() {
      this._array = [];
    }
    getMessageArray() {
      return this._array;
    }
  }
