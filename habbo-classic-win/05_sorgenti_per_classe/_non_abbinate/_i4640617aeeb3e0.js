// Estratto da HabboAirLauncher.deobf.js, riga 124487.

class {
    static {
      n(this, "_i4640617aeeb3e0");
    }
    static {
      Rgt(this, "_i4640617aeeb3e0");
    }
    _data = [];
    constructor(e) {
      this._data.push(new Long(e));
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
