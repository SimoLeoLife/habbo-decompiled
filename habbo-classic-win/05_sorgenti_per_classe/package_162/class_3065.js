// Estratto da HabboAirLauncher.deobf.js, riga 99893.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_162/class_3065.as
// Nome offuscato: _i48096869c173a7

class {
    static {
      n(this, "class_3065");
    }
    static {
      Rjr(this, "class_3065");
    }
    var_3818 = null;
    flush() {
      return ((this.var_3818 = null), !0);
    }
    parse(e) {
      return ((this.var_3818 = at.fromFloodSensitivity(e.readInteger())), !0);
    }
    get chatSettings() {
      return this.var_3818;
    }
  }
