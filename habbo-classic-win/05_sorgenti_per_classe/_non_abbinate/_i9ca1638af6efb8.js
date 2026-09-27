// Estratto da HabboAirLauncher.deobf.js, riga 114942.

class {
    static {
      n(this, "_i9ca1638af6efb8");
    }
    static {
      glt(this, "_i9ca1638af6efb8");
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
