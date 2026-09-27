// Estratto da HabboAirLauncher.deobf.js, riga 118274.

class {
    static {
      n(this, "_i359cdfd5b9508a");
    }
    static {
      R3t(this, "_i359cdfd5b9508a");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
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
