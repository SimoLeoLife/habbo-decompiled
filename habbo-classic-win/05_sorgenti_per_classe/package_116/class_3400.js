// Estratto da HabboAirLauncher.deobf.js, riga 104971.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_3400.as
// Nome offuscato: _i71b96c648e611d

class {
    static {
      n(this, "class_3400");
    }
    static {
      R$r(this, "class_3400");
    }
    _userId = 0;
    _value = 0;
    get userId() {
      return this._userId;
    }
    get value() {
      return this._value;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), (this._value = e.readInteger()), !0);
    }
  }
