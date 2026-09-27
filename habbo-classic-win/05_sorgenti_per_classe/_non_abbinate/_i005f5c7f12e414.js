// Estratto da HabboAirLauncher.deobf.js, riga 123992.

class {
    static {
      n(this, "_i005f5c7f12e414");
    }
    static {
      jmt(this, "_i005f5c7f12e414");
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
