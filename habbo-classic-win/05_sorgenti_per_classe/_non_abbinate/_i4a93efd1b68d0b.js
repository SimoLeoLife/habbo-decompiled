// Estratto da HabboAirLauncher.deobf.js, riga 120853.

class {
    static {
      n(this, "_i4a93efd1b68d0b");
    }
    static {
      i2t(this, "_i4a93efd1b68d0b");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(r), this._data.push(e));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
