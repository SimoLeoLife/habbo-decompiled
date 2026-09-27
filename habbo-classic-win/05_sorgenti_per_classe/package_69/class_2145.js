// Extracted from HabboAirLauncher.deobf.js, line 99195.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_69/class_2145.as
// Obfuscated name: _i523f5c05f25a41

class {
    static {
      n(this, "class_2145");
    }
    static {
      CGr(this, "class_2145");
    }
    var_3819 = -1;
    var_3312 = 0;
    get _r17ddb910d8a9c9() {
      return this.var_3819;
    }
    get _ra1cb9c841377f8() {
      return this.var_3312;
    }
    flush() {
      return ((this.var_3819 = -1), (this.var_3312 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3819 = e.readInteger()),
        (this.var_3312 = e.readInteger()),
        !0
      );
    }
  }
