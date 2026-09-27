// Estratto da HabboAirLauncher.deobf.js, riga 88579.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4165.as
// Nome offuscato: _i6d89a39a038381

class a {
    static {
      n(this, "class_4165");
    }
    static {
      SBr(this, "class_4165");
    }
    static const_771 = 0;
    static const_1088 = 1;
    static const_1287 = 2;
    static const_1317 = 3;
    var_1241 = -1;
    flush() {
      return ((this.var_1241 = -1), !0);
    }
    parse(e) {
      return ((this.var_1241 = e.readInteger()), !0);
    }
    get localizationCode() {
      switch (this.var_1241) {
        case a.const_771:
          return "sent";
        case a.const_1088:
          return "blocked";
        case a.const_1287:
          return "nochat";
        case a.const_1317:
          return "alreadyreported";
        default:
          return "invalid";
      }
    }
  }
