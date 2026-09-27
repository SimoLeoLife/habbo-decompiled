// Extracted from HabboAirLauncher.deobf.js, line 89773.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _idbc206aad80c63

class {
    static {
      n(this, "UnkMessageParser_I_dbc206");
    }
    static {
      Skr(this, "UnkMessageParser_I_dbc206");
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
