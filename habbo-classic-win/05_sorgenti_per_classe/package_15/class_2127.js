// Estratto da HabboAirLauncher.deobf.js, riga 118348.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_15/class_2127.as
// Nome offuscato: _i320f160dd05f45

class {
    static {
      n(this, "class_2127");
    }
    static {
      H3t(this, "class_2127");
    }
    static const_84 = 1;
    static const_129 = 2;
    static const_383 = 3;
    _array = [];
    constructor(e, r, t = null) {
      (this._array.push(e), this._array.push(r), t != null && t.length > 0 && this._array.push(t));
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
