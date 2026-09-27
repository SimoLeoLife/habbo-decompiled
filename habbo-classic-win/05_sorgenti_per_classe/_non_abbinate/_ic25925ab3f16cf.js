// Estratto da HabboAirLauncher.deobf.js, riga 117633.

class {
    static {
      n(this, "_ic25925ab3f16cf");
    }
    static {
      fht(this, "_ic25925ab3f16cf");
    }
    _array = [];
    constructor(e) {
      this._array.push(new Byte(e));
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
