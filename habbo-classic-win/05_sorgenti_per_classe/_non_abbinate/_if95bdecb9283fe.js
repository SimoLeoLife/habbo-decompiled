// Estratto da HabboAirLauncher.deobf.js, riga 117528.

class {
    static {
      n(this, "_if95bdecb9283fe");
    }
    static {
      eht(this, "_if95bdecb9283fe");
    }
    _data = [];
    _disposed = !1;
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return this._disposed;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      ((this._data = null), (this._disposed = !0));
    }
  }
