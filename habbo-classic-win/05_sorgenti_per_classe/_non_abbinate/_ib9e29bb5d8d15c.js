// Estratto da HabboAirLauncher.deobf.js, riga 117390.

class {
    static {
      n(this, "_ib9e29bb5d8d15c");
    }
    static {
      Uut(this, "_ib9e29bb5d8d15c");
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
