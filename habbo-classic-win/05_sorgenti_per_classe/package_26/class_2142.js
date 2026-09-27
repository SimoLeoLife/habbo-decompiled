// Estratto da HabboAirLauncher.deobf.js, riga 119249.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2142.as
// Nome offuscato: _ie1e47437f2c80c

class {
    static {
      n(this, "class_2142");
    }
    static {
      d6t(this, "class_2142");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r ? 1 : 0), this._data.push(t ? 1 : 0));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
