// Estratto da HabboAirLauncher.deobf.js, riga 116578.

class {
    static {
      n(this, "_ieb224a67b9cea6");
    }
    static {
      u0t(this, "_ieb224a67b9cea6");
    }
    _array = [];
    constructor(e, r, t, i) {
      this._array = [e, r, t, i];
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
