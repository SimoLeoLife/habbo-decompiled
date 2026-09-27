// Estratto da HabboAirLauncher.deobf.js, riga 75180.

class {
    static {
      n(this, "_i9bad5fa502981e");
    }
    static {
      E4r(this, "_i9bad5fa502981e");
    }
    errorCode = 0;
    flush() {
      return ((this.errorCode = 0), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readInteger()), !0);
    }
  }
