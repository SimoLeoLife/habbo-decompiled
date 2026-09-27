// Estratto da HabboAirLauncher.deobf.js, riga 125107.

class {
    static {
      n(this, "_i7ffb0617d00fcb");
    }
    static {
      Uvt(this, "_i7ffb0617d00fcb");
    }
    _data = [];
    constructor(e, r, t = !1) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
