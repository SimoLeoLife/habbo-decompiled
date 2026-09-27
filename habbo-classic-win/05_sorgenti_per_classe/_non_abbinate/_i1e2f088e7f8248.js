// Estratto da HabboAirLauncher.deobf.js, riga 119295.

class {
    static {
      n(this, "_i1e2f088e7f8248");
    }
    static {
      b6t(this, "_i1e2f088e7f8248");
    }
    _data = [];
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
