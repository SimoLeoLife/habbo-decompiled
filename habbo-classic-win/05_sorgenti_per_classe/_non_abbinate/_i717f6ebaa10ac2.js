// Estratto da HabboAirLauncher.deobf.js, riga 116310.

class {
    static {
      n(this, "_i717f6ebaa10ac2");
    }
    static {
      j_t(this, "_i717f6ebaa10ac2");
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
