// Estratto da HabboAirLauncher.deobf.js, riga 125247.

class {
    static {
      n(this, "_iec45f45ee775ab");
    }
    static {
      twt(this, "_iec45f45ee775ab");
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
