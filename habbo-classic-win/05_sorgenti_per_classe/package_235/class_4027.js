// Estratto da HabboAirLauncher.deobf.js, riga 88854.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_235/class_4027.as
// Nome offuscato: _ibe36fd6610cec9

class {
    static {
      n(this, "class_4027");
    }
    static {
      sAr(this, "class_4027");
    }
    var_1095 = [];
    get hotLooks() {
      return this.var_1095;
    }
    flush() {
      return ((this.var_1095 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1095.push(new class_4208(e));
      return !0;
    }
  }
