// Estratto da HabboAirLauncher.deobf.js, riga 114560.

class {
    static {
      n(this, "_i9cd25c94155053");
    }
    static {
      kft(this, "_i9cd25c94155053");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
