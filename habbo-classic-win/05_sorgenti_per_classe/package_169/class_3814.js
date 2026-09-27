// Estratto da HabboAirLauncher.deobf.js, riga 97213.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_169/class_3814.as
// Nome offuscato: _i99520a4d834ab2

class {
    static {
      n(this, "class_3814");
    }
    static {
      qHr(this, "class_3814");
    }
    var_3213 = null;
    var_1241 = 0;
    get claimId() {
      return this.var_3213;
    }
    get result() {
      return this.var_1241;
    }
    flush() {
      return ((this.var_3213 = null), (this.var_1241 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3213 = e.readString()),
        (this.var_1241 = e.readInteger()),
        !0
      );
    }
  }
