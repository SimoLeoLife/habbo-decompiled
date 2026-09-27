// Extracted from HabboAirLauncher.deobf.js, line 78227.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib6a1c5512f1095

class {
    static {
      n(this, "UnkMessageParser_B_b6a1c5");
    }
    static {
      yvr(this, "UnkMessageParser_B_b6a1c5");
    }
    var_2561 = !1;
    get success() {
      return this.var_2561;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2561 = e.readBoolean()), !0);
    }
  }
