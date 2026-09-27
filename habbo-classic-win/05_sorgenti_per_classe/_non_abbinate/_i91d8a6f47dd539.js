// Estratto da HabboAirLauncher.deobf.js, riga 119555.

class {
    static {
      n(this, "_i91d8a6f47dd539");
    }
    static {
      O6t(this, "_i91d8a6f47dd539");
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
