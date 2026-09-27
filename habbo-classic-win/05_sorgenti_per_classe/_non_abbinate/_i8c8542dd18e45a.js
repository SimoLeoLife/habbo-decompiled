// Estratto da HabboAirLauncher.deobf.js, riga 120447.

class {
    static {
      n(this, "_i8c8542dd18e45a");
    }
    static {
      b5t(this, "_i8c8542dd18e45a");
    }
    _array = [];
    constructor(e, r, t) {
      this._array.push(t, r, e);
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
