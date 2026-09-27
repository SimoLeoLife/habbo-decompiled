// Estratto da HabboAirLauncher.deobf.js, riga 120493.

class {
    static {
      n(this, "_i8f295e4bca1993");
    }
    static {
      p5t(this, "_i8f295e4bca1993");
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
