// Estratto da HabboAirLauncher.deobf.js, riga 117046.

class {
    static {
      n(this, "_i7d43746c1cd8c8");
    }
    static {
      sut(this, "_i7d43746c1cd8c8");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      this._data = [e, r, t, i, s];
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
