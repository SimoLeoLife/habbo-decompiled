// Estratto da HabboAirLauncher.deobf.js, riga 120197.

class {
    static {
      n(this, "_i61003cdcdaebec");
    }
    static {
      j8t(this, "_i61003cdcdaebec");
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
