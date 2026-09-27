// Estratto da HabboAirLauncher.deobf.js, riga 119069.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3022.as
// Nome offuscato: _i172feca0df7fb1

class {
    static {
      n(this, "class_3022");
    }
    static {
      Q1t(this, "class_3022");
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
