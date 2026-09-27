// Estratto da HabboAirLauncher.deobf.js, riga 116466.

class {
    static {
      n(this, "_i69d2f563614870");
    }
    static {
      i0t(this, "_i69d2f563614870");
    }
    _array = [];
    constructor(e, r, t) {
      this._array = [e, r, t];
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
