// Extracted from HabboAirLauncher.deobf.js, line 87310.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i280f74c3931a24

class {
    static {
      n(this, "UnkMessageParser_S_280f74");
    }
    static {
      kMr(this, "UnkMessageParser_S_280f74");
    }
    var_1022 = "";
    flush() {
      return ((this.var_1022 = ""), !0);
    }
    parse(e) {
      return ((this.var_1022 = e.readString()), !0);
    }
    get messageText() {
      return this.var_1022;
    }
  }
