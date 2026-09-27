// Estratto da HabboAirLauncher.deobf.js, riga 119532.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3610.as
// Nome offuscato: _ie8fe5ed3e859b5

class {
    static {
      n(this, "class_3610");
    }
    static {
      L6t(this, "class_3610");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
