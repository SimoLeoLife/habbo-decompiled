// Extracted from HabboAirLauncher.deobf.js, line 84237.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_234/Game2JoiningGameFailedMessageParser.as
// Obfuscated name: _i9b7d2ddcfced16

class {
    static {
      n(this, "Game2JoiningGameFailedMessageParser");
    }
    static {
      UIr(this, "Game2JoiningGameFailedMessageParser");
    }
    static const_895 = 2;
    static const_932 = 3;
    static const_1099 = 1;
    static const_400 = 4;
    static const_764 = 5;
    static const_1395 = 6;
    static const_645 = 8;
    static const_581 = 7;
    var_2731 = 0;
    get reason() {
      return this.var_2731;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2731 = e.readInteger()), !0);
    }
  }
