// Estratto da HabboAirLauncher.deobf.js, riga 78833.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2063.as
// Nome offuscato: _if0ea90027962ac

class {
    static {
      n(this, "class_2063");
    }
    static {
      vwr(this, "class_2063");
    }
    var_5518 = 0;
    get unreadMessageCount() {
      return this.var_5518;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_5518 = e.readInteger()), !0);
    }
  }
