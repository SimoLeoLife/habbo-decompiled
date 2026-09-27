// Extracted from HabboAirLauncher.deobf.js, line 93590.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_12/class_4055.as
// Obfuscated name: _i61cddedf82b5e4

class {
    static {
      n(this, "class_4055");
    }
    static {
      QDr(this, "class_4055");
    }
    var_3455 = null;
    var_1062 = 0;
    flush() {
      return ((this.var_3455 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3455 = e.readString()),
        (this.var_1062 = e.readInteger()),
        !0
      );
    }
    get contentType() {
      return this.var_3455;
    }
    get classId() {
      return this.var_1062;
    }
  }
