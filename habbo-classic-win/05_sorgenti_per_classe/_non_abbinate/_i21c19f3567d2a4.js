// Estratto da HabboAirLauncher.deobf.js, riga 113992.

class {
    static {
      n(this, "_i21c19f3567d2a4");
    }
    static {
      Ict(this, "_i21c19f3567d2a4");
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
