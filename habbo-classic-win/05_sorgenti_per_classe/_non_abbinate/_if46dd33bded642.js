// Estratto da HabboAirLauncher.deobf.js, riga 124397.

class {
    static {
      n(this, "_if46dd33bded642");
    }
    static {
      Cgt(this, "_if46dd33bded642");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t of r) this._data.push(t);
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
