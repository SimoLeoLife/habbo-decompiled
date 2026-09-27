// Estratto da HabboAirLauncher.deobf.js, riga 116535.

class {
    static {
      n(this, "_i0b97a25d7308cb");
    }
    static {
      f0t(this, "_i0b97a25d7308cb");
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
