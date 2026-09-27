// Extracted from HabboAirLauncher.deobf.js, line 101860.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2666.as
// Obfuscated name: _i579e2db3d7ce30

class {
    static {
      n(this, "class_2666");
    }
    static {
      dXr(this, "class_2666");
    }
    var_2503 = -1;
    get effectId() {
      return this.var_2503;
    }
    flush() {
      return ((this.var_2503 = -1), !0);
    }
    parse(e) {
      return ((this.var_2503 = e.readInteger()), !0);
    }
  }
