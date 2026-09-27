// Extracted from HabboAirLauncher.deobf.js, line 92083.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i02c3155ff27183

class {
    static {
      n(this, "UnkMessageParser_B_02c315");
    }
    static {
      QPr(this, "UnkMessageParser_B_02c315");
    }
    var_2561 = !1;
    get success() {
      return this.var_2561;
    }
    flush() {
      return ((this.var_2561 = !1), !0);
    }
    parse(e) {
      return ((this.var_2561 = e.readBoolean()), !0);
    }
  }
