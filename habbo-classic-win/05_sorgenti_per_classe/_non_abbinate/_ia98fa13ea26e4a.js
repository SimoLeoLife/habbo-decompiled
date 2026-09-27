// Estratto da HabboAirLauncher.deobf.js, riga 112908.

class {
    static {
      n(this, "_ia98fa13ea26e4a");
    }
    static {
      tdt(this, "_ia98fa13ea26e4a");
    }
    userId = 0;
    respectTotal = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.userId = e.readInteger()), (this.respectTotal = e.readInteger()), !0);
    }
  }
