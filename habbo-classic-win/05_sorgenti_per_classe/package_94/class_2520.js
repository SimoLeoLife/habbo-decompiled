// Estratto da HabboAirLauncher.deobf.js, riga 124107.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_94/class_2520.as
// Nome offuscato: _i3c02d970ba0941

class {
    static {
      n(this, "class_2520");
    }
    static {
      egt(this, "class_2520");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
