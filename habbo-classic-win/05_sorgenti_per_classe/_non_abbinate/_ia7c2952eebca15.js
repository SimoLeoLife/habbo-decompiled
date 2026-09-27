// Estratto da HabboAirLauncher.deobf.js, riga 121597.

class {
    static {
      n(this, "_ia7c2952eebca15");
    }
    static {
      L9t(this, "_ia7c2952eebca15");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
