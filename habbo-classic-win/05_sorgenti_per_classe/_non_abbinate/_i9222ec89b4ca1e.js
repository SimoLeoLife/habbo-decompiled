// Estratto da HabboAirLauncher.deobf.js, riga 96713.

class {
    static {
      n(this, "_i9222ec89b4ca1e");
    }
    static {
      sHr(this, "_i9222ec89b4ca1e");
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
