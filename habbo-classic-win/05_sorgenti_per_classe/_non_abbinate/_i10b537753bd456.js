// Estratto da HabboAirLauncher.deobf.js, riga 116512.

class {
    static {
      n(this, "_i10b537753bd456");
    }
    static {
      d0t(this, "_i10b537753bd456");
    }
    _array = [];
    constructor(e, r) {
      this._array = [e, r];
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
