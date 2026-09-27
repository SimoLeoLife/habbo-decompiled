// Estratto da HabboAirLauncher.deobf.js, riga 114418.

class {
    static {
      n(this, "_ic38a5f77138194");
    }
    static {
      pft(this, "_ic38a5f77138194");
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
