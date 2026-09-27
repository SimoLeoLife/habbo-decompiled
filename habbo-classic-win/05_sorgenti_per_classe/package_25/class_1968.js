// Estratto da HabboAirLauncher.deobf.js, riga 125187.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1968.as
// Nome offuscato: _i9883ae17629e02

class {
    static {
      n(this, "class_1968");
    }
    static {
      $vt(this, "class_1968");
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
