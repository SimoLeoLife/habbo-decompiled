// Extracted from HabboAirLauncher.deobf.js, line 83560.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_4286.as
// Obfuscated name: _ie764621d2e94f5

class {
    static {
      n(this, "class_4286");
    }
    static {
      Vyr(this, "class_4286");
    }
    var_2401 = -1;
    flush() {
      return ((this.var_2401 = -1), !0);
    }
    parse(e) {
      return ((this.var_2401 = e.readInteger()), !0);
    }
    get gameType() {
      return this.var_2401;
    }
  }
