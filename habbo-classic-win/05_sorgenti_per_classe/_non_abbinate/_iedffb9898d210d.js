// Estratto da HabboAirLauncher.deobf.js, riga 125354.

class {
    static {
      n(this, "_iedffb9898d210d");
    }
    static {
      bwt(this, "_iedffb9898d210d");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
