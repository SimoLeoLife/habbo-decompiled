// Estratto da HabboAirLauncher.deobf.js, riga 124259.

class {
    static {
      n(this, "_id98c8041b57695");
    }
    static {
      bgt(this, "_id98c8041b57695");
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
