// Estratto da HabboAirLauncher.deobf.js, riga 117435.

class {
    static {
      n(this, "_ic4056f39ab9d5a");
    }
    static {
      Qut(this, "_ic4056f39ab9d5a");
    }
    _data = [];
    _disposed = !1;
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
