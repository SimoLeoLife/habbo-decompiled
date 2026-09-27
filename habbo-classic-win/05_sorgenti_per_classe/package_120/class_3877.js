// Estratto da HabboAirLauncher.deobf.js, riga 90425.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_3877.as
// Nome offuscato: _i0e7be7dbca075d

class {
    static {
      n(this, "class_3877");
    }
    static {
      kTr(this, "class_3877");
    }
    var_3123 = -1;
    var_3113 = -1;
    flush() {
      return ((this.var_3113 = -1), (this.var_3123 = -1), !0);
    }
    parse(e) {
      return (
        (this.var_3113 = e.readInteger()),
        (this.var_3123 = e.readInteger()),
        !0
      );
    }
    get _r4420bc8bc1a910() {
      return this.var_3123;
    }
    get petId() {
      return this.var_3113;
    }
  }
