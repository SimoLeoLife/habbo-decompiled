// Estratto da HabboAirLauncher.deobf.js, riga 123640.

class {
    static {
      n(this, "_ia271d2b3b31a5e");
    }
    static {
      bmt(this, "_ia271d2b3b31a5e");
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
