// Extracted from HabboAirLauncher.deobf.js, line 111002.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/class_3587.as
// Obfuscated name: _i8144afa8fba230

class a {
    static {
      n(this, "class_3587");
    }
    static {
      Qit(this, "class_3587");
    }
    static var_5296 = 1;
    var_162 = null;
    flush() {
      return ((this.var_162 = null), !0);
    }
    parse(e) {
      let r = a.var_5296++;
      return ((this.var_162 = new e0e(r, e)), !0);
    }
    get contents() {
      return this.var_162;
    }
  }
