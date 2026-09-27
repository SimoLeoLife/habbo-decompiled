// Estratto da HabboAirLauncher.deobf.js, riga 124061.

class {
    static {
      n(this, "_id67cc3c2d28dfd");
    }
    static {
      $mt(this, "_id67cc3c2d28dfd");
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
