// Estratto da HabboAirLauncher.deobf.js, riga 114621.

class {
    static {
      n(this, "_i01e8673c5d0d4e");
    }
    static {
      Lft(this, "_i01e8673c5d0d4e");
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
