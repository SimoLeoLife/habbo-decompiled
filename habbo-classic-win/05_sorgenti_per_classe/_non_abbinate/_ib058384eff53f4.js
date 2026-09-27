// Estratto da HabboAirLauncher.deobf.js, riga 115270.

class {
    static {
      n(this, "_ib058384eff53f4");
    }
    static {
      $lt(this, "_ib058384eff53f4");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
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
