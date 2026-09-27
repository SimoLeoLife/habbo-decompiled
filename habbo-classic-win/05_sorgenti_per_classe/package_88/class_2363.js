// Estratto da HabboAirLauncher.deobf.js, riga 99584.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_88/class_2363.as
// Nome offuscato: _ibc8480f94f48ba

class {
    static {
      n(this, "class_2363");
    }
    static {
      sjr(this, "class_2363");
    }
    var_1817 = -1;
    flush() {
      return ((this.var_1817 = -1), !0);
    }
    parse(e) {
      return ((this.var_1817 = e.readInteger()), !0);
    }
    get botId() {
      return this.var_1817;
    }
  }
