// Estratto da HabboAirLauncher.deobf.js, riga 117504.

class {
    static {
      n(this, "_ifbe8d1f78e21ac");
    }
    static {
      qut(this, "_ifbe8d1f78e21ac");
    }
    _data = [];
    _disposed = !1;
    constructor(e, r, t, i) {
      this._data = [e, r, t, i];
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
