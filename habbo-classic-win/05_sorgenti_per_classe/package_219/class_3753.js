// Estratto da HabboAirLauncher.deobf.js, riga 97102.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_219/class_3753.as
// Nome offuscato: _iee11d4e78a66d1

class {
    static {
      n(this, "class_3753");
    }
    static {
      HHr(this, "class_3753");
    }
    var_1439 = [];
    get giftOptions() {
      return this.var_1439;
    }
    flush() {
      return !0;
    }
    parse(e) {
      let r = e.readInteger();
      this.var_1439 = [];
      for (let t = 0; t < r; t++) this.var_1439.push(new class_3241(e));
      return !0;
    }
  }
