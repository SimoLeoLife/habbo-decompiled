// Estratto da HabboAirLauncher.deobf.js, riga 87461.

class {
    static {
      n(this, "_i9e0797094fc378");
    }
    static {
      QMr(this, "_i9e0797094fc378");
    }
    var_1065 = null;
    flush() {
      return ((this.var_1065 = null), !0);
    }
    parse(e) {
      return ((this.var_1065 = e.readString()), !0);
    }
    get message() {
      return this.var_1065;
    }
  }
