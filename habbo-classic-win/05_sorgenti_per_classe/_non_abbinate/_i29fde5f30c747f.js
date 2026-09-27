// Estratto da HabboAirLauncher.deobf.js, riga 122801.

class {
    static {
      n(this, "_i29fde5f30c747f");
    }
    static {
      q7t(this, "_i29fde5f30c747f");
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
