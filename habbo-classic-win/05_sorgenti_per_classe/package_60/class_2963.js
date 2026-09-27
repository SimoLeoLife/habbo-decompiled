// Estratto da HabboAirLauncher.deobf.js, riga 95029.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_2963.as
// Nome offuscato: _ib774c75a98fbd1

class {
    static {
      n(this, "class_2963");
    }
    static {
      BNr(this, "class_2963");
    }
    var_3130 = 0;
    var_2642 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3130 = e.readInteger()),
        (this.var_2642 = e.readInteger()),
        !0
      );
    }
    get _r3dfd89b26af6cd() {
      return this.var_3130;
    }
    get _r266961c2772107() {
      return this.var_2642;
    }
  }
