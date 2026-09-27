// Extracted from HabboAirLauncher.deobf.js, line 90762.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_81/class_2297.as
// Obfuscated name: _ica4f607d58b807

class {
    static {
      n(this, "class_2297");
    }
    static {
      iRr(this, "class_2297");
    }
    var_4143 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_4143 = Number.parseInt(e.readString(), 10)), !0);
    }
    get balance() {
      return this.var_4143;
    }
  }
