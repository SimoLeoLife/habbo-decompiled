// Estratto da HabboAirLauncher.deobf.js, riga 89975.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_115/class_3158.as
// Nome offuscato: _i72d5bfd902f6d1

class {
    static {
      n(this, "class_3158");
    }
    static {
      jkr(this, "class_3158");
    }
    var_2575 = null;
    parse(e) {
      this.var_2575 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2575.push(new QA(e));
      return !0;
    }
    flush() {
      return ((this.var_2575 = null), !0);
    }
    getFurni() {
      return this.var_2575;
    }
  }
