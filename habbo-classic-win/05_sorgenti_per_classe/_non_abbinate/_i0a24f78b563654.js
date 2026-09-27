// Estratto da HabboAirLauncher.deobf.js, riga 116489.

class {
    static {
      n(this, "_i0a24f78b563654");
    }
    static {
      s0t(this, "_i0a24f78b563654");
    }
    _array = [];
    constructor(e, r, t, i) {
      this._array = [e, r, t, i];
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
