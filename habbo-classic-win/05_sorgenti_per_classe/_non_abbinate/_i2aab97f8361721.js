// Estratto da HabboAirLauncher.deobf.js, riga 117322.

class {
    static {
      n(this, "_i2aab97f8361721");
    }
    static {
      Lut(this, "_i2aab97f8361721");
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
