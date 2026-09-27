// Extracted from HabboAirLauncher.deobf.js, line 96118.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_28/class_1866.as
// Obfuscated name: _id987af6720989c

class {
    static {
      n(this, "class_1866");
    }
    static {
      fFr(this, "class_1866");
    }
    var_3204 = 0;
    var_3182 = 0;
    _windowWidth = 0;
    var_3847 = 0;
    var_3572 = !1;
    var_3267 = 0;
    get _r02a1531c5600e7() {
      return this.var_3204;
    }
    get _r9dc06e4415e238() {
      return this.var_3182;
    }
    get _rd5507bbbf34586() {
      return this._windowWidth;
    }
    get _r47a31970387a01() {
      return this.var_3847;
    }
    get _r8a52bbad798d98() {
      return this.var_3572;
    }
    get _rabd41c81709263() {
      return this.var_3267;
    }
    flush() {
      return (
        (this.var_3204 = 0),
        (this.var_3182 = 0),
        (this._windowWidth = 0),
        (this.var_3847 = 0),
        (this.var_3572 = !1),
        (this.var_3267 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3204 = e.readInteger()),
        (this.var_3182 = e.readInteger()),
        (this._windowWidth = e.readInteger()),
        (this.var_3847 = e.readInteger()),
        (this.var_3572 = e.readBoolean()),
        (this.var_3267 = e.readInteger()),
        !0
      );
    }
  }
