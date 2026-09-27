// Extracted from HabboAirLauncher.deobf.js, line 99291.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_2442.as
// Obfuscated name: _i75e52698a654b4

class {
    static {
      n(this, "class_2442");
    }
    static {
      RGr(this, "class_2442");
    }
    _userId = 0;
    var_828 = 0;
    get userId() {
      return this._userId;
    }
    get itemType() {
      return this.var_828;
    }
    flush() {
      return ((this._userId = 0), (this.var_828 = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()), (this.var_828 = e.readInteger()), !0)
        : !1;
    }
  }
