// Extracted from HabboAirLauncher.deobf.js, line 90344.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_2484.as
// Obfuscated name: _i26d87e099a3c48

class {
    static {
      n(this, "class_2484");
    }
    static {
      ITr(this, "class_2484");
    }
    var_3427 = 0;
    var_1241 = 0;
    flush() {
      return ((this.var_3427 = 0), (this.var_1241 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3427 = e.readInteger()),
        (this.var_1241 = e.readInteger()),
        !0
      );
    }
    get breedingNestStuffId() {
      return this.var_3427;
    }
    get result() {
      return this.var_1241;
    }
  }
