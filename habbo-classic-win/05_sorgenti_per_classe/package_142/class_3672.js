// Estratto da HabboAirLauncher.deobf.js, riga 115145.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_142/class_3672.as
// Nome offuscato: _i0b07d9a48f16c4

class {
    static {
      n(this, "class_3672");
    }
    static {
      Olt(this, "class_3672");
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
