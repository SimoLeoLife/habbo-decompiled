// Estratto da HabboAirLauncher.deobf.js, riga 125394.

class {
    static {
      n(this, "_i6467d87e5ba4d8");
    }
    static {
      pwt(this, "_i6467d87e5ba4d8");
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
