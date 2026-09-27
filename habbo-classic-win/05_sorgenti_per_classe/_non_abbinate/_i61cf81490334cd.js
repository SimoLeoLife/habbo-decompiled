// Estratto da HabboAirLauncher.deobf.js, riga 125333.

class {
    static {
      n(this, "_i61cf81490334cd");
    }
    static {
      fwt(this, "_i61cf81490334cd");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t = 0; t < r.length; t++) this._data.push(r[t] | 0);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
