// Estratto da HabboAirLauncher.deobf.js, riga 124998.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2592.as
// Nome offuscato: _i58134011e0869b

class {
    static {
      n(this, "class_2592");
    }
    static {
      Rvt(this, "class_2592");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
