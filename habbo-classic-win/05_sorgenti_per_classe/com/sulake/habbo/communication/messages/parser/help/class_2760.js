// Estratto da HabboAirLauncher.deobf.js, riga 87497.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_2760.as
// Nome offuscato: _ic027873a30464e

class {
    static {
      n(this, "class_2760");
    }
    static {
      $Mr(this, "class_2760");
    }
    var_3407 = -1;
    var_1022 = "";
    flush() {
      return ((this.var_3407 = -1), (this.var_1022 = ""), !0);
    }
    parse(e) {
      return (
        (this.var_3407 = e.readInteger()),
        (this.var_1022 = e.readString()),
        !0
      );
    }
    get resultType() {
      return this.var_3407;
    }
    get messageText() {
      return this.var_1022;
    }
  }
