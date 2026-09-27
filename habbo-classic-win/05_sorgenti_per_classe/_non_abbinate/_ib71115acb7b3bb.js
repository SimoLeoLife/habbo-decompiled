// Estratto da HabboAirLauncher.deobf.js, riga 124553.

class {
    static {
      n(this, "_ib71115acb7b3bb");
    }
    static {
      Ogt(this, "_ib71115acb7b3bb");
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
