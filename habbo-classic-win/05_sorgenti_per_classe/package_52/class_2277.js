// Estratto da HabboAirLauncher.deobf.js, riga 93867.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_2277.as
// Nome offuscato: _i091ce84cf51d3e

class {
    static {
      n(this, "class_2277");
    }
    static {
      gLr(this, "class_2277");
    }
    var_3709 = 0;
    var_193 = 0;
    var_4108 = 0;
    constructor(e, r = 0, t = 0) {
      ((this.var_3709 = r),
        (this.var_193 = t),
        e &&
          ((this.var_3709 = e.readInteger()),
          (this.var_193 = e.readInteger()),
          (this.var_4108 = e.readInteger())));
    }
    get _r60d0785b4a5490() {
      return this.var_3709;
    }
    get _r4462e1d7892a93() {
      return this.var_193;
    }
    get _r3afa55440b125a() {
      return this.var_4108;
    }
  }
