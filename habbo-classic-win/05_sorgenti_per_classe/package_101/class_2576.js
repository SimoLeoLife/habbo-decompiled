// Estratto da HabboAirLauncher.deobf.js, riga 116673.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_101/class_2576.as
// Nome offuscato: _ibf4d6b42857ac3

class {
    static {
      n(this, "class_2576");
    }
    static {
      I0t(this, "class_2576");
    }
    _array = [];
    constructor(e, r, t, i, s) {
      this._array = [e, r, t, i, s];
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
