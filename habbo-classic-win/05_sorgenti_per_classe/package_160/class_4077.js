// Extracted from HabboAirLauncher.deobf.js, line 106177.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_160/class_4077.as
// Obfuscated name: _i62106db44b666c

class {
    static {
      n(this, "class_4077");
    }
    static {
      pqr(this, "class_4077");
    }
    var_3473 = new B();
    var_3862 = 0;
    get songDisks() {
      return this.var_3473;
    }
    get maxLength() {
      return this.var_3862;
    }
    flush() {
      return (this.var_3473.reset(), (this.var_3862 = 0), !0);
    }
    parse(e) {
      this.var_3862 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger();
        this.var_3473.add(i, s);
      }
      return !0;
    }
  }
