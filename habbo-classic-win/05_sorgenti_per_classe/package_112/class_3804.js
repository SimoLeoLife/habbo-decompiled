// Extracted from HabboAirLauncher.deobf.js, line 99375.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_3804.as
// Obfuscated name: _i666e2fa04612a4

class {
    static {
      n(this, "class_3804");
    }
    static {
      HGr(this, "class_3804");
    }
    _userId = 0;
    var_3211 = -1;
    get userId() {
      return this._userId;
    }
    get expressionType() {
      return this.var_3211;
    }
    flush() {
      return ((this._userId = 0), (this.var_3211 = -1), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()), (this.var_3211 = e.readInteger()), !0)
        : !1;
    }
  }
