// Estratto da HabboAirLauncher.deobf.js, riga 109295.

class {
    static {
      n(this, "_i19fbbf9b01a076");
    }
    static {
      Ott(this, "_i19fbbf9b01a076");
    }
    var_2561 = !1;
    flush() {
      return ((this.var_2561 = !1), !0);
    }
    parse(e) {
      return ((this.var_2561 = e.readBoolean()), !0);
    }
    get success() {
      return this.var_2561;
    }
  }
