// Estratto da HabboAirLauncher.deobf.js, riga 117594.

class {
    static {
      n(this, "_i77c58ef847037c");
    }
    static {
      sht(this, "_i77c58ef847037c");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t = 0; t < r.length; t++) this._data.push(r[t]);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
