// Estratto da HabboAirLauncher.deobf.js, riga 111239.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_3909.as
// Nome offuscato: _i0764a57bf4740c

class {
    static {
      n(this, "class_3909");
    }
    static {
      unt(this, "class_3909");
    }
    var_2715 = [];
    flush() {
      return !0;
    }
    parse(e) {
      this.var_2715 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2715.push(e.readInteger());
      return !0;
    }
    get blockedUsers() {
      return this.var_2715.slice();
    }
  }
