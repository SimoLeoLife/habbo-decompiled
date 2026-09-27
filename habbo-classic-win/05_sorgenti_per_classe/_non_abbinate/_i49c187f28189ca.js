// Estratto da HabboAirLauncher.deobf.js, riga 123029.

class {
    static {
      n(this, "_i49c187f28189ca");
    }
    static {
      upt(this, "_i49c187f28189ca");
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
