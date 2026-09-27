// Estratto da HabboAirLauncher.deobf.js, riga 125267.

class {
    static {
      n(this, "_i8e8810e8ce9a4c");
    }
    static {
      iwt(this, "_i8e8810e8ce9a4c");
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
