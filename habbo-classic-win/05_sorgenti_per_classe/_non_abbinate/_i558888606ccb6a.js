// Estratto da HabboAirLauncher.deobf.js, riga 117023.

class {
    static {
      n(this, "_i558888606ccb6a");
    }
    static {
      iut(this, "_i558888606ccb6a");
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
