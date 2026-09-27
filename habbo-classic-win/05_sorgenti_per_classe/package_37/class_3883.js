// Extracted from HabboAirLauncher.deobf.js, line 111278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_3883.as
// Obfuscated name: _ib3de11662309e2

class {
    static {
      n(this, "class_3883");
    }
    static {
      gnt(this, "class_3883");
    }
    result = -1;
    userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.result = e.readInteger()), (this.userId = e.readInteger()), !0);
    }
  }
