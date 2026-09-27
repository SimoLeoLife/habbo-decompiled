// Extracted from HabboAirLauncher.deobf.js, line 76069.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i28fc31db2fd741

class {
    static {
      n(this, "UnkMessageParser_B_28fc31");
    }
    static {
      apr(this, "UnkMessageParser_B_28fc31");
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
