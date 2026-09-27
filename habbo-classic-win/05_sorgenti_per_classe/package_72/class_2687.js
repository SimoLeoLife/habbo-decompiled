// Estratto da HabboAirLauncher.deobf.js, riga 123179.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_72/class_2687.as
// Nome offuscato: _iafb393f349c99a

class {
    static {
      n(this, "class_2687");
    }
    static {
      Bpt(this, "class_2687");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
    get disposed() {
      return !1;
    }
  }
