// Estratto da HabboAirLauncher.deobf.js, riga 121150.

class {
    static {
      n(this, "_id7b33cdbc2ea0d");
    }
    static {
      L2t(this, "_id7b33cdbc2ea0d");
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
