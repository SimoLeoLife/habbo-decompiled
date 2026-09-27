// Extracted from HabboAirLauncher.deobf.js, line 126003.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie026ba1692d29c

class {
    static {
      n(this, "UnkMessageParser_I_e026ba");
    }
    static {
      tyt(this, "UnkMessageParser_I_e026ba");
    }
    var_3331 = -1;
    get _r9c7b2f31e9715b() {
      return this.var_3331;
    }
    flush() {
      return ((this.var_3331 = -1), !0);
    }
    parse(e) {
      return ((this.var_3331 = e.readInteger()), !0);
    }
  }
