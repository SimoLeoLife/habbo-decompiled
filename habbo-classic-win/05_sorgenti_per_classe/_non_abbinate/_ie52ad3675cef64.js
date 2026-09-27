// Estratto da HabboAirLauncher.deobf.js, riga 117411.

class {
    static {
      n(this, "_ie52ad3675cef64");
    }
    static {
      jut(this, "_ie52ad3675cef64");
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
