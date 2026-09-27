// Extracted from HabboAirLauncher.deobf.js, line 72772.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_6/class_2843.as
// Obfuscated name: _i93f9f360b0c57e

class {
    static {
      n(this, "class_2843");
    }
    static {
      x8r(this, "class_2843");
    }
    errorCode = 0;
    var_5457 = "";
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.errorCode = e.readInteger()), (this.var_5457 = e.readString()), !0);
    }
  }
