// Estratto da HabboAirLauncher.deobf.js, riga 114962.

class {
    static {
      n(this, "_i83882ffc49bb0d");
    }
    static {
      wlt(this, "_i83882ffc49bb0d");
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
