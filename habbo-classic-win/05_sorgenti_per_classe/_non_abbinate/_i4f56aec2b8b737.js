// Estratto da HabboAirLauncher.deobf.js, riga 115042.

class {
    static {
      n(this, "_i4f56aec2b8b737");
    }
    static {
      Blt(this, "_i4f56aec2b8b737");
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
