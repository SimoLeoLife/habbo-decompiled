// Estratto da HabboAirLauncher.deobf.js, riga 121034.

class {
    static {
      n(this, "_i08ea7a9f9bb449");
    }
    static {
      C2t(this, "_i08ea7a9f9bb449");
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
