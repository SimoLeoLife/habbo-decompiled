// Extracted from HabboAirLauncher.deobf.js, line 89395.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_194/class_3631.as
// Obfuscated name: _ic1d7042d207a41

class {
    static {
      n(this, "class_3631");
    }
    static {
      ekr(this, "class_3631");
    }
    var_595 = 0;
    _badgeCode = "";
    var_261 = 0;
    var_3132 = 0;
    flush() {
      return !0;
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
