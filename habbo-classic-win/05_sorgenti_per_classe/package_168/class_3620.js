// Extracted from HabboAirLauncher.deobf.js, line 102988.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3620.as
// Obfuscated name: _i4a0f9c5599ad30

class {
    static {
      n(this, "class_3620");
    }
    static {
      jXr(this, "class_3620");
    }
    var_3657 = null;
    get areaHideMessageData() {
      return this.var_3657;
    }
    flush() {
      return ((this.var_3657 = null), !0);
    }
    parse(e) {
      return e ? ((this.var_3657 = new AreaHideMessageData(e)), !0) : !1;
    }
  }
