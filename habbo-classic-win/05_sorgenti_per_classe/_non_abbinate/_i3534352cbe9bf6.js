// Estratto da HabboAirLauncher.deobf.js, riga 122552.

class {
    static {
      n(this, "_i3534352cbe9bf6");
    }
    static {
      B7t(this, "_i3534352cbe9bf6");
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
