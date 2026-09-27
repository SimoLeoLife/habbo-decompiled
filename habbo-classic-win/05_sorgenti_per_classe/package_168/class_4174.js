// Extracted from HabboAirLauncher.deobf.js, line 103580.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4174.as
// Obfuscated name: _i46b7dd0bacc3c5

class {
    static {
      n(this, "class_4174");
    }
    static {
      OYr(this, "class_4174");
    }
    var_2735 = -1;
    _location = "";
    get itemId() {
      return this.var_2735;
    }
    get location() {
      return this._location;
    }
    flush() {
      return ((this.var_2735 = -1), (this._location = ""), !0);
    }
    parse(e) {
      return e
        ? ((this.var_2735 = e.readInteger()), (this._location = e.readString()), !0)
        : !1;
    }
  }
