// Estratto da HabboAirLauncher.deobf.js, riga 114715.

class {
    static {
      n(this, "_i3be8d874c5a05e");
    }
    static {
      Qft(this, "_i3be8d874c5a05e");
    }
    _data = [];
    constructor(e = "", r = "") {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
