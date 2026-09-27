// Estratto da HabboAirLauncher.deobf.js, riga 75213.

class {
    static {
      n(this, "_ie6ae0048418105");
    }
    static {
      A4r(this, "_ie6ae0048418105");
    }
    errorCode = 0;
    flush() {
      return ((this.errorCode = 0), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readInteger()), !0);
    }
  }
