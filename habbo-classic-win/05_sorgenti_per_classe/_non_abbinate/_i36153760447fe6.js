// Estratto da HabboAirLauncher.deobf.js, riga 121990.

class {
    static {
      n(this, "_i36153760447fe6");
    }
    static {
      C4t(this, "_i36153760447fe6");
    }
    _data;
    constructor(e, r, t) {
      this._data = [e, r, t];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
