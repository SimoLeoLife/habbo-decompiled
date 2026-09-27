// Estratto da HabboAirLauncher.deobf.js, riga 114015.

class {
    static {
      n(this, "_i8704fcb55b80b0");
    }
    static {
      Cct(this, "_i8704fcb55b80b0");
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
