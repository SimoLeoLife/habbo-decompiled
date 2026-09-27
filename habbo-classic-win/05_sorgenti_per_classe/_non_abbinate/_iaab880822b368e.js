// Estratto da HabboAirLauncher.deobf.js, riga 118967.

class {
    static {
      n(this, "_iaab880822b368e");
    }
    static {
      L1t(this, "_iaab880822b368e");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
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
