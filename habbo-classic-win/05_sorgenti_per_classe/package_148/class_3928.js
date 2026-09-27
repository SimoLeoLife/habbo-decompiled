// Extracted from HabboAirLauncher.deobf.js, line 106672.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_148/class_3928.as
// Obfuscated name: _i231a295855101b

class {
    static {
      n(this, "class_3928");
    }
    static {
      tJr(this, "class_3928");
    }
    var_3399 = null;
    var_1655 = 0;
    var_1730 = 0;
    flush() {
      return ((this.var_3399 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3399 = e.readString()),
        (this.var_1655 = e.readInteger()),
        (this.var_1730 = e.readInteger()),
        !0
      );
    }
    get talentTrackName() {
      return this.var_3399;
    }
    get level() {
      return this.var_1655;
    }
    get maxLevel() {
      return this.var_1730;
    }
  }
