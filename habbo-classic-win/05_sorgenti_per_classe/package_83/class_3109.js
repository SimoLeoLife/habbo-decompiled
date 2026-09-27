// Estratto da HabboAirLauncher.deobf.js, riga 118915.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_83/class_3109.as
// Nome offuscato: _i9cb04933339b0a

class {
    static {
      n(this, "class_3109");
    }
    static {
      R1t(this, "class_3109");
    }
    static const_1162 = 0;
    static ACTION_KICK = 1;
    static const_854 = 3;
    static const_757 = 4;
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
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
