// Estratto da HabboAirLauncher.deobf.js, riga 119773.

class {
    static {
      n(this, "_i25b16c52c60064");
    }
    static {
      i8t(this, "_i25b16c52c60064");
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
