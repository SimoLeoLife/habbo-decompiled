// Estratto da HabboAirLauncher.deobf.js, riga 122966.

class {
    static {
      n(this, "_ia82291dd3a385b");
    }
    static {
      dpt(this, "_ia82291dd3a385b");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
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
