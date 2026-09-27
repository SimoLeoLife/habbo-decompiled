// Extracted from HabboAirLauncher.deobf.js, line 99417.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_2426.as
// Obfuscated name: _i836aa266e7bdfb

class {
    static {
      n(this, "class_2426");
    }
    static {
      jGr(this, "class_2426");
    }
    _userId = 0;
    var_4557 = !1;
    get userId() {
      return this._userId;
    }
    get sleeping() {
      return this.var_4557;
    }
    flush() {
      return ((this._userId = 0), !0);
    }
    parse(e) {
      return e ? ((this._userId = e.readInteger()), (this.var_4557 = e.readBoolean()), !0) : !1;
    }
  }
