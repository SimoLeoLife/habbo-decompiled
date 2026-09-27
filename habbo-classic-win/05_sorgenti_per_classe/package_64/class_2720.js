// Extracted from HabboAirLauncher.deobf.js, line 101738.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_64/class_2720.as
// Obfuscated name: _i882c3208c72135

class {
    static {
      n(this, "class_2720");
    }
    static {
      tXr(this, "class_2720");
    }
    static const_846 = "mv";
    static const_1069 = "sld";
    _id;
    var_190;
    var_203;
    var_3526;
    var_126 = !1;
    constructor(e, r, t, i = null) {
      ((this._id = e), (this.var_190 = r), (this.var_203 = t), (this.var_3526 = i));
    }
    setReadOnly() {
      this.var_126 = !0;
    }
    get id() {
      return this._id;
    }
    get loc() {
      return this.var_190;
    }
    set loc(e) {
      this.var_126 || (this.var_190 = e);
    }
    get target() {
      return this.var_203;
    }
    set target(e) {
      this.var_126 || (this.var_203 = e);
    }
    get _r757da1d998c777() {
      return this.var_3526;
    }
    set _r757da1d998c777(e) {
      this.var_126 || (this.var_3526 = e);
    }
  }
