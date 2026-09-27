// Estratto da HabboAirLauncher.deobf.js, riga 118570.

class {
    static {
      n(this, "_ic7a0c32ff5642b");
    }
    static {
      i1t(this, "_ic7a0c32ff5642b");
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
