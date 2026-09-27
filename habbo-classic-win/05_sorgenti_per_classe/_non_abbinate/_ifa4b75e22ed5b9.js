// Estratto da HabboAirLauncher.deobf.js, riga 125147.

class {
    static {
      n(this, "_ifa4b75e22ed5b9");
    }
    static {
      Qvt(this, "_ifa4b75e22ed5b9");
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
