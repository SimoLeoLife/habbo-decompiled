// Estratto da HabboAirLauncher.deobf.js, riga 122686.

class {
    static {
      n(this, "_i3e403da36678a5");
    }
    static {
      U7t(this, "_i3e403da36678a5");
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
