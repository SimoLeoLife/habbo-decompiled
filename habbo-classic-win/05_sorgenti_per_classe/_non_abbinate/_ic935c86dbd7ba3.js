// Estratto da HabboAirLauncher.deobf.js, riga 112134.

class {
    static {
      n(this, "_ic935c86dbd7ba3");
    }
    static {
      Sst(this, "_ic935c86dbd7ba3");
    }
    guildId = 0;
    reason = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.reason = e.readInteger()), !0);
    }
  }
