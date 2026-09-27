// Estratto da HabboAirLauncher.deobf.js, riga 118616.

class {
    static {
      n(this, "_i671071d9a891e5");
    }
    static {
      d1t(this, "_i671071d9a891e5");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
