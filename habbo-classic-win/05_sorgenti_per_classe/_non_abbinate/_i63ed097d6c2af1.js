// Estratto da HabboAirLauncher.deobf.js, riga 123946.

class {
    static {
      n(this, "_i63ed097d6c2af1");
    }
    static {
      Hmt(this, "_i63ed097d6c2af1");
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
