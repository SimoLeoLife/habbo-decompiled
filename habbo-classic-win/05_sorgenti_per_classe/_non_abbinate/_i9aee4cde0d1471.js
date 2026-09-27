// Estratto da HabboAirLauncher.deobf.js, riga 119140.

class {
    static {
      n(this, "_i9aee4cde0d1471");
    }
    static {
      q1t(this, "_i9aee4cde0d1471");
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
