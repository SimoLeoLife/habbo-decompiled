// Estratto da HabboAirLauncher.deobf.js, riga 87310.

class {
    static {
      n(this, "_i280f74c3931a24");
    }
    static {
      kMr(this, "_i280f74c3931a24");
    }
    var_1022 = "";
    flush() {
      return ((this.var_1022 = ""), !0);
    }
    parse(e) {
      return ((this.var_1022 = e.readString()), !0);
    }
    get messageText() {
      return this.var_1022;
    }
  }
