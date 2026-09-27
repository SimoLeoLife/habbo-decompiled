// Estratto da HabboAirLauncher.deobf.js, riga 93468.

class {
    static {
      n(this, "_i832f168d602acc");
    }
    static {
      RDr(this, "_i832f168d602acc");
    }
    var_1065 = "";
    get message() {
      return this.var_1065;
    }
    flush() {
      return ((this.var_1065 = ""), !0);
    }
    parse(e) {
      return ((this.var_1065 = e.readString()), !0);
    }
  }
