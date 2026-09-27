// Estratto da HabboAirLauncher.deobf.js, riga 120220.

class {
    static {
      n(this, "_iefb9c57bef1d1c");
    }
    static {
      Q8t(this, "_iefb9c57bef1d1c");
    }
    _array;
    constructor(e) {
      ((this._array = []), this._array.push(e));
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
