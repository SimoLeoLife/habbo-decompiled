// Extracted from HabboAirLauncher.deobf.js, line 91902.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_3829.as
// Obfuscated name: _iea864b1bccda69

class {
    static {
      n(this, "class_3829");
    }
    static {
      kPr(this, "class_3829");
    }
    var_1241 = 0;
    var_4518 = -1;
    var_5246 = -1;
    var_3110 = -1;
    get result() {
      return this.var_1241;
    }
    get offerId() {
      return this.var_4518;
    }
    get newPrice() {
      return this.var_5246;
    }
    get _r44eed779fb526e() {
      return this.var_3110;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_1241 = e.readInteger()),
        (this.var_4518 = e.readInteger()),
        (this.var_5246 = e.readInteger()),
        (this.var_3110 = e.readInteger()),
        !0
      );
    }
  }
