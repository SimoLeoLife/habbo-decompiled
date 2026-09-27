// Estratto da HabboAirLauncher.deobf.js, riga 117165.

class {
    static {
      n(this, "_i99629c68f7a80e");
    }
    static {
      put(this, "_i99629c68f7a80e");
    }
    _data = [];
    constructor(e, r) {
      this._data = [e, r];
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
