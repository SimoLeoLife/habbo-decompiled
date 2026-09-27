// Estratto da HabboAirLauncher.deobf.js, riga 124510.

class {
    static {
      n(this, "_i7be3e6378eefce");
    }
    static {
      Sgt(this, "_i7be3e6378eefce");
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
