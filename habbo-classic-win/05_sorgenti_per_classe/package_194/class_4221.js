// Extracted from HabboAirLauncher.deobf.js, line 89255.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_194/class_4221.as
// Obfuscated name: _i34e0e4926f9355

class {
    static {
      n(this, "class_4221");
    }
    static {
      UAr(this, "class_4221");
    }
    var_595 = 0;
    _badgeCode = "";
    var_261 = 0;
    var_3132 = 0;
    flush() {
      return (
        (this.var_595 = 0),
        (this._badgeCode = ""),
        (this.var_261 = 0),
        (this.var_3132 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_595 = e.readInteger()),
        (this._badgeCode = e.readString()),
        (this.var_261 = e.readInteger()),
        (this.var_3132 = e.readInteger()),
        !0
      );
    }
    get badgeId() {
      return this.var_595;
    }
    get _rc9fc89e7eb27a7() {
      return this._badgeCode;
    }
    get ownerCount() {
      return this.var_261;
    }
    get badgeRarityId() {
      return this.var_3132;
    }
  }
