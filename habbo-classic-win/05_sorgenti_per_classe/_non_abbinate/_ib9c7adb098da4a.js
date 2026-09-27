// Estratto da HabboAirLauncher.deobf.js, riga 117366.

class {
    static {
      n(this, "_ib9c7adb098da4a");
    }
    static {
      Hut(this, "_ib9c7adb098da4a");
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
