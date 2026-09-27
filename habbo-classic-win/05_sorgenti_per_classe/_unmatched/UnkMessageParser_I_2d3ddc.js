// Extracted from HabboAirLauncher.deobf.js, line 106033.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2d3ddc9fef999d

class {
    static {
      n(this, "UnkMessageParser_I_2d3ddc");
    }
    static {
      eqr(this, "UnkMessageParser_I_2d3ddc");
    }
    var_2440 = 0;
    parse(e) {
      return ((this.var_2440 = e.readInteger()), !0);
    }
    flush() {
      return ((this.var_2440 = 0), !0);
    }
    get roomId() {
      return this.var_2440;
    }
  }
