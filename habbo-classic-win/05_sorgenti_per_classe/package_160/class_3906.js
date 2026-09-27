// Estratto da HabboAirLauncher.deobf.js, riga 106224.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_160/class_3906.as
// Nome offuscato: _iedb329fa4bb652

class {
    static {
      n(this, "class_3906");
    }
    static {
      wqr(this, "class_3906");
    }
    var_3240 = -1;
    var_3646 = -1;
    var_3210 = -1;
    var_3722 = -1;
    var_3079 = -1;
    get _ra415d261ed4b67() {
      return this.var_3240;
    }
    get currentPosition() {
      return this.var_3646;
    }
    get _rf6b81f59324fe0() {
      return this.var_3210;
    }
    get _rcb0091255b1769() {
      return this.var_3722;
    }
    get _rfba51a2e01d52b() {
      return this.var_3079;
    }
    flush() {
      return (
        (this.var_3240 = -1),
        (this.var_3646 = -1),
        (this.var_3210 = -1),
        (this.var_3722 = -1),
        (this.var_3079 = -1),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3240 = e.readInteger()),
        (this.var_3646 = e.readInteger()),
        (this.var_3210 = e.readInteger()),
        (this.var_3722 = e.readInteger()),
        (this.var_3079 = e.readInteger()),
        !0
      );
    }
  }
