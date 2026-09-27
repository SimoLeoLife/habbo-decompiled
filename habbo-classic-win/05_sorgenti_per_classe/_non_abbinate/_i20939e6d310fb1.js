// Estratto da HabboAirLauncher.deobf.js, riga 117122.

class {
    static {
      n(this, "_i20939e6d310fb1");
    }
    static {
      but(this, "_i20939e6d310fb1");
    }
    _data = [];
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
