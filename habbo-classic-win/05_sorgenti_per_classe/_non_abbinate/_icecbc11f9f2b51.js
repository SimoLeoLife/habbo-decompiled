// Estratto da HabboAirLauncher.deobf.js, riga 114438.

class {
    static {
      n(this, "_icecbc11f9f2b51");
    }
    static {
      gft(this, "_icecbc11f9f2b51");
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
