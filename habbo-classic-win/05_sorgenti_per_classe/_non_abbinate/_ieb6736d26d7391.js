// Estratto da HabboAirLauncher.deobf.js, riga 124745.

class {
    static {
      n(this, "_ieb6736d26d7391");
    }
    static {
      ivt(this, "_ieb6736d26d7391");
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
