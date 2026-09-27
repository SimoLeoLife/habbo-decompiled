// Extracted from HabboAirLauncher.deobf.js, line 77692.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_236/GetCustomFilterResultMessageEventParser.as
// Obfuscated name: _i7310bb38c5f1db

class {
    static {
      n(this, "GetCustomFilterResultMessageEventParser");
    }
    static {
      Wgr(this, "GetCustomFilterResultMessageEventParser");
    }
    var_2751 = [];
    get words() {
      return this.var_2751.slice();
    }
    flush() {
      return !0;
    }
    parse(e) {
      this.var_2751 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2751.push(e.readString());
      return !0;
    }
  }
