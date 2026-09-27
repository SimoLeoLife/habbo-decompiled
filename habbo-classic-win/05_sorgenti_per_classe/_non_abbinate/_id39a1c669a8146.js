// Estratto da HabboAirLauncher.deobf.js, riga 120711.

class {
    static {
      n(this, "_id39a1c669a8146");
    }
    static {
      U5t(this, "_id39a1c669a8146");
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
