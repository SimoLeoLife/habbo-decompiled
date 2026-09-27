// Estratto da HabboAirLauncher.deobf.js, riga 121577.

class {
    static {
      n(this, "_if9763f879f916b");
    }
    static {
      S9t(this, "_if9763f879f916b");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
