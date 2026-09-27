// Estratto da HabboAirLauncher.deobf.js, riga 119272.

class {
    static {
      n(this, "_ie0bcf3981c4590");
    }
    static {
      f6t(this, "_ie0bcf3981c4590");
    }
    _data = [];
    constructor(e = 0) {
      this._data.push(e);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
