// Estratto da HabboAirLauncher.deobf.js, riga 124351.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_188/class_2993.as
// Nome offuscato: _ie58c634a539e01

class {
    static {
      n(this, "class_2993");
    }
    static {
      wgt(this, "class_2993");
    }
    _data = [];
    constructor(e) {
      this._data = e;
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
