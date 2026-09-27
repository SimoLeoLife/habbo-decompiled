// Estratto da HabboAirLauncher.deobf.js, riga 79032.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_1788.as
// Nome offuscato: _i7647d9e23a64a1

class {
    static {
      n(this, "class_1788");
    }
    static {
      Dwr(this, "class_1788");
    }
    var_1250 = 0;
    var_1022 = "";
    get senderId() {
      return this.var_1250;
    }
    get messageText() {
      return this.var_1022;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_1250 = e.readInteger()),
        (this.var_1022 = e.readString()),
        !0
      );
    }
  }
