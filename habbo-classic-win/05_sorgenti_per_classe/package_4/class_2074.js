// Extracted from HabboAirLauncher.deobf.js, line 75107.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_2074.as
// Obfuscated name: _iedd84c78888021

class {
    static {
      n(this, "class_2074");
    }
    static {
      m4r(this, "class_2074");
    }
    notEnoughCredits = !1;
    var_3236 = !1;
    activityPointType = 0;
    flush() {
      return ((this.notEnoughCredits = !1), (this.var_3236 = !1), (this.activityPointType = 0), !0);
    }
    parse(e) {
      return (
        (this.notEnoughCredits = e.readBoolean()),
        (this.var_3236 = e.readBoolean()),
        e.bytesAvailable && (this.activityPointType = e.readInteger()),
        !0
      );
    }
  }
