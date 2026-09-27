// Estratto da HabboAirLauncher.deobf.js, riga 113463.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_152/class_2683.as
// Nome offuscato: _ia94ac43be4b1ac

class {
    static {
      n(this, "class_2683");
    }
    static {
      ect(this, "class_2683");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    dispose() {
      this._data = [];
    }
    getMessageArray() {
      return this._data ?? [];
    }
  }
