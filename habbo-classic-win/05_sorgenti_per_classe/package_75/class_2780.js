// Extracted from HabboAirLauncher.deobf.js, line 92334.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_2780.as
// Obfuscated name: _icb0335270a865a

class {
    static {
      n(this, "class_2780");
    }
    static {
      dSr(this, "class_2780");
    }
    var_203 = -1;
    var_2731 = "";
    var_3411 = -1;
    var_3358 = "";
    get target() {
      return this.var_203;
    }
    get reason() {
      return this.var_2731;
    }
    get _r8dd79bc39de6e5() {
      return this.var_3411;
    }
    get _r3e3710f718fdb6() {
      return this.var_3358;
    }
    flush() {
      return (
        (this.var_203 = -1),
        (this.var_2731 = ""),
        (this.var_3411 = -1),
        (this.var_3358 = ""),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_203 = e.readShort()),
        (this.var_2731 = e.readString()),
        (this.var_3411 = e.readInteger()),
        (this.var_3358 = e.readString()),
        !0
      );
    }
  }
