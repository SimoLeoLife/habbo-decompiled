// Estratto da HabboAirLauncher.deobf.js, riga 123726.

class {
    static {
      n(this, "_i4ef6b032f45ef6");
    }
    static {
      wmt(this, "_i4ef6b032f45ef6");
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
