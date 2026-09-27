// Estratto da HabboAirLauncher.deobf.js, riga 117480.

class {
    static {
      n(this, "_i241f2a71dc6d05");
    }
    static {
      $ut(this, "_i241f2a71dc6d05");
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
