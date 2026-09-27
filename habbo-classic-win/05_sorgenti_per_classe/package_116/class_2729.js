// Estratto da HabboAirLauncher.deobf.js, riga 104595.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_2729.as
// Nome offuscato: _i37c567fd9ad493

class {
    static {
      n(this, "class_2729");
    }
    static {
      e$r(this, "class_2729");
    }
    var_3632 = 0;
    var_3113 = 0;
    var_1655 = 0;
    get roomIndex() {
      return this.var_3632;
    }
    get petId() {
      return this.var_3113;
    }
    get level() {
      return this.var_1655;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3632 = e.readInteger()),
        (this.var_3113 = e.readInteger()),
        (this.var_1655 = e.readInteger()),
        !0
      );
    }
  }
