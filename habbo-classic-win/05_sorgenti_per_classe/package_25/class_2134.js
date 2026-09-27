// Estratto da HabboAirLauncher.deobf.js, riga 124765.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2134.as
// Nome offuscato: _i2d9f50e69462ef

class {
    static {
      n(this, "class_2134");
    }
    static {
      svt(this, "class_2134");
    }
    _data = [];
    constructor(e, r = !0) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
