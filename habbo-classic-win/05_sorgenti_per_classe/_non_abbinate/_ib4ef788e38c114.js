// Estratto da HabboAirLauncher.deobf.js, riga 122505.

class {
    static {
      n(this, "_ib4ef788e38c114");
    }
    static {
      C7t(this, "_ib4ef788e38c114");
    }
    _data;
    constructor(e, r = -1, t = -1, i = -1, s = -1, o = -1, d = -1) {
      r === -1 && t === -1 && i === -1 && s === -1 && o === -1
        ? (this._data = [e])
        : d === -1
          ? (this._data = [e, r, t, i, s, o])
          : (this._data = [e, r, t, i, s, o, d]);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
