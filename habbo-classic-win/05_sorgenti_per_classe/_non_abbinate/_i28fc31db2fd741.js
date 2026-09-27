// Estratto da HabboAirLauncher.deobf.js, riga 76069.

class {
    static {
      n(this, "_i28fc31db2fd741");
    }
    static {
      apr(this, "_i28fc31db2fd741");
    }
    var_1285 = !1;
    get enabled() {
      return this.var_1285;
    }
    flush() {
      return ((this.var_1285 = !1), !0);
    }
    parse(e) {
      return ((this.var_1285 = e.readBoolean()), !0);
    }
  }
