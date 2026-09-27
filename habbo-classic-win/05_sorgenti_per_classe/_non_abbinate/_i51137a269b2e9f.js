// Estratto da HabboAirLauncher.deobf.js, riga 115203.

class {
    static {
      n(this, "_i51137a269b2e9f");
    }
    static {
      jlt(this, "_i51137a269b2e9f");
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
