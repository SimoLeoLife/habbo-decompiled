// Estratto da HabboAirLauncher.deobf.js, riga 97050.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_141/class_4122.as
// Nome offuscato: _icbafba64c1e83a

class {
    static {
      n(this, "class_4122");
    }
    static {
      LHr(this, "class_4122");
    }
    class_4182;
    var_2707;
    constructor(e) {
      ((this.var_2707 = e.readString() || null), (this.class_4182 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_4182.push(new class_4182(e));
    }
    get productOfferList() {
      return this.class_4182;
    }
    get _r198cfd70edb3c1() {
      return this.var_2707;
    }
  }
