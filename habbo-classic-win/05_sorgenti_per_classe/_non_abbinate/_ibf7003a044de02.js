// Estratto da HabboAirLauncher.deobf.js, riga 112238.

class {
    static {
      n(this, "_ibf7003a044de02");
    }
    static {
      Qst(this, "_ibf7003a044de02");
    }
    guildId = 0;
    data = null;
    flush() {
      return ((this.data = null), !0);
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.data = new M7(e)), !0);
    }
  }
