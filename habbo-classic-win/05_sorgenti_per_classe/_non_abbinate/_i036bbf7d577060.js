// Estratto da HabboAirLauncher.deobf.js, riga 75661.

class {
    static {
      n(this, "_i036bbf7d577060");
    }
    static {
      m7r(this, "_i036bbf7d577060");
    }
    errorCode = "";
    flush() {
      return ((this.errorCode = ""), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readString()), !0);
    }
  }
