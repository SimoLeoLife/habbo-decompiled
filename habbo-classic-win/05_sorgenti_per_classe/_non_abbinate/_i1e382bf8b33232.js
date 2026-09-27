// Estratto da HabboAirLauncher.deobf.js, riga 122732.

class {
    static {
      n(this, "_i1e382bf8b33232");
    }
    static {
      Q7t(this, "_i1e382bf8b33232");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
