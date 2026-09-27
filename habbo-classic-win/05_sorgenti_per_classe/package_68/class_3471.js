// Estratto da HabboAirLauncher.deobf.js, riga 72880.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_68/class_3471.as
// Nome offuscato: _ic2a7b86bf79934

class {
    static {
      n(this, "class_3471");
    }
    static {
      D8r(this, "class_3471");
    }
    var_3129 = 0;
    var_3479 = 0;
    var_3346 = !1;
    flush() {
      return ((this.var_3129 = 0), (this.var_3479 = 0), (this.var_3346 = !1), !0);
    }
    parse(e) {
      return (
        (this.var_3129 = e.readInteger()),
        (this.var_3479 = e.readInteger()),
        (this.var_3346 = e.readBoolean()),
        !0
      );
    }
  }
