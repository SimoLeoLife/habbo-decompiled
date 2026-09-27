// Estratto da HabboAirLauncher.deobf.js, riga 106033.

class {
    static {
      n(this, "_i2d3ddc9fef999d");
    }
    static {
      eqr(this, "_i2d3ddc9fef999d");
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
