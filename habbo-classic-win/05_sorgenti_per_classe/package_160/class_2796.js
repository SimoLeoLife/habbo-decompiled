// Estratto da HabboAirLauncher.deobf.js, riga 106479.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_160/class_2796.as
// Nome offuscato: _i359205845aa40c

class {
    static {
      n(this, "class_2796");
    }
    static {
      Hqr(this, "class_2796");
    }
    var_4193 = [];
    get songs() {
      return this.var_4193;
    }
    flush() {
      return ((this.var_4193 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger();
        e.readString();
        let s = e.readString(),
          o = e.readString(),
          d = e.readInteger(),
          c = e.readString();
        this.var_4193.push(new class_2355(i, d, s, c, o));
      }
      return !0;
    }
  }
