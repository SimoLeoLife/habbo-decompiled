// Estratto da HabboAirLauncher.deobf.js, riga 125374.

class {
    static {
      n(this, "_i7e3b2187bfe1ec");
    }
    static {
      uwt(this, "_i7e3b2187bfe1ec");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
