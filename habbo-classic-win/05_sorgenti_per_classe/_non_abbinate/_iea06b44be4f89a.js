// Estratto da HabboAirLauncher.deobf.js, riga 122918.

class {
    static {
      n(this, "_iea06b44be4f89a");
    }
    static {
      ipt(this, "_iea06b44be4f89a");
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
      return this._array == null;
    }
  }
