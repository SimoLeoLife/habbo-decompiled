// Estratto da HabboAirLauncher.deobf.js, riga 120513.

class {
    static {
      n(this, "_i38e25d5014ab83");
    }
    static {
      g5t(this, "_i38e25d5014ab83");
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
