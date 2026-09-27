// Estratto da HabboAirLauncher.deobf.js, riga 74687.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_5/class_3358.as
// Nome offuscato: _iec9b052931f6f6

class extends class_3142 {
    static {
      n(this, "class_3358");
    }
    static {
      A9r(this, "class_3358");
    }
    var_4325;
    var_4902;
    var_5450;
    var_5055;
    constructor(e) {
      (super(e),
        (this.var_4325 = e.readInteger()),
        (this.var_4902 = e.readInteger()),
        (this.var_5450 = e.readInteger()),
        (this.var_5055 = e.readInteger()));
    }
    get _r052a5622f6f7d5() {
      return this.var_4325 * this.months;
    }
    get _r7a85d602f9e6c9() {
      return this.var_4902 * this.months;
    }
    get _r076dbd64e63199() {
      return this.var_4325 * this.months - this.priceCredits;
    }
    get _r19fdd3749a5bb8() {
      return this._r7a85d602f9e6c9 * this.months - this.priceActivityPoints;
    }
  }
