// Extracted from HabboAirLauncher.deobf.js, line 110278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_127/class_3221.as
// Obfuscated name: _icd0e5fc0208fb6

class {
    static {
      n(this, "class_3221");
    }
    static {
      Qat(this, "class_3221");
    }
    var_3115 = 0;
    flush() {
      return ((this.var_3115 = 0), !0);
    }
    parse(e) {
      return ((this.var_3115 = e.readInteger()), !0);
    }
    get contractId() {
      return this.var_3115;
    }
  }
