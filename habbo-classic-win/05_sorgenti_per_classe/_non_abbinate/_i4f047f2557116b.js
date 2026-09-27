// Estratto da HabboAirLauncher.deobf.js, riga 118099.

class {
    static {
      n(this, "_i4f047f2557116b");
    }
    static {
      b3t(this, "_i4f047f2557116b");
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
