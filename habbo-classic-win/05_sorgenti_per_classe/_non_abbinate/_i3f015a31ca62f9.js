// Estratto da HabboAirLauncher.deobf.js, riga 119601.

class {
    static {
      n(this, "_i3f015a31ca62f9");
    }
    static {
      U6t(this, "_i3f015a31ca62f9");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
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
