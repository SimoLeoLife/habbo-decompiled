// Estratto da HabboAirLauncher.deobf.js, riga 76030.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_3980.as
// Nome offuscato: _ie4d80d4cbdf81a

class {
    static {
      n(this, "class_3980");
    }
    static {
      J7r(this, "class_3980");
    }
    static var_5811 = 0;
    static var_5967 = 2;
    static name_8 = 1;
    var_3786 = 0;
    get mintResult() {
      return this.var_3786;
    }
    flush() {
      return ((this.var_3786 = 0), !0);
    }
    parse(e) {
      return ((this.var_3786 = e.readShort()), !0);
    }
  }
