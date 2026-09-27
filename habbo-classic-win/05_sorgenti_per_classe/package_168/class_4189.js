// Extracted from HabboAirLauncher.deobf.js, line 103774.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4189.as
// Obfuscated name: _ibb501364f076cc

class {
    static {
      n(this, "class_4189");
    }
    static {
      qYr(this, "class_4189");
    }
    var_2287 = 0;
    var_3754 = 0;
    get furniId() {
      return this.var_2287;
    }
    get commandId() {
      return this.var_3754;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_2287 = e.readInteger()),
        (this.var_3754 = e.readInteger()),
        !0
      );
    }
  }
