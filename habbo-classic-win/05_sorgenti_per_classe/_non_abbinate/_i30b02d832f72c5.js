// Estratto da HabboAirLauncher.deobf.js, riga 116948.

class {
    static {
      n(this, "_i30b02d832f72c5");
    }
    static {
      q0t(this, "_i30b02d832f72c5");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d) {
      this._data = [e, r, t, i, s, o, d];
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
