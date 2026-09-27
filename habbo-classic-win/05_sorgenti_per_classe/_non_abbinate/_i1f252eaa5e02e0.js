// Estratto da HabboAirLauncher.deobf.js, riga 117573.

class {
    static {
      n(this, "_i1f252eaa5e02e0");
    }
    static {
      iht(this, "_i1f252eaa5e02e0");
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
