// Estratto da HabboAirLauncher.deobf.js, riga 118524.

class {
    static {
      n(this, "_ia6a9b233f8d42d");
    }
    static {
      e1t(this, "_ia6a9b233f8d42d");
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
