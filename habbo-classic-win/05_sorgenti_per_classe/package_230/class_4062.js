// Extracted from HabboAirLauncher.deobf.js, line 127264.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_230/class_4062.as
// Obfuscated name: _i0efa4ad8c5fd19

class {
    static {
      n(this, "class_4062");
    }
    static {
      ext(this, "class_4062");
    }
    var_2440 = 0;
    var_3179 = !1;
    parse(e) {
      return ((this.var_2440 = e.readInteger()), (this.var_3179 = e.readBoolean()), !0);
    }
    flush() {
      return ((this.var_2440 = 0), (this.var_3179 = !1), !0);
    }
    get roomId() {
      return this.var_2440;
    }
    get canManage() {
      return this.var_3179;
    }
  }
