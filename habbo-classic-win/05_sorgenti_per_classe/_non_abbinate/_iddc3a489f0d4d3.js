// Estratto da HabboAirLauncher.deobf.js, riga 112097.

class {
    static {
      n(this, "_iddc3a489f0d4d3");
    }
    static {
      kst(this, "_iddc3a489f0d4d3");
    }
    userId = 0;
    furniCount = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.userId = e.readInteger()), (this.furniCount = e.readInteger()), !0);
    }
  }
