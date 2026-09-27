// Estratto da HabboAirLauncher.deobf.js, riga 104788.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2645.as
// Nome offuscato: _i134bdef22c038d

class a {
    static {
      n(this, "class_2645");
    }
    static {
      p$r(this, "class_2645");
    }
    static const_806 = 1;
    static const_530 = 2;
    static const_873 = 3;
    static const_493 = 4;
    static const_558 = 5;
    var_2731 = 0;
    var_2471 = "";
    flush() {
      return ((this.var_2731 = 0), (this.var_2471 = ""), !0);
    }
    parse(e) {
      return (
        (this.var_2731 = e.readInteger()),
        this.var_2731 === a.const_873
          ? (this.var_2471 = e.readString())
          : (this.var_2471 = ""),
        !0
      );
    }
    get reason() {
      return this.var_2731;
    }
    get parameter() {
      return this.var_2471;
    }
  }
