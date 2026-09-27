// Estratto da HabboAirLauncher.deobf.js, riga 112668.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_4290.as
// Nome offuscato: _icda2b39464b707

class {
    static {
      n(this, "class_4290");
    }
    static {
      Rot(this, "class_4290");
    }
    var_3016 = [];
    flush() {
      return !0;
    }
    parse(e) {
      this.var_3016 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_3016.push(e.readInteger());
      return !0;
    }
    get ignoredUsers() {
      return this.var_3016.slice();
    }
  }
