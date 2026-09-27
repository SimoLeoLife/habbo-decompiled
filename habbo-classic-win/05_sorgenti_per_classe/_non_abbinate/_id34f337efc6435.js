// Estratto da HabboAirLauncher.deobf.js, riga 124533.

class {
    static {
      n(this, "_id34f337efc6435");
    }
    static {
      Lgt(this, "_id34f337efc6435");
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
