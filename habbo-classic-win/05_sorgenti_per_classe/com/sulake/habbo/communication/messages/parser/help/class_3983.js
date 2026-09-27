// Extracted from HabboAirLauncher.deobf.js, line 88281.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3983.as
// Obfuscated name: _ia402af2003857a

class {
    static {
      n(this, "class_3983");
    }
    static {
      sBr(this, "class_3983");
    }
    var_5223 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_5223 = e.readInteger()), !0);
    }
    get endReason() {
      return this.var_5223;
    }
  }
