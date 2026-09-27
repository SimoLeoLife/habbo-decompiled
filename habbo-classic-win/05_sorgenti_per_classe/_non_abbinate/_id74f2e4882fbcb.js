// Estratto da HabboAirLauncher.deobf.js, riga 120470.

class {
    static {
      n(this, "_id74f2e4882fbcb");
    }
    static {
      u5t(this, "_id74f2e4882fbcb");
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
