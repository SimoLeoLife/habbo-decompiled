// Estratto da HabboAirLauncher.deobf.js, riga 118685.

class {
    static {
      n(this, "_ibad7a3c36c1818");
    }
    static {
      u1t(this, "_ibad7a3c36c1818");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
