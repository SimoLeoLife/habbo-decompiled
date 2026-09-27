// Estratto da HabboAirLauncher.deobf.js, riga 88137.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_2120.as
// Nome offuscato: _i7c446bc447428a

class a {
    static {
      n(this, "class_2120");
    }
    static {
      YWr(this, "class_2120");
    }
    static const_1298 = 0;
    static const_972 = 1;
    static const_1202 = 2;
    static const_1304 = 3;
    var_3875 = 0;
    var_3228 = null;
    flush() {
      return ((this.var_3228 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3875 = e.readInteger()),
        this.var_3875 === a.const_972 && (this.var_3228 = new _ic2d60a37a6e2d8(e)),
        !0
      );
    }
    get statusCode() {
      return this.var_3875;
    }
    get pendingTicket() {
      return this.var_3228;
    }
    get localizationCode() {
      switch (this.var_3875) {
        case a.const_1202:
          return "blocked";
        case a.const_1304:
          return "tooquick";
        default:
          return "";
      }
    }
  }
