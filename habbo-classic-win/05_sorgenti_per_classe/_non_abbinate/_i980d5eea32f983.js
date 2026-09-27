// Estratto da HabboAirLauncher.deobf.js, riga 114208.

class {
    static {
      n(this, "_i980d5eea32f983");
    }
    static {
      Qct(this, "_i980d5eea32f983");
    }
    _data = [];
    constructor(e) {
      this._data = [e];
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
