// Estratto da HabboAirLauncher.deobf.js, riga 125167.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1874.as
// Nome offuscato: _ib3a4f5dec8e17b

class {
    static {
      n(this, "class_1874");
    }
    static {
      Yvt(this, "class_1874");
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
