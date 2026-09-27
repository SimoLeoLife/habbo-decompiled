// Estratto da HabboAirLauncher.deobf.js, riga 117342.

class {
    static {
      n(this, "_i7ffaea7ce81ce5");
    }
    static {
      Out(this, "_i7ffaea7ce81ce5");
    }
    _data = [];
    _disposed = !1;
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
