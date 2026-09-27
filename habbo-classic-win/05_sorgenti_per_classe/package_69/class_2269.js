// Estratto da HabboAirLauncher.deobf.js, riga 99110.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_69/class_2269.as
// Nome offuscato: _ie16e6b2c60a586

class {
    static {
      n(this, "class_2269");
    }
    static {
      pGr(this, "class_2269");
    }
    var_3869 = -1;
    var_3321 = 0;
    get _r27f114ab0f7883() {
      return this.var_3869;
    }
    get _rdabad64e195dc8() {
      return this.var_3321;
    }
    flush() {
      return ((this.var_3869 = -1), (this.var_3321 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3869 = e.readInteger()),
        (this.var_3321 = e.readInteger()),
        !0
      );
    }
  }
