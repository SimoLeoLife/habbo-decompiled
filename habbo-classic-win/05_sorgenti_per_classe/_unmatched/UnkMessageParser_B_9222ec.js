// Extracted from HabboAirLauncher.deobf.js, line 96713.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9222ec89b4ca1e

class {
    static {
      n(this, "UnkMessageParser_B_9222ec");
    }
    static {
      sHr(this, "UnkMessageParser_B_9222ec");
    }
    var_1285 = !1;
    get enabled() {
      return this.var_1285;
    }
    flush() {
      return ((this.var_1285 = !1), !0);
    }
    parse(e) {
      return ((this.var_1285 = e.readBoolean()), !0);
    }
  }
