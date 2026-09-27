// Estratto da HabboAirLauncher.deobf.js, riga 85440.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/class_4119.as
// Nome offuscato: _ie627c858df051a

class {
    static {
      n(this, "class_4119");
    }
    static {
      CCr(this, "class_4119");
    }
    var_3330 = -1;
    var_438 = [];
    var_3425 = 0;
    var_3680 = !0;
    get _rf036dafd6acd66() {
      return this.var_3330;
    }
    get products() {
      return this.var_438;
    }
    get _rd2ec7693b05f8f() {
      return this.var_3425;
    }
    get _r9461bbfae118fc() {
      return this.var_3680;
    }
    flush() {
      return (
        (this.var_3330 = -1),
        (this.var_438 = []),
        (this.var_3425 = 0),
        (this.var_3680 = !0),
        !0
      );
    }
    parse(e) {
      this.var_3330 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; ++t) this.var_438.push(new ps(e));
      return ((this.var_3425 = e.readInteger()), (this.var_3680 = e.readBoolean()), !0);
    }
  }
