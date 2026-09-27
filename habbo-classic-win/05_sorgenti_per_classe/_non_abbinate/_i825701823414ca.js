// Estratto da HabboAirLauncher.deobf.js, riga 121810.

class {
    static {
      n(this, "_i825701823414ca");
    }
    static {
      i4t(this, "_i825701823414ca");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length * 2));
      for (let t of r.getKeys()) (this._data.push(t), this._data.push(r.getValue(t)));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
