// Estratto da HabboAirLauncher.deobf.js, riga 116971.

class {
    static {
      n(this, "_i0c6cfe2f5218c7");
    }
    static {
      eut(this, "_i0c6cfe2f5218c7");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      this._data = [e, r, t, i, s, o];
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
