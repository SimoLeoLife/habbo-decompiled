// Estratto da HabboAirLauncher.deobf.js, riga 120731.

class {
    static {
      n(this, "_i198dc87a94b54e");
    }
    static {
      j5t(this, "_i198dc87a94b54e");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
