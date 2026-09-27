// Extracted from HabboAirLauncher.deobf.js, line 105047.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib751d45e952b60

class {
    static {
      n(this, "UnkMessageParser_I_b751d4");
    }
    static {
      H$r(this, "UnkMessageParser_I_b751d4");
    }
    var_2440 = 0;
    get roomId() {
      return this.var_2440;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2440 = e.readInteger()), !0);
    }
  }
