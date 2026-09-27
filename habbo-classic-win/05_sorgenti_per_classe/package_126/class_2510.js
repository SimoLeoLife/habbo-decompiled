// Estratto da HabboAirLauncher.deobf.js, riga 115461.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_126/class_2510.as
// Nome offuscato: _iaf8edaf6a1d83b

class {
    static {
      n(this, "class_2510");
    }
    static {
      ubt(this, "class_2510");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
