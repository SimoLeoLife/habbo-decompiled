// Estratto da HabboAirLauncher.deobf.js, riga 93210.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_3496.as
// Nome offuscato: _i328afaa814658a

class {
    static {
      n(this, "class_3496");
    }
    static {
      fDr(this, "class_3496");
    }
    var_3204 = 0;
    var_3182 = 0;
    _windowWidth = 0;
    var_3847 = 0;
    get _r02a1531c5600e7() {
      return this.var_3204;
    }
    get _r9dc06e4415e238() {
      return this.var_3182;
    }
    get _rd5507bbbf34586() {
      return this._windowWidth;
    }
    get _r47a31970387a01() {
      return this.var_3847;
    }
    flush() {
      return (
        (this.var_3204 = 0),
        (this.var_3182 = 0),
        (this._windowWidth = 0),
        (this.var_3847 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3204 = e.readInteger()),
        (this.var_3182 = e.readInteger()),
        (this._windowWidth = e.readInteger()),
        (this.var_3847 = e.readInteger()),
        !0
      );
    }
  }
