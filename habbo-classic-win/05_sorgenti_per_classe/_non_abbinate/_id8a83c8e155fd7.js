// Estratto da HabboAirLauncher.deobf.js, riga 117552.

class {
    static {
      n(this, "_id8a83c8e155fd7");
    }
    static {
      tht(this, "_id8a83c8e155fd7");
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
