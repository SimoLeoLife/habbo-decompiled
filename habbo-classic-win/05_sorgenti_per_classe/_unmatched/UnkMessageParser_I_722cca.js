// Extracted from HabboAirLauncher.deobf.js, line 89701.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i722cca49e1db0e

class {
    static {
      n(this, "UnkMessageParser_I_722cca");
    }
    static {
      Mkr(this, "UnkMessageParser_I_722cca");
    }
    var_2735 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2735 = e.readInteger()), !0);
    }
    get itemId() {
      return this.var_2735;
    }
  }
