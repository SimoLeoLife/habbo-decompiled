// Estratto da HabboAirLauncher.deobf.js, riga 116250.

class {
    static {
      n(this, "_ief768640ae3f8a");
    }
    static {
      O_t(this, "_ief768640ae3f8a");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
