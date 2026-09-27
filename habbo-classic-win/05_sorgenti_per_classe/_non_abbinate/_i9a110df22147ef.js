// Estratto da HabboAirLauncher.deobf.js, riga 124213.

class {
    static {
      n(this, "_i9a110df22147ef");
    }
    static {
      dgt(this, "_i9a110df22147ef");
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
