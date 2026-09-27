// Extracted from HabboAirLauncher.deobf.js, line 96674.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if40c83a2b2443a

class {
    static {
      n(this, "UnkMessageParser_S_f40c83");
    }
    static {
      tHr(this, "UnkMessageParser_S_f40c83");
    }
    var_1022 = "";
    get messageText() {
      return this.var_1022;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_1022 = e.readString()), !0);
    }
  }
