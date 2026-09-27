// Extracted from HabboAirLauncher.deobf.js, line 87092.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_3929.as
// Obfuscated name: _iba291586057ef2

class {
    static {
      n(this, "class_3929");
    }
    static {
      gMr(this, "class_3929");
    }
    var_2396 = "";
    flush() {
      return ((this.var_2396 = ""), !0);
    }
    parse(e) {
      return ((this.var_2396 = e.readString()), !0);
    }
    get machineID() {
      return this.var_2396;
    }
  }
