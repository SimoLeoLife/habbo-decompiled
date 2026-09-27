// Extracted from HabboAirLauncher.deobf.js, line 75774.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_165/class_3787.as
// Obfuscated name: _i4d37f8b3a1957e

class {
    static {
      n(this, "class_3787");
    }
    static {
      A7r(this, "class_3787");
    }
    var_3644 = !1;
    var_3616 = 0;
    flush() {
      return ((this.var_3644 = !1), (this.var_3616 = 0), !0);
    }
    parse(e) {
      return ((this.var_3644 = e.readBoolean()), (this.var_3616 = e.readInteger()), !0);
    }
    get added() {
      return this.var_3644;
    }
    get styleId() {
      return this.var_3616;
    }
  }
