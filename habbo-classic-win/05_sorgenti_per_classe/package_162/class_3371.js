// Estratto da HabboAirLauncher.deobf.js, riga 99984.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_162/class_3371.as
// Nome offuscato: _i91e1fd86b22aa1

class {
    static {
      n(this, "class_3371");
    }
    static {
      Ujr(this, "class_3371");
    }
    var_3834 = 0;
    var_3158 = 0;
    get _rc86f77becaebea() {
      return this.var_3834;
    }
    get _re317b45f6f710f() {
      return this.var_3158;
    }
    flush() {
      return ((this.var_3834 = 0), (this.var_3158 = 0), !0);
    }
    parse(e) {
      return e
        ? ((this.var_3834 = e.readInteger()), (this.var_3158 = e.readInteger()), !0)
        : !1;
    }
  }
