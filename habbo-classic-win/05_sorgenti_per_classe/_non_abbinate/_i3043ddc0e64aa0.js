// Estratto da HabboAirLauncher.deobf.js, riga 124964.

class {
    static {
      n(this, "_i3043ddc0e64aa0");
    }
    static {
      Bvt(this, "_i3043ddc0e64aa0");
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
