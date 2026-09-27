// Estratto da HabboAirLauncher.deobf.js, riga 115958.

class {
    static {
      n(this, "_i7e7c592b72dcca");
    }
    static {
      f_t(this, "_i7e7c592b72dcca");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
