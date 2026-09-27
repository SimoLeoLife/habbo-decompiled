// Estratto da HabboAirLauncher.deobf.js, riga 72953.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_68/class_2874.as
// Nome offuscato: _i598366f6ab953f

class {
    static {
      n(this, "class_2874");
    }
    static {
      G8r(this, "class_2874");
    }
    var_3129 = 0;
    var_3479 = 0;
    flush() {
      return ((this.var_3129 = 0), (this.var_3479 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3129 = e.readInteger()),
        (this.var_3479 = e.readInteger()),
        !0
      );
    }
  }
