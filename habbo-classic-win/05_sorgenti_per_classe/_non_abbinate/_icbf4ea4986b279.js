// Estratto da HabboAirLauncher.deobf.js, riga 117456.

class {
    static {
      n(this, "_icbf4ea4986b279");
    }
    static {
      Yut(this, "_icbf4ea4986b279");
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
