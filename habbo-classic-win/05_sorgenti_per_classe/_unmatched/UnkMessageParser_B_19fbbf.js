// Extracted from HabboAirLauncher.deobf.js, line 109295.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i19fbbf9b01a076

class {
    static {
      n(this, "UnkMessageParser_B_19fbbf");
    }
    static {
      Ott(this, "UnkMessageParser_B_19fbbf");
    }
    var_2561 = !1;
    flush() {
      return ((this.var_2561 = !1), !0);
    }
    parse(e) {
      return ((this.var_2561 = e.readBoolean()), !0);
    }
    get success() {
      return this.var_2561;
    }
  }
