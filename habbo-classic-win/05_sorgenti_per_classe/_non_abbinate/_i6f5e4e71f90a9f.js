// Estratto da HabboAirLauncher.deobf.js, riga 124421.

class {
    static {
      n(this, "_i6f5e4e71f90a9f");
    }
    static {
      Mgt(this, "_i6f5e4e71f90a9f");
    }
    _data = [];
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
