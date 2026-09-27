// Estratto da HabboAirLauncher.deobf.js, riga 125477.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_31/class_1975.as
// Nome offuscato: _if01a0ed3fe4e6a

class {
    static {
      n(this, "class_1975");
    }
    static {
      Cwt(this, "class_1975");
    }
    _data = [];
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
