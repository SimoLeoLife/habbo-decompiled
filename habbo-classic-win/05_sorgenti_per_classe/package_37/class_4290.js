// Extracted from HabboAirLauncher.deobf.js, line 112668.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_4290.as
// Obfuscated name: _icda2b39464b707

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
