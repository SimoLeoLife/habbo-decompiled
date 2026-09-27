// Estratto da HabboAirLauncher.deobf.js, riga 100895.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2398.as
// Nome offuscato: _ice07cdd7a3103e

class {
    static {
      n(this, "class_2398");
    }
    static {
      Hzr(this, "class_2398");
    }
    var_2735 = 0;
    var_3338 = -1;
    get itemId() {
      return this.var_2735;
    }
    get pickerId() {
      return this.var_3338;
    }
    flush() {
      return ((this.var_2735 = 0), !0);
    }
    parse(e) {
      return e
        ? ((this.var_2735 = Number.parseInt(e.readString(), 10)),
          (this.var_3338 = e.readInteger()),
          !0)
        : !1;
    }
  }
