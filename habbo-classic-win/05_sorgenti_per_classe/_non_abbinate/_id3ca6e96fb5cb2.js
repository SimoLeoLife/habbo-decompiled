// Estratto da HabboAirLauncher.deobf.js, riga 120751.

class {
    static {
      n(this, "_id3ca6e96fb5cb2");
    }
    static {
      Q5t(this, "_id3ca6e96fb5cb2");
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
