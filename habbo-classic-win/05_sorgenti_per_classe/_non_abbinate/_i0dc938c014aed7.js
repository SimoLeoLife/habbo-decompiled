// Estratto da HabboAirLauncher.deobf.js, riga 120424.

class {
    static {
      n(this, "_i0dc938c014aed7");
    }
    static {
      f5t(this, "_i0dc938c014aed7");
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
      return this._array == null;
    }
  }
