// Estratto da HabboAirLauncher.deobf.js, riga 127378.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_230/class_3943.as
// Nome offuscato: _i7e09fe937edf5e

class {
    static {
      n(this, "class_3943");
    }
    static {
      sxt(this, "class_3943");
    }
    var_837 = null;
    parse(e) {
      return ((this.var_837 = KG.readFromMessage(e)), !0);
    }
    flush() {
      return ((this.var_837 = null), !0);
    }
    get settings() {
      return this.var_837;
    }
  }
