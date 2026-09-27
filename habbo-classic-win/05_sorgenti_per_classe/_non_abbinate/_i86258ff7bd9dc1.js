// Estratto da HabboAirLauncher.deobf.js, riga 124944.

class {
    static {
      n(this, "_i86258ff7bd9dc1");
    }
    static {
      Mvt(this, "_i86258ff7bd9dc1");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
