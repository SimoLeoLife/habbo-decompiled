// Estratto da HabboAirLauncher.deobf.js, riga 124573.

class {
    static {
      n(this, "_i2f1a3ef69779ad");
    }
    static {
      Hgt(this, "_i2f1a3ef69779ad");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
