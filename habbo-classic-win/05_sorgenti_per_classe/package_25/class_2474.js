// Estratto da HabboAirLauncher.deobf.js, riga 125310.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2474.as
// Nome offuscato: _i0f77c514bcea0d

class {
    static {
      n(this, "class_2474");
    }
    static {
      dwt(this, "class_2474");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
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
