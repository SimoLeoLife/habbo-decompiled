// Estratto da HabboAirLauncher.deobf.js, riga 127220.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_4093.as
// Nome offuscato: _ie28e3357a5f904

class {
    static {
      n(this, "class_4093");
    }
    static {
      $It(this, "class_4093");
    }
    var_3632 = 0;
    var_1429 = 0;
    get roomIndex() {
      return this.var_3632;
    }
    get habbiconId() {
      return this.var_1429;
    }
    flush() {
      return ((this.var_3632 = 0), (this.var_1429 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3632 = e.readInteger()),
        (this.var_1429 = e.readInteger()),
        !0
      );
    }
  }
