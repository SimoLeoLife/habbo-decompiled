// Extracted from HabboAirLauncher.deobf.js, line 89331.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_194/class_3733.as
// Obfuscated name: _i13d725e399c608

class {
    static {
      n(this, "class_3733");
    }
    static {
      YAr(this, "class_3733");
    }
    var_595;
    _limit;
    constructor(e, r) {
      ((this.var_595 = `ACH_${e}${r.readInteger()}`),
        (this._limit = r.readInteger()));
    }
    get badgeId() {
      return this.var_595;
    }
    get limit() {
      return this._limit;
    }
  }
