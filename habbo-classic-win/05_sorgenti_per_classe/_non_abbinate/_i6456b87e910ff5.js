// Estratto da HabboAirLauncher.deobf.js, riga 121479.

class {
    static {
      n(this, "_i6456b87e910ff5");
    }
    static {
      I9t(this, "_i6456b87e910ff5");
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
