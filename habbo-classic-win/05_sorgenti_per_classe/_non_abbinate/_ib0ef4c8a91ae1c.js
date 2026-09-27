// Estratto da HabboAirLauncher.deobf.js, riga 114140.

class {
    static {
      n(this, "_ib0ef4c8a91ae1c");
    }
    static {
      Oct(this, "_ib0ef4c8a91ae1c");
    }
    _data = [];
    constructor(e, r, t) {
      this._data = [e, r, t];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
