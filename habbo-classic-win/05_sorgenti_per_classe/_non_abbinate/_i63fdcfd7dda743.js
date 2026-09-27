// Estratto da HabboAirLauncher.deobf.js, riga 123390.

class {
    static {
      n(this, "_i63fdcfd7dda743");
    }
    static {
      $pt(this, "_i63fdcfd7dda743");
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
