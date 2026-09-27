// Estratto da HabboAirLauncher.deobf.js, riga 115316.

class {
    static {
      n(this, "_ibfcc88bd37e593");
    }
    static {
      ebt(this, "_ibfcc88bd37e593");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length));
      for (let t of r) this._array.push(t);
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
