// Estratto da HabboAirLauncher.deobf.js, riga 124084.

class {
    static {
      n(this, "_i703229ab5f3c3c");
    }
    static {
      qmt(this, "_i703229ab5f3c3c");
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
