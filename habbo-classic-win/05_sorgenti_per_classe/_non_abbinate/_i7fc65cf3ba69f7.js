// Estratto da HabboAirLauncher.deobf.js, riga 122423.

class {
    static {
      n(this, "_i7fc65cf3ba69f7");
    }
    static {
      u7t(this, "_i7fc65cf3ba69f7");
    }
    _data;
    constructor(e, r) {
      this._data = [e, r];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
