// Estratto da HabboAirLauncher.deobf.js, riga 114922.

class {
    static {
      n(this, "_i31311e8950de32");
    }
    static {
      plt(this, "_i31311e8950de32");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
