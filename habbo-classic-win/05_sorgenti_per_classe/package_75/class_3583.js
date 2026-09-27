// Extracted from HabboAirLauncher.deobf.js, line 92849.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_3583.as
// Obfuscated name: _i6a79afc8304ae1

class {
    static {
      n(this, "class_3583");
    }
    static {
      OSr(this, "class_3583");
    }
    _userId = 0;
    var_2561 = !1;
    get userId() {
      return this._userId;
    }
    get success() {
      return this.var_2561;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), (this.var_2561 = e.readBoolean()), !0);
    }
  }
