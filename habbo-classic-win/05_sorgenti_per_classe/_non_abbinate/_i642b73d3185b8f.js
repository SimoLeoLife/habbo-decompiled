// Estratto da HabboAirLauncher.deobf.js, riga 124802.

class {
    static {
      n(this, "_i642b73d3185b8f");
    }
    static {
      fvt(this, "_i642b73d3185b8f");
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
