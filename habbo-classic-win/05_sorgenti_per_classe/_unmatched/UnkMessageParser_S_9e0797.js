// Extracted from HabboAirLauncher.deobf.js, line 87461.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9e0797094fc378

class {
    static {
      n(this, "UnkMessageParser_S_9e0797");
    }
    static {
      QMr(this, "UnkMessageParser_S_9e0797");
    }
    var_1065 = null;
    flush() {
      return ((this.var_1065 = null), !0);
    }
    parse(e) {
      return ((this.var_1065 = e.readString()), !0);
    }
    get message() {
      return this.var_1065;
    }
  }
