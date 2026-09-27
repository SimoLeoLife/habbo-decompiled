// Estratto da HabboAirLauncher.deobf.js, riga 92083.

class {
    static {
      n(this, "_i02c3155ff27183");
    }
    static {
      QPr(this, "_i02c3155ff27183");
    }
    var_2561 = !1;
    get success() {
      return this.var_2561;
    }
    flush() {
      return ((this.var_2561 = !1), !0);
    }
    parse(e) {
      return ((this.var_2561 = e.readBoolean()), !0);
    }
  }
