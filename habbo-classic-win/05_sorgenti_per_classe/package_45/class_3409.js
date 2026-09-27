// Estratto da HabboAirLauncher.deobf.js, riga 91956.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_3409.as
// Nome offuscato: _i213bf712f9c44f

class {
    static {
      n(this, "class_3409");
    }
    static {
      SPr(this, "class_3409");
    }
    var_5106 = 0;
    var_1241 = 0;
    get _r6a3b9b79bbedeb() {
      return this.var_5106;
    }
    get var_1827() {
      return this.var_1241;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_1241 = e.readInteger()),
        (this.var_5106 = e.readInteger()),
        !0
      );
    }
  }
