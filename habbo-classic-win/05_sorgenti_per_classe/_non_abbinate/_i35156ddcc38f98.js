// Estratto da HabboAirLauncher.deobf.js, riga 113386.

class {
    static {
      n(this, "_i35156ddcc38f98");
    }
    static {
      Qdt(this, "_i35156ddcc38f98");
    }
    _data;
    constructor(e) {
      ((this._data = []), this._data.push(e));
    }
    dispose() {
      this._data = null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
  }
