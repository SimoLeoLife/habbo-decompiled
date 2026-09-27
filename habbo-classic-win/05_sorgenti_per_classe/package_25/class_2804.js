// Estratto da HabboAirLauncher.deobf.js, riga 124839.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2804.as
// Nome offuscato: _ifc7105c16041b8

class {
    static {
      n(this, "class_2804");
    }
    static {
      uvt(this, "class_2804");
    }
    static const_442 = 1;
    static const_243 = 0;
    static const_1366 = 2;
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
