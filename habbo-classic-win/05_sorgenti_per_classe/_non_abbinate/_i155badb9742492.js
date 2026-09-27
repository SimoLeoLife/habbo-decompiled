// Estratto da HabboAirLauncher.deobf.js, riga 119014.

class {
    static {
      n(this, "_i155badb9742492");
    }
    static {
      H1t(this, "_i155badb9742492");
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
