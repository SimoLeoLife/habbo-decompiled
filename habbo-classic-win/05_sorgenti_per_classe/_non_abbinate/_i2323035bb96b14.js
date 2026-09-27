// Estratto da HabboAirLauncher.deobf.js, riga 116443.

class {
    static {
      n(this, "_i2323035bb96b14");
    }
    static {
      t0t(this, "_i2323035bb96b14");
    }
    _array = [];
    constructor(e) {
      this._array = [e];
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
