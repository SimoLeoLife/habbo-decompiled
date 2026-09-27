// Estratto da HabboAirLauncher.deobf.js, riga 120355.

class {
    static {
      n(this, "_i555ac0097e7881");
    }
    static {
      i5t(this, "_i555ac0097e7881");
    }
    _array = [];
    constructor(e, r = 0) {
      (this._array.push(e), this._array.push(r));
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
