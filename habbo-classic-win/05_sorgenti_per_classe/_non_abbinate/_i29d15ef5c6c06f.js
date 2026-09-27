// Estratto da HabboAirLauncher.deobf.js, riga 112204.

class {
    static {
      n(this, "_i29d15ef5c6c06f");
    }
    static {
      Ust(this, "_i29d15ef5c6c06f");
    }
    guildId = 0;
    userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.userId = e.readInteger()), !0);
    }
  }
