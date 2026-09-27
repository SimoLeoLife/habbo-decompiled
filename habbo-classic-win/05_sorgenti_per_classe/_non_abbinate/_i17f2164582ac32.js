// Estratto da HabboAirLauncher.deobf.js, riga 124697.

class {
    static {
      n(this, "_i17f2164582ac32");
    }
    static {
      qgt(this, "_i17f2164582ac32");
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
