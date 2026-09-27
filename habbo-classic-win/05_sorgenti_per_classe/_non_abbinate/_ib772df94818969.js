// Estratto da HabboAirLauncher.deobf.js, riga 114120.

class {
    static {
      n(this, "_ib772df94818969");
    }
    static {
      Lct(this, "_ib772df94818969");
    }
    _data = [];
    constructor(e) {
      this._data = [e];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
