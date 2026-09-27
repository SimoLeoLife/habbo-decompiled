// Estratto da HabboAirLauncher.deobf.js, riga 104314.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_2899.as
// Nome offuscato: _i0ee091acae2ecf

class {
    static {
      n(this, "class_2899");
    }
    static {
      UKr(this, "class_2899");
    }
    var_3113 = -1;
    _r9cba84ca3f9b7b = -1;
    _rc588ddfd121f25 = 0;
    get petId() {
      return this.var_3113;
    }
    get _r4150d1225be011() {
      return this._r9cba84ca3f9b7b;
    }
    get _r15293165089ba0() {
      return this._rc588ddfd121f25;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return e
        ? ((this.var_3113 = e.readInteger()),
          (this._r9cba84ca3f9b7b = e.readInteger()),
          (this._rc588ddfd121f25 = e.readInteger()),
          !0)
        : !1;
    }
  }
