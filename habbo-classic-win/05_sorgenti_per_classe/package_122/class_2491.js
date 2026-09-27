// Estratto da HabboAirLauncher.deobf.js, riga 116058.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_122/class_2491.as
// Nome offuscato: _ic39612f808607e

class {
    static {
      n(this, "class_2491");
    }
    static {
      w_t(this, "class_2491");
    }
    _data = [];
    constructor(e, r = 0) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
