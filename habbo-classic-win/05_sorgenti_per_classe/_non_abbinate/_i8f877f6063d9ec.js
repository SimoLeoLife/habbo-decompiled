// Estratto da HabboAirLauncher.deobf.js, riga 117099.

class {
    static {
      n(this, "_i8f877f6063d9ec");
    }
    static {
      fut(this, "_i8f877f6063d9ec");
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
