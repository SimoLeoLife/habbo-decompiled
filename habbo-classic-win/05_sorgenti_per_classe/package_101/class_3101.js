// Estratto da HabboAirLauncher.deobf.js, riga 116624.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_101/class_3101.as
// Nome offuscato: _i9bb0026b8e8f1e

class {
    static {
      n(this, "class_3101");
    }
    static {
      g0t(this, "class_3101");
    }
    _array;
    constructor(e, r, t, i) {
      this._array = [e, r, t, i];
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
