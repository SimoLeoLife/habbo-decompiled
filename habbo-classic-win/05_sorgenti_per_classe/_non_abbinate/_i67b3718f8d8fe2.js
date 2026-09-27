// Estratto da HabboAirLauncher.deobf.js, riga 117911.

class {
    static {
      n(this, "_i67b3718f8d8fe2");
    }
    static {
      Uht(this, "_i67b3718f8d8fe2");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
