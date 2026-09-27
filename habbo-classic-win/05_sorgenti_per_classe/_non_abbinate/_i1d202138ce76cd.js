// Estratto da HabboAirLauncher.deobf.js, riga 118639.

class {
    static {
      n(this, "_i1d202138ce76cd");
    }
    static {
      f1t(this, "_i1d202138ce76cd");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
