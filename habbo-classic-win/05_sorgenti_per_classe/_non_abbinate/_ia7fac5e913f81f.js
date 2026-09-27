// Estratto da HabboAirLauncher.deobf.js, riga 115082.

class {
    static {
      n(this, "_ia7fac5e913f81f");
    }
    static {
      Rlt(this, "_ia7fac5e913f81f");
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
