// Estratto da HabboAirLauncher.deobf.js, riga 117752.

class {
    static {
      n(this, "_i366b245dd73fdf");
    }
    static {
      Cht(this, "_i366b245dd73fdf");
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
