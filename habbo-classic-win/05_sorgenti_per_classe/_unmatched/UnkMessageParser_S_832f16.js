// Extracted from HabboAirLauncher.deobf.js, line 93468.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i832f168d602acc

class {
    static {
      n(this, "UnkMessageParser_S_832f16");
    }
    static {
      RDr(this, "UnkMessageParser_S_832f16");
    }
    var_1065 = "";
    get message() {
      return this.var_1065;
    }
    flush() {
      return ((this.var_1065 = ""), !0);
    }
    parse(e) {
      return ((this.var_1065 = e.readString()), !0);
    }
  }
