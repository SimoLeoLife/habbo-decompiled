// Estratto da HabboAirLauncher.deobf.js, riga 119578.

class {
    static {
      n(this, "_i4ee8fc56f28855");
    }
    static {
      H6t(this, "_i4ee8fc56f28855");
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
